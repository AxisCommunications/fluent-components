import {
  axisBlueDarkTheme,
  axisBlueLightTheme,
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import {
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  SelectTabData,
  SelectTabEvent,
  shorthands,
  Switch,
  Tab,
  TabList,
  Theme,
} from "@fluentui/react-components";
import { useAppContext } from "../context/ApplicationStateProvider";
import { DarkThemeRegular } from "@fluentui/react-icons";
import React, { memo, useCallback, useState } from "react";
import { PageHeader } from "../components/page-header";
import { SimpleHeader } from "../components/simple-header";
import {
  useFixedPageStyle,
  useLayoutStyles,
  useScrollPageStyle,
} from "../styles/page";

const useStyles = makeStyles({
  tablist: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    rowGap: "20px",
  },
  tokenPicker: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  colorGrid: {
    display: "grid",
    gridTemplateColumns: "auto 100px 1fr 100px 1fr",
    ...shorthands.gap("8px"),
    fontFamily: "monospace",
    "> :nth-child(1)": {
      gridColumnStart: "span 1",
    },
    "> :nth-child(2)": {
      gridColumnStart: "span 2",
    },
    "> :nth-child(3)": {
      gridColumnStart: "span 2",
    },
  },
});

const axisThemes = {
  main: "main",
  blue: "blue",
} as const;

type TaxisThemes = typeof axisThemes[keyof typeof axisThemes];

type TaxisThemeVariants = "light" | "dark";

const themeMap: Record<TaxisThemes, Record<TaxisThemeVariants, Theme>> = {
  [axisThemes.main]: { light: axisLightTheme, dark: axisDarkTheme },
  [axisThemes.blue]: { light: axisBlueLightTheme, dark: axisBlueDarkTheme },
};

const Color = memo(
  (props: { token: string; lightValue: string; darkValue: string }) => (
    <>
      <div>{props.token}</div>
      <div
        style={{
          backgroundColor: props.lightValue,
          width: "100px",
        }}
      />
      <div>{props.lightValue}</div>
      <div
        style={{
          backgroundColor: props.darkValue,
          width: "100px",
        }}
      />
      <div>{props.darkValue}</div>
    </>
  )
);

const Colors = memo((props: { startsWith: string; selected: TaxisThemes }) => {
  const styles = useStyles();
  const { light, dark } = themeMap[props.selected];

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const tokens = Object.entries(light)
    .filter(([token]) => token.startsWith(props.startsWith))
    .map(([token, value]) => ({
      token,
      lightValue: value as string,
      darkValue: (dark as unknown as Record<string, string>)[
        token
      ],
    }));

  return (
    <div className={styles.colorGrid}>
      <b>token</b>
      <b>light</b>
      <b>dark</b>
      {tokens.map((args, i) => <Color key={i} {...args} />)}
    </div>
  );
});

const tokenVariant = {
  brand: "colorBrand",
  neutral: "colorNeutral",
  palette: "colorPalette",
  subtle: "colorSubtle",
  transparent: "colorTransparent",
  stroke: "colorStroke",
  compound: "colorCompound",
} as const;

type TtokenVariant = typeof tokenVariant[keyof typeof tokenVariant];

export const ThemePage = () => {
  const styles = useStyles();
  const fixedPageStyle = useFixedPageStyle();
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();

  const [selectedTab, setSelectedTab] = useState<TaxisThemes>(axisThemes.main);
  const [selectedVariant, setSelectedVariant] = useState<TtokenVariant>(
    tokenVariant.brand
  );

  const setAppTheme = useAppContext((context) => context.setTheme);
  const toggleDir = useAppContext((context) => context.toggleDir);
  const dir = useAppContext((context) => context.dir);

  const onThemeSelect = useCallback(
    (_: SelectTabEvent, { value }: SelectTabData) =>
      setSelectedTab(value as TaxisThemes),
    []
  );

  const onVariantSelect = useCallback(
    (_: SelectTabEvent, { value }: SelectTabData) =>
      setSelectedVariant(value as TtokenVariant),
    []
  );

  const applyLightTheme = useCallback(() => {
    const theme = themeMap[selectedTab].light;
    setAppTheme(theme);
  }, [selectedTab, setAppTheme]);

  const applyDarkTheme = useCallback(() => {
    const theme = themeMap[selectedTab].dark;
    setAppTheme(theme);
  }, [selectedTab, setAppTheme]);

  return (
    <div className={layoutStyles.grid}>
      <PageHeader
        className={layoutStyles.header}
        title="Themes"
        borderBottom={false}
      />
      <div className={mergeClasses(layoutStyles.content, fixedPageStyle)}>
        <div className={layoutStyles.innerGrid}>
          <SimpleHeader className={layoutStyles.header}>
            <div className={styles.tokenPicker}>
              <div className={styles.tablist}>
                <TabList
                  defaultSelectedValue={selectedTab}
                  onTabSelect={onThemeSelect}
                >
                  <Tab value={axisThemes.main}>Main theme</Tab>
                  <Tab value={axisThemes.blue}>Blue Theme</Tab>
                </TabList>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <MenuButton shape="circular" icon={<DarkThemeRegular />}>
                      Apply theme
                    </MenuButton>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      <MenuItem onClick={applyLightTheme}>light</MenuItem>
                      <MenuItem onClick={applyDarkTheme}>dark</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </div>
              <div className={styles.tablist}>
                <TabList
                  defaultSelectedValue={selectedVariant}
                  onTabSelect={onVariantSelect}
                >
                  <Tab value={tokenVariant.brand}>Brand</Tab>
                  <Tab value={tokenVariant.neutral}>Neutral</Tab>
                  <Tab value={tokenVariant.palette}>Palette</Tab>
                  <Tab value={tokenVariant.subtle}>Subtle</Tab>
                  <Tab value={tokenVariant.transparent}>Transparent</Tab>
                  <Tab value={tokenVariant.stroke}>Stroke</Tab>
                  <Tab value={tokenVariant.compound}>Compound</Tab>
                </TabList>
                <Switch
                  label="Swap direction"
                  checked={dir === "ltr"}
                  onChange={toggleDir}
                />
              </div>
            </div>
          </SimpleHeader>
          <div className={mergeClasses(layoutStyles.content, scrollPageStyle)}>
            <Colors
              startsWith={selectedVariant}
              selected={selectedTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
