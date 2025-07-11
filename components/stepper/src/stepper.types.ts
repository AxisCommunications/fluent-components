export type TStep = {
  name: string;
};

export type StepperProps = {
  currentStep: number;
  steps: TStep[];
  vertical?: boolean;
};
