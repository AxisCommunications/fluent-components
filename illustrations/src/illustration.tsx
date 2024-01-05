import { HTMLAttributes, useMemo } from "react";
import { Suspense } from "react";
import { Image, makeStyles, shorthands, tokens } from "@fluentui/react-components";

import { illustrations } from "./illustrations";
import React from "react";

export type IconName = keyof typeof illustrations;

interface Props {
  icon: IconName;
  className?: string;
  rotate?: number;
}

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Illustration = ({ icon, className, rotate, ...rest }: Props) => {
  const SvgIcon = useMemo(() => illustrations[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        {/* <SvgIcon style={{ width: "100%", height: "100%" }} /> */}
        <Image style={{ height: "100%", width: "100%" }} src={SvgIcon}></Image>
      </Suspense>
    </div>
  );
};