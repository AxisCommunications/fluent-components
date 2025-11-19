import { SubmenuEmptyView } from "@axiscommunications/fluent-empty-view";

export function SubmenuEmptyViewExample() {
  return (
    <SubmenuEmptyView illustration="no-match" title="No matching results">
      We couldn't find any folders matching your search.
    </SubmenuEmptyView>
  );
}

export const SubmenuEmptyViewExampleAsString = `
import { SubmenuEmptyView } from "@axiscommunications/fluent-empty-view";

export function EmptyViewExample() {
  return (
    <SubmenuEmptyView illustration="no-match" title="No matching results">
      We couldn't find any folders matching your search.
    </SubmenuEmptyView>
  );
};
`;
