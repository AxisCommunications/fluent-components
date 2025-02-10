import {
  AddUserDark,
  AddUserLight,
  TBundleIllustrationVariant,
  bundleIllustration,
} from "@axiscommunications/fluent-illustrations";
import { Switch } from "@fluentui/react-components";
import React, { useState } from "react";

const AddUserIllustration = bundleIllustration(AddUserDark, AddUserLight);

export function BundleIllustration() {
  const [variant, setVariant] = useState<TBundleIllustrationVariant>("dark");
  const isDark = variant === "dark";

  return (
    <>
      <Switch
        label={isDark ? "Dark active" : "Light active"}
        checked={isDark}
        labelPosition="after"
        onChange={() =>
          setVariant((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />
      <AddUserIllustration width={250} variant={variant} />
    </>
  );
}

export const BundleIllustrationExampleAsString = `
import { AddUserDark, AddUserLight, TBundleIllustrationVariant, bundleIllustration } from "@axiscommunications/fluent-illustrations";
import { Switch } from "@fluentui/react-components";
import React, { useState } from "react";

const AddUserIllustration = bundleIllustration(AddUserDark, AddUserLight)

export function BundleIllustration() {
  const [variant, setVariant] = useState<TBundleIllustrationVariant>("dark")
  const isDark = variant === "dark"

  return (
    <>
      <Switch
        label={isDark ? "Dark active" : "Light active"}
        checked={isDark}
        labelPosition="after"
        onChange={() => setVariant(prev => prev === "dark" ? "light" : "dark")}
      />
      <AddUserIllustration width={250} variant={variant} />
    </>
  );
}
`;
