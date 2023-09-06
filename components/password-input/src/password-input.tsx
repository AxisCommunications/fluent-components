import React, { useCallback, useState } from "react";

import { Input, mergeClasses } from "@fluentui/react-components";
import { EyeOffRegular, EyeRegular } from "@fluentui/react-icons";

import { PasswordInputProps } from "./password-input.types";
import { usePasswordInputStyles } from "./password-input.styles";

export function PasswordInput(props: PasswordInputProps) {
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
      type={isVisible ? "text" : "password"}
      contentAfter={isVisible
        ? <EyeOffRegular {...iconProps} />
        : <EyeRegular {...iconProps} />}
      className={inputStyles}
      {...rest}
    />
  );
}
