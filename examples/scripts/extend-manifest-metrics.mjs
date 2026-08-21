#!/usr/bin/env node
// react-docgen-typescript only reports props/types/JSDoc, not the actual CSS
// values a component renders with, so storybook's components manifest is
// silent on metrics. This script scans each component's makeStyles() call(s)
// (inline or in a sibling *.styles.ts) and attaches the raw px/rem/em values,
// hex colors and Fluent design tokens it finds to the matching manifest entry.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifestPath = resolve(
  __dirname,
  "../storybook-static/manifests/components.json"
);

const TOKEN_RE = /tokens\.\w+/g;
const RAW_VALUE_RE = /"(-?\d+(?:\.\d+)?(?:px|rem|em|%))"/g;
const HEX_COLOR_RE = /#[0-9a-fA-F]{3,8}\b/g;

const fileCache = new Map();

async function extractMetrics(filePath) {
  if (fileCache.has(filePath)) return fileCache.get(filePath);

  let text;
  try {
    text = await readFile(filePath, "utf8");
  } catch {
    fileCache.set(filePath, null);
    return null;
  }

  if (!text.includes("makeStyles(")) {
    fileCache.set(filePath, null);
    return null;
  }

  const metrics = {
    tokens: [...new Set([...text.matchAll(TOKEN_RE)].map((m) => m[0]))].sort(),
    rawValues: [
      ...new Set([...text.matchAll(RAW_VALUE_RE)].map((m) => m[1])),
    ].sort(),
    hexColors: [
      ...new Set([...text.matchAll(HEX_COLOR_RE)].map((m) => m[0])),
    ].sort(),
  };
  fileCache.set(filePath, metrics);
  return metrics;
}

async function findStyleFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        /styles/i.test(entry.name) &&
        entry.name.endsWith(".ts")
    )
    .map((entry) => join(dir, entry.name));
}

function mergeMetrics(target, source) {
  for (const key of ["tokens", "rawValues", "hexColors"]) {
    target[key] = [...new Set([...target[key], ...source[key]])].sort();
  }
}

async function run() {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const components = manifest.components ?? {};
  let augmented = 0;

  for (const entry of Object.values(components)) {
    const filePath = entry.reactDocgenTypescript?.filePath;
    if (!filePath) continue;

    // Sibling style modules (e.g. use-slider-styles.ts) plus the component's
    // own file, which covers story composites that inline their makeStyles().
    const candidateFiles = new Set(await findStyleFiles(dirname(filePath)));
    candidateFiles.add(filePath);

    const combined = { tokens: [], rawValues: [], hexColors: [] };
    const sourceFiles = [];
    for (const file of candidateFiles) {
      const metrics = await extractMetrics(file);
      if (!metrics) continue;
      sourceFiles.push(file);
      mergeMetrics(combined, metrics);
    }

    if (sourceFiles.length > 0) {
      entry.metrics = { sourceFiles: sourceFiles.sort(), ...combined };
      augmented++;
    }
  }

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `extend-manifest-metrics: attached style metrics to ${augmented} component(s)`
  );
}

run().catch((error) => {
  console.error("extend-manifest-metrics failed:", error);
  process.exit(1);
});
