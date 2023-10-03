import {
  axisDarkTheme,
  axisLightTheme,
} from "@axiscommunications/fluent-theme";
import { Button, Switch, Theme } from "@fluentui/react-components";
import {
  ContextSelector,
  createContext,
  useContextSelector,
  useHasParentContext,
} from "@fluentui/react-context-selector";
import { LightbulbFilled, LightbulbRegular } from "@fluentui/react-icons";
import React, { FC, PropsWithChildren, useCallback } from "react";

type Dir = "ltr" | "rtl";

// context type
interface AppContextValue {
  theme: Theme;
  dir: Dir;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleDir: () => void;
}

// context
const AppContext = createContext<AppContextValue>({
  theme: axisDarkTheme,
  dir: "ltr",
  setDarkTheme: () => undefined,
  setLightTheme: () => undefined,
  setTheme: () => undefined,
  toggleTheme: () => undefined,
  toggleDir: () => undefined,
});

// hook to use context
export function useAppContext<T>(
  selector: ContextSelector<AppContextValue, T>
) {
  const isWrappedWithContext = useHasParentContext(AppContext);

  if (!isWrappedWithContext) {
    throw new Error(
      "useAppContext must be used within ApplicationStateProvider"
    );
  }

  return useContextSelector(AppContext, selector);
}

// provider to provide context for app
export const ApplicationStateProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [state, setState] = React.useState<
    Pick<AppContextValue, "theme" | "dir">
  >({
    theme: axisDarkTheme,
    dir: "ltr",
  });

  const setDarkTheme = useCallback(
    () => setState((s) => ({ ...s, theme: axisDarkTheme })),
    []
  );
  const setLightTheme = useCallback(
    () => setState((s) => ({ ...s, theme: axisLightTheme })),
    []
  );
  const setTheme = useCallback(
    (theme: Theme) => setState((s) => ({ ...s, theme: theme })),
    []
  );

  const toggleTheme = () =>
    state.theme === axisDarkTheme ? setLightTheme() : setDarkTheme();

  const setDir = useCallback(
    (dir: Dir) => setState((s) => ({ ...s, dir: dir })),
    []
  );
  const toggleDir = () => (state.dir === "ltr" ? setDir("rtl") : setDir("ltr"));

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        dir: state.dir,
        setDarkTheme,
        setLightTheme,
        setTheme,
        toggleTheme,
        toggleDir,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// example of how use context in app
export const ToggleThemeButton = () => {
  const theme = useAppContext((context) => context.theme);
  const dir = useAppContext((context) => context.dir);
  const setDarkTheme = useAppContext((context) => context.setDarkTheme);
  const setLightTheme = useAppContext((context) => context.setLightTheme);
  const toggleTheme = useAppContext((context) => context.toggleTheme);
  const toggleDir = useAppContext((context) => context.toggleDir);

  const isDark = theme === axisDarkTheme;
  const label = isDark ? "go light-theme" : "go dark-theme";
  const icon = isDark ? <LightbulbFilled /> : <LightbulbRegular />;

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button onClick={toggleTheme} appearance="primary" icon={icon}>
        toggle: {label}
      </Button>
      <Button
        onClick={setDarkTheme}
        appearance="primary"
        icon={<LightbulbFilled />}
      >
        set: dark-theme
      </Button>
      <Button
        onClick={setLightTheme}
        appearance="primary"
        icon={<LightbulbRegular />}
      >
        set: light-theme
      </Button>
      <Switch
        label="Toggle direction"
        checked={dir === "ltr"}
        onChange={toggleDir}
      />
    </div>
  );
};
