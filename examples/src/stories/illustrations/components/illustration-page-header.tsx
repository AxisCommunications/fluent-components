import {
  Input,
  Label,
  makeStyles,
  Radio,
  RadioGroup,
  RadioGroupOnChangeData,
  Slider,
  SliderOnChangeData,
  tokens,
  useId,
} from "@fluentui/react-components";
import { shorthands } from "@fluentui/react-components";
import React from "react";
import { DEFAULT_VARIANT_FILTER, variants } from "../illustration-page.types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
  illustrationWidth: number;
  onUpdateIllustrationWidth: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: SliderOnChangeData
  ) => void;
};

export function IllustrationPageHeader(
  {
    illustrationWidth,
    onUpdateIllustrationWidth,
    search,
    onSearchQueryChanged,
    filterByVariant,
  }: TIllustrationPageHeader
) {
  const styles = useStyles();
  const id = useId();

  return (
    <div className={styles.root}>
      <Input
        size="small"
        type="search"
        placeholder="Search illustrations"
        value={search}
        aria-label="search"
        onChange={onSearchQueryChanged}
      />
      <RadioGroup
        layout="horizontal"
        defaultValue={DEFAULT_VARIANT_FILTER}
        onChange={filterByVariant}
      >
        {variants.map((option) => (
          <Radio key={`option-${option}`} value={option} label={option} />
        ))}
      </RadioGroup>
      <div className={styles.slider}>
        <Slider
          id={id}
          aria-valuetext={`Value is ${illustrationWidth}`}
          value={illustrationWidth}
          min={20}
          max={500}
          onChange={onUpdateIllustrationWidth}
        />
        <Label size="small" htmlFor={id}>Width {illustrationWidth}</Label>
      </div>
    </div>
  );
}
