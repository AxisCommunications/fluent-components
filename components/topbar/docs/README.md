# Topbar - @axiscommunications/fluent-topbar

Top-level bar that hosts app and organization selection,
as well as (several) menu(s). The TopBar component itself
is just a wrapper for the different sections, and its up
to you to use the proper components inside the bar.

The styling is still not completely controller by the
wrapper components, so you still need to insert a vertical
divider yourself between the organization and profile
menu (see example).

If you want to use this already now, then be prepared to
make changes in the future, but otherwise this should be
useable and support customization. There is support for a single
app (no selection if only 1 app). You can also inject your
own menu items in the profile menu, and add additional menu
items in the right section.

## How to install

```sh
yarn add @axiscommunications/fluent-topbar
```

```sh
npm install @axiscommunications/fluent-topbar
```

## Usage

```ts
import { Topbar } from "@axiscommunications/fluent-topbar";

export const TopbarExample = () => {
  return (
    <TopBar
      center={<ApplicationMenu />}
      right={
        <>
          <OrganizationMenu />
          <Divider vertical />
          <ProfileMenu />
        </>
      }
    />
  );
};
```
