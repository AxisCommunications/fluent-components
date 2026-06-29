import { useMediaQuery } from "@axiscommunications/fluent-hooks";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Field,
  Input,
  Menu,
  MenuGroup,
  MenuGroupHeader,
  MenuItem,
  MenuItemCheckbox,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  createPresenceComponent,
  makeStyles,
  motionTokens,
  tokens,
} from "@fluentui/react-components";
import {
  FilterRegular,
  MoreHorizontalRegular,
  Pen20Regular,
  SearchRegular,
} from "@fluentui/react-icons";
import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FilterChip, FilterChipGroup } from "./FilterChip";

/** Identifier for a hierarchy level. Free-form so any naming scheme works. */
export type OrganisationNodeType = string;

/** Map of selected values keyed by filter group id. */
export type TagFilter = Record<string, string[]>;

export interface FilterTag {
  /** Stable value used for matching against a node tag. */
  value: string;

  /** Human-readable label shown in the filter menu and chips. */
  label: string;
}

export interface FilterGroup {
  /** Stable group identifier. Matches the key used in a node's `tags`. */
  id: string;

  /** Human-readable group label. */
  label: string;

  /** Selectable options for this group. */
  options: FilterTag[];
}

export interface OrganisationNode {
  /** Stable node identifier. */
  id: string;

  /** Human-readable node label. */
  label: string;

  /** Node type / hierarchy level key. */
  type: OrganisationNodeType;

  /** Child nodes for nested navigation. */
  children?: OrganisationNode[];

  /** Optional icon rendered before the node label at any hierarchy level. */
  icon?: ReactNode;

  /**
   * Optional tag values used for tag-based filtering, keyed by filter group id.
   * A node passes a group's filter when it has no value for that group or its
   * value is among the selected values.
   */
  tags?: Record<string, string>;
}

export interface InlineFilterDrawerProps {
  /** Root navigation nodes to render. */
  nodes?: OrganisationNode[];

  /** Drawer title text. */
  title?: string;

  /** Search input placeholder text. */
  searchPlaceholder?: string;

  /** Filter groups used to build the tag filter menu and chips. */
  filterGroups?: FilterGroup[];

  /** Toggle visibility of the tag filter controls. */
  showTagFilter?: boolean;

  /** Controlled selected tag values keyed by filter group id. */
  tagFilter?: TagFilter;

  /** Uncontrolled default selected tag values keyed by filter group id. */
  defaultTagFilter?: TagFilter;

  /** Fired when selected tag values change. */
  onTagFilterChange?: (nextTagFilter: TagFilter) => void;

  /**
   * Controls which hierarchy levels are selectable for cross-filtering.
   * Checkboxes are hidden unless a level is explicitly set to true.
   */
  selectionByLevel?: Partial<Record<OrganisationNodeType, boolean>>;

  /** Controlled selected hierarchy node IDs used for cross-filtering. */
  selectedNodeIds?: string[];

  /** Uncontrolled default selected hierarchy node IDs used for cross-filtering. */
  defaultSelectedNodeIds?: string[];

  /** Callback fired when selected hierarchy node IDs change. */
  onSelectedNodeIdsChange?: (nextSelectedNodeIds: string[]) => void;

  /** Allows selecting multiple hierarchy nodes at once. */
  allowMultiNodeSelection?: boolean;

  /** Enables inline creation, renaming and removal of child folders per node. */
  enableSubfolderCreation?: boolean;

  /** Fired when nodes are updated by inline add/rename/remove actions. */
  onNodesChange?: (nextNodes: OrganisationNode[]) => void;

  /** Optional className hook. */
  className?: string;

  /** Renders the drawer as a full-height panel surface instead of a card. */
  fullHeight?: boolean;

  /** Enables user-driven width resizing with a drag handle on the right edge. */
  resizable?: boolean;

  /** Initial drawer width in pixels before user interaction. */
  defaultWidth?: number;

  /** Lower bound for drawer width in pixels. */
  minWidth?: number;

  /** Upper bound for drawer width in pixels. */
  maxWidth?: number;

  /** Fired when the drawer width changes due to user resize or clamping. */
  onWidthChange?: (nextWidth: number) => void;

  /** Enables compact width behavior on small viewports. */
  responsiveWidth?: boolean;

  /** Drawer width used on small viewports when responsiveWidth is enabled. */
  smallViewportWidth?: number;

  /** Minimum drawer width used on small viewports when responsiveWidth is enabled. */
  smallViewportMinWidth?: number;

  /** Maximum drawer width used on small viewports when responsiveWidth is enabled. */
  smallViewportMaxWidth?: number;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground3,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingHorizontalM,
  },

  rootFullHeight: {
    height: "100%",
    borderRadius: 0,
    borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground3,
  },

  resizeHandle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: tokens.spacingHorizontalM,
    cursor: "col-resize",
    touchAction: "none",
    userSelect: "none",
    borderRadius: `0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0`,
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: tokens.spacingHorizontalXXS,
      transform: "translateY(-50%)",
      width: tokens.strokeWidthThick,
      height: "40px",
      borderRadius: tokens.borderRadiusCircular,
      backgroundColor: tokens.colorNeutralStroke2,
      opacity: 0.7,
    },
    "&:hover::after": {
      backgroundColor: tokens.colorNeutralStroke1,
      opacity: 1,
    },
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },

  title: {
    flex: 1,
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },

  search: {
    flex: 1,
    minWidth: 0,
  },

  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    minWidth: 0,
  },

  selectedFiltersSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
  },

  headerLabel: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },

  checkboxWrap: {
    display: "inline-flex",
  },

  accordion: {
    minWidth: 0,
  },

  panel: {
    display: "grid",
    rowGap: tokens.spacingVerticalXXS,
    paddingTop: tokens.spacingVerticalXXS,
  },

  nestedPanel: {
    marginTop: tokens.spacingVerticalXXS,
    paddingLeft: tokens.spacingHorizontalM,
    borderLeft: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
  },

  emptyState: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    padding: `${tokens.spacingVerticalS} 0`,
  },

  leaf: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
    borderRadius: tokens.borderRadiusSmall,
  },

  leafLabel: {
    flex: 1,
    minWidth: 0,
  },

  nodeIcon: {
    display: "inline-flex",
    color: tokens.colorNeutralForeground2,
  },

  nodeMenuButton: {
    minWidth: "auto",
    paddingLeft: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalXXS,
  },

  editorDialogSurface: {
    width: "min(400px, 92vw)",
    maxWidth: "min(400px, 92vw)",
  },
});

const SearchBarCollapse = createPresenceComponent({
  enter: {
    keyframes: [
      { opacity: 0, maxHeight: "0px", overflow: "hidden" },
      { opacity: 1, maxHeight: "40px", overflow: "hidden" },
    ],
    duration: motionTokens.durationNormal,
    easing: motionTokens.curveDecelerateMid,
  },
  exit: {
    keyframes: [
      { opacity: 1, maxHeight: "40px", overflow: "hidden" },
      { opacity: 0, maxHeight: "0px", overflow: "hidden" },
    ],
    duration: motionTokens.durationFast,
    easing: motionTokens.curveAccelerateMid,
  },
});

type AddNodeMode = "generic" | "edit";

interface AddNodeDraft {
  isOpen: boolean;
  mode: AddNodeMode;
  value: string;
}

interface ActiveEditorContext {
  node: OrganisationNode;
  levelKey: string;
  path: OrganisationNode[];
}

const DEFAULT_ADD_NODE_DRAFT: AddNodeDraft = {
  isOpen: false,
  mode: "generic",
  value: "",
};

const CHIP_VALUE_SEPARATOR = "::";

/** Sample filter groups used by the example stories. */
export const ORGANISATION_FILTER_GROUPS: FilterGroup[] = [
  {
    id: "status",
    label: "Status",
    options: [
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused" },
      { value: "archived", label: "Archived" },
    ],
  },
  {
    id: "priority",
    label: "Priority",
    options: [
      { value: "high", label: "High" },
      { value: "medium", label: "Medium" },
      { value: "low", label: "Low" },
    ],
  },
];

/** Sample navigation tree used by the example stories. */
export const ORGANISATION_NAVIGATION_TREE: OrganisationNode[] = [
  {
    id: "region-emea",
    label: "EMEA",
    type: "region",
    children: [
      {
        id: "site-lund",
        label: "Lund HQ",
        type: "site",
        children: [
          {
            id: "folder-lund-ops",
            label: "Operations",
            type: "folder",
            children: [
              {
                id: "item-lund-ops-1",
                label: "Onboarding checklist",
                type: "item",
                tags: { status: "active", priority: "high" },
              },
              {
                id: "item-lund-ops-2",
                label: "Quarterly review",
                type: "item",
                tags: { status: "paused", priority: "medium" },
              },
            ],
          },
          {
            id: "folder-lund-rnd",
            label: "R&D",
            type: "folder",
            children: [
              {
                id: "item-lund-rnd-1",
                label: "Prototype A",
                type: "item",
                tags: { status: "active", priority: "medium" },
              },
              {
                id: "item-lund-rnd-2",
                label: "Legacy migration",
                type: "item",
                tags: { status: "archived", priority: "low" },
              },
            ],
          },
        ],
      },
      {
        id: "site-munich",
        label: "Munich",
        type: "site",
        children: [
          {
            id: "folder-munich-sales",
            label: "Sales",
            type: "folder",
            children: [
              {
                id: "item-munich-sales-1",
                label: "Showroom rollout",
                type: "item",
                tags: { status: "active", priority: "high" },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "region-americas",
    label: "Americas",
    type: "region",
    children: [
      {
        id: "site-atlanta",
        label: "Atlanta",
        type: "site",
        children: [
          {
            id: "folder-atlanta-ops",
            label: "Operations",
            type: "folder",
            children: [
              {
                id: "item-atlanta-ops-1",
                label: "Reception desk",
                type: "item",
                tags: { status: "paused", priority: "low" },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "region-apac",
    label: "APAC",
    type: "region",
    children: [
      {
        id: "site-singapore",
        label: "Singapore",
        type: "site",
        children: [
          {
            id: "folder-singapore-ops",
            label: "Operations",
            type: "folder",
            children: [
              {
                id: "item-singapore-ops-1",
                label: "Lobby refresh",
                type: "item",
                tags: { status: "archived", priority: "medium" },
              },
            ],
          },
        ],
      },
    ],
  },
];

const hasActiveTagFilter = (tagFilter: TagFilter): boolean =>
  Object.values(tagFilter).some((values) => values.length > 0);

const nodeMatchesTagFilter = (
  node: OrganisationNode,
  tagFilter: TagFilter
): boolean =>
  Object.entries(tagFilter).every(([groupId, values]) => {
    if (values.length === 0) {
      return true;
    }
    const nodeValue = node.tags?.[groupId];
    if (nodeValue === undefined) {
      return true;
    }
    return values.includes(nodeValue);
  });

const filterTree = (
  nodes: OrganisationNode[],
  query: string,
  tagFilter: TagFilter
): OrganisationNode[] => {
  const normalizedSearch = query.trim().toLowerCase();
  if (!normalizedSearch && !hasActiveTagFilter(tagFilter)) {
    return nodes;
  }

  const walk = (node: OrganisationNode): OrganisationNode | null => {
    const filteredChildren = (node.children ?? [])
      .map((child) => walk(child))
      .filter((child): child is OrganisationNode => child !== null);

    const matchesSearch =
      normalizedSearch.length === 0 ||
      node.label.toLowerCase().includes(normalizedSearch);
    const matchesTags = nodeMatchesTagFilter(node, tagFilter);

    if (filteredChildren.length > 0) {
      return { ...node, children: filteredChildren };
    }

    if (matchesSearch && matchesTags) {
      return { ...node, children: [] };
    }

    return null;
  };

  return nodes
    .map((node) => walk(node))
    .filter((node): node is OrganisationNode => node !== null);
};

export const InlineFilterDrawer = forwardRef<
  HTMLDivElement,
  InlineFilterDrawerProps
>(
  (
    {
      nodes = ORGANISATION_NAVIGATION_TREE,
      title = "Organisation Filters",
      searchPlaceholder = "Search filters",
      filterGroups = [],
      showTagFilter = true,
      tagFilter,
      defaultTagFilter = {},
      onTagFilterChange,
      selectionByLevel,
      selectedNodeIds,
      defaultSelectedNodeIds = [],
      onSelectedNodeIdsChange,
      allowMultiNodeSelection = true,
      enableSubfolderCreation = false,
      onNodesChange,
      className,
      fullHeight = false,
      resizable = true,
      defaultWidth = 360,
      minWidth = 280,
      maxWidth = 640,
      onWidthChange,
      responsiveWidth = true,
      smallViewportWidth = 280,
      smallViewportMinWidth = 240,
      smallViewportMaxWidth = 420,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const mediaType = useMediaQuery();
    const isSmallViewport = responsiveWidth && mediaType === "small";
    const resolvedDefaultWidth = isSmallViewport
      ? smallViewportWidth
      : defaultWidth;
    const resolvedMinWidth = isSmallViewport ? smallViewportMinWidth : minWidth;
    const resolvedMaxWidth = isSmallViewport ? smallViewportMaxWidth : maxWidth;
    const canResize = resizable && !isSmallViewport;
    const [searchValue, setSearchValue] = useState("");
    const [searchOpen, setSearchOpen] = useState(!title);
    const [internalTagFilter, setInternalTagFilter] =
      useState<TagFilter>(defaultTagFilter);
    const [disabledTags, setDisabledTags] = useState<TagFilter>({});
    const [internalSelectedNodeIds, setInternalSelectedNodeIds] = useState<
      string[]
    >(defaultSelectedNodeIds);
    const [editableNodes, setEditableNodes] =
      useState<OrganisationNode[]>(nodes);
    const [activeEditorContext, setActiveEditorContext] =
      useState<ActiveEditorContext | null>(null);
    const [activeEditorDraft, setActiveEditorDraft] = useState<AddNodeDraft>(
      DEFAULT_ADD_NODE_DRAFT
    );
    const [openItemsByLevel, setOpenItemsByLevel] = useState<
      Record<string, string[]>
    >({});
    const rootRef = useRef<HTMLDivElement>(null);
    const dragStateRef = useRef<{ startX: number; startWidth: number } | null>(
      null
    );
    const [availableWidth, setAvailableWidth] = useState<number | null>(null);
    const [drawerWidth, setDrawerWidth] = useState(resolvedDefaultWidth);

    const clampDrawerWidth = useCallback(
      (candidate: number) => {
        const resolvedMax =
          availableWidth !== null
            ? Math.max(0, Math.min(resolvedMaxWidth, availableWidth))
            : resolvedMaxWidth;
        const resolvedMin = Math.min(resolvedMinWidth, resolvedMax);
        return Math.min(Math.max(candidate, resolvedMin), resolvedMax);
      },
      [availableWidth, resolvedMaxWidth, resolvedMinWidth]
    );

    const setClampedDrawerWidth = useCallback(
      (candidate: number) => {
        const next = clampDrawerWidth(candidate);
        setDrawerWidth((previous) => {
          if (previous === next) {
            return previous;
          }
          onWidthChange?.(next);
          return next;
        });
      },
      [clampDrawerWidth, onWidthChange]
    );

    useEffect(() => {
      setEditableNodes(nodes);
      setActiveEditorContext(null);
      setActiveEditorDraft(DEFAULT_ADD_NODE_DRAFT);
    }, [nodes]);

    useEffect(() => {
      setClampedDrawerWidth(resolvedDefaultWidth);
    }, [resolvedDefaultWidth, setClampedDrawerWidth]);

    useEffect(() => {
      const rootElement = rootRef.current;
      const parentElement = rootElement?.parentElement;

      if (!parentElement) {
        return;
      }

      const updateAvailableWidth = () => {
        const nextAvailableWidth = parentElement.getBoundingClientRect().width;
        setAvailableWidth(nextAvailableWidth);
      };

      updateAvailableWidth();

      const observer = new ResizeObserver(() => {
        updateAvailableWidth();
      });

      observer.observe(parentElement);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      setClampedDrawerWidth(drawerWidth);
    }, [drawerWidth, setClampedDrawerWidth]);

    useEffect(() => {
      const handlePointerMove = (event: globalThis.PointerEvent) => {
        const activeDragState = dragStateRef.current;
        if (!activeDragState) {
          return;
        }
        setClampedDrawerWidth(
          activeDragState.startWidth + (event.clientX - activeDragState.startX)
        );
      };

      const handlePointerUp = () => {
        dragStateRef.current = null;
      };

      globalThis.window.addEventListener("pointermove", handlePointerMove);
      globalThis.window.addEventListener("pointerup", handlePointerUp);

      return () => {
        globalThis.window.removeEventListener("pointermove", handlePointerMove);
        globalThis.window.removeEventListener("pointerup", handlePointerUp);
      };
    }, [setClampedDrawerWidth]);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        rootRef.current = node;

        if (typeof ref === "function") {
          ref(node);
          return;
        }

        if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const handleResizePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      if (!canResize) {
        return;
      }

      event.preventDefault();
      dragStateRef.current = {
        startX: event.clientX,
        startWidth: drawerWidth,
      };
    };

    const isTagFilterControlled = tagFilter !== undefined;
    const isNodeSelectionControlled = selectedNodeIds !== undefined;

    const activeTagFilter = isTagFilterControlled
      ? tagFilter
      : internalTagFilter;
    const activeSelectedNodeIds = isNodeSelectionControlled
      ? selectedNodeIds
      : internalSelectedNodeIds;
    const selectedNodeIdSet = useMemo(
      () => new Set(activeSelectedNodeIds),
      [activeSelectedNodeIds]
    );
    const effectiveSelectionByLevel = useMemo(
      () => selectionByLevel ?? {},
      [selectionByLevel]
    );

    const filteredNodes = useMemo(
      () => filterTree(editableNodes, searchValue, activeTagFilter),
      [editableNodes, searchValue, activeTagFilter]
    );

    const menuCheckedValues = useMemo(
      () =>
        Object.fromEntries(
          filterGroups.map((group) => [
            group.id,
            activeTagFilter[group.id] ?? [],
          ])
        ),
      [filterGroups, activeTagFilter]
    );

    const activeTagChips = useMemo(
      () =>
        filterGroups.flatMap((group) => {
          const activeValues = activeTagFilter[group.id] ?? [];
          const disabledValues = (disabledTags[group.id] ?? []).filter(
            (value) => !activeValues.includes(value)
          );
          return [
            ...activeValues.map((value) => ({ value, selected: true })),
            ...disabledValues.map((value) => ({ value, selected: false })),
          ].map(({ value, selected }) => {
            const option = group.options.find(
              (candidate) => candidate.value === value
            );
            return {
              groupId: group.id,
              value,
              selected,
              label: option
                ? `${group.label}: ${option.label}`
                : `${group.label}: ${value}`,
            };
          });
        }),
      [filterGroups, activeTagFilter, disabledTags]
    );

    const updateTagFilter = (nextTagFilter: TagFilter) => {
      if (!isTagFilterControlled) {
        setInternalTagFilter(nextTagFilter);
      }
      onTagFilterChange?.(nextTagFilter);
    };

    const setGroupValues = (groupId: string, values: string[]) => {
      const nextTagFilter: TagFilter = { ...activeTagFilter };
      if (values.length === 0) {
        delete nextTagFilter[groupId];
      } else {
        nextTagFilter[groupId] = values;
      }
      updateTagFilter(nextTagFilter);
    };

    const setDisabledGroupValues = (groupId: string, values: string[]) => {
      setDisabledTags((previous) => {
        const next = { ...previous };
        if (values.length === 0) {
          delete next[groupId];
        } else {
          next[groupId] = values;
        }
        return next;
      });
    };

    // Primary chip action: toggle whether the filter is applied without
    // removing the chip from the list.
    const toggleChipActive = (groupId: string, value: string) => {
      const activeValues = activeTagFilter[groupId] ?? [];
      const disabledValues = disabledTags[groupId] ?? [];
      if (activeValues.includes(value)) {
        setGroupValues(
          groupId,
          activeValues.filter((item) => item !== value)
        );
        if (!disabledValues.includes(value)) {
          setDisabledGroupValues(groupId, [...disabledValues, value]);
        }
      } else {
        setGroupValues(groupId, [...activeValues, value]);
        setDisabledGroupValues(
          groupId,
          disabledValues.filter((item) => item !== value)
        );
      }
    };

    // Secondary chip action: remove the chip entirely.
    const removeChip = (groupId: string, value: string) => {
      const activeValues = activeTagFilter[groupId] ?? [];
      if (activeValues.includes(value)) {
        setGroupValues(
          groupId,
          activeValues.filter((item) => item !== value)
        );
      }
      const disabledValues = disabledTags[groupId] ?? [];
      if (disabledValues.includes(value)) {
        setDisabledGroupValues(
          groupId,
          disabledValues.filter((item) => item !== value)
        );
      }
    };

    const updateSelectedNodeIds = (nextSelectedNodeIds: string[]) => {
      if (!isNodeSelectionControlled) {
        setInternalSelectedNodeIds(nextSelectedNodeIds);
      }
      onSelectedNodeIdsChange?.(nextSelectedNodeIds);
    };

    const isNodeSelectable = (node: OrganisationNode): boolean => {
      return Boolean(effectiveSelectionByLevel[node.type]);
    };

    const collectSelectableSubtreeIds = (node: OrganisationNode): string[] => {
      const collectedIds: string[] = [];

      const walk = (currentNode: OrganisationNode) => {
        if (isNodeSelectable(currentNode)) {
          collectedIds.push(currentNode.id);
        }

        for (const child of currentNode.children ?? []) {
          walk(child);
        }
      };

      walk(node);
      return collectedIds;
    };

    const toggleNodeSelection = (node: OrganisationNode) => {
      const affectedIds = collectSelectableSubtreeIds(node);
      const isSelected = affectedIds.every((id) => selectedNodeIdSet.has(id));

      if (allowMultiNodeSelection) {
        if (isSelected) {
          updateSelectedNodeIds(
            activeSelectedNodeIds.filter(
              (currentId) => !affectedIds.includes(currentId)
            )
          );
          return;
        }

        updateSelectedNodeIds(
          Array.from(new Set([...activeSelectedNodeIds, ...affectedIds]))
        );
        return;
      }

      updateSelectedNodeIds(isSelected ? [] : affectedIds);
    };

    const updateNodeLabelById = (
      branch: OrganisationNode[],
      targetId: string,
      newLabel: string
    ): OrganisationNode[] =>
      branch.map((node) => {
        if (node.id === targetId) return { ...node, label: newLabel };
        if (!node.children?.length) return node;
        return {
          ...node,
          children: updateNodeLabelById(node.children, targetId, newLabel),
        };
      });

    const appendChildById = (
      branch: OrganisationNode[],
      parentId: string,
      childNode: OrganisationNode
    ): OrganisationNode[] => {
      return branch.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [...(node.children ?? []), childNode],
          };
        }

        if (!node.children || node.children.length === 0) {
          return node;
        }

        return {
          ...node,
          children: appendChildById(node.children, parentId, childNode),
        };
      });
    };

    const removeNodeAndPromoteChildren = (
      branch: OrganisationNode[],
      targetId: string
    ): OrganisationNode[] => {
      const next: OrganisationNode[] = [];

      for (const node of branch) {
        if (node.id === targetId) {
          next.push(...(node.children ?? []));
          continue;
        }

        if (!node.children || node.children.length === 0) {
          next.push(node);
          continue;
        }

        next.push({
          ...node,
          children: removeNodeAndPromoteChildren(node.children, targetId),
        });
      }

      return next;
    };

    const closeEditor = () => {
      setActiveEditorContext(null);
      setActiveEditorDraft(DEFAULT_ADD_NODE_DRAFT);
    };

    const openAddFolderEditor = (
      node: OrganisationNode,
      levelKey: string,
      path: OrganisationNode[]
    ) => {
      setActiveEditorContext({ node, levelKey, path });
      setActiveEditorDraft({ isOpen: true, mode: "generic", value: "" });
    };

    const handleEditNode = (
      node: OrganisationNode,
      levelKey: string,
      path: OrganisationNode[]
    ) => {
      setActiveEditorContext({ node, levelKey, path });
      setActiveEditorDraft({ isOpen: true, mode: "edit", value: node.label });
    };

    const commitEditingNode = (nodeId: string, value: string) => {
      const trimmed = value.trim();
      if (trimmed) {
        setEditableNodes((previous) => {
          const next = updateNodeLabelById(previous, nodeId, trimmed);
          onNodesChange?.(next);
          return next;
        });
      }
    };

    const handleAddSubfolder = (node: OrganisationNode, levelKey: string) => {
      const trimmedName = activeEditorDraft.value.trim();
      if (!trimmedName) {
        return;
      }

      const newChild: OrganisationNode = {
        id: `node-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        label: trimmedName,
        type: "folder",
        children: [],
      };

      setEditableNodes((previous) => {
        const next = appendChildById(previous, node.id, newChild);
        onNodesChange?.(next);
        return next;
      });

      setOpenItemsByLevel((previous) => ({
        ...previous,
        [levelKey]: Array.from(
          new Set([...(previous[levelKey] ?? []), node.id])
        ),
      }));

      closeEditor();
    };

    const handleRemoveNode = (nodeId: string) => {
      setEditableNodes((previous) => {
        const next = removeNodeAndPromoteChildren(previous, nodeId);
        onNodesChange?.(next);
        return next;
      });

      updateSelectedNodeIds(
        activeSelectedNodeIds.filter((id) => id !== nodeId)
      );
      closeEditor();
    };

    const renderNodeMenu = (
      node: OrganisationNode,
      levelKey: string,
      currentPath: OrganisationNode[]
    ) => (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button
            size="small"
            appearance="subtle"
            className={styles.nodeMenuButton}
            icon={<MoreHorizontalRegular />}
            aria-label={`More actions for ${node.label}`}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem
              onClick={() => handleEditNode(node, levelKey, currentPath)}
              icon={<Pen20Regular />}
            >
              Rename
            </MenuItem>
            <MenuItem
              onClick={() => openAddFolderEditor(node, levelKey, currentPath)}
            >
              Add folder
            </MenuItem>
            <MenuItem onClick={() => handleRemoveNode(node.id)}>
              Remove
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    );

    const renderNodes = (
      branch: OrganisationNode[],
      levelKey = "root",
      ancestors: OrganisationNode[] = []
    ): ReactNode => {
      if (branch.length === 0) {
        return null;
      }

      const shouldAutoExpand = searchValue.trim().length > 0;
      const autoExpandedItems = branch
        .filter((node) => (node.children ?? []).length > 0)
        .map((node) => node.id);
      const manualOpenItems = openItemsByLevel[levelKey] ?? [];
      const openItems = shouldAutoExpand
        ? Array.from(new Set([...manualOpenItems, ...autoExpandedItems]))
        : manualOpenItems;

      return (
        <Accordion
          className={styles.accordion}
          collapsible
          multiple
          openItems={openItems}
          onToggle={(_event, data) => {
            setOpenItemsByLevel((previous) => ({
              ...previous,
              [levelKey]: (data.openItems as string[]) ?? [],
            }));
          }}
        >
          {branch.map((node) => {
            const children = node.children ?? [];
            const hasChildren = children.length > 0;
            const canEditNode = enableSubfolderCreation;
            const currentPath = [...ancestors, node];

            if (!hasChildren) {
              return (
                <div key={node.id}>
                  <div className={styles.leaf}>
                    {node.icon && (
                      <span className={styles.nodeIcon}>{node.icon}</span>
                    )}
                    {isNodeSelectable(node) && (
                      <Checkbox
                        aria-label={`Select ${node.label}`}
                        checked={selectedNodeIdSet.has(node.id)}
                        onChange={() => toggleNodeSelection(node)}
                      />
                    )}
                    <Text className={styles.leafLabel}>{node.label}</Text>
                    {canEditNode && renderNodeMenu(node, levelKey, currentPath)}
                  </div>
                </div>
              );
            }

            return (
              <AccordionItem key={node.id} value={node.id}>
                <AccordionHeader expandIconPosition="start">
                  <div className={styles.headerLabel}>
                    {isNodeSelectable(node) && (
                      <span
                        className={styles.checkboxWrap}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Checkbox
                          aria-label={`Select ${node.label}`}
                          checked={selectedNodeIdSet.has(node.id)}
                          onChange={() => toggleNodeSelection(node)}
                        />
                      </span>
                    )}
                    {node.icon && (
                      <span className={styles.nodeIcon}>{node.icon}</span>
                    )}
                    <Text>{node.label}</Text>
                    {canEditNode && (
                      <span
                        className={styles.checkboxWrap}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {renderNodeMenu(node, levelKey, currentPath)}
                      </span>
                    )}
                  </div>
                </AccordionHeader>
                <AccordionPanel className={styles.panel}>
                  <div className={styles.nestedPanel}>
                    {renderNodes(
                      children,
                      `${levelKey}/${node.id}`,
                      currentPath
                    )}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      );
    };

    const renderFilterMenu = () => {
      if (!showTagFilter || filterGroups.length === 0) {
        return null;
      }

      return (
        <Menu
          checkedValues={menuCheckedValues}
          onCheckedValueChange={(_event, data) => {
            const checkedItems = data.checkedItems as string[];
            setGroupValues(data.name, checkedItems);
            setDisabledGroupValues(
              data.name,
              (disabledTags[data.name] ?? []).filter(
                (value) => !checkedItems.includes(value)
              )
            );
          }}
        >
          <MenuTrigger disableButtonEnhancement>
            <Button
              icon={<FilterRegular />}
              appearance="secondary"
              aria-label="Open filters"
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {filterGroups.map((group) => (
                <MenuGroup key={group.id}>
                  <MenuGroupHeader>{group.label}</MenuGroupHeader>
                  {group.options.map((option) => (
                    <MenuItemCheckbox
                      key={option.value}
                      name={group.id}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItemCheckbox>
                  ))}
                </MenuGroup>
              ))}
            </MenuList>
          </MenuPopover>
        </Menu>
      );
    };

    const drawerStyle: CSSProperties = fullHeight
      ? {
          width: "100%",
          maxWidth: "100%",
          height: "100%",
        }
      : {
          width: `${drawerWidth}px`,
          maxWidth: "100%",
        };

    return (
      <aside
        ref={setRefs}
        className={[
          styles.root,
          fullHeight ? styles.rootFullHeight : undefined,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={drawerStyle}
        {...rest}
      >
        {title && (
          <div className={styles.titleRow}>
            <Text as="h2" className={styles.title}>
              {title}
            </Text>
            <Button
              icon={<SearchRegular />}
              appearance={searchOpen ? "subtle" : "secondary"}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-pressed={searchOpen}
              onClick={() => {
                setSearchOpen((prev) => {
                  if (prev) {
                    setSearchValue("");
                  }
                  return !prev;
                });
              }}
            />
            {renderFilterMenu()}
          </div>
        )}

        <SearchBarCollapse visible={searchOpen}>
          <div className={styles.searchRow}>
            <Input
              className={styles.search}
              type="search"
              contentBefore={<SearchRegular />}
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(_event, data) => setSearchValue(data.value)}
              input={{
                ref: (el: HTMLInputElement | null) => {
                  if (el && !el.dataset.focused) {
                    el.dataset.focused = "true";
                    el.focus();
                    el.select();
                  }
                },
              }}
            />
            {!title && renderFilterMenu()}
          </div>
        </SearchBarCollapse>

        {showTagFilter && activeTagChips.length > 0 && (
          <FilterChipGroup
            className={styles.selectedFiltersSection}
            size="small"
            onDismiss={(value) => {
              const [groupId, tagValue] = value.split(CHIP_VALUE_SEPARATOR);
              if (groupId && tagValue !== undefined) {
                removeChip(groupId, tagValue);
              }
            }}
          >
            {activeTagChips.map((chip) => (
              <FilterChip
                key={`${chip.groupId}${CHIP_VALUE_SEPARATOR}${chip.value}`}
                value={`${chip.groupId}${CHIP_VALUE_SEPARATOR}${chip.value}`}
                selected={chip.selected}
                onToggle={() => toggleChipActive(chip.groupId, chip.value)}
                dismissLabel={`Remove ${chip.label}`}
              >
                {chip.label}
              </FilterChip>
            ))}
          </FilterChipGroup>
        )}

        {renderNodes(filteredNodes)}

        {filteredNodes.length === 0 && (
          <Text className={styles.emptyState}>No results found.</Text>
        )}

        <Dialog
          open={Boolean(activeEditorContext && activeEditorDraft.isOpen)}
          onOpenChange={(_event, data) => {
            if (!data.open) {
              closeEditor();
            }
          }}
        >
          <DialogSurface className={styles.editorDialogSurface}>
            <DialogBody>
              <DialogTitle>
                {activeEditorDraft.mode === "edit" ? "Rename" : "Add Folder"}
              </DialogTitle>
              <DialogContent>
                {activeEditorContext && (
                  <Field
                    label={
                      activeEditorDraft.mode === "edit" ? "Name" : "Folder name"
                    }
                  >
                    <Input
                      value={activeEditorDraft.value}
                      placeholder={
                        activeEditorDraft.mode === "edit"
                          ? "Type a name"
                          : "Type folder name"
                      }
                      onChange={(_event, data) => {
                        setActiveEditorDraft((previous) => ({
                          ...previous,
                          value: data.value,
                        }));
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          if (activeEditorDraft.mode === "edit") {
                            commitEditingNode(
                              activeEditorContext.node.id,
                              activeEditorDraft.value
                            );
                            closeEditor();
                          } else {
                            handleAddSubfolder(
                              activeEditorContext.node,
                              activeEditorContext.levelKey
                            );
                          }
                        }
                      }}
                    />
                  </Field>
                )}
              </DialogContent>
              <DialogActions>
                <Button appearance="secondary" onClick={closeEditor}>
                  Cancel
                </Button>
                <Button
                  appearance="primary"
                  disabled={
                    activeEditorDraft.value.trim().length === 0 ||
                    !activeEditorContext
                  }
                  onClick={() => {
                    if (!activeEditorContext) return;
                    if (activeEditorDraft.mode === "edit") {
                      commitEditingNode(
                        activeEditorContext.node.id,
                        activeEditorDraft.value
                      );
                      closeEditor();
                    } else {
                      handleAddSubfolder(
                        activeEditorContext.node,
                        activeEditorContext.levelKey
                      );
                    }
                  }}
                >
                  {activeEditorDraft.mode === "edit" ? "Save" : "Add"}
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>

        {canResize && (
          <div
            role="separator"
            aria-label="Resize filter drawer"
            aria-orientation="vertical"
            className={styles.resizeHandle}
            onPointerDown={handleResizePointerDown}
          />
        )}
      </aside>
    );
  }
);

InlineFilterDrawer.displayName = "InlineFilterDrawer";
