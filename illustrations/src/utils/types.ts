import React from "react";

export type FluentIllustration = {
  (props: AxisIllustrationProps): JSX.Element;
  displayName?: string;
};

export type AxisIllustrationProps<
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
> = TBaseAttributes & {
  primaryFill?: string;
  className?: string;
  filled?: boolean;
  title?: string;
};
