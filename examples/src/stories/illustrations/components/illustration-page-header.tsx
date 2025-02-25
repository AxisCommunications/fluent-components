import {
  Input,
  Radio,
  RadioGroup,
  RadioGroupOnChangeData,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React from "react";
import { DEFAULT_VARIANT_FILTER, variants } from "../illustration-page.types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  slider: {
    display: "flex",
    alignItems: "center",
  },
});

type TIllustrationPageHeader = {
  search: string;
  onSearchQueryChanged: (ev?: React.FormEvent<HTMLInputElement>) => void;
  filterByVariant: (
    ev: React.FormEvent<HTMLDivElement>,
    data: RadioGroupOnChangeData
  ) => void;
};

export function IllustrationPageHeader({
  search,
  onSearchQueryChanged,
  filterByVariant,
}: TIllustrationPageHeader) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <Input
          size="small"
          type="search"
          placeholder="Search illustrations"
          value={search}
          aria-label="search"
          onChange={onSearchQueryChanged}
        />
      </div>
      <RadioGroup
        layout="horizontal"
        defaultValue={DEFAULT_VARIANT_FILTER}
        onChange={filterByVariant}
      >
        {variants.map((option) => (
          <Radio key={`option-${option}`} value={option} label={option} />
        ))}
      </RadioGroup>
    </div>
  );
}
