import React from "react";
import { MainEmptyView } from "@axiscommunications/fluent-empty-view";
import {
  bundleIllustrationSmart,
  CodeErrorDark,
  CodeErrorLight,
} from "@axiscommunications/fluent-illustrations";

const codeErrorIllustration = bundleIllustrationSmart(
  CodeErrorDark,
  CodeErrorLight
);

export function MainEmptyViewWithCustomIllustrationExample() {
  return (
    <MainEmptyView
      illustration={codeErrorIllustration}
      title="Unexpected error"
    />
  );
}

export const MainEmptyViewWithCustomIllustrationExampleAsString = `
import React from "react";
import { MainEmptyView } from "@axiscommunications/fluent-empty-view";
import {
  bundleIllustrationSmart,
  CodeErrorDark,
  CodeErrorLight,
} from "@axiscommunications/fluent-illustrations";

const codeErrorIllustration = bundleIllustrationSmart(CodeErrorDark, CodeErrorLight);

export function MainEmptyViewWithCustomIllustrationExample() {
  return <MainEmptyView illustration={codeErrorIllustration} title="Unexpected error" />;
}
`;
