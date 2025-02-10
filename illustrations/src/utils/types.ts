import React from "react";

export type FluentIllustration = {
  (props: AxisIllustrationProps): JSX.Element;
  displayName?: string;
};

export type AxisIllustrationProps<
  TBaseAttributes extends
    | React.ImgHTMLAttributes<HTMLImageElement>
    | React.HTMLAttributes<HTMLElement> = React.ImgHTMLAttributes<HTMLImageElement>,
> = TBaseAttributes & {
  className?: string;
  title?: string;
};
