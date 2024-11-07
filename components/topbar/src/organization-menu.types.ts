import { PropsWithChildren } from "react";

export type OrganizationOption = {
  id: string;
  label: string;
};

export type OrganizationMenuProps = PropsWithChildren<{
  readonly value: string;
  readonly customContent?: JSX.Element;
  readonly onChange: (id: string) => void;
  readonly options?: OrganizationOption[];
  readonly filter?: { showFilter: boolean; placeholderText: string };
  readonly popoverInfo?: { title: string; body: string };
}>;
