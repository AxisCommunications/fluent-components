import { buildUrlWithContext, contextFromSearchParams } from "./context";

describe("topbar settings", () => {
  const org = "arn:organization:0000";
  const lang = "en";
  const theme = "dark";

  it("parser should extract valid search params", () => {
    const searchParams = {
      lang,
      org,
      theme,
    };
    const topBarSettingsParams = contextFromSearchParams(searchParams);
    expect(topBarSettingsParams.lang).toBe(lang);
    expect(topBarSettingsParams.org).toBe(org);
    expect(topBarSettingsParams.theme).toBe(theme);
  });

  it("parser should ignore invalid and non-setting parameters", () => {
    const searchParams = {
      lang: true,
      org: 9,
      theme: { 0: 0 },
      nonSetting: "ceci-nest-pas-un-setting",
      ["⚗"]: "alembic",
    };
    const topBarSettingsParams = contextFromSearchParams(searchParams);
    expect(topBarSettingsParams.lang).toBe(undefined);
    expect(topBarSettingsParams.org).toBe(undefined);
    expect(topBarSettingsParams.theme).toBe(undefined);
  });

  it("serializer should add valid settings to URL search params", () => {
    const url = "https://app.my.axis.com";
    const searchParams = {
      lang,
      org,
      theme,
    };
    const urlWithSettings = buildUrlWithContext(url, searchParams);
    expect(urlWithSettings).toBe(
      "https://app.my.axis.com/?lang=en&org=arn%3Aorganization%3A0000&theme=dark"
    );
  });

  it("serializer should ignore missing parameters", () => {
    const url = "https://app.my.axis.com";
    const searchParams = {};
    const urlWithSettings = buildUrlWithContext(url, searchParams);
    expect(urlWithSettings).toBe("https://app.my.axis.com/");
  });
});
