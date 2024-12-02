import { useCallback, useEffect, useState } from "react";

/**
 * Screen size according to the design guide:
 * - small: less than 1025px
 * - medium: 1025px - 1920px
 * - large: larger than 1920px
 */
const media = {
  small: "(max-width: 1024px)",
  medium: "(max-width: 1920px)",
  large: "",
} as const;

type MediaType = keyof typeof media;

export function useMediaQuery() {
  const [mediaType, setMediaType] = useState<MediaType>(() => {
    if (window.matchMedia(media.small).matches) return "small";
    if (window.matchMedia(media.medium).matches) return "medium";
    return "large";
  });

  const handleChange = useCallback(() => {
    if (window.matchMedia(media.small).matches) {
      setMediaType("small");
    } else if (window.matchMedia(media.medium).matches) {
      setMediaType("medium");
    } else {
      setMediaType("large");
    }
  }, []);

  useEffect(() => {
    const smallMatchQueryList = window.matchMedia(media.small);
    const mediumMatchQueryList = window.matchMedia(media.medium);

    smallMatchQueryList.addEventListener("change", handleChange);
    mediumMatchQueryList.addEventListener("change", handleChange);

    return () => {
      smallMatchQueryList.removeEventListener("change", handleChange);
      mediumMatchQueryList.removeEventListener("change", handleChange);
    };
  }, [handleChange]);

  return mediaType;
}
