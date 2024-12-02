import React from "react";
import { PanelEmptyView } from "@axiscommunications/fluent-empty-view";

export function PanelEmptyViewExample() {
  return (
    <PanelEmptyView
      illustration="add-user-profile"
      title="No roles have been assigned to the user"
    >
      Assign roles and grant access to users to provide them with the necessary
      permissions to access resources within the organization.
    </PanelEmptyView>
  );
}

export const PanelEmptyViewExampleAsString = `
import React from "react";
import { PanelEmptyView } from "@axiscommunications/fluent-empty-view";

export function PanelEmptyViewExample() {
  return (
    <PanelEmptyView illustration="add-user-profile" title="No roles have been assigned to the user">
      Assign roles and grant access to users to provide them with the necessary permissions to access resources within the organization.
    </PanelEmptyView>
  );
};
`;
