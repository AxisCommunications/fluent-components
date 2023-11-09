export type ApplicationOption = {
  id: string;
  icon?: JSX.Element;
  label?: string;
  url?: string;
  beta?: boolean;
};

export type ApplicationMenuProps = {
  customContent?: JSX.Element;
  options?: ApplicationOption[];
  value: string;
  onChange: (id: string) => void;
};
