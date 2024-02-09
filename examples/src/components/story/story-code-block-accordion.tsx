import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import React from "react";
import { StoryCodeBlock } from "./story-code-block";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

export const StoryCodeBlockAccordion = (
  { codeString, title = "Show code" }: { codeString: string; title?: string }
) => {
  const styles = useStyles();

  return (
    <Accordion collapsible className={styles.root}>
      <AccordionItem value="1">
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionPanel>
          <StoryCodeBlock codeString={codeString} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
