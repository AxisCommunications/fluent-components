import React from "react";

import { Button } from "@fluentui/react-components";
import { ArrowSyncRegular } from "@fluentui/react-icons";

import { MainEmptyView } from "@axiscommunications/fluent-empty-view";

export function MainEmptyViewExample() {
  return (
    <MainEmptyView
      illustration="no-connection"
      title="There's no connection"
      after={
        <Button
          icon={<ArrowSyncRegular />}
          onClick={() => {
            /** */
          }}
        >
          "Try again"
        </Button>
      }
    >
      You don't seem to have any connection to the internet. Check your network
      settings and try again.
    </MainEmptyView>
  );
}

export const MainEmptyViewExampleAsString = `
import React from "react";
import { MainEmptyView } from "@axiscommunications/fluent-empty-view";

export function EmptyViewExample() {
  return (
    <MainEmptyView
      illustration="no-connection"
      title="There's no connection"
      after={
        <Button icon={<ArrowSyncRegular />} onClick={()=>{/** */}}>
          "Try again"
        </Button>
      }
    >
      You don't seem to have any connection to the internet. Check your network settings and try again.
    </MainEmptyView>
  );
};
`;
