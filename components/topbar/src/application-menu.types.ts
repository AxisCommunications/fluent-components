export type ApplicationOption = {
  id: string;
  icon?: JSX.Element;
  label?: string;
  url?: string;
  group?: string;
};

export type ApplicationMenuProps = {
  customContent?: JSX.Element;
  options?: ApplicationOption[];
  value: string;
  onChange: (id: string) => void;
};
