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
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
  title: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const StoryCodeBlockAccordion = (
  { codeString, title = "Show code", defaultOpen = false }: {
    codeString: string;
    defaultOpen?: boolean;
    title?: string;
  }
) => {
  const styles = useStyles();

  return (
    <Accordion
      collapsible
      className={styles.root}
      defaultOpenItems={defaultOpen ? "1" : null}
    >
      <AccordionItem value="1">
        <AccordionHeader>
          <div className={styles.title}>
            {title}
            <CopyButton codeString={codeString} />
          </div>
        </AccordionHeader>
        <AccordionPanel>
          <StoryCodeBlock codeString={codeString} canCopy={false} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
