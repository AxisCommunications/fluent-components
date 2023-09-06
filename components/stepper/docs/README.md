# Stepper - @axiscommunications/fluent-stepper

Stepper component for building e.g. wizards.

## How to install

```sh
yarn add @axiscommunications/fluent-stepper
```

```sh
npm install @axiscommunications/fluent-stepper
```

## Usage

```ts
import { Stepper, Step } from "@axiscommunications/fluent-stepper";

const steps: Step[] = [
  {
    name: "First step",
    content: <>step1</>,
  },
  {
    name: "Second step",
    content: <>step2</>,
  },
  {
    name: "Third step",
    content: <>step3</>,
  },
];

export const StepperExample = () => {
  const [step, setStep] = useState(0);

  return (
    <Stepper
      currentStep={step}
      steps={steps}
      disableProgression={false}
      onStepChange={setStep}
      onFinish={() => alert("Done")}
      onCancel={() => setStep(0)}
      cancelLabel={"Cancel"}
      nextLabel={"Next"}
      previousLabel={"Previous"}
      finishLabel={"Finish"}
    />
  );
};
```

## Design

Zeplin: https://zpl.io/DlvOrlv
