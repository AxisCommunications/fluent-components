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

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
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
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionPanel>
          <StoryCodeBlock codeString={codeString} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
