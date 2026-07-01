import {
  Body1,
  Button,
  Caption1,
  Radio,
  RadioGroup,
  type RadioGroupOnChangeData,
  SearchBox,
  type SearchBoxChangeEvent,
  Subtitle1,
  Tooltip,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowDownloadRegular,
  CheckmarkCircleFilled,
} from "@fluentui/react-icons";
import React, {
  type ReactElement,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";

export type AssetItem = {
  /** Unique component/display name, also used as the download file name. */
  name: string;
  /** Preview element rendered inside the card. */
  preview: ReactNode;
};

export type AssetShowcaseProps = {
  title: string;
  description: string;
  searchPlaceholder: string;
  items: AssetItem[];
  /** Variant filter options, e.g. ["All", "Light", "Dark"]. */
  variants: string[];
  /**
   * Reads a downloadable SVG string from the rendered preview container.
   * Returns null when no SVG could be extracted.
   */
  extractSvg: (container: HTMLElement) => string | null;
  /** Minimum card width in px. Defaults to 180. */
  minCardWidth?: number;
};

function downloadSvg(name: string, svg: string): void {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${name}.svg`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    minHeight: "100vh",
    ...shorthands.gap(tokens.spacingVerticalL),
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalXXL
    ),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "640px",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
  description: {
    color: tokens.colorNeutralForeground2,
  },
  toolbar: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalL),
    ...shorthands.padding(tokens.spacingVerticalM, 0),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  search: {
    minWidth: "260px",
  },
  toolbarSpacer: {
    flexGrow: 1,
  },
  selectionInfo: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  count: {
    color: tokens.colorNeutralForeground3,
    whiteSpace: "nowrap",
  },
  grid: {
    display: "grid",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.padding(tokens.spacingVerticalM),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
    ...shorthands.transition("all", tokens.durationFaster),
    ":hover": {
      ...shorthands.borderColor(tokens.colorNeutralStroke1Hover),
      boxShadow: tokens.shadow4,
    },
    ":focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
  },
  cardSelected: {
    ...shorthands.borderColor(tokens.colorBrandStroke1),
    backgroundColor: tokens.colorBrandBackground2,
    ":hover": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  check: {
    position: "absolute",
    top: tokens.spacingVerticalS,
    left: tokens.spacingHorizontalS,
    fontSize: "20px",
    color: tokens.colorBrandForeground1,
  },
  preview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    width: "100%",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  name: {
    ...shorthands.overflow("hidden"),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  empty: {
    display: "flex",
    justifyContent: "center",
    color: tokens.colorNeutralForeground3,
    ...shorthands.padding(tokens.spacingVerticalXXXL),
  },
});

type AssetCardProps = {
  item: AssetItem;
  selected: boolean;
  onToggle: (name: string) => void;
  onDownload: (name: string) => void;
  registerRef: (name: string, element: HTMLDivElement | null) => void;
};

function AssetCard({
  item,
  selected,
  onToggle,
  onDownload,
  registerRef,
}: AssetCardProps): ReactElement {
  const styles = useStyles();

  return (
    <div
      className={mergeClasses(styles.card, selected && styles.cardSelected)}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={item.name}
      onClick={() => onToggle(item.name)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle(item.name);
        }
      }}
    >
      {selected && <CheckmarkCircleFilled className={styles.check} />}
      <div
        ref={(element) => registerRef(item.name, element)}
        className={styles.preview}
      >
        {item.preview}
      </div>
      <div className={styles.cardFooter}>
        <Caption1 className={styles.name} title={item.name}>
          {item.name}
        </Caption1>
        <Tooltip content="Download SVG" relationship="label" withArrow>
          <Button
            appearance="subtle"
            size="small"
            icon={<ArrowDownloadRegular />}
            aria-label={`Download ${item.name}`}
            onClick={(event) => {
              event.stopPropagation();
              onDownload(item.name);
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export function AssetShowcase({
  title,
  description,
  searchPlaceholder,
  items,
  variants,
  extractSvg,
  minCardWidth = 180,
}: AssetShowcaseProps): ReactElement {
  const styles = useStyles();
  const [search, setSearch] = useState("");
  const [variant, setVariant] = useState(variants[0] ?? "All");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLDivElement>>(new Map());

  const registerRef = (name: string, element: HTMLDivElement | null) => {
    if (element) {
      refs.current.set(name, element);
    } else {
      refs.current.delete(name);
    }
  };

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items.filter((item) => {
      const name = item.name.toLowerCase();
      const matchesSearch = name.includes(query);
      const matchesVariant =
        variant === variants[0] || name.endsWith(variant.toLowerCase());
      return matchesSearch && matchesVariant;
    });
  }, [items, search, variant, variants]);

  const onSearchChange = (
    _event: SearchBoxChangeEvent,
    data: { value: string }
  ) => setSearch(data.value);

  const onVariantChange = (
    _event: React.FormEvent<HTMLDivElement>,
    data: RadioGroupOnChangeData
  ) => setVariant(data.value);

  const toggleSelected = (name: string) => {
    setSelected((previous) => {
      const next = new Set(previous);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const downloadOne = (name: string) => {
    const container = refs.current.get(name);
    const svg = container ? extractSvg(container) : null;
    if (svg) {
      downloadSvg(name, svg);
    }
  };

  const downloadSelected = () => {
    for (const name of selected) {
      downloadOne(name);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Subtitle1>{title}</Subtitle1>
        <Body1 className={styles.description}>{description}</Body1>
      </div>

      <div className={styles.toolbar}>
        <SearchBox
          className={styles.search}
          placeholder={searchPlaceholder}
          value={search}
          onChange={onSearchChange}
        />
        {variants.length > 1 && (
          <RadioGroup
            layout="horizontal"
            value={variant}
            onChange={onVariantChange}
          >
            {variants.map((value) => (
              <Radio key={value} value={value} label={value} />
            ))}
          </RadioGroup>
        )}
        <div className={styles.toolbarSpacer} />
        <div className={styles.selectionInfo}>
          <Caption1 className={styles.count}>
            {selected.size > 0
              ? `${selected.size} selected`
              : `${filtered.length} items`}
          </Caption1>
          {selected.size > 0 && (
            <>
              <Button
                appearance="primary"
                icon={<ArrowDownloadRegular />}
                onClick={downloadSelected}
              >
                Download selected
              </Button>
              <Button
                appearance="subtle"
                onClick={() => setSelected(new Set())}
              >
                Clear
              </Button>
            </>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <Body1>No results match "{search}".</Body1>
        </div>
      ) : (
        <div
          className={styles.grid}
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}px, 1fr))`,
          }}
        >
          {filtered.map((item) => (
            <AssetCard
              key={item.name}
              item={item}
              selected={selected.has(item.name)}
              onToggle={toggleSelected}
              onDownload={downloadOne}
              registerRef={registerRef}
            />
          ))}
        </div>
      )}
    </div>
  );
}
