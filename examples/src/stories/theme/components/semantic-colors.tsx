import {
  Theme,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { TaxisThemeVariants } from "../theme-page.types";

const componentId = "semantic-colors";
export const semanticColorsClassNames = {
  root: componentId,
};

/* -------------------------------------------------------------------------- */
/*  WCAG contrast helpers (inline, no extra dependency)                       */
/* -------------------------------------------------------------------------- */

function parseHex(hex: string): [number, number, number] {
  let value = hex.replace("#", "").trim();
  if (value.length === 3) {
    value = value
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = Number.parseInt(value, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function relativeLuminance(hex: string): number {
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = parseHex(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG 2.x contrast ratio between two hex colors (1–21). */
function contrastRatio(fg: string, bg: string): number {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const [lighter, darker] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (lighter + 0.05) / (darker + 0.05);
}

/* -------------------------------------------------------------------------- */
/*  Color family model                                                        */
/* -------------------------------------------------------------------------- */

type TColorGroup = { label: string; tokens: string[] };

type TContrastPair = {
  fg: string;
  bg: string;
  label: string;
  min: number;
  minLabel: string;
};

type TColorFamily = {
  key: string;
  label: string;
  aka: string;
  meaning: string;
  useFor: string[];
  dontUseFor: string[];
  preview: { bg: string; fg: string };
  groups: TColorGroup[];
  contrast: TContrastPair[];
};

const AA_TEXT = { min: 4.5, minLabel: "AA text 4.5:1" };
const AA_UI = { min: 3, minLabel: "AA UI 3:1" };

/** Ordered token prefixes stripped to produce a short, readable slot label. */
const LABEL_PREFIXES = [
  "colorStatusSuccess",
  "colorStatusWarning",
  "colorStatusDanger",
  "colorCompoundBrand",
  "colorBrand",
  "axisCustomColorMySystems",
  "axisCustomColorMyAxis",
  "axisCustomColorMyBusiness",
  "axisCustomColorMyProducts",
  "axisCustomColor",
  "colorNeutral",
];

function shortLabel(token: string): string {
  for (const prefix of LABEL_PREFIXES) {
    if (token.startsWith(prefix) && token.length > prefix.length) {
      return token.slice(prefix.length);
    }
  }
  return token;
}

function isHex(value: string): boolean {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
}

function statusFamily(
  key: "Success" | "Warning" | "Danger",
  aka: string,
  meaning: string,
  useFor: string[],
  dontUseFor: string[]
): TColorFamily {
  const t = (slot: string) => `colorStatus${key}${slot}`;
  return {
    key,
    label: key,
    aka,
    meaning,
    useFor,
    dontUseFor,
    preview: { bg: t("Background3"), fg: t("ForegroundInverted") },
    groups: [
      {
        label: "Background",
        tokens: [
          t("Background1"),
          t("Background2"),
          t("Background3"),
          t("Background3Hover"),
          t("Background3Pressed"),
        ],
      },
      {
        label: "Foreground",
        tokens: [
          t("Foreground1"),
          t("Foreground2"),
          t("Foreground3"),
          t("ForegroundInverted"),
        ],
      },
      {
        label: "Border",
        tokens: [t("Border1"), t("Border2"), t("BorderActive")],
      },
    ],
    contrast: [
      {
        fg: t("Foreground1"),
        bg: t("Background1"),
        label: "Text on subtle surface",
        ...AA_TEXT,
      },
      {
        fg: t("ForegroundInverted"),
        bg: t("Background3"),
        label: "Text on filled surface",
        ...AA_TEXT,
      },
      {
        fg: t("Border2"),
        bg: t("Background1"),
        label: "Border / UI on surface",
        ...AA_UI,
      },
    ],
  };
}

const CONTEXTUAL_CATEGORIES = [
  { key: "MySystems", label: "My Systems" },
  { key: "MyAxis", label: "My Axis" },
  { key: "MyBusiness", label: "My Business" },
  { key: "MyProducts", label: "My Products" },
];

const COLOR_FAMILIES: TColorFamily[] = [
  {
    key: "Neutral",
    label: "Neutral",
    aka: "Text · surfaces · borders",
    meaning:
      "The workhorse grayscale that carries text hierarchy, layered surfaces, and borders — typically around 60% of an interface.",
    useFor: [
      "Body text and text hierarchy (Foreground1–4).",
      "Page, card, and layer surfaces (Background1–6).",
      "Dividers, input borders, and disabled states.",
    ],
    dontUseFor: [
      "Conveying status or interactivity — that needs color.",
      "Low-contrast gray-on-gray text below AA minimums.",
      "Disabled colors on controls that are actually operable.",
    ],
    preview: { bg: "colorNeutralBackground1", fg: "colorNeutralForeground1" },
    groups: [
      {
        label: "Foreground",
        tokens: [
          "colorNeutralForeground1",
          "colorNeutralForeground2",
          "colorNeutralForeground3",
          "colorNeutralForeground4",
          "colorNeutralForegroundDisabled",
        ],
      },
      {
        label: "Background",
        tokens: [
          "colorNeutralBackground1",
          "colorNeutralBackground2",
          "colorNeutralBackground3",
          "colorNeutralBackground4",
          "colorNeutralBackground5",
          "colorNeutralBackground6",
        ],
      },
      {
        label: "Stroke",
        tokens: [
          "colorNeutralStroke1",
          "colorNeutralStroke2",
          "colorNeutralStroke3",
          "colorNeutralStrokeAccessible",
          "colorNeutralStrokeDisabled",
        ],
      },
    ],
    contrast: [
      {
        fg: "colorNeutralForeground1",
        bg: "colorNeutralBackground1",
        label: "Body text on surface",
        ...AA_TEXT,
      },
      {
        fg: "colorNeutralForeground2",
        bg: "colorNeutralBackground1",
        label: "Secondary text on surface",
        ...AA_TEXT,
      },
      {
        fg: "colorNeutralForeground3",
        bg: "colorNeutralBackground1",
        label: "Tertiary / hint text",
        ...AA_TEXT,
      },
      {
        fg: "colorNeutralStrokeAccessible",
        bg: "colorNeutralBackground1",
        label: "Accessible UI border",
        ...AA_UI,
      },
    ],
  },
  {
    key: "Brand",
    label: "Brand",
    aka: "Primary · emphasis · interactive",
    meaning:
      "The Axis primary color. Directs attention to the main action and marks interactive, selected, and focused elements.",
    useFor: [
      "The single primary action on a view (primary button).",
      "Selected / active states, focus rings, and progress.",
      "Links and inline emphasis that should read as interactive.",
    ],
    dontUseFor: [
      "Success, warning, or error meaning — use status colors.",
      "Backgrounds behind long-form body text.",
      "Multiple competing primary actions on one screen.",
    ],
    preview: {
      bg: "colorBrandBackground",
      fg: "colorNeutralForegroundOnBrand",
    },
    groups: [
      {
        label: "Background",
        tokens: [
          "colorBrandBackground",
          "colorBrandBackgroundHover",
          "colorBrandBackgroundPressed",
          "colorBrandBackgroundSelected",
          "colorBrandBackground2",
          "colorBrandBackgroundStatic",
        ],
      },
      {
        label: "Foreground",
        tokens: [
          "colorBrandForeground1",
          "colorBrandForeground2",
          "colorBrandForegroundLink",
          "colorBrandForegroundInverted",
          "colorNeutralForegroundOnBrand",
        ],
      },
      {
        label: "Stroke",
        tokens: [
          "colorBrandStroke1",
          "colorBrandStroke2",
          "colorCompoundBrandStroke",
        ],
      },
    ],
    contrast: [
      {
        fg: "colorNeutralForegroundOnBrand",
        bg: "colorBrandBackground",
        label: "Text on primary button",
        ...AA_TEXT,
      },
      {
        fg: "colorBrandForegroundLink",
        bg: "colorNeutralBackground1",
        label: "Link text on surface",
        ...AA_TEXT,
      },
      {
        fg: "colorBrandForeground1",
        bg: "colorNeutralBackground1",
        label: "Brand accent text on surface",
        ...AA_TEXT,
      },
    ],
  },
  statusFamily(
    "Success",
    "Positive · confirmation",
    "Communicates that an action completed as intended or that a value is in a healthy state.",
    [
      "Confirmation after a successful save, upload, or connection.",
      "“Healthy”, “online”, or “passed” status indicators.",
      "Validation ticks on correctly completed form fields.",
    ],
    [
      "Primary calls to action — use the brand color instead.",
      "Decorative accents or generic highlights.",
      "“Go / proceed” buttons where nothing has actually succeeded yet.",
    ]
  ),
  statusFamily(
    "Warning",
    "Caution · attention",
    "Flags something that needs attention but is not yet blocking or destructive.",
    [
      "Non-blocking cautions (“License expires in 3 days”).",
      "Degraded / partial states that still function.",
      "Reversible actions that deserve a second look.",
    ],
    [
      "Hard errors or failures — escalate to Danger.",
      "Success or neutral information.",
      "Large filled surfaces — amber has poor text contrast when saturated.",
    ]
  ),
  statusFamily(
    "Danger",
    "Error · destructive · critical",
    "Signals an error, failure, or a destructive/irreversible action.",
    [
      "Form and system error messages.",
      "Destructive actions (delete, revoke, disconnect).",
      "“Offline”, “failed”, or “critical” status indicators.",
    ],
    [
      "Routine emphasis or branding — red implies failure/stop.",
      "Warnings that are recoverable — use Warning instead.",
      "Conveying error state with color alone (add an icon + text).",
    ]
  ),
  {
    key: "Contextual",
    label: "Contextual category colors",
    aka: "Axis custom · section identity",
    meaning:
      "Axis-specific paired colors that give each product area a consistent identity. Each category is a background plus a matching foreground.",
    useFor: [
      "Section / area identity: headers, avatars, category badges.",
      "Coloring an icon or dot that labels which area an item belongs to.",
      "Backgrounds where the paired foreground is the icon / label color.",
    ],
    dontUseFor: [
      "Status meaning — these are identity, not success / error.",
      "Arbitrary decoration outside their category context.",
      "Small body text — pairs target icons, badges, and large labels.",
    ],
    preview: {
      bg: "axisCustomColorMySystemsBackground",
      fg: "axisCustomColorMySystemsForeground",
    },
    groups: CONTEXTUAL_CATEGORIES.map((category) => ({
      label: category.label,
      tokens: [
        `axisCustomColor${category.key}Background`,
        `axisCustomColor${category.key}Foreground`,
      ],
    })),
    contrast: CONTEXTUAL_CATEGORIES.map((category) => ({
      fg: `axisCustomColor${category.key}Foreground`,
      bg: `axisCustomColor${category.key}Background`,
      label: `${category.label} — foreground on background`,
      ...AA_UI,
    })),
  },
];

/* -------------------------------------------------------------------------- */
/*  Styles                                                                     */
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXL),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    boxShadow: tokens.shadow4,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  cardHeaderText: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
  },
  cardTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  cardAka: {
    fontSize: tokens.fontSizeBase200,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: tokens.colorNeutralForeground3,
  },
  cardMeaning: {
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground2,
  },
  swatchPreview: {
    width: "44px",
    height: "44px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
  },
  guidanceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  guidanceCol: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
  guidanceHeading: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  guidanceDo: { color: tokens.colorStatusSuccessForeground1 },
  guidanceDont: { color: tokens.colorStatusDangerForeground1 },
  guidanceList: {
    margin: 0,
    ...shorthands.padding(0, 0, 0, tokens.spacingHorizontalL),
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground2,
  },
  blockTitle: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tokens.colorNeutralForeground3,
  },
  variantBlock: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
  variantRow: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
  variantLabel: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  rampGroup: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
  },
  rampGroupLabel: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: tokens.colorNeutralForeground3,
  },
  ramp: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  chip: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
    width: "128px",
  },
  chipColor: {
    height: "40px",
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
  },
  chipLabel: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    whiteSpace: "nowrap",
    ...shorthands.overflow("hidden"),
    textOverflow: "ellipsis",
  },
  chipValue: {
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
  },
  contrastGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  contrastCard: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  contrastSample: {
    width: "56px",
    height: "40px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
  },
  contrastText: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
    minWidth: 0,
  },
  contrastLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
  },
  contrastRatioRow: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  contrastRatio: {
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  badge: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.04em",
    lineHeight: "1",
    ...shorthands.padding("3px", tokens.spacingHorizontalS),
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
  },
  badgePass: {
    color: tokens.colorStatusSuccessForeground1,
    backgroundColor: tokens.colorStatusSuccessBackground1,
    ...shorthands.border("1px", "solid", tokens.colorStatusSuccessBorder1),
  },
  badgeFail: {
    color: tokens.colorStatusDangerForeground1,
    backgroundColor: tokens.colorStatusDangerBackground1,
    ...shorthands.border("1px", "solid", tokens.colorStatusDangerBorder1),
  },
});

/* -------------------------------------------------------------------------- */
/*  Component                                                                   */
/* -------------------------------------------------------------------------- */

type TSemanticColors = {
  theme: Record<TaxisThemeVariants, Theme>;
};

export function SemanticColors({ theme, ...rest }: TSemanticColors) {
  const styles = useStyles();

  return (
    <div
      data-testid={componentId}
      className={mergeClasses(semanticColorsClassNames.root, styles.container)}
      {...rest}
    >
      {COLOR_FAMILIES.map((family) => (
        <FamilyCard key={family.key} family={family} theme={theme} />
      ))}
    </div>
  );
}

function FamilyCard({
  family,
  theme,
}: {
  family: TColorFamily;
  theme: Record<TaxisThemeVariants, Theme>;
}) {
  const styles = useStyles();
  const token = (variant: TaxisThemeVariants, name: string) =>
    (theme[variant] as unknown as Record<string, string>)[name];

  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <div
          className={styles.swatchPreview}
          style={{
            backgroundColor: token("light", family.preview.bg),
            color: token("light", family.preview.fg),
          }}
        >
          Aa
        </div>
        <div className={styles.cardHeaderText}>
          <div className={styles.cardTitle}>{family.label}</div>
          <div className={styles.cardAka}>{family.aka}</div>
        </div>
      </div>

      <p className={styles.cardMeaning}>{family.meaning}</p>

      <div className={styles.guidanceGrid}>
        <div className={styles.guidanceCol}>
          <div
            className={mergeClasses(styles.guidanceHeading, styles.guidanceDo)}
          >
            Use for
          </div>
          <ul className={styles.guidanceList}>
            {family.useFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.guidanceCol}>
          <div
            className={mergeClasses(
              styles.guidanceHeading,
              styles.guidanceDont
            )}
          >
            Don&apos;t use for
          </div>
          <ul className={styles.guidanceList}>
            {family.dontUseFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.variantBlock}>
        <div className={styles.blockTitle}>
          Contrast (foreground on background)
        </div>
        {(["light", "dark"] as TaxisThemeVariants[]).map((variant) => (
          <div key={variant} className={styles.variantRow}>
            <span className={styles.variantLabel}>
              {variant === "light" ? "Light theme" : "Dark theme"}
            </span>
            <div className={styles.contrastGrid}>
              {family.contrast.map((pair) => (
                <ContrastCard
                  key={pair.label}
                  fg={token(variant, pair.fg)}
                  bg={token(variant, pair.bg)}
                  label={pair.label}
                  min={pair.min}
                  minLabel={pair.minLabel}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.variantBlock}>
        <div className={styles.blockTitle}>Color ramp</div>
        {(["light", "dark"] as TaxisThemeVariants[]).map((variant) => (
          <div key={variant} className={styles.variantRow}>
            <span className={styles.variantLabel}>
              {variant === "light" ? "Light theme" : "Dark theme"}
            </span>
            {family.groups.map((group) => (
              <Ramp
                key={group.label}
                group={group}
                resolve={(name) => token(variant, name)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Ramp({
  group,
  resolve,
}: {
  group: TColorGroup;
  resolve: (token: string) => string;
}) {
  const styles = useStyles();
  const swatches = group.tokens
    .map((name) => ({ name, value: resolve(name) }))
    .filter(({ value }) => Boolean(value));

  if (swatches.length === 0) {
    return null;
  }

  return (
    <div className={styles.rampGroup}>
      <span className={styles.rampGroupLabel}>{group.label}</span>
      <div className={styles.ramp}>
        {swatches.map(({ name, value }) => (
          <div key={name} className={styles.chip}>
            <span
              className={styles.chipColor}
              style={{ backgroundColor: value }}
            />
            <span className={styles.chipLabel} title={name}>
              {shortLabel(name)}
            </span>
            <span className={styles.chipValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContrastCard({
  fg,
  bg,
  label,
  min,
  minLabel,
}: {
  fg: string;
  bg: string;
  label: string;
  min: number;
  minLabel: string;
}) {
  const styles = useStyles();
  const valid = isHex(fg) && isHex(bg);
  const ratio = valid ? contrastRatio(fg, bg) : Number.NaN;
  const pass = valid && ratio >= min;

  return (
    <div className={styles.contrastCard}>
      <div
        className={styles.contrastSample}
        style={{ backgroundColor: bg, color: fg }}
      >
        Aa
      </div>
      <div className={styles.contrastText}>
        <span className={styles.contrastLabel}>{label}</span>
        <div className={styles.contrastRatioRow}>
          <span className={styles.contrastRatio}>
            {valid ? `${ratio.toFixed(2)}:1` : "—"}
          </span>
          <span
            className={mergeClasses(
              styles.badge,
              pass ? styles.badgePass : styles.badgeFail
            )}
          >
            {pass ? `PASS · ${minLabel}` : `FAIL · ${minLabel}`}
          </span>
        </div>
      </div>
    </div>
  );
}
