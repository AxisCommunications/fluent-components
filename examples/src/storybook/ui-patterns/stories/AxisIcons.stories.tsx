import * as AxisIcons from "@axiscommunications/fluent-icons";
import { Button, Input, Text } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";
import { useState } from "react";

const meta = {
  title: "Assets/AXIS Icons",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type AxisIconExample = {
  label: string;
  Icon: ComponentType;
  size: string;
};

const iconSizeExpression = /(\d+)Regular$/;

const iconExamples: AxisIconExample[] = Object.entries(AxisIcons)
  .filter(
    ([label, icon]) => label.endsWith("Regular") && typeof icon === "function"
  )
  .sort(([leftLabel], [rightLabel]) => leftLabel.localeCompare(rightLabel))
  .map(([label, Icon]) => ({
    label,
    Icon: Icon as ComponentType,
    size: label.match(iconSizeExpression)?.[1] ?? "Default",
  }));

const iconSizes = Array.from(
  new Set(iconExamples.map((item) => item.size))
).sort((leftSize, rightSize) => {
  if (leftSize === "Default") {
    return 1;
  }

  if (rightSize === "Default") {
    return -1;
  }

  return Number(leftSize) - Number(rightSize);
});

const defaultIconSize = iconSizes.includes("20") ? "20" : iconSizes[0];

export const Gallery: Story = {
  render: function RenderGallery() {
    const [search, setSearch] = useState("");
    const [selectedSize, setSelectedSize] = useState(defaultIconSize);
    const normalizedSearch = search.trim().toLowerCase();
    const visibleIcons = iconExamples.filter(
      (item) =>
        item.size === selectedSize &&
        item.label.toLowerCase().includes(normalizedSearch)
    );
    const totalIconsForSelectedSize = iconExamples.filter(
      (item) => item.size === selectedSize
    ).length;

    return (
      <div style={{ display: "grid", gap: "24px", padding: "24px" }}>
        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <Text as="h2" size={500} weight="semibold">
              AXIS custom icons
            </Text>
            <div style={{ marginTop: "8px" }}>
              <Text>
                Imported from <code>@axiscommunications/fluent-icons</code> and
                ready for use in Fluent buttons, headers, tables, and other
                composite components.
              </Text>
            </div>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {iconSizes.map((size) => (
                <Button
                  key={size}
                  appearance={size === selectedSize ? "primary" : "secondary"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size === "Default" ? "Default size" : `${size}px`}
                </Button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
                gridTemplateColumns: "minmax(240px, 320px) auto",
                alignItems: "end",
              }}
            >
              <Input
                type="search"
                value={search}
                onChange={(_, data) => setSearch(data.value)}
                contentBefore={<Search20Regular />}
                placeholder="Search AXIS icons"
                aria-label="Search AXIS icons"
              />
              <Text size={200}>
                Showing {visibleIcons.length} of {totalIconsForSelectedSize}{" "}
                icons for{" "}
                {selectedSize === "Default"
                  ? "default size"
                  : `${selectedSize}px`}
              </Text>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {visibleIcons.map((item) => {
            const Icon = item.Icon;

            return (
              <div
                key={item.label}
                style={{
                  display: "grid",
                  gap: "10px",
                  minHeight: "112px",
                  padding: "16px",
                  border: "1px solid #d1d1d1",
                  borderRadius: "12px",
                  background: "#fff",
                }}
              >
                <div style={{ fontSize: "20px", lineHeight: 1 }}>
                  <Icon />
                </div>
                <Text size={300} weight="medium">
                  {item.label}
                </Text>
              </div>
            );
          })}
        </div>

        {visibleIcons.length === 0 ? (
          <Text>No icons match that search.</Text>
        ) : null}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <Button
            appearance="primary"
            icon={<AxisIcons.SmartSearch20Regular />}
          >
            Smart search
          </Button>
          <Button
            appearance="secondary"
            icon={<AxisIcons.ShieldAlarm20Regular />}
          >
            Shield alarm
          </Button>
          <Button
            appearance="secondary"
            icon={<AxisIcons.NavigationExpand20Regular />}
          >
            Expand
          </Button>
        </div>
      </div>
    );
  },
};
