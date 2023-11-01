const GH_PAGE = "https://axiscommunications.github.io/fluent-components/";
const LOCAL_HOST = "http://127.0.0.1:3000/fluent-components/";

export function getRootPath() {
  return isCi() ? GH_PAGE : LOCAL_HOST;
}

export function isCi(): boolean {
  return process.env.CI === "true";
}
