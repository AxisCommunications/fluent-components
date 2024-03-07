import { RadioGroupOnChangeData } from "@fluentui/react-components";
import React from "react";
import {
  axisIllustrations,
  DEFAULT_VARIANT_FILTER,
  TVariant,
} from "./illustration-page.types";

export function useIllustrationPage() {
  const [search, setSearch] = React.useState("");

  const [variant, setVariant] = React.useState<TVariant>(
    DEFAULT_VARIANT_FILTER
  );

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
    filteredIllustrations,
  };
}
