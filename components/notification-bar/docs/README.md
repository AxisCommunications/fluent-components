# Notification-bar - @axiscommunications/fluent-notification-bar

Component to show notification messages.

## How to install

```sh
yarn add @axiscommunications/fluent-notification-bar
```

```sh
npm install @axiscommunications/fluent-notification-bar
```

## Usage

```ts
import { NotificationBar } from "@axiscommunications/fluent-notification-bar";

export const MyComponent = () => {
  return (
    <NotificationBar title={"Warning Notification"} intent="warning" />
  );
}
```