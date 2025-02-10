import { Theme } from "@fluentui/react-components";

type MetaData = { value: string | number; type: string };

type ThemeJson = {
  colorStatus: {
    Danger: Record<string, MetaData>;
    Warning: Record<string, MetaData>;
    Success: Record<string, MetaData>;
  };
  color: {
    Neutral: {
      Foreground: Record<string, MetaData>;
      Background: Record<string, MetaData>;
      Stroke: Record<string, MetaData>;
      Shadow: Record<string, MetaData>;
      Stencil: Record<string, MetaData>;
    };
    Brand: Record<string, MetaData>;
    Subtle: Record<string, MetaData>;
    Transparent: Record<string, MetaData>;
    Stroke: Record<string, MetaData>;
    Compound: Record<string, MetaData>;
    Background: Record<string, MetaData>;
    Scrollbar: Record<string, MetaData>;
  };
  shadow: Record<string, MetaData>;
};

type GlobalJson = {
  fontFamily: Record<string, MetaData>;
  lineHeight: Record<string, MetaData>;
  fontWeight: Record<string, MetaData>;
  fontSize: Record<string, MetaData>;
  borderRadius: Record<string, MetaData>;
  strokeWidth: Record<string, MetaData>;
};

/**
 * removes unwanted units from fluent token values.
 * also transform string values to numbers
 * ex: fluent token value = "10px" => 10
 */
const parseTokenValue = (value: string | number): string | number => {
  if (typeof value !== "string") {
    return value;
  }

  const result = Number.parseInt(value, 10);

  // biome-ignore lint/suspicious/noGlobalIsFinite: FIXME
  return isFinite(result) ? result : value;
};

const extractTokens = (
  theme: Theme,
  token: string,
  type: string,
  replace = false
): Record<string, MetaData> => {
  const result = Object.keys(theme)
    .filter((key) => key.startsWith(token))
    .reduce((pre, cur) => {
      const tokenData = {
        value: replace ? parseTokenValue(theme[cur]) : theme[cur],
        type,
      };
      const propKey = cur.replace(token, "");
      return {
        ...pre,
        [propKey]: tokenData,
      };
    }, {});

  return result;
};

export const generateJsonTheme = (theme: Theme): ThemeJson => ({
  colorStatus: {
    Danger: extractTokens(theme, "colorStatusDanger", "color"),
    Warning: extractTokens(theme, "colorStatusWarning", "color"),
    Success: extractTokens(theme, "colorStatusSuccess", "color"),
  },
  color: {
    Neutral: {
      Foreground: extractTokens(theme, "colorNeutralForeground", "color"),
      Background: extractTokens(theme, "colorNeutralBackground", "color"),
      Stroke: extractTokens(theme, "colorNeutralStroke", "color"),
      Shadow: extractTokens(theme, "colorNeutralShadow", "color"),
      Stencil: extractTokens(theme, "colorNeutralStencil", "color"),
    },
    Brand: extractTokens(theme, "colorBrand", "color"),

    Subtle: extractTokens(theme, "colorSubtle", "color"),
    Transparent: extractTokens(theme, "colorTransparent", "color"),
    Stroke: extractTokens(theme, "colorStroke", "color"),
    Compound: extractTokens(theme, "colorCompound", "color"),
    Background: extractTokens(theme, "colorBackground", "color"),
    Scrollbar: extractTokens(theme, "colorScrollbar", "color"),
  },
  shadow: extractTokens(theme, "shadow", "other"),
});

export const generateJsonGlobal = (theme: Theme): GlobalJson => ({
  fontFamily: extractTokens(theme, "fontFamily", "fontFamilies"),
  lineHeight: extractTokens(theme, "lineHeight", "lineHeights", true),
  fontWeight: extractTokens(theme, "fontWeight", "fontWeights"),
  fontSize: extractTokens(theme, "fontSize", "fontSizes", true),
  borderRadius: extractTokens(theme, "borderRadius", "borderRadius", true),
  strokeWidth: extractTokens(theme, "strokeWidth", "borderWidth", true),
});
