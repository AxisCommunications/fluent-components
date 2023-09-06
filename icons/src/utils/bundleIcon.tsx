import React from "react";
import { iconFilledClassName, iconRegularClassName } from "./constants";
import { AxisIconProps } from "./axis-icon.types";
import { makeStyles, mergeClasses } from "@griffel/react";

const useBundledIconStyles = makeStyles({
  root: { display: "none" },
  visible: { display: "inline" }
});

const bundleIcon = (FilledIcon: React.FC<AxisIconProps>, RegularIcon: React.FC<AxisIconProps>) => {
  const Component: React.FC<AxisIconProps> = (props) => {
    const { className, primaryFill = 'currentColor', filled, ...rest } = props;
    const styles = useBundledIconStyles();
    return (
      <React.Fragment>
        <FilledIcon
          {...rest}
          className={mergeClasses(
            styles.root,
            filled && styles.visible,
            iconFilledClassName,
            className
          )}
          fill={primaryFill}
        />
        <RegularIcon
          {...rest}
          className={mergeClasses(
            styles.root,
            !filled && styles.visible,
            iconRegularClassName,
            className
          )}
          fill={primaryFill}
        />
      </React.Fragment>
    )
  }
  Component.displayName = "CompoundIcon";
  return Component;
}

export default bundleIcon;
