export const topBarContextKeys = ["lang", "org", "theme", "rg"] as const;
export type TopBarContextKey = (typeof topBarContextKeys)[number];
export type TopBarContext = Partial<Record<TopBarContextKey, string>>;

const _contextKeys = new Set(topBarContextKeys);
export function isTopBarContextKey(key: unknown): key is TopBarContextKey {
  return typeof key === "string" && _contextKeys.has(key as TopBarContextKey);
}

export function buildUrlWithContext(url: string, ctx: TopBarContext) {
  const urlWithSettings = new URL(url);
  for (const key of topBarContextKeys) {
    const value = ctx[key];
    if (value !== undefined) {
      urlWithSettings.searchParams.set(key, value);
    }
  }
  return urlWithSettings.href;
}

export function contextFromSearchParams(
  searchParams: Record<string, unknown>
): TopBarContext {
  const topBarContext: TopBarContext = {};
  for (const [key, value] of Object.entries(searchParams)) {
    if (isTopBarContextKey(key) && typeof value === "string") {
      topBarContext[key] = value;
    }
  }
  return topBarContext;
}
