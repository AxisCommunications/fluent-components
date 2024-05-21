import {
  AddUserDark,
  AddUserLight,
  bundleIllustrationSmart,
} from "@axiscommunications/fluent-illustrations";
import React from "react";

const AddUserIllustrationSmart = bundleIllustrationSmart(
  AddUserDark,
  AddUserLight
);

export function BundleIllustrationSmart() {
  return <AddUserIllustrationSmart width={250} />;
}

export const BundleIllustrationSmartExampleAsString = `
import {
  AddUserDark,
  AddUserLight,
  bundleIllustrationSmart
} from "@axiscommunications/fluent-illustrations";
import React from "react";

const AddUserIllustrationSmart = bundleIllustrationSmart(AddUserDark, AddUserLight);

export function BundleIllustration() {
  return (
    <AddUserIllustrationSmart width={250} />
  );
}
`;
