import { buildUrlWithContext, contextFromSearchParams } from "./context";

describe("topbar settings", () => {
  const org = "arn:organization:0000";
  const lang = "en";
  const theme = "dark";
  const rg = "resourcegroup";

  it("parser should extract valid search params", () => {
    const searchParams = {
      lang,
      org,
      theme,
      rg,
    };
    const topBarSettingsParams = contextFromSearchParams(searchParams);
    expect(topBarSettingsParams.lang).toBe(lang);
    expect(topBarSettingsParams.org).toBe(org);
    expect(topBarSettingsParams.theme).toBe(theme);
    expect(topBarSettingsParams.rg).toBe(rg);
  });

  it("parser should ignore invalid and non-setting parameters", () => {
    const searchParams = {
      lang: true,
      org: 9,
      theme: { 0: 0 },
      rg: 666,
      nonSetting: "ceci-nest-pas-un-setting",
      ["⚗"]: "alembic",
    };
    const topBarSettingsParams = contextFromSearchParams(searchParams);
    expect(topBarSettingsParams.lang).toBe(undefined);
    expect(topBarSettingsParams.org).toBe(undefined);
    expect(topBarSettingsParams.theme).toBe(undefined);
    expect(topBarSettingsParams.rg).toBe(undefined);
  });

  it("serializer should add valid settings to URL search params", () => {
    const url = "https://app.my.axis.com";
    const searchParams = {
      lang,
      org,
      theme,
      rg,
    };
    const urlWithSettings = buildUrlWithContext(url, searchParams);
    expect(urlWithSettings).toBe(
      "https://app.my.axis.com/?lang=en&org=arn%3Aorganization%3A0000&theme=dark&rg=resourcegroup"
    );
  });

  it("serializer should ignore missing parameters", () => {
    const url = "https://app.my.axis.com";
    const searchParams = {};
    const urlWithSettings = buildUrlWithContext(url, searchParams);
    expect(urlWithSettings).toBe("https://app.my.axis.com/");
  });

  it("serializer should not duplicate parameters", () => {
    const url = "https://app.my.axis.com";
    const searchParams = {
      lang,
      org,
      theme,
      rg,
    };
    const urlWithSettings = buildUrlWithContext(url, searchParams);
    expect(urlWithSettings).toBe(
      "https://app.my.axis.com/?lang=en&org=arn%3Aorganization%3A0000&theme=dark&rg=resourcegroup"
    );

    const updatedUrlWithSettings = buildUrlWithContext(
      urlWithSettings,
      searchParams
    );
    expect(updatedUrlWithSettings).toBe(
      "https://app.my.axis.com/?lang=en&org=arn%3Aorganization%3A0000&theme=dark&rg=resourcegroup"
    );
  });
});
