# Hooks - @axiscommunications/fluent-hooks

Hooks for use with fluent UI components

## How to install

```sh
yarn add @axiscommunications/fluent-hooks
```

```sh
npm install @axiscommunications/fluent-hooks
```

## Usage

```ts
import { usePageController } from "@axiscommunications/fluent-hooks";

const [skip, setSkip] = useState(0);
const [take, setTake] = useState(10);
const data = useDataCollector();

const pageController = usePageController({ total: data.length, skip, take });

  <MyTable skip={skip} take={take} />

  <MyTableFooter
    {...pageController}
    total={data.length}
    take={take}
    setTake={setTake}
  />
```
