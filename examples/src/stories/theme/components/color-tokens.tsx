import {
  Theme,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ReactNode } from "react";
import { CopyButton } from "../../../components/copy-button";
import { TaxisThemeVariants } from "../theme-page.types";

const componentId = "color-tokens";
export const colorTokensClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  section: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
    marginBottom: tokens.spacingVerticalXL,
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginBottom: tokens.spacingVerticalXXS,
  },
  count: {
    ...shorthands.padding(0, tokens.spacingHorizontalXS),
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
    letterSpacing: "normal",
    textTransform: "none",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingVerticalXS),
    ...shorthands.padding(tokens.spacingVerticalXXXL, 0),
    color: tokens.colorNeutralForeground3,
  },
  emptyQuery: {
    fontFamily: "monospace",
    color: tokens.colorNeutralForeground1,
  },
  table: {
    display: "grid",
    gridTemplateColumns:
      "minmax(240px, 2fr) minmax(140px, 1fr) minmax(140px, 1fr)",
    ...shorthands.overflow("hidden"),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  headerCell: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    backgroundColor: tokens.colorNeutralBackground2,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    ...shorthands.borderBottom(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
  },
});

export function useColorTokensStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(colorTokensClassNames.root, styles.table);
  return { styles, rootStyle };
}

type TColorTokens = {
  filter: string;
  theme: Record<TaxisThemeVariants, Theme>;
};

export function ColorTokens({ theme, filter, ...rest }: TColorTokens) {
  const styles = useStyles();
  const { light, dark } = theme;

  const toRows = (prefix: string) =>
    Object.entries(light)
      .filter(([token]) => token.startsWith(prefix))
      .map(([token, value]) => ({
        token,
        lightValue: value as string,
        darkValue: (dark as unknown as Record<string, string>)[token],
      }))
      .filter((row) => matchesFilter(row, filter));

  const customColorTokens = toRows("axisCustomColor");
  const customUtilityTokens = toRows("axisCustomUtility");
  const fluentTokens = toRows("color");

  const isEmpty =
    customColorTokens.length === 0 &&
    customUtilityTokens.length === 0 &&
    fluentTokens.length === 0;

  return (
    <div data-testid={componentId} {...rest}>
      {isEmpty ? (
        <div className={styles.empty}>
          <span>No tokens match</span>
          <span className={styles.emptyQuery}>"{filter}"</span>
        </div>
      ) : (
        <>
          <TokenSection
            title="Custom color tokens"
            rows={customColorTokens}
            filter={filter}
          />
          <TokenSection
            title="Custom utility tokens"
            rows={customUtilityTokens}
            filter={filter}
          />
          <TokenSection
            title="Fluent tokens"
            rows={fluentTokens}
            filter={filter}
          />
        </>
      )}
    </div>
  );
}

type TColorPalette = { token: string; lightValue: string; darkValue: string };

function matchesFilter(row: TColorPalette, filter: string) {
  if (!filter) {
    return true;
  }
  const needle = filter.toLowerCase();
  return (
    row.token.toLowerCase().includes(needle) ||
    (row.lightValue ?? "").toLowerCase().includes(needle) ||
    (row.darkValue ?? "").toLowerCase().includes(needle)
  );
}

function TokenSection({
  title,
  rows,
  filter,
}: {
  title: string;
  rows: TColorPalette[];
  filter: string;
}) {
  const styles = useStyles();
  const { rootStyle } = useColorTokensStyles();

  if (rows.length === 0) {
    return null;
  }

  return (
    <div className={styles.section}>
      <span className={styles.sectionTitle}>
        {title}
        <span className={styles.count}>{rows.length}</span>
      </span>
      <div className={rootStyle}>
        <div className={styles.headerCell}>Token</div>
        <div className={styles.headerCell}>Light</div>
        <div className={styles.headerCell}>Dark</div>
        {rows.map((args, i) => (
          <ColorPalette
            key={args.token}
            zebra={i % 2 === 1}
            filter={filter}
            {...args}
          />
        ))}
      </div>
    </div>
  );
}

const useColorPaletteStyles = makeStyles({
  tokenCell: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    ...shorthands.padding(
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalM,
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalXS
    ),
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground1,
    ...shorthands.overflow("hidden"),
    animationName: {
      from: { opacity: 0, transform: "translateY(4px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    animationDuration: tokens.durationNormal,
    animationTimingFunction: tokens.curveDecelerateMin,
    animationFillMode: "both",
  },
  tokenName: {
    ...shorthands.overflow("hidden"),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  copyButton: {
    minWidth: "24px",
    maxWidth: "24px",
    height: "24px",
    flexShrink: 0,
    ...shorthands.padding(0),
  },
  valueCell: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalM
    ),
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    animationName: {
      from: { opacity: 0, transform: "translateY(4px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    animationDuration: tokens.durationNormal,
    animationTimingFunction: tokens.curveDecelerateMin,
    animationFillMode: "both",
  },
  zebra: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  swatch: {
    flexShrink: 0,
    width: "18px",
    height: "18px",
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
    boxShadow: tokens.shadow2,
  },
  mark: {
    ...shorthands.padding(0, "2px"),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontWeight: tokens.fontWeightSemibold,
  },
});

function Highlight({ text, query }: { text: string; query: string }) {
  const styles = useColorPaletteStyles();

  if (!query || !text) {
    return <>{text}</>;
  }

  const lowerText = text.toLowerCase();
  const needle = query.toLowerCase();
  const parts: ReactNode[] = [];
  let cursor = 0;
  let matchIndex = lowerText.indexOf(needle);

  while (matchIndex !== -1) {
    if (matchIndex > cursor) {
      parts.push(text.slice(cursor, matchIndex));
    }
    const end = matchIndex + needle.length;
    parts.push(
      <mark key={matchIndex} className={styles.mark}>
        {text.slice(matchIndex, end)}
      </mark>
    );
    cursor = end;
    matchIndex = lowerText.indexOf(needle, cursor);
  }

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return <>{parts}</>;
}

function ColorPalette({
  token,
  lightValue,
  darkValue,
  zebra,
  filter,
}: TColorPalette & {
  zebra: boolean;
  filter: string;
}) {
  const styles = useColorPaletteStyles();
  const rowStyle = zebra ? styles.zebra : undefined;

  return (
    <>
      <div className={mergeClasses(styles.tokenCell, rowStyle)}>
        <CopyButton
          value={token}
          size="small"
          copyLabel="Copy token"
          className={styles.copyButton}
        />
        <span className={styles.tokenName}>
          <Highlight text={token} query={filter} />
        </span>
      </div>
      <div className={mergeClasses(styles.valueCell, rowStyle)}>
        <span
          className={styles.swatch}
          style={{ backgroundColor: lightValue }}
        />
        <Highlight text={lightValue} query={filter} />
      </div>
      <div className={mergeClasses(styles.valueCell, rowStyle)}>
        <span
          className={styles.swatch}
          style={{ backgroundColor: darkValue }}
        />
        <Highlight text={darkValue} query={filter} />
      </div>
    </>
  );
}
