"use strict";
const fetch = require("node-fetch");
const { ArgumentParser } = require("argparse");

const run = () => {
  const { title, error, github, steps, hook } = getArguments();
  const failingStepId = findFailingStep(steps);
  const template = renderMessage(title, github.run_id, failingStepId, error);
  invokeTeamsWebhook(template, hook);
};

run();

function invokeTeamsWebhook(template, hook) {
  console.log(
    "Sending message to teams:\n",
    JSON.stringify(template, undefined, 2)
  );
  fetch(hook, {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.microsoft.teams.card.o365connector",
    },
    body: JSON.stringify(template),
  }).then((r) => {
    console.log("Teams webhook returned", r.status, r.statusText);
  });
}

function renderMessage(title, githubRunId, failingStepId, error) {
  const body = [
    {
      text: `<a href="https://github.com/LKP-RnD/vms-web-client/actions/runs/${githubRunId}">Job failing at ${failingStepId}</a>`,
    },
  ];

  if (error) {
    body.push({
      text: `<strong>Error message</strong><br>${error.replace(
        /\\n/g,
        "<br>"
      )}`,
    });
  }
  return createAdaptiveCardTemplate(title, body);
}

function getArguments() {
  const parser = new ArgumentParser({});

  parser.add_argument("--github", { help: "${{ github }}" });
  parser.add_argument("--steps", { help: "${{ toJson(steps) }}" });
  parser.add_argument("--error", {
    help: "${{ env.ERROR_MESSAGE }}",
    nargs: "?",
  });
  parser.add_argument("--title", { help: "My fancy title" });
  parser.add_argument("--hook", { help: "Webhook generated in teams" });

  const args = parser.parse_args();
  return {
    ...args,
    github: JSON.parse(args.github),
    steps: JSON.parse(args.steps),
  };
}

function findFailingStep(steps) {
  const [failingStepId] =
    Object.entries(steps).find(([, step]) => step.conclusion === "failure") ??
    [];

  if (!failingStepId) {
    console.error("No step has failed", steps);
    return "NO_FAILING_STEP_FOUND";
  }
  return failingStepId;
}

function createAdaptiveCardTemplate(cardTitle, sections) {
  return {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    summary: "Summary",
    title: cardTitle,
    sections: sections,
  };
}
