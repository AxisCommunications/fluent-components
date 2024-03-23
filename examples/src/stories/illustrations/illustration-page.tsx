import { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import { Caption1 } from "@fluentui/react-components";
import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { IllustrationCopy } from "./components/illustration-copy";
import { IllustrationDialog } from "./components/illustration-dialog";
import { IllustrationPageHeader } from "./components/illustration-page-header";
import { useIllustrationPage } from "./illustration-page.hooks";
import { useStyles } from "./illustration-page.styles";
import { EStoryStatus } from "../../components/story/story-status";
import { DEFAULT_ILLUSTRATION_WIDTH } from "./illustration-page.types";

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
    Illustration: React.FC<AxisIllustrationProps>
  ): JSX.Element => {
    return (
      <div
        key={Illustration.displayName}
        aria-label={Illustration.displayName}
        className={styles.iconWrapper}
      >
        <IllustrationDialog
          thumbnail={<Illustration width={DEFAULT_ILLUSTRATION_WIDTH} />}
          title={Illustration.displayName}
        >
          <Illustration />
        </IllustrationDialog>
        <div>
          <Caption1 className={styles.text}>
            {Illustration.displayName}
          </Caption1>
          <IllustrationCopy
            toolTip={"copy react component to clipboard"}
            toCopy={Illustration.displayName}
          />
        </div>
      </div>
    );
  };

  return (
    <StoryPage
      title="Illustrations"
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      description={"Axis branded illustrations"}
      status={[EStoryStatus.NEW]}
      customHeader={
        <IllustrationPageHeader
          search={search}
          onSearchQueryChanged={onSearchQueryChanged}
          filterByVariant={filterByVariant}
        />
      }
    >
      <StorySection>
        <div className={styles.root}>
          {filteredIllustrations.map(_renderIllustration)}
        </div>
      </StorySection>
    </StoryPage>
  );
};
