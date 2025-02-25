import React, { useCallback, useState } from "react";

import {
  ForwardRefComponent,
  Input,
  mergeClasses,
} from "@fluentui/react-components";
import { EyeOffRegular, EyeRegular } from "@fluentui/react-icons";

import { usePasswordInputStyles } from "./password-input.styles.js";
import { PasswordInputProps } from "./password-input.types.js";

export const PasswordInput: ForwardRefComponent<PasswordInputProps> =
  React.forwardRef((props: PasswordInputProps, ref) => {
    const { className, ...rest } = props;

    const styles = usePasswordInputStyles();
    const inputStyles = mergeClasses(styles.edgeHack, className);

    const [isVisible, setIsVisible] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
      setIsVisible((prev) => !prev);
    }, []);

    const iconProps = {
      style: { cursor: "pointer" },
      onClick: togglePasswordVisibility,
    };

    return (
      <Input
        ref={ref}
        type={isVisible ? "text" : "password"}
        contentAfter={
          isVisible ? (
            <EyeOffRegular {...iconProps} />
          ) : (
            <EyeRegular {...iconProps} />
          )
        }
        className={inputStyles}
        {...rest}
      />
    );
  });
