export type Step = {
  name: string;
};

export type StepperProps = {
  currentStep: number;
  steps: Step[];
  vertical?: boolean;
};
