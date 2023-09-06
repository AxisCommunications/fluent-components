import React from "react";
import { Persona } from "@fluentui/react-components";
import { UserInformationProps } from "./profile-menu.types";
import { useUserInfoStyles } from "./profile-user-information.styles";

export const UserInformation = ({
  name,
  email,
  tag,
}: UserInformationProps) => {
  const styles = useUserInfoStyles();

  return (
    <div className={styles.root}>
      <Persona
        name={name}
        secondaryText={email}
        size="large"
        tertiaryText={tag}
        textAlignment="center"
      />
    </div>
  );
};
