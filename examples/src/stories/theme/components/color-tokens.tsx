import {
  Theme,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { TaxisThemeVariants } from "../theme-page.types";

const componentId = "color-tokens";
export const colorTokensClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXL),
  },
  section: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    textTransform: "capitalize",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: tokens.fontSizeBase300,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    ...shorthands.overflow("hidden"),
    boxShadow: tokens.shadow4,
  },
  headerCell: {
    textAlign: "left",
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tokens.colorNeutralForeground3,
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  row: {
    "&:not(:last-child) > td": {
      borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    },
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  tokenCell: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    fontFamily: "monospace",
    color: tokens.colorNeutralForeground1,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  swatchCell: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    verticalAlign: "middle",
    width: "220px",
  },
  swatch: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  chip: {
    width: "28px",
    height: "28px",
    flexShrink: 0,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
  },
  chipValue: {
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
  },
  empty: {
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    color: tokens.colorNeutralForeground3,
  },
});

type TColorTokens = {
  filter: string;
  theme: Record<TaxisThemeVariants, Theme>;
};

type TColorRow = { token: string; lightValue: string; darkValue: string };

export function ColorTokens({ theme, filter, ...rest }: TColorTokens) {
  const { light, dark } = theme;
  const styles = useStyles();

  const query = filter.toLowerCase();
  const matchesFilter = (token: string, value: string) =>
    token.toLowerCase().includes(query) || value.toLowerCase().includes(query);

  const buildRows = (prefix: string): TColorRow[] =>
    Object.entries(light)
      .filter(([token]) => token.startsWith(prefix))
      .map(([token, value]) => ({
        token,
        lightValue: value as string,
        darkValue: (dark as unknown as Record<string, string>)[token],
      }))
      .filter(({ token, lightValue }) => matchesFilter(token, lightValue));

  const customColorTokens = buildRows("axisCustomColor");
  const customUtilityTokens = buildRows("axisCustomUtility");
  const standardTokens = Object.entries(light)
    .filter(([token]) => token.startsWith("color"))
    .map(([token, value]) => ({
      token,
      lightValue: value as string,
      darkValue: (dark as unknown as Record<string, string>)[token],
    }))
    .filter(({ token, lightValue }) => matchesFilter(token, lightValue));

  return (
    <div
      data-testid={componentId}
      className={mergeClasses(colorTokensClassNames.root, styles.container)}
      {...rest}
    >
      <TokenTable title="custom color token" rows={customColorTokens} />
      <TokenTable title="custom utility token" rows={customUtilityTokens} />
      <TokenTable title="token" rows={standardTokens} />
    </div>
  );
}

function TokenTable({ title, rows }: { title: string; rows: TColorRow[] }) {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>{title}</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Token</th>
            <th className={styles.headerCell}>Light value</th>
            <th className={styles.headerCell}>Dark value</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className={styles.empty} colSpan={3}>
                No matching tokens
              </td>
            </tr>
          ) : (
            rows.map(({ token, lightValue, darkValue }) => (
              <tr key={token} className={styles.row}>
                <td className={styles.tokenCell}>{token}</td>
                <td className={styles.swatchCell}>
                  <Swatch value={lightValue} />
                </td>
                <td className={styles.swatchCell}>
                  <Swatch value={darkValue} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function Swatch({ value }: { value: string }) {
  const styles = useStyles();

  return (
    <div className={styles.swatch}>
      <span className={styles.chip} style={{ backgroundColor: value }} />
      <span className={styles.chipValue}>{value}</span>
    </div>
  );
}
