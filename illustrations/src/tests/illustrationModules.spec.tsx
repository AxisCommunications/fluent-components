import { readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "@testing-library/react";
import { FC } from "react";
import * as barrel from "../index.js";

type IllustrationModule = { default?: FC } & Record<string, unknown>;

const illustrationsDir = join(__dirname, "../illustrations");

async function loadModules() {
  const fileNames = readdirSync(illustrationsDir).filter((fileName) =>
    fileName.endsWith(".tsx")
  );
  return Promise.all(
    fileNames.map(async (fileName) => ({
      fileName,
      module: (await import(
        join(illustrationsDir, fileName)
      )) as IllustrationModule,
    }))
  );
}

describe("illustration modules", () => {
  it("Should export every illustration from its own module and the barrel", async () => {
    const modules = await loadModules();
    const moduleExports = modules.flatMap(({ module }) =>
      Object.keys(module).filter((name) => name !== "default")
    );
    const barrelIllustrations = Object.keys(barrel).filter(
      (name) => name.endsWith("Dark") || name.endsWith("Light")
    );

    expect(moduleExports.sort()).toEqual(barrelIllustrations.sort());
    for (const { module } of modules) {
      for (const [name, component] of Object.entries(module)) {
        if (name !== "default") {
          expect(component).toBe(barrel[name as keyof typeof barrel]);
        }
      }
    }
  });

  it("Should default export a theme aware illustration from each module", async () => {
    for (const { fileName, module } of await loadModules()) {
      const Illustration = module.default;
      expect(Illustration, fileName).toBeDefined();
      if (!Illustration) continue;

      const { getByTestId, unmount } = render(<Illustration />);
      expect(getByTestId("bundleIllustration-light")).toBeInTheDocument();
      unmount();
    }
  });
});
