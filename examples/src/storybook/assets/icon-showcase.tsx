import * as AxisIcons from "@axiscommunications/fluent-icons";
import type { AxisIconProps } from "@axiscommunications/fluent-icons";
import { tokens } from "@fluentui/react-components";
import type { FC, ReactElement } from "react";
import { AssetShowcase } from "./asset-showcase";

type Icon = FC<AxisIconProps> & { displayName: string };

const PREVIEW_FONT_SIZE = 32;

const icons: Icon[] = Object.values(AxisIcons)
  .filter(
    (value): value is Icon =>
      typeof value === "function" &&
      typeof (value as Partial<Icon>).displayName === "string"
  )
  .sort((a, b) => a.displayName.localeCompare(b.displayName));

/**
 * Icons render directly as an inline <svg>. Clone it, give it explicit pixel
 * dimensions from the viewBox, and serialize to a standalone SVG file.
 */
function extractSvg(container: HTMLElement): string | null {
  const svg = container.querySelector("svg");
  if (!svg) {
    return null;
  }
  const clone = svg.cloneNode(true) as SVGElement;
  const viewBox = clone.getAttribute("viewBox");
  const [, , width, height] = viewBox?.split(" ") ?? [];
  if (width && height) {
    clone.setAttribute("width", width);
    clone.setAttribute("height", height);
  }
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return new XMLSerializer().serializeToString(clone);
}

export function IconShowcase(): ReactElement {
  return (
    <AssetShowcase
      title="Icons"
      description="Search the Axis icon library and download any icon as an SVG. Click a card to select it, then download your whole selection at once."
      searchPlaceholder="Search icons"
      variants={["All", "Regular", "Filled"]}
      minCardWidth={140}
      extractSvg={extractSvg}
      items={icons.map((Icon) => ({
        name: Icon.displayName,
        preview: (
          <span
            style={{
              fontSize: PREVIEW_FONT_SIZE,
              color: tokens.colorNeutralForeground1,
              display: "inline-flex",
            }}
          >
            <Icon />
          </span>
        ),
      }))}
    />
  );
}
