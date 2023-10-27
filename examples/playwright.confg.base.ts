import { Config, PlaywrightTestConfig } from "@playwright/test";

type UseConfig = Config["use"];
type Projects = Config["projects"];

export const chromium = ({ flags }: { flags?: string[] } = {}): UseConfig => ({
  browserName: "chromium",
  channel: process.env.BROWSER ?? "chrome",
  viewport: { width: 1280, height: 720 },
  permissions: ["clipboard-write", "clipboard-read"],
  launchOptions: {
    args: [
      "--ignore-certificate-errors",
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      ...(flags ?? []),
    ],
  },
});

export function createConfig(
  projects: Projects,
  addUseOptions: Partial<PlaywrightTestConfig["use"]> = {}
): PlaywrightTestConfig {
  return {
    forbidOnly: !!process.env.CI,
    projects: projects,
    use: {
      // Context options
      ignoreHTTPSErrors: true,
      contextOptions: {
        locale: "en_GB",
      },
      // Artifacts
      screenshot: "only-on-failure",
      trace: "on-first-retry",
      ...addUseOptions,
    },
    retries: process.env.CI ? 1 : 0,
    reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  };
}
