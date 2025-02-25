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
import { DEFAULT_VARIANT_FILTER, variants } from "../icon-page.types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
});

type TIconPageHeader = {
  search: string;
  onSearchQueryChanged: (ev?: React.FormEvent<HTMLInputElement>) => void;
  filterByVariant: (
    ev: React.FormEvent<HTMLDivElement>,
    data: RadioGroupOnChangeData
  ) => void;
};

export function IconPageHeader({
  search,
  onSearchQueryChanged,
  filterByVariant,
}: TIconPageHeader) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <Input
          size="small"
          type="search"
          placeholder="Search icons"
          value={search}
          aria-label="search"
          onChange={onSearchQueryChanged}
        />
      </div>
      <RadioGroup
        layout="horizontal"
        defaultValue={DEFAULT_VARIANT_FILTER as string}
        onChange={filterByVariant}
      >
        {variants.map((option) => (
          <Radio
            key={`option-${option}`}
            value={option as string}
            label={option}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
