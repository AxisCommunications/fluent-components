import type { HTMLAttributes, ImgHTMLAttributes, ReactElement } from "react";

export type FluentIllustration = {
  (props: AxisIllustrationProps): ReactElement;
  displayName?: string;
};

export type AxisIllustrationProps<
  TBaseAttributes extends
    | ImgHTMLAttributes<HTMLImageElement>
    | HTMLAttributes<HTMLElement> = ImgHTMLAttributes<HTMLImageElement>,
> = TBaseAttributes & {
  className?: string;
  title?: string;
};
