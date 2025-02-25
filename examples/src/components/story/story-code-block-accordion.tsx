import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React from "react";
import { StoryCodeBlock } from "./story-code-block";
import { CopyButton } from "./story-code-copy";

const useStyles = makeStyles({
  root: {
    position: "relative",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
  copyBootstrap: {
    position: "absolute",
    zIndex: 5,
    top: "5px",
    right: "5px",
  },
});

export const StoryCodeBlockAccordion = ({
  codeString,
  title = "Show code",
  defaultOpen = false,
}: {
  codeString: string;
  defaultOpen?: boolean;
  title?: string;
}) => {
  const styles = useStyles();

  return (
    <Accordion
      collapsible
      className={styles.root}
      defaultOpenItems={defaultOpen ? [1] : []}
    >
      <AccordionItem value={1}>
        <CopyButton
          appearance="transparent"
          className={styles.copyBootstrap}
          codeString={codeString}
        />
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionPanel>
          <StoryCodeBlock codeString={codeString} canCopy={false} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
