export const TEST_ID = {
  welcomePage: "welcome-page",
} as const;

export type TTestId = (typeof TEST_ID)[keyof typeof TEST_ID];
