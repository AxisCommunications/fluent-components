import { SubmenuEmptyView } from "@axiscommunications/fluent-empty-view";
import React from "react";

export function SubmenuEmptyViewExample() {
  return (
    <SubmenuEmptyView illustration="no-match" title="No matching results">
      We couldn't find any folders matching your search.
    </SubmenuEmptyView>
  );
}

export const SubmenuEmptyViewExampleAsString = `
import React from "react";
import { SubmenuEmptyView } from "@axiscommunications/fluent-empty-view";

export function EmptyViewExample() {
  return (
    <SubmenuEmptyView illustration="no-match" title="No matching results">
      We couldn't find any folders matching your search.
    </SubmenuEmptyView>
  );
};
`;
