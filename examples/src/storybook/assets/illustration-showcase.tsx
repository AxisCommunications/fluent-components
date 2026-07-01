import * as AxisIllustrations from "@axiscommunications/fluent-illustrations";
import type { AxisIllustrationProps } from "@axiscommunications/fluent-illustrations";
import type { FC, ReactElement } from "react";
import { AssetShowcase } from "./asset-showcase";

type Illustration = FC<AxisIllustrationProps> & { displayName: string };

const SVG_DATA_URI_PREFIX = "data:image/svg+xml;utf8,";
const PREVIEW_WIDTH = 140;

const illustrations: Illustration[] = Object.values(AxisIllustrations)
  .filter(
    (value): value is Illustration =>
      typeof value === "function" &&
      typeof (value as Partial<Illustration>).displayName === "string"
  )
  .sort((a, b) => a.displayName.localeCompare(b.displayName));

/** Illustrations render as an <img> with an inline SVG data URI. */
function extractSvg(container: HTMLElement): string | null {
  const img = container.querySelector("img");
  const src = img?.currentSrc || img?.src;
  if (!src?.startsWith(SVG_DATA_URI_PREFIX)) {
    return null;
  }
  return decodeURIComponent(src.slice(SVG_DATA_URI_PREFIX.length));
}

export function IllustrationShowcase(): ReactElement {
  return (
    <AssetShowcase
      title="Illustrations"
      description="Search the Axis illustration library and download any illustration as an SVG. Click a card to select it, then download your whole selection at once."
      searchPlaceholder="Search illustrations"
      variants={["All", "Light", "Dark"]}
      minCardWidth={180}
      extractSvg={extractSvg}
      items={illustrations.map((Illustration) => ({
        name: Illustration.displayName,
        preview: <Illustration width={PREVIEW_WIDTH} />,
      }))}
    />
  );
}
