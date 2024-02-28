import { Caption1, Input } from "@fluentui/react-components";
import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { useStyles } from "./illustartion-page.styles";
import { DEFAULT_VARIANT_FILTER, variants } from "./illustration-page.types";
import { useIllustrationPage } from "./illustration-page.hooks";
import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";

export const IllustrationPage = (): JSX.Element => {
  const gh = getGhInfoByKey(routes.Illustrations);
  const {
    search,
    onSearchQueryChanged,
    filterByVariant,
    filteredIllustrations,
  } = useIllustrationPage();

  const styles = useStyles();

  const _renderIllustration = (
    Icon: React.FC<AxisIllustrationProps>
  ): JSX.Element => {
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

  return (
    <StoryPage
      title="Illustrations (WIP)"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded illustrations"}
    >
      <Input
        type="search"
        placeholder="Search illustrations"
        value={search}
        aria-label="search"
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onSearchQueryChanged}
        className={styles.searchBox}
      />
      <div className={styles.sizeBox}>
        {variants.map((option) => (
          <div key={`option-${option}`}>
            <input
              id={`option-${option}`}
              defaultChecked={option === DEFAULT_VARIANT_FILTER}
              type="radio"
              value={option}
              name="size"
              onChange={filterByVariant}
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
      <StorySection>
        <div className={styles.grid}>
          {filteredIllustrations.map(_renderIllustration)}
        </div>
      </StorySection>
    </StoryPage>
  );
};
