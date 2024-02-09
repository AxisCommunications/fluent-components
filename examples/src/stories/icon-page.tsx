import * as AxisReactIcons from "@axiscommunications/fluent-icons";
import { AxisIconProps } from "@axiscommunications/fluent-icons";
import {
  Caption1,
  Input,
  makeStyles,
  mergeClasses,
  shorthands,
} from "@fluentui/react-components";
import React from "react";
import { SimpleHeader } from "../components/simple-header";
import { StoryPage } from "../components/story/story-page";
import { StorySection } from "../components/story/story-section";
import { getGhInfoByKey } from "../routing/route-map";
import { routes } from "../routing/routes";
import {
  useFixedPageStyle,
  useLayoutStyles,
  useScrollPageStyle,
} from "../styles/page";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "10px",
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ...shorthands.padding("8px"),
    ...shorthands.overflow("hidden"),
  },
  text: {
    display: "inline-block",
    height: "auto",
    ...shorthands.padding("0px 8px"),
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  searchBox: {
    maxWidth: "320px",
  },
  sizeBox: {
    display: "flex",
    alignItems: "center",
    ...shorthands.padding("5px"),
  },
  radio: {
    fontSize: "11px",
  },
});

const axisReactIcons: React.FC<AxisIconProps>[] = Object.keys(AxisReactIcons)
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  .map((iconName) => (AxisReactIcons as any)[iconName])
  .filter((icon) => !!icon && !!icon.displayName);

export const IconPage = (): JSX.Element => {
  const gh = getGhInfoByKey(routes.IconCatalog);

  const [search, setSearch] = React.useState("");
  // Fluent default size is 20
  const [size, setSize] = React.useState<string | number>(20);
  const styles = useStyles();
  const fixedPageStyle = useFixedPageStyle();
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();

  const _onSearchQueryChanged = (ev?: React.FormEvent<HTMLInputElement>) => {
    setSearch(ev ? ev.currentTarget.value : "");
  };

  const _filterBySize = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>
  ) => {
    const newSize = ev ? (ev.currentTarget as HTMLInputElement).value : "";
    if (newSize === "All") {
      setSize("");
    } else {
      setSize(newSize);
    }
  };

  const _renderIcon = (Icon: React.FC<AxisIconProps>): JSX.Element => {
    return (
      <div
        key={Icon.displayName}
        aria-label={Icon.displayName}
        className={styles.iconWrapper}
      >
        <Icon />
        <br />
        <Caption1 className={styles.text}>{Icon.displayName}</Caption1>
      </div>
    );
  };

  const filteredIcons = React.useMemo(
    () =>
      axisReactIcons.filter((icon) => {
        if (size === "Unsized") {
          return (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            icon.displayName!
            && !/\d/.test(icon.displayName.toLowerCase())
            && icon.displayName?.toLowerCase().includes(search.toLowerCase())
          );
        }

        return (
          icon.displayName?.toLowerCase().includes(search.toLowerCase())
          && icon.displayName?.includes(String(size))
        );
      }),
    [search, size]
  );

  return (
    <StoryPage
      title="Icons"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded icons"}
    >
      <StorySection>
        <div className={layoutStyles.innerGrid}>
          <SimpleHeader className={layoutStyles.header}>
            <div className={styles.inputBox}>
              <Input
                type="search"
                placeholder="Search icons"
                value={search}
                aria-label="search"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={_onSearchQueryChanged}
                className={styles.searchBox}
              />
              <div className={styles.sizeBox}>
                {[16, 20, 24, 28, 32, 48, "Unsized", "All"].map((option) => (
                  <div key={`option-${option}`}>
                    <input
                      id={`option-${option}`}
                      defaultChecked={option === 20}
                      type="radio"
                      value={option}
                      name="size"
                      onChange={_filterBySize}
                    />
                    <label
                      htmlFor={`option-${option}`}
                      className={styles.radio}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </SimpleHeader>
          <div className={mergeClasses(layoutStyles.content, fixedPageStyle)}>
            <div
              className={mergeClasses(layoutStyles.content, scrollPageStyle)}
            >
              {
                <div className={styles.grid}>
                  {filteredIcons.map(_renderIcon)}
                </div>
              }
            </div>
          </div>
        </div>
      </StorySection>
    </StoryPage>
  );
};
