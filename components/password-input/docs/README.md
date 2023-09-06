# Password Input - @axiscommunications/fluent-password-input

A password input that lets you reveal the password.

## How to install

```sh
yarn add @axiscommunications/fluent-password-input
```

```sh
npm install @axiscommunications/fluent-password-input
```

## Usage

```ts
import { PasswordInput } from "@axiscommunications/fluent-password-input";

export const Root: React.FC = () => {
  return (
    <FluentProvider>
      <PasswordInput
        name="password"
        onChange={(_e, data) => setValue(data.value)}
      />
    </FluentProvider>
  );
};
```
