# Empty view - @axiscommunications/fluent-empty-view

Empty view is a component that displays when there is no data.

## How to install

```sh
yarn add @axiscommunications/fluent-empty-view
```

```sh
npm install @axiscommunications/fluent-empty-view
```

## Usage

```ts
import { MainEmptyView, PanelEmptyView, SubmenuEmptyView, DialogEmptyView } from "@axiscommunications/fluent-empty-view";

export const MainEmptyViewExample = () => {
  return (
   <MainEmptyView
    illustration="no-connection"
    title="There's no connection"
    after={
      <Button icon={<ArrowSyncRegular />} onClick={reload}>
        "Try again"
      </Button>
    }
  >
    "You don't seem to have any connection to the internet. Check your network settings and try again."
  </MainEmptyView>
  );
};

export const PanelEmptyViewExample = () => {
  return (
    <PanelEmptyView illustration="add-user-profile" title="No roles have been assigned to the user">
      "Assign roles and grant access to users to provide them with the necessary permissions to access resources within the organization."
    </PanelEmptyView>
  );
};

export const SubmenuEmptyViewExample = () => {
  return (
    <SubmenuEmptyView illustration="no-match" title="No matching results">
      "We couldn't find any folders matching your search."
    </SubmenuEmptyView>
  );
};

export const DialogEmptyViewExample = () => {
  return (
    <DialogContent>
      <div style={{ height: '240px' }}>
        <DialogEmptyView title="No roles">"You haven’t created any roles yet."</DialogEmptyView>
      </div>
    </DialogContent>
  );
};
```

