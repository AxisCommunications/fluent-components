import {
  makeStyles,
  mergeClasses,
  shorthands,
  Theme,
  tokens,
} from "@fluentui/react-components";
import React from "react";
import { TaxisThemeVariants } from "../theme-page.types";

const componentId = "color-tokens";
export const colorTokensClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    fontFamily: "monospace",
    "> :nth-child(1)": {
      gridColumnStart: "span 1",
    },
    "> :nth-child(2)": {
      gridColumnStart: "span 1",
    },
    "> :nth-child(3)": {
      gridColumnStart: "span 1",
    },
  },
  tableHeader: {
    fontSize: "16px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export function useColorTokensStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(colorTokensClassNames.root, styles.root);
  const headerStyle = mergeClasses(styles.root, styles.tableHeader);
  return { styles, headerStyle, rootStyle };
}

type TColorTokens = {
  filter: string;
  theme: Record<TaxisThemeVariants, Theme>;
};

export function ColorTokens({ theme, filter, ...rest }: TColorTokens) {
  const { light, dark } = theme;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const tokens = Object.entries(light)
    .filter(([token]) => token.startsWith("color"))
    .filter(([token]) => token.toLowerCase().includes(filter.toLowerCase()))
    .map(([token, value]) => ({
      token,
      lightValue: value as string,
      darkValue: (dark as unknown as Record<string, string>)[
        token
      ],
    }));

  const customColorTokens = Object.entries(light).filter(([token]) =>
    token.startsWith("axisCustomColor")
  ).map(([token, value]) => ({
    token,
    lightValue: value as string,
    darkValue: (dark as unknown as Record<string, string>)[
      token
    ],
  }));

  const customUtilityTokens = Object.entries(light).filter(([token]) =>
    token.startsWith("axisCustomUtility")
  ).map(([token, value]) => ({
    token,
    lightValue: value as string,
    darkValue: (dark as unknown as Record<string, string>)[
      token
    ],
  }));

  const { rootStyle } = useColorTokensStyles();

  return (
    <>
      <Header title="custom color token" />
      <div data-testid={componentId} className={rootStyle} {...rest}>
        {customColorTokens.map((args, i) => (
          <ColorPalette
            key={i}
            {...args}
          />
        ))}
      </div>

      <Header title="custom utility token" />
      <div data-testid={componentId} className={rootStyle} {...rest}>
        {customUtilityTokens.map((args, i) => (
          <ColorPalette
            key={i}
            {...args}
          />
        ))}
      </div>

      <Header title="token" />
      <div data-testid={componentId} className={rootStyle} {...rest}>
        {tokens.map((args, i) => <ColorPalette key={i} {...args} />)}
      </div>
    </>
  );
}

const useColorPaletteStyles = makeStyles({
  root: {
    width: "100%",
    textShadow: "0px 0px 1px #fff, 0 0px 1px #000, 0 0 0px",
  },
});

type TColorPalette = { token: string; lightValue: string; darkValue: string };

function ColorPalette({ token, lightValue, darkValue }: TColorPalette) {
  const styles = useColorPaletteStyles();

  return (
    <>
      <div>{token}</div>
      <div
        className={styles.root}
        style={{
          backgroundColor: lightValue,
          color: darkValue,
        }}
      >
        {lightValue}
      </div>
      <div
        className={styles.root}
        style={{
          backgroundColor: darkValue,
          color: lightValue,
        }}
      >
        {darkValue}
      </div>
    </>
  );
}

function Header({ title }: { title: string }) {
  const { headerStyle } = useColorTokensStyles();
  return (
    <div className={headerStyle}>
      <b>{title}</b>
      <b>light value</b>
      <b>dark value</b>
    </div>
  );
}
