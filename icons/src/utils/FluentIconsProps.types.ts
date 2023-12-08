import React from "react";
export type AxisIconProps<
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement
> = TBaseAttributes &
  React.RefAttributes<TRefType> & {
    primaryFill?: string;
    className?: string;
    filled?: boolean;
    title?: string;
  };
