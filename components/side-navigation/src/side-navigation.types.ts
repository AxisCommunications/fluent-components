import { ComponentProps, ReactNode } from "react";

export type SideNavigationItem = {
  id: string;
  label: string;
  icon: ReactNode;
  selectedIcon?: ReactNode;
};

export type SideNavigationMode = "rail" | "hidden";

export type SideNavigationProps = Omit<
  ComponentProps<"aside">,
  "children" | "onSelect"
> & {
  items?: SideNavigationItem[];
  selectedItemId?: string;
  onSelect?: (id: string) => void;
  bottomItem?: SideNavigationItem;
  mode?: SideNavigationMode;
};
