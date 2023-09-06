export const toPercent = (value: number, min: number, max: number) =>
  ((value - min) / (max - min)) * 100;
