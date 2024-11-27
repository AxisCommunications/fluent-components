import React from "react";
import { DialogContent, tokens } from "@fluentui/react-components";
import { DialogEmptyView } from "@axiscommunications/fluent-empty-view";

export function DialogEmptyViewExample() {
  return (
    <DialogContent>
      <div
        style={{
          height: "240px",
          border: `1px solid ${tokens.colorNeutralStroke1}`,
        }}
      >
        <DialogEmptyView title="No roles">
          You haven’t created any roles yet.
        </DialogEmptyView>
      </div>
    </DialogContent>
  );
}

export const DialogEmptyViewExampleAsString = `
import React from "react";
import { DialogEmptyView } from "@axiscommunications/fluent-empty-view";

export function EmptyViewExample() {
  return (
    <DialogContent>
      <div style={{ height: '240px' }}>
        <DialogEmptyView title="No roles">You haven’t created any roles yet.</DialogEmptyView>
      </div>
    </DialogContent>
  );
};
`;
