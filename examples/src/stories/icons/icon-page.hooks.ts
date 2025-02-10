import { RadioGroupOnChangeData } from "@fluentui/react-components";
import React from "react";
import { DEFAULT_VARIANT_FILTER, TVariant, axisIcons } from "./icon-page.types";

export function useIconPage() {
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

  const filterIcons = React.useMemo(() => {
    const filteredBySearch = axisIcons.filter((icon) => {
      return icon.displayName?.toLowerCase().includes(search.toLowerCase());
    });

    if (variant === "All") {
      return filteredBySearch;
    }

    if (variant === "Unsized") {
      return filteredBySearch.filter((icon) => {
        return icon.displayName! && !/\d/.test(icon.displayName.toLowerCase());
      });
    }

    return filteredBySearch.filter((icon) => {
      return icon.displayName
        ?.toLowerCase()
        .includes((variant as unknown as string).toLowerCase());
    });
  }, [search, variant]);

  return {
    search,
    onSearchQueryChanged,
    filterByVariant,
    filterIcons,
  };
}
