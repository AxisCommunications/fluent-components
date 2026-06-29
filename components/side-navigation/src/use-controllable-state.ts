import React from "react";

type UseControllableStateOptions<T> = {
  /** The controlled value. When not `undefined`, the hook is controlled. */
  controlledValue: T | undefined;
  /** The initial value used while uncontrolled. */
  defaultValue: T;
  /** Called whenever the value changes, with the next value. */
  onChange?: (value: T) => void;
};

/**
 * Minimal controlled/uncontrolled state hook. When `controlledValue` is
 * provided the hook mirrors it; otherwise it manages its own internal state.
 * `onChange` is always invoked when the setter is called.
 */
export function useControllableState<T>({
  controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>): [T, (next: T) => void] {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);
  const value = isControlled ? (controlledValue as T) : internalValue;

  const setValue = React.useCallback(
    (next: T) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return [value, setValue];
}
