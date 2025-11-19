import { ReactElement } from "react";
export type ApplicationOption = {
  id: string;
  icon?: ReactElement;
  label?: string;
  url?: string;
  group?: string;
};

export type ApplicationMenuProps = {
  customContent?: ReactElement;
  options?: ApplicationOption[];
  value: string;
  onChange: (id: string) => void;
};
