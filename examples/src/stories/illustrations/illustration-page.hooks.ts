import React from "react";
import {
  axisIllustrations,
  DEFAULT_ILLUSTRATION_WIDTH,
  DEFAULT_VARIANT_FILTER,
  TVariant,
} from "./illustration-page.types";
import {
  RadioGroupOnChangeData,
  SliderProps,
} from "@fluentui/react-components";

export function useIllustrationPage() {
  const [search, setSearch] = React.useState("");
  const [illustrationWidth, setIllustrationWidth] = React.useState(
    DEFAULT_ILLUSTRATION_WIDTH
  );
  const [variant, setVariant] = React.useState<TVariant>(
    DEFAULT_VARIANT_FILTER
  );

  const onUpdateIllustrationWidth: SliderProps["onChange"] = (_, data) =>
    setIllustrationWidth(data.value);

  const filterByVariant = (
    _: React.FormEvent<HTMLDivElement>,
    data: RadioGroupOnChangeData
  ) => {
    const newVariant = data.value;
    if (newVariant === DEFAULT_VARIANT_FILTER) {
      setVariant(DEFAULT_VARIANT_FILTER);
    } else {
      setVariant(newVariant as TVariant);
    }
  };

  const onSearchQueryChanged = (ev?: React.FormEvent<HTMLInputElement>) => {
    setSearch(ev ? ev.currentTarget.value : "");
  };

  const filteredIllustrations = React.useMemo(() => {
    const filteredBySearch = axisIllustrations.filter((illustration) => {
      return illustration.displayName
        ?.toLowerCase()
        .includes(search.toLowerCase());
    });

    if (variant === "All") {
      return filteredBySearch;
    }

    return filteredBySearch.filter((illustration) => {
      return illustration.displayName
        ?.toLowerCase()
        .includes(variant.toLowerCase());
    });
  }, [search, variant]);

  return {
    search,
    onSearchQueryChanged,
    filterByVariant,
    onUpdateIllustrationWidth,
    illustrationWidth,
    filteredIllustrations,
  };
}
