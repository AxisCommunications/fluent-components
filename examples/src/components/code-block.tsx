import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";

export const CodeBlock = (
  { codeString, title }: { codeString: string; title: string }
) => {
  return (
    <Accordion collapsible>
      <AccordionItem value="1">
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionPanel>
          <SyntaxHighlighter language="typescript">
            {codeString}
          </SyntaxHighlighter>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
