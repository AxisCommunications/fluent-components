import { AxisIconProps } from "@axiscommunications/fluent-icons";
import { Caption1 } from "@fluentui/react-components";
import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { IIconCopy } from "./components/icon-copy";
import { IconPageHeader } from "./components/icon-page-header";
import { useIconPage } from "./icon-page.hooks";
import { useStyles } from "./icon-page.styles";

export const IconPage = (): JSX.Element => {
  const gh = getGhInfoByKey(routes.IconCatalog);
  const {
    search,
    onSearchQueryChanged,
    filterByVariant,
    filterIcons,
  } = useIconPage();

  const styles = useStyles();

  const _renderIcon = (
    Icon: React.FC<AxisIconProps>
  ): JSX.Element => {
    return (
      <div
        key={Icon.displayName}
        aria-label={Icon.displayName}
        className={styles.iconWrapper}
      >
        <Icon />
        <div>
          <Caption1 className={styles.text}>
            {Icon.displayName}
          </Caption1>
          <IIconCopy
            toolTip={"copy react component to clipboard"}
            toCopy={Icon.displayName}
          />
        </div>
      </div>
    );
  };

  return (
    <StoryPage
      title="Icons"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded Icons"}
      customHeader={
        <IconPageHeader
          search={search}
          onSearchQueryChanged={onSearchQueryChanged}
          filterByVariant={filterByVariant}
        />
      }
    >
      <StorySection>
        <div className={styles.root}>
          {filterIcons.map(_renderIcon)}
        </div>
      </StorySection>
    </StoryPage>
  );
};
