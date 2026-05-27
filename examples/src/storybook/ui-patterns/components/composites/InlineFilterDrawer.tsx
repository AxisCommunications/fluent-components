import {
  CameraDome20Regular,
  Devices20Regular,
  DoorStation20Regular,
  Speak20Regular,
} from "@axiscommunications/fluent-icons";
import { useMediaQuery } from "@axiscommunications/fluent-hooks";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Checkbox,
  Combobox,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Dropdown,
  Field,
  Input,
  Menu,
  MenuItem,
  MenuItemCheckbox,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Option,
  SpinButton,
  Switch,
  Text,
  makeStyles,
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
import MapLibreMap, {
  Marker,
  NavigationControl,
  type MapLayerMouseEvent,
  type MapRef,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { StyleSpecification } from "maplibre-gl";

export type DeviceCategory = "camera" | "audio" | "accessControl";
export type DeviceTypeFilter = DeviceCategory[];
export type DeviceHealth = "online" | "warning" | "offline";
export type DeviceHealthFilter = DeviceHealth[];
export type DeviceDeployment = "production" | "staging";
export type DeviceDeploymentFilter = DeviceDeployment[];

export type AreaType = "campus" | "district" | "corridor" | "custom";
export type SiteType = "outdoor" | "indoor" | "mixed";
export type PowerGridFrequency = "50Hz" | "60Hz";
export type BuildingType =
  | "office"
  | "warehouse"
  | "datacenter"
  | "residential"
  | "retail"
  | "factory"
  | "custom";
export type FloorType = "standard" | "basement" | "mezzanine" | "rooftop";
export type RoomType =
  | "office"
  | "meeting_room"
  | "storage"
  | "server_room"
  | "restroom"
  | "lobby"
  | "custom";
export type AreaOfInterestType =
  | "zone"
  | "corridor"
  | "parking"
  | "entrance"
  | "custom";

export type TopologyNodeMeta =
  | { nodeType: "geographicalArea"; areaType?: AreaType }
  | {
      nodeType: "site";
      siteType?: SiteType;
      powerGridFrequency?: PowerGridFrequency;
      timeZone?: string;
      isIndoorSetting?: boolean;
    }
  | { nodeType: "building"; buildingType?: BuildingType }
  | { nodeType: "floor"; floorType?: FloorType; floorLevel?: number }
  | { nodeType: "room"; roomType?: RoomType }
  | { nodeType: "areaOfInterest"; areaOfInterestType?: AreaOfInterestType };

export type OrganisationNodeType =
  | "global"
  | "region"
  | "country"
  | "city"
  | "geographicalArea"
  | "site"
  | "building"
  | "floor"
  | "room"
  | "areaOfInterest"
  | "zoneOrArea"
  | "device";

export interface OrganisationNode {
  /** Stable node identifier. */
  id: string;

  /** Human-readable node label. */
  label: string;

  /** Node type in the hierarchy. */
  type: OrganisationNodeType;

  /** Child nodes for nested navigation. */
  children?: OrganisationNode[];

  /** Optional device category used for device-type filtering. */
  deviceCategory?: DeviceCategory;

  /** Optional device health status for health-based filtering. */
  deviceHealth?: DeviceHealth;

  /** Optional deployment stage for environment-based filtering. */
  deviceDeployment?: DeviceDeployment;

  /** Optional geocoding metadata for location nodes. */
  geo?: {
    latitude: number;
    longitude: number;
    country?: string;
    countryCode?: string;
  };

  /** Optional topology-type-specific metadata. */
  topologyMeta?: TopologyNodeMeta;
}

export interface LocationSuggestion {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  countryCode?: string;
  timeZone?: string;
}

export interface LocationSuggestionContext {
  parentNode: OrganisationNode;
  path: OrganisationNode[];
  childType: OrganisationNodeType;
  countryCodeHint?: string;
}

export interface InlineFilterDrawerProps {
  /** Root navigation nodes to render. */
  nodes?: OrganisationNode[];

  /** Drawer title text. */
  title?: string;

  /** Search input placeholder text. */
  searchPlaceholder?: string;

  /** Toggle visibility of the device category filter controls. */
  showDeviceTypeFilter?: boolean;

  /** Controlled selected device categories. Empty means all categories. */
  deviceTypeFilter?: DeviceTypeFilter;

  /** Uncontrolled default selected device categories. Empty means all categories. */
  defaultDeviceTypeFilter?: DeviceTypeFilter;

  /** Fired when selected device categories change. */
  onDeviceTypeFilterChange?: (nextType: DeviceTypeFilter) => void;

  /** Controlled selected device health statuses. Empty means all statuses. */
  deviceHealthFilter?: DeviceHealthFilter;

  /** Uncontrolled default selected device health statuses. Empty means all statuses. */
  defaultDeviceHealthFilter?: DeviceHealthFilter;

  /** Fired when selected device health statuses change. */
  onDeviceHealthFilterChange?: (nextHealth: DeviceHealthFilter) => void;

  /** Controlled selected device deployment stages. Empty means all stages. */
  deviceDeploymentFilter?: DeviceDeploymentFilter;

  /** Uncontrolled default selected device deployment stages. Empty means all stages. */
  defaultDeviceDeploymentFilter?: DeviceDeploymentFilter;

  /** Fired when selected device deployment stages change. */
  onDeviceDeploymentFilterChange?: (
    nextDeployment: DeviceDeploymentFilter
  ) => void;

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

  /** Enables inline creation of child folders/locations per node. */
  enableSubfolderCreation?: boolean;

  /** Optional provider for real-location autocomplete suggestions. */
  fetchLocationSuggestions?: (
    query: string,
    context: LocationSuggestionContext
  ) => Promise<LocationSuggestion[]>;

  /** MapLibre style used for location pinning map. */
  locationMapStyle?: string | StyleSpecification;

  /** Fired when nodes are updated by inline add-folder actions. */
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

  title: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },

  search: {
    flex: 1,
  },

  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
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

  chipButton: {
    borderRadius: tokens.borderRadiusCircular,
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

  deviceIcon: {
    display: "inline-flex",
    color: tokens.colorNeutralForeground2,
  },

  nodeMenuButton: {
    minWidth: "auto",
    paddingLeft: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalXXS,
  },

  inlineEditInput: {
    flex: 1,
    minWidth: 0,
    "& input": {
      fontSize: tokens.fontSizeBase200,
      lineHeight: tokens.lineHeightBase200,
      height: "auto",
      padding: `0 ${tokens.spacingHorizontalXXS}`,
    },
  },

  addEditor: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },

  locationPicker: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },

  miniMap: {
    height: "220px",
    borderRadius: tokens.borderRadiusMedium,
    overflow: "hidden",
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
  },

  locationMeta: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
  },

  detectedNameRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
  },

  detectedNameLabel: {
    flex: 1,
    minWidth: 0,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
  },

  metaFieldsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingVerticalM,
    columnGap: tokens.spacingHorizontalM,
  },

  metaFieldFull: {
    gridColumn: "1 / -1",
  },

  editorDialogBody: {
    width: "min(560px, 92vw)",
  },

  typeSelector: {
    minWidth: "240px",
  },

  locationCombobox: {
    width: "100%",
  },
});

const DEVICE_FILTER_LABELS: Array<{ value: DeviceCategory; label: string }> = [
  { value: "camera", label: "Cameras" },
  { value: "audio", label: "Audio" },
  { value: "accessControl", label: "Access control" },
];

const DEVICE_HEALTH_FILTER_LABELS: Array<{
  value: DeviceHealth;
  label: string;
}> = [
  { value: "online", label: "Online" },
  { value: "warning", label: "Warning" },
  { value: "offline", label: "Offline" },
];

const DEVICE_DEPLOYMENT_FILTER_LABELS: Array<{
  value: DeviceDeployment;
  label: string;
}> = [
  { value: "production", label: "Production" },
  { value: "staging", label: "Staging" },
];

type AddNodeMode = "generic" | "location" | "edit";

interface AddNodeDraft {
  isOpen: boolean;
  mode: AddNodeMode;
  value: string;
  targetType?: OrganisationNodeType;
  latitude?: number;
  longitude?: number;
  resolvedLocationName?: string;
  topologyMeta?: TopologyNodeMeta;
  mapSearchValue?: string;
}

interface ActiveEditorContext {
  node: OrganisationNode;
  levelKey: string;
  path: OrganisationNode[];
}

interface LocationMapViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}

const DEFAULT_LOCATION_MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap contributors",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm-tiles",
      type: "raster",
      source: "osm",
    },
  ],
};

const DEFAULT_ADD_NODE_DRAFT: AddNodeDraft = {
  isOpen: false,
  mode: "generic",
  value: "",
  targetType: "zoneOrArea",
};

const COORDINATE_INPUT_PATTERN =
  /^\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*$/;

interface TopologyFieldDef {
  key: string;
  label: string;
  type: "enum" | "number" | "text" | "boolean";
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  fullWidth?: boolean;
}

const TOPOLOGY_META_FIELDS: Partial<
  Record<OrganisationNodeType, TopologyFieldDef[]>
> = {
  geographicalArea: [
    {
      key: "areaType",
      label: "Area type",
      type: "enum",
      options: [
        { value: "campus", label: "Campus" },
        { value: "district", label: "District" },
        { value: "corridor", label: "Corridor" },
        { value: "custom", label: "Custom" },
      ],
    },
  ],
  site: [
    {
      key: "siteType",
      label: "Site type",
      type: "enum",
      options: [
        { value: "outdoor", label: "Outdoor" },
        { value: "indoor", label: "Indoor" },
        { value: "mixed", label: "Mixed" },
      ],
    },
    {
      key: "powerGridFrequency",
      label: "Power grid frequency",
      type: "enum",
      options: [
        { value: "50Hz", label: "50 Hz" },
        { value: "60Hz", label: "60 Hz" },
      ],
    },
    {
      key: "timeZone",
      label: "Time zone",
      type: "text",
      placeholder: "e.g. Europe/Stockholm",
      fullWidth: true,
    },
    {
      key: "isIndoorSetting",
      label: "Indoor setting",
      type: "boolean",
    },
  ],
  building: [
    {
      key: "buildingType",
      label: "Building type",
      type: "enum",
      options: [
        { value: "office", label: "Office" },
        { value: "warehouse", label: "Warehouse" },
        { value: "datacenter", label: "Data center" },
        { value: "residential", label: "Residential" },
        { value: "retail", label: "Retail" },
        { value: "factory", label: "Factory" },
        { value: "custom", label: "Custom" },
      ],
    },
  ],
  floor: [
    {
      key: "floorType",
      label: "Floor type",
      type: "enum",
      options: [
        { value: "standard", label: "Standard" },
        { value: "basement", label: "Basement" },
        { value: "mezzanine", label: "Mezzanine" },
        { value: "rooftop", label: "Rooftop" },
      ],
    },
    {
      key: "floorLevel",
      label: "Floor level",
      type: "number",
    },
  ],
  room: [
    {
      key: "roomType",
      label: "Room type",
      type: "enum",
      options: [
        { value: "office", label: "Office" },
        { value: "meeting_room", label: "Meeting room" },
        { value: "storage", label: "Storage" },
        { value: "server_room", label: "Server room" },
        { value: "restroom", label: "Restroom" },
        { value: "lobby", label: "Lobby" },
        { value: "custom", label: "Custom" },
      ],
    },
  ],
  areaOfInterest: [
    {
      key: "areaOfInterestType",
      label: "Area of interest type",
      type: "enum",
      options: [
        { value: "zone", label: "Zone" },
        { value: "corridor", label: "Corridor" },
        { value: "parking", label: "Parking" },
        { value: "entrance", label: "Entrance" },
        { value: "custom", label: "Custom" },
      ],
    },
  ],
};

const getTopologyMetaValue = (
  meta: TopologyNodeMeta | undefined,
  key: string
): unknown => {
  if (!meta) return undefined;
  return (meta as Record<string, unknown>)[key];
};

const buildTopologyMeta = (
  nodeType: OrganisationNodeType,
  existing: TopologyNodeMeta | undefined,
  key: string,
  value: unknown
): TopologyNodeMeta => {
  const base: Record<string, unknown> =
    existing && (existing as Record<string, unknown>).nodeType === nodeType
      ? { ...(existing as Record<string, unknown>) }
      : { nodeType };
  base[key] = value;
  return base as TopologyNodeMeta;
};

const TOPOLOGY_TYPE_LABELS: Partial<Record<OrganisationNodeType, string>> = {
  global: "Organization",
  region: "Region",
  country: "Country",
  city: "City",
  geographicalArea: "Geographical Area",
  site: "Site",
  building: "Building",
  floor: "Floor",
  room: "Room",
  areaOfInterest: "Area of Interest",
  zoneOrArea: "Zone / Area",
  device: "Device",
};

const NEXT_NODE_TYPE_BY_PARENT: Record<
  OrganisationNodeType,
  OrganisationNodeType
> = {
  global: "region",
  region: "site",
  country: "site",
  city: "site",
  geographicalArea: "site",
  site: "building",
  building: "floor",
  floor: "room",
  room: "areaOfInterest",
  areaOfInterest: "areaOfInterest",
  zoneOrArea: "areaOfInterest",
  device: "device",
};

const TOPOLOGY_CHILD_TYPES_BY_PARENT: Partial<
  Record<OrganisationNodeType, OrganisationNodeType[]>
> = {
  global: ["region"],
  region: ["geographicalArea", "site"],
  country: ["site", "building"],
  city: ["site", "building"],
  geographicalArea: ["site", "building", "floor", "room", "areaOfInterest"],
  site: ["building", "floor", "room", "areaOfInterest"],
  building: ["floor", "room", "areaOfInterest"],
  floor: ["room", "areaOfInterest"],
  room: ["areaOfInterest"],
  areaOfInterest: [],
  zoneOrArea: ["areaOfInterest"],
};

const COUNTRY_CITY_SUGGESTIONS: Record<string, string[]> = {
  Sweden: [
    "Stockholm",
    "Gothenburg",
    "Malmo",
    "Uppsala",
    "Lund",
    "Helsingborg",
  ],
  Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart"],
  "United States": [
    "New York",
    "Atlanta",
    "Chicago",
    "Seattle",
    "Austin",
    "San Diego",
  ],
  Singapore: [
    "Downtown Core",
    "Marina Bay",
    "Jurong East",
    "Woodlands",
    "Tampines",
    "Punggol",
  ],
};

const COUNTRY_TO_CODE: Record<string, string> = {
  Sweden: "SE",
  Germany: "DE",
  "United States": "US",
  Singapore: "SG",
  "United Kingdom": "GB",
  France: "FR",
  Canada: "CA",
  Japan: "JP",
  Australia: "AU",
  Brazil: "BR",
  India: "IN",
  "South Africa": "ZA",
};

const REGION_COUNTRY_SUGGESTIONS: Record<string, string[]> = {
  EMEA: ["Sweden", "Germany", "France", "United Kingdom", "Spain", "Italy"],
  Americas: [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Chile",
  ],
  APAC: ["Singapore", "Japan", "Australia", "India", "South Korea", "Thailand"],
};

const GLOBAL_CITY_SUGGESTIONS = [
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Toronto",
  "Madrid",
  "Rome",
  "Amsterdam",
  "Dubai",
  "Sao Paulo",
  "Mexico City",
  "Cape Town",
];

const GLOBAL_COUNTRY_SUGGESTIONS = [
  "Sweden",
  "Germany",
  "United States",
  "Singapore",
  "United Kingdom",
  "France",
  "Canada",
  "Japan",
  "Australia",
  "Brazil",
  "India",
  "South Africa",
];

const COMMON_TIME_ZONES = [
  "UTC",
  "Europe/Stockholm",
  "Europe/Berlin",
  "Europe/London",
  "Europe/Paris",
  "Europe/Rome",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "America/Sao_Paulo",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Asia/Kolkata",
  "Australia/Sydney",
  "Africa/Johannesburg",
];

const getTimeZoneSuggestions = (query: string): string[] => {
  const normalized = query.trim().toLowerCase();
  const matches =
    normalized.length === 0
      ? COMMON_TIME_ZONES
      : COMMON_TIME_ZONES.filter((timeZone) =>
          timeZone.toLowerCase().includes(normalized)
        );
  return matches.slice(0, 8);
};

const normalizeNodeLabel = (label: string): string => {
  const withoutMetadata = label.split(" - ")[0] ?? label;
  return withoutMetadata.replace(/\s*\(.*?\)\s*/g, "").trim();
};

const getCountryFromPath = (path: OrganisationNode[]): string | undefined => {
  const typedCountry = path.find((node) => node.type === "country");
  if (typedCountry) {
    return normalizeNodeLabel(typedCountry.label);
  }

  const knownCountries = Object.keys(COUNTRY_CITY_SUGGESTIONS);
  for (const node of path) {
    const normalized = normalizeNodeLabel(node.label);
    const matched = knownCountries.find((country) =>
      normalized.includes(country)
    );
    if (matched) {
      return matched;
    }
  }

  return undefined;
};

const getRegionFromPath = (path: OrganisationNode[]): string | undefined => {
  const typedRegion = path.find((node) => node.type === "region");
  if (typedRegion) {
    return normalizeNodeLabel(typedRegion.label);
  }

  const knownRegions = Object.keys(REGION_COUNTRY_SUGGESTIONS);
  for (const node of path) {
    const normalized = normalizeNodeLabel(node.label);
    const matched = knownRegions.find((region) => normalized.includes(region));
    if (matched) {
      return matched;
    }
  }

  return undefined;
};

const splitCountryAndLocationQuery = (
  query: string
): { locationQuery: string; countryCodeHint?: string } => {
  const normalizedQuery = query.trim().replace(/\s+/g, " ");
  if (!normalizedQuery) {
    return { locationQuery: "" };
  }

  const queryLower = normalizedQuery.toLowerCase();
  const countriesByLength = Object.keys(COUNTRY_TO_CODE).sort(
    (a, b) => b.length - a.length
  );

  for (const country of countriesByLength) {
    const countryLower = country.toLowerCase();

    if (queryLower === countryLower) {
      return {
        locationQuery: "",
        countryCodeHint: COUNTRY_TO_CODE[country],
      };
    }

    if (queryLower.startsWith(`${countryLower} `)) {
      return {
        locationQuery: normalizedQuery.slice(country.length).trim(),
        countryCodeHint: COUNTRY_TO_CODE[country],
      };
    }

    if (queryLower.endsWith(` ${countryLower}`)) {
      return {
        locationQuery: normalizedQuery
          .slice(0, normalizedQuery.length - country.length)
          .trim(),
        countryCodeHint: COUNTRY_TO_CODE[country],
      };
    }

    const commaSuffix = `, ${countryLower}`;
    if (queryLower.endsWith(commaSuffix)) {
      return {
        locationQuery: normalizedQuery
          .slice(0, normalizedQuery.length - commaSuffix.length)
          .trim(),
        countryCodeHint: COUNTRY_TO_CODE[country],
      };
    }

    const commaPrefix = `${countryLower}, `;
    if (queryLower.startsWith(commaPrefix)) {
      return {
        locationQuery: normalizedQuery.slice(commaPrefix.length).trim(),
        countryCodeHint: COUNTRY_TO_CODE[country],
      };
    }
  }

  return { locationQuery: normalizedQuery };
};

const getChildTypeForLocationMode = (
  parentType: OrganisationNodeType
): OrganisationNodeType => {
  return NEXT_NODE_TYPE_BY_PARENT[parentType] ?? "areaOfInterest";
};

const getAllowedChildTypes = (
  parentType: OrganisationNodeType
): OrganisationNodeType[] => {
  if (parentType === "device") return [];
  return (
    TOPOLOGY_CHILD_TYPES_BY_PARENT[parentType] ?? [
      getChildTypeForLocationMode(parentType),
    ]
  );
};

const shouldUseLocationSearch = (childType: OrganisationNodeType): boolean => {
  return childType !== "device" && childType !== "zoneOrArea";
};

const getLocationSuggestions = (
  path: OrganisationNode[],
  query: string,
  childType: OrganisationNodeType
): string[] => {
  if (childType === "country") {
    const region = getRegionFromPath(path);
    const base = region
      ? (REGION_COUNTRY_SUGGESTIONS[region] ?? GLOBAL_COUNTRY_SUGGESTIONS)
      : GLOBAL_COUNTRY_SUGGESTIONS;
    const trimmedCountry = query.trim().toLowerCase();
    const filteredCountries =
      trimmedCountry.length === 0
        ? base
        : base.filter((country) =>
            country.toLowerCase().includes(trimmedCountry)
          );
    return filteredCountries.slice(0, 8);
  }

  const country = getCountryFromPath(path);
  const base = country
    ? (COUNTRY_CITY_SUGGESTIONS[country] ?? GLOBAL_CITY_SUGGESTIONS)
    : GLOBAL_CITY_SUGGESTIONS;
  const parsedQuery = splitCountryAndLocationQuery(query);
  const trimmed = (parsedQuery.locationQuery || query).trim().toLowerCase();
  const filtered =
    trimmed.length === 0
      ? base
      : base.filter((city) => city.toLowerCase().includes(trimmed));
  return filtered.slice(0, 8);
};

const fetchOpenMeteoLocationSuggestions = async (
  query: string,
  context: LocationSuggestionContext
): Promise<LocationSuggestion[]> => {
  if (!shouldUseLocationSearch(context.childType)) {
    return [];
  }

  const normalizedQuery = query.trim();
  const parsedQuery = splitCountryAndLocationQuery(normalizedQuery);
  const searchQuery =
    context.childType === "country"
      ? normalizedQuery
      : parsedQuery.locationQuery || normalizedQuery;
  if (searchQuery.length < 2) {
    return [];
  }

  const params = new URLSearchParams({
    name: searchQuery,
    count: "8",
    language: "en",
    format: "json",
  });

  if (context.childType === "city") {
    params.set("feature_code", "PPL");
  }

  if (context.childType === "country") {
    params.set("feature_code", "PCLI");
  }

  if (context.childType === "region") {
    params.set("feature_code", "ADM1");
  }

  if (context.childType !== "country") {
    const resolvedCountryHint =
      parsedQuery.countryCodeHint ?? context.countryCodeHint;
    if (resolvedCountryHint) {
      params.set("country", resolvedCountryHint);
    }
  }

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`
  );
  if (!response.ok) {
    return [];
  }

  const payload = (await response.json()) as {
    results?: Array<{
      name: string;
      latitude: number;
      longitude: number;
      country?: string;
      country_code?: string;
      timezone?: string;
    }>;
  };

  return (payload.results ?? []).map((result) => ({
    name: result.name,
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country,
    countryCode: result.country_code,
    timeZone: result.timezone,
  }));
};

const fetchOpenMeteoReverseLocation = async (
  latitude: number,
  longitude: number
): Promise<LocationSuggestion | undefined> => {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    language: "en",
    format: "json",
  });

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/reverse?${params.toString()}`
  );
  if (!response.ok) {
    return undefined;
  }

  const payload = (await response.json()) as {
    results?: Array<{
      name: string;
      latitude: number;
      longitude: number;
      country?: string;
      country_code?: string;
      timezone?: string;
    }>;
  };

  const first = payload.results?.[0];
  if (!first) {
    return undefined;
  }

  return {
    name: first.name,
    latitude: first.latitude,
    longitude: first.longitude,
    country: first.country,
    countryCode: first.country_code,
    timeZone: first.timezone,
  };
};

const getDeviceIcon = (deviceCategory?: DeviceCategory) => {
  if (deviceCategory === "camera") {
    return <CameraDome20Regular aria-hidden="true" />;
  }

  if (deviceCategory === "audio") {
    return <Speak20Regular aria-hidden="true" />;
  }

  if (deviceCategory === "accessControl") {
    return <DoorStation20Regular aria-hidden="true" />;
  }

  return <Devices20Regular aria-hidden="true" />;
};

export const ORGANISATION_NAVIGATION_TREE: OrganisationNode[] = [
  {
    id: "global-axis-communications",
    label: "AXIS Communications Global",
    type: "global",
    children: [
      {
        id: "region-emea",
        label: "EMEA",
        type: "region",
        children: [
          {
            id: "country-se",
            label: "Sweden",
            type: "country",
            children: [
              {
                id: "city-lund",
                label: "Lund",
                type: "city",
                children: [
                  {
                    id: "site-lund-hq",
                    label: "Lund HQ Campus",
                    type: "site",
                    children: [
                      {
                        id: "building-beta",
                        label: "Building Beta",
                        type: "building",
                        children: [
                          {
                            id: "zone-beta-north-entrance",
                            label: "North Entrance",
                            type: "zoneOrArea",
                            children: [
                              {
                                id: "device-axis-a1610-01",
                                label: "AXIS A1610 Network Door Controller",
                                type: "device",
                                deviceCategory: "accessControl",
                                deviceHealth: "online",
                                deviceDeployment: "production",
                              },
                              {
                                id: "device-axis-a8207-01",
                                label: "AXIS A8207-VE Mk II",
                                type: "device",
                                deviceCategory: "accessControl",
                                deviceHealth: "warning",
                                deviceDeployment: "production",
                              },
                              {
                                id: "device-axis-a9210-01",
                                label: "AXIS A9210 Network I/O Relay Module",
                                type: "device",
                                deviceCategory: "accessControl",
                                deviceHealth: "online",
                                deviceDeployment: "production",
                              },
                            ],
                          },
                          {
                            id: "zone-beta-rnd-labs",
                            label: "R&D Labs",
                            type: "zoneOrArea",
                            children: [
                              {
                                id: "device-axis-q1808-01",
                                label: "AXIS Q1808-LE",
                                type: "device",
                                deviceCategory: "camera",
                                deviceHealth: "online",
                                deviceDeployment: "staging",
                              },
                              {
                                id: "device-axis-c1310e-01",
                                label: "AXIS C1310-E",
                                type: "device",
                                deviceCategory: "audio",
                                deviceHealth: "online",
                                deviceDeployment: "production",
                              },
                              {
                                id: "device-axis-p3737-01",
                                label: "AXIS P3737-PLE",
                                type: "device",
                                deviceCategory: "camera",
                                deviceHealth: "warning",
                                deviceDeployment: "staging",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "device-direct-site-lund-01",
                        label: "AXIS P3265-LV (Site Perimeter)",
                        type: "device",
                        deviceCategory: "camera",
                        deviceHealth: "warning",
                        deviceDeployment: "production",
                      },
                      {
                        id: "device-direct-site-lund-02",
                        label: "AXIS C8110 Network Audio Bridge",
                        type: "device",
                        deviceCategory: "audio",
                        deviceHealth: "offline",
                        deviceDeployment: "staging",
                      },
                      {
                        id: "device-direct-site-lund-03",
                        label: "AXIS Q6075-E PTZ Camera",
                        type: "device",
                        deviceCategory: "camera",
                        deviceHealth: "online",
                        deviceDeployment: "production",
                      },
                      {
                        id: "device-direct-site-lund-04",
                        label: "AXIS A1610-B Network Door Controller",
                        type: "device",
                        deviceCategory: "accessControl",
                        deviceHealth: "warning",
                        deviceDeployment: "staging",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "country-de",
            label: "Germany",
            type: "country",
            children: [
              {
                id: "city-munich",
                label: "Munich",
                type: "city",
                children: [
                  {
                    id: "site-munich-demo-center",
                    label: "Munich Demo Center",
                    type: "site",
                    children: [
                      {
                        id: "zone-showroom",
                        label: "Showroom",
                        type: "zoneOrArea",
                        children: [
                          {
                            id: "device-axis-m4328p-01",
                            label: "AXIS M4328-P",
                            type: "device",
                            deviceCategory: "camera",
                            deviceHealth: "online",
                            deviceDeployment: "production",
                          },
                          {
                            id: "device-axis-c1511-01",
                            label: "AXIS C1511 Network Pendant Speaker",
                            type: "device",
                            deviceCategory: "audio",
                            deviceHealth: "warning",
                            deviceDeployment: "staging",
                          },
                          {
                            id: "device-axis-q1952e-01",
                            label: "AXIS Q1952-E Thermal Camera",
                            type: "device",
                            deviceCategory: "camera",
                            deviceHealth: "online",
                            deviceDeployment: "production",
                          },
                        ],
                      },
                    ],
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
            id: "country-us",
            label: "United States",
            type: "country",
            children: [
              {
                id: "city-atlanta",
                label: "Atlanta",
                type: "city",
                children: [
                  {
                    id: "site-atlanta-office",
                    label: "Atlanta Office",
                    type: "site",
                    children: [
                      {
                        id: "building-atlanta-one",
                        label: "Building One",
                        type: "building",
                        children: [
                          {
                            id: "zone-reception",
                            label: "Reception",
                            type: "zoneOrArea",
                            children: [
                              {
                                id: "device-axis-p1468le-01",
                                label: "AXIS P1468-LE",
                                type: "device",
                                deviceCategory: "camera",
                                deviceHealth: "online",
                                deviceDeployment: "production",
                              },
                              {
                                id: "device-axis-a1210b-01",
                                label: "AXIS A1210-B",
                                type: "device",
                                deviceCategory: "accessControl",
                                deviceHealth: "offline",
                                deviceDeployment: "staging",
                              },
                              {
                                id: "device-axis-c1410-01",
                                label: "AXIS C1410 Network Mini Speaker",
                                type: "device",
                                deviceCategory: "audio",
                                deviceHealth: "online",
                                deviceDeployment: "production",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "device-direct-site-atlanta-01",
                        label: "AXIS M3088-V Dome Camera",
                        type: "device",
                        deviceCategory: "camera",
                        deviceHealth: "warning",
                        deviceDeployment: "staging",
                      },
                    ],
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
            id: "country-sg",
            label: "Singapore",
            type: "country",
            children: [
              {
                id: "city-singapore",
                label: "Singapore",
                type: "city",
                children: [
                  {
                    id: "site-singapore-hub",
                    label: "Singapore Hub",
                    type: "site",
                    children: [
                      {
                        id: "device-axis-q3538lve-01",
                        label: "AXIS Q3538-LVE",
                        type: "device",
                        deviceCategory: "camera",
                        deviceHealth: "online",
                        deviceDeployment: "production",
                      },
                      {
                        id: "device-axis-c1004e-01",
                        label: "AXIS C1004-E",
                        type: "device",
                        deviceCategory: "audio",
                        deviceHealth: "warning",
                        deviceDeployment: "staging",
                      },
                      {
                        id: "device-axis-a9188-01",
                        label: "AXIS A9188 Network I/O Relay Module",
                        type: "device",
                        deviceCategory: "accessControl",
                        deviceHealth: "online",
                        deviceDeployment: "production",
                      },
                      {
                        id: "device-axis-p1467le-01",
                        label: "AXIS P1467-LE",
                        type: "device",
                        deviceCategory: "camera",
                        deviceHealth: "online",
                        deviceDeployment: "staging",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const filterTree = (
  nodes: OrganisationNode[],
  query: string,
  activeDeviceFilter: DeviceTypeFilter,
  activeHealthFilter: DeviceHealthFilter,
  activeDeploymentFilter: DeviceDeploymentFilter
): OrganisationNode[] => {
  const normalizedSearch = query.trim().toLowerCase();
  if (
    !normalizedSearch &&
    activeDeviceFilter.length === 0 &&
    activeHealthFilter.length === 0 &&
    activeDeploymentFilter.length === 0
  ) {
    return nodes;
  }

  const selectedDeviceTypes = new Set(activeDeviceFilter);
  const selectedHealthStates = new Set(activeHealthFilter);
  const selectedDeployments = new Set(activeDeploymentFilter);

  const walk = (node: OrganisationNode): OrganisationNode | null => {
    const filteredChildren = (node.children ?? [])
      .map((child) => walk(child))
      .filter((child): child is OrganisationNode => child !== null);

    const matchesSearch =
      normalizedSearch.length === 0 ||
      node.label.toLowerCase().includes(normalizedSearch);
    const matchesDeviceFilter =
      node.type !== "device" ||
      selectedDeviceTypes.size === 0 ||
      (node.deviceCategory
        ? selectedDeviceTypes.has(node.deviceCategory)
        : false);
    const matchesHealthFilter =
      node.type !== "device" ||
      selectedHealthStates.size === 0 ||
      (node.deviceHealth ? selectedHealthStates.has(node.deviceHealth) : false);
    const matchesDeploymentFilter =
      node.type !== "device" ||
      selectedDeployments.size === 0 ||
      (node.deviceDeployment
        ? selectedDeployments.has(node.deviceDeployment)
        : false);

    if (node.type === "device") {
      if (
        !matchesSearch ||
        !matchesDeviceFilter ||
        !matchesHealthFilter ||
        !matchesDeploymentFilter
      ) {
        return null;
      }

      return {
        ...node,
        children: [],
      };
    }

    if (!matchesSearch && filteredChildren.length === 0) {
      return null;
    }

    return {
      ...node,
      children: filteredChildren,
    };
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
      showDeviceTypeFilter = true,
      deviceTypeFilter,
      defaultDeviceTypeFilter = [],
      onDeviceTypeFilterChange,
      deviceHealthFilter,
      defaultDeviceHealthFilter = [],
      onDeviceHealthFilterChange,
      deviceDeploymentFilter,
      defaultDeviceDeploymentFilter = [],
      onDeviceDeploymentFilterChange,
      selectionByLevel,
      selectedNodeIds,
      defaultSelectedNodeIds = [],
      onSelectedNodeIdsChange,
      allowMultiNodeSelection = true,
      enableSubfolderCreation = false,
      fetchLocationSuggestions,
      locationMapStyle = DEFAULT_LOCATION_MAP_STYLE,
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
    const [internalDeviceTypeFilter, setInternalDeviceTypeFilter] =
      useState<DeviceTypeFilter>(defaultDeviceTypeFilter);
    const [internalDeviceHealthFilter, setInternalDeviceHealthFilter] =
      useState<DeviceHealthFilter>(defaultDeviceHealthFilter);
    const [internalDeviceDeploymentFilter, setInternalDeviceDeploymentFilter] =
      useState<DeviceDeploymentFilter>(defaultDeviceDeploymentFilter);
    const [internalSelectedNodeIds, setInternalSelectedNodeIds] = useState<
      string[]
    >(defaultSelectedNodeIds);
    const [editableNodes, setEditableNodes] =
      useState<OrganisationNode[]>(nodes);
    const [addNodeDrafts, setAddNodeDrafts] = useState<
      Record<string, AddNodeDraft>
    >({});
    const [activeEditorContext, setActiveEditorContext] =
      useState<ActiveEditorContext | null>(null);
    const [apiSuggestionsByNodeId, setApiSuggestionsByNodeId] = useState<
      Record<string, LocationSuggestion[]>
    >({});
    const [mapViewByNodeId, setMapViewByNodeId] = useState<
      Record<string, LocationMapViewState>
    >({});
    const [openItemsByLevel, setOpenItemsByLevel] = useState<
      Record<string, string[]>
    >({});
    const suggestionRequestSeqByNodeIdRef = useRef<Record<string, number>>({});
    const reverseRequestSeqByNodeIdRef = useRef<Record<string, number>>({});
    const mapRef = useRef<MapRef>(null);
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

    const locationSuggestionProvider =
      fetchLocationSuggestions ?? fetchOpenMeteoLocationSuggestions;

    useEffect(() => {
      setEditableNodes(nodes);
      setAddNodeDrafts({});
      setActiveEditorContext(null);
      setApiSuggestionsByNodeId({});
      setMapViewByNodeId({});
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

    const isDeviceFilterControlled = deviceTypeFilter !== undefined;
    const isHealthFilterControlled = deviceHealthFilter !== undefined;
    const isDeploymentFilterControlled = deviceDeploymentFilter !== undefined;
    const isNodeSelectionControlled = selectedNodeIds !== undefined;

    const activeDeviceTypeFilter = isDeviceFilterControlled
      ? deviceTypeFilter
      : internalDeviceTypeFilter;
    const activeDeviceHealthFilter = isHealthFilterControlled
      ? deviceHealthFilter
      : internalDeviceHealthFilter;
    const activeDeviceDeploymentFilter = isDeploymentFilterControlled
      ? deviceDeploymentFilter
      : internalDeviceDeploymentFilter;
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
      () =>
        filterTree(
          editableNodes,
          searchValue,
          activeDeviceTypeFilter,
          activeDeviceHealthFilter,
          activeDeviceDeploymentFilter
        ),
      [
        editableNodes,
        searchValue,
        activeDeviceTypeFilter,
        activeDeviceHealthFilter,
        activeDeviceDeploymentFilter,
      ]
    );

    const updateAddNodeDraft = (
      nodeId: string,
      patch: Partial<AddNodeDraft>
    ) => {
      setAddNodeDrafts((previous) => ({
        ...previous,
        [nodeId]: { ...(previous[nodeId] ?? DEFAULT_ADD_NODE_DRAFT), ...patch },
      }));
    };

    const closeAddNodeEditor = (nodeId: string) => {
      setAddNodeDrafts((previous) => ({
        ...previous,
        [nodeId]: DEFAULT_ADD_NODE_DRAFT,
      }));
      setActiveEditorContext((previous) =>
        previous?.node.id === nodeId ? null : previous
      );
      setApiSuggestionsByNodeId((previous) => ({
        ...previous,
        [nodeId]: [],
      }));
    };

    const setMapViewForNode = (
      nodeId: string,
      latitude: number,
      longitude: number,
      zoom?: number
    ) => {
      const resolvedZoom = zoom ?? mapViewByNodeId[nodeId]?.zoom ?? 3;
      setMapViewByNodeId((previous) => ({
        ...previous,
        [nodeId]: { latitude, longitude, zoom: resolvedZoom },
      }));
      mapRef.current?.flyTo({
        center: [longitude, latitude],
        zoom: resolvedZoom,
        duration: 800,
      });
    };

    const requestLocationSuggestions = async (
      nodeId: string,
      value: string,
      context: LocationSuggestionContext
    ) => {
      const nextRequestSeq =
        (suggestionRequestSeqByNodeIdRef.current[nodeId] ?? 0) + 1;
      suggestionRequestSeqByNodeIdRef.current[nodeId] = nextRequestSeq;

      try {
        const suggestions = await locationSuggestionProvider(value, context);
        if (
          suggestionRequestSeqByNodeIdRef.current[nodeId] !== nextRequestSeq
        ) {
          return;
        }

        setApiSuggestionsByNodeId((previous) => ({
          ...previous,
          [nodeId]: suggestions,
        }));

        if (value.trim().length > 0 && suggestions.length > 0) {
          const firstMatch = suggestions[0];
          setMapViewForNode(
            nodeId,
            firstMatch.latitude,
            firstMatch.longitude,
            context.childType === "country" ? 4 : 9
          );
        }
      } catch {
        if (
          suggestionRequestSeqByNodeIdRef.current[nodeId] !== nextRequestSeq
        ) {
          return;
        }

        setApiSuggestionsByNodeId((previous) => ({
          ...previous,
          [nodeId]: [],
        }));
      }
    };

    const applyLocationSuggestion = (
      nodeId: string,
      suggestion: LocationSuggestion
    ) => {
      const resolvedLocationName = suggestion.country
        ? `${suggestion.name}, ${suggestion.country}`
        : suggestion.name;

      setAddNodeDrafts((previous) => {
        const draft = previous[nodeId] ?? DEFAULT_ADD_NODE_DRAFT;
        const shouldReplaceInput =
          draft.value.trim().length === 0 ||
          (draft.resolvedLocationName !== undefined &&
            draft.value.trim() === draft.resolvedLocationName) ||
          COORDINATE_INPUT_PATTERN.test(draft.value);

        return {
          ...previous,
          [nodeId]: {
            ...draft,
            value: shouldReplaceInput ? resolvedLocationName : draft.value,
            latitude: suggestion.latitude,
            longitude: suggestion.longitude,
            resolvedLocationName,
            topologyMeta:
              draft.targetType === "site" && suggestion.timeZone
                ? buildTopologyMeta(
                    "site",
                    draft.topologyMeta,
                    "timeZone",
                    suggestion.timeZone
                  )
                : draft.topologyMeta,
          },
        };
      });
      setMapViewForNode(nodeId, suggestion.latitude, suggestion.longitude, 11);
    };

    const applyPinnedLocation = async (
      nodeId: string,
      latitude: number,
      longitude: number
    ) => {
      updateAddNodeDraft(nodeId, {
        latitude,
        longitude,
      });
      setMapViewForNode(nodeId, latitude, longitude);

      const nextRequestSeq =
        (reverseRequestSeqByNodeIdRef.current[nodeId] ?? 0) + 1;
      reverseRequestSeqByNodeIdRef.current[nodeId] = nextRequestSeq;

      try {
        const reverseLocation = await fetchOpenMeteoReverseLocation(
          latitude,
          longitude
        );
        if (
          !reverseLocation ||
          reverseRequestSeqByNodeIdRef.current[nodeId] !== nextRequestSeq
        ) {
          return;
        }

        updateAddNodeDraft(nodeId, {
          resolvedLocationName: reverseLocation.country
            ? `${reverseLocation.name}, ${reverseLocation.country}`
            : reverseLocation.name,
          latitude: reverseLocation.latitude,
          longitude: reverseLocation.longitude,
        });

        setAddNodeDrafts((previous) => {
          const draft = previous[nodeId] ?? DEFAULT_ADD_NODE_DRAFT;
          const nextResolvedLocationName = reverseLocation.country
            ? `${reverseLocation.name}, ${reverseLocation.country}`
            : reverseLocation.name;
          const shouldReplaceInput =
            draft.value.trim().length === 0 ||
            (draft.resolvedLocationName !== undefined &&
              draft.value.trim() === draft.resolvedLocationName) ||
            COORDINATE_INPUT_PATTERN.test(draft.value);

          return {
            ...previous,
            [nodeId]: {
              ...draft,
              value: shouldReplaceInput
                ? nextResolvedLocationName
                : draft.value,
              resolvedLocationName: nextResolvedLocationName,
              latitude: reverseLocation.latitude,
              longitude: reverseLocation.longitude,
              topologyMeta:
                draft.targetType === "site" && reverseLocation.timeZone
                  ? buildTopologyMeta(
                      "site",
                      draft.topologyMeta,
                      "timeZone",
                      reverseLocation.timeZone
                    )
                  : draft.topologyMeta,
            },
          };
        });
      } catch {
        if (reverseRequestSeqByNodeIdRef.current[nodeId] !== nextRequestSeq) {
          return;
        }
        updateAddNodeDraft(nodeId, {
          resolvedLocationName: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          latitude,
          longitude,
        });
      }
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

    const handleEditNode = (
      node: OrganisationNode,
      levelKey: string,
      path: OrganisationNode[]
    ) => {
      setActiveEditorContext({ node, levelKey, path });
      setAddNodeDrafts((previous) => ({
        ...previous,
        [node.id]: {
          ...(previous[node.id] ?? DEFAULT_ADD_NODE_DRAFT),
          isOpen: true,
          mode: "edit",
          value: node.label,
        },
      }));
    };

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

    const handleAddSubfolder = (node: OrganisationNode, levelKey: string) => {
      const draft = addNodeDrafts[node.id] ?? DEFAULT_ADD_NODE_DRAFT;
      const trimmedName = draft.value.trim();
      if (!trimmedName || node.type === "device") {
        return;
      }

      const fallbackType =
        draft.mode === "location"
          ? getChildTypeForLocationMode(node.type)
          : "zoneOrArea";
      const childType = draft.targetType ?? fallbackType;

      const selectedGeoSuggestion = (
        apiSuggestionsByNodeId[node.id] ?? []
      ).find(
        (suggestion) =>
          suggestion.name.toLowerCase() === trimmedName.toLowerCase()
      );
      const resolvedLatitude =
        selectedGeoSuggestion?.latitude ?? draft.latitude;
      const resolvedLongitude =
        selectedGeoSuggestion?.longitude ?? draft.longitude;
      const resolvedCountry = selectedGeoSuggestion?.country;
      const resolvedCountryCode = selectedGeoSuggestion?.countryCode;

      const newChild: OrganisationNode = {
        id: `node-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        label: trimmedName,
        type: childType,
        children: [],
        ...(resolvedLatitude !== undefined && resolvedLongitude !== undefined
          ? {
              geo: {
                latitude: resolvedLatitude,
                longitude: resolvedLongitude,
                country: resolvedCountry,
                countryCode: resolvedCountryCode,
              },
            }
          : {}),
        ...(draft.topologyMeta ? { topologyMeta: draft.topologyMeta } : {}),
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

      closeAddNodeEditor(node.id);
    };

    const openAddNodeEditor = (
      node: OrganisationNode,
      levelKey: string,
      path: OrganisationNode[],
      mode: AddNodeMode,
      preselectedType?: OrganisationNodeType
    ) => {
      const activeDraft = addNodeDrafts[node.id] ?? DEFAULT_ADD_NODE_DRAFT;
      const defaultTargetType =
        mode === "location"
          ? getChildTypeForLocationMode(node.type)
          : "zoneOrArea";
      const targetType =
        preselectedType ??
        (activeDraft.mode === mode && activeDraft.targetType
          ? activeDraft.targetType
          : defaultTargetType);

      setActiveEditorContext({ node, levelKey, path });
      updateAddNodeDraft(node.id, {
        isOpen: true,
        mode,
        value: activeDraft.value,
        targetType,
        latitude: activeDraft.latitude,
        longitude: activeDraft.longitude,
        resolvedLocationName: activeDraft.resolvedLocationName,
      });

      setMapViewByNodeId((previous) => {
        if (previous[node.id]) {
          return previous;
        }

        return {
          ...previous,
          [node.id]: {
            latitude: activeDraft.latitude ?? 20,
            longitude: activeDraft.longitude ?? 0,
            zoom:
              activeDraft.latitude !== undefined &&
              activeDraft.longitude !== undefined
                ? 11
                : 2,
          },
        };
      });

      setOpenItemsByLevel((previous) => ({
        ...previous,
        [levelKey]: Array.from(
          new Set([...(previous[levelKey] ?? []), node.id])
        ),
      }));

      if (mode === "location") {
        const childType = targetType;
        if (shouldUseLocationSearch(childType)) {
          const countryHint = getCountryFromPath(path);
          void requestLocationSuggestions(node.id, activeDraft.value, {
            parentNode: node,
            path,
            childType,
            countryCodeHint: countryHint
              ? COUNTRY_TO_CODE[countryHint]
              : undefined,
          });
        }
      }
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
      closeAddNodeEditor(nodeId);
    };

    const handleDeviceFilterChange = (nextType: DeviceCategory) => {
      const isSelected = activeDeviceTypeFilter.includes(nextType);
      const updated = isSelected
        ? activeDeviceTypeFilter.filter((item) => item !== nextType)
        : [...activeDeviceTypeFilter, nextType];

      if (!isDeviceFilterControlled) {
        setInternalDeviceTypeFilter(updated);
      }
      onDeviceTypeFilterChange?.(updated);
    };

    const updateSelectedNodeIds = (nextSelectedNodeIds: string[]) => {
      if (!isNodeSelectionControlled) {
        setInternalSelectedNodeIds(nextSelectedNodeIds);
      }
      onSelectedNodeIdsChange?.(nextSelectedNodeIds);
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

    const isNodeSelectable = (node: OrganisationNode): boolean => {
      return Boolean(effectiveSelectionByLevel[node.type]);
    };

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
            const canAddSubfolder =
              enableSubfolderCreation && node.type !== "device";
            const currentPath = [...ancestors, node];

            if (!hasChildren) {
              return (
                <div key={node.id}>
                  <div className={styles.leaf}>
                    {node.type === "device" && (
                      <span className={styles.deviceIcon}>
                        {getDeviceIcon(node.deviceCategory)}
                      </span>
                    )}
                    {isNodeSelectable(node) && (
                      <Checkbox
                        aria-label={`Select ${node.label}`}
                        checked={selectedNodeIdSet.has(node.id)}
                        onChange={() => toggleNodeSelection(node)}
                      />
                    )}
                    <Text className={styles.leafLabel}>{node.label}</Text>
                    {canAddSubfolder && (
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
                              onClick={() =>
                                handleEditNode(node, levelKey, currentPath)
                              }
                              icon={<Pen20Regular />}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                openAddNodeEditor(
                                  node,
                                  levelKey,
                                  currentPath,
                                  "generic"
                                )
                              }
                            >
                              Add folder
                            </MenuItem>
                            {getAllowedChildTypes(node.type).length > 0 && (
                              <Menu>
                                <MenuTrigger disableButtonEnhancement>
                                  <MenuItem hasSubmenu>
                                    Add topology location
                                  </MenuItem>
                                </MenuTrigger>
                                <MenuPopover>
                                  <MenuList>
                                    {getAllowedChildTypes(node.type).map(
                                      (childType) => (
                                        <MenuItem
                                          key={childType}
                                          onClick={() =>
                                            openAddNodeEditor(
                                              node,
                                              levelKey,
                                              currentPath,
                                              "location",
                                              childType
                                            )
                                          }
                                        >
                                          {TOPOLOGY_TYPE_LABELS[childType] ??
                                            childType}
                                        </MenuItem>
                                      )
                                    )}
                                  </MenuList>
                                </MenuPopover>
                              </Menu>
                            )}
                            <MenuItem onClick={() => handleRemoveNode(node.id)}>
                              Remove
                            </MenuItem>
                          </MenuList>
                        </MenuPopover>
                      </Menu>
                    )}
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
                    <Text>{node.label}</Text>
                    {canAddSubfolder && (
                      <span
                        className={styles.checkboxWrap}
                        onClick={(event) => event.stopPropagation()}
                      >
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
                                onClick={() =>
                                  handleEditNode(node, levelKey, currentPath)
                                }
                                icon={<Pen20Regular />}
                              >
                                Edit
                              </MenuItem>
                              <MenuItem
                                onClick={() =>
                                  openAddNodeEditor(
                                    node,
                                    levelKey,
                                    currentPath,
                                    "generic"
                                  )
                                }
                              >
                                Add folder
                              </MenuItem>
                              {getAllowedChildTypes(node.type).length > 0 && (
                                <Menu>
                                  <MenuTrigger disableButtonEnhancement>
                                    <MenuItem hasSubmenu>
                                      Add topology location
                                    </MenuItem>
                                  </MenuTrigger>
                                  <MenuPopover>
                                    <MenuList>
                                      {getAllowedChildTypes(node.type).map(
                                        (childType) => (
                                          <MenuItem
                                            key={childType}
                                            onClick={() =>
                                              openAddNodeEditor(
                                                node,
                                                levelKey,
                                                currentPath,
                                                "location",
                                                childType
                                              )
                                            }
                                          >
                                            {TOPOLOGY_TYPE_LABELS[childType] ??
                                              childType}
                                          </MenuItem>
                                        )
                                      )}
                                    </MenuList>
                                  </MenuPopover>
                                </Menu>
                              )}
                              <MenuItem
                                onClick={() => handleRemoveNode(node.id)}
                              >
                                Remove
                              </MenuItem>
                            </MenuList>
                          </MenuPopover>
                        </Menu>
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

    const activeEditorNodeId = activeEditorContext?.node.id;
    const activeEditorDraft = activeEditorNodeId
      ? (addNodeDrafts[activeEditorNodeId] ?? DEFAULT_ADD_NODE_DRAFT)
      : null;
    const activeEditorChildType =
      activeEditorDraft?.targetType ??
      (activeEditorContext
        ? getChildTypeForLocationMode(activeEditorContext.node.type)
        : undefined);
    const activeEditorApiSuggestions = activeEditorNodeId
      ? (apiSuggestionsByNodeId[activeEditorNodeId] ?? [])
      : [];
    const activeEditorSuggestionByName = new globalThis.Map(
      activeEditorApiSuggestions.map((suggestion) => [
        suggestion.name,
        suggestion,
      ])
    );
    const activeEditorFallbackSuggestions =
      activeEditorContext && activeEditorDraft && activeEditorChildType
        ? getLocationSuggestions(
            activeEditorContext.path,
            activeEditorDraft.value,
            activeEditorChildType
          )
        : [];
    const activeEditorSuggestionNames = activeEditorApiSuggestions.map(
      (suggestion) => suggestion.name
    );
    const activeEditorLocationSuggestions = Array.from(
      new Set([
        ...activeEditorSuggestionNames,
        ...activeEditorFallbackSuggestions,
      ])
    );
    const activeEditorMapView =
      activeEditorNodeId && mapViewByNodeId[activeEditorNodeId]
        ? mapViewByNodeId[activeEditorNodeId]
        : {
            latitude: activeEditorDraft?.latitude ?? 20,
            longitude: activeEditorDraft?.longitude ?? 0,
            zoom:
              activeEditorDraft?.latitude !== undefined &&
              activeEditorDraft?.longitude !== undefined
                ? 11
                : 2,
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
        <Text as="h2" className={styles.title}>
          {title}
        </Text>

        <div className={styles.searchRow}>
          <Input
            className={styles.search}
            type="search"
            contentBefore={<SearchRegular />}
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(_event, data) => setSearchValue(data.value)}
          />

          {showDeviceTypeFilter && (
            <Menu
              checkedValues={{
                deviceTypes: activeDeviceTypeFilter,
                healthStates: activeDeviceHealthFilter,
                deployments: activeDeviceDeploymentFilter,
              }}
              onCheckedValueChange={(_event, data) => {
                if (data.name === "deviceTypes") {
                  const next = data.checkedItems as DeviceCategory[];
                  if (!isDeviceFilterControlled) {
                    setInternalDeviceTypeFilter(next);
                  }
                  onDeviceTypeFilterChange?.(next);
                }

                if (data.name === "healthStates") {
                  const next = data.checkedItems as DeviceHealth[];
                  if (!isHealthFilterControlled) {
                    setInternalDeviceHealthFilter(next);
                  }
                  onDeviceHealthFilterChange?.(next);
                }

                if (data.name === "deployments") {
                  const next = data.checkedItems as DeviceDeployment[];
                  if (!isDeploymentFilterControlled) {
                    setInternalDeviceDeploymentFilter(next);
                  }
                  onDeviceDeploymentFilterChange?.(next);
                }
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
                  {DEVICE_FILTER_LABELS.map((option) => (
                    <MenuItemCheckbox
                      key={option.value}
                      name="deviceTypes"
                      value={option.value}
                    >
                      {option.label}
                    </MenuItemCheckbox>
                  ))}

                  {DEVICE_HEALTH_FILTER_LABELS.map((option) => (
                    <MenuItemCheckbox
                      key={option.value}
                      name="healthStates"
                      value={option.value}
                    >
                      Health: {option.label}
                    </MenuItemCheckbox>
                  ))}

                  {DEVICE_DEPLOYMENT_FILTER_LABELS.map((option) => (
                    <MenuItemCheckbox
                      key={option.value}
                      name="deployments"
                      value={option.value}
                    >
                      Environment: {option.label}
                    </MenuItemCheckbox>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          )}
        </div>

        {showDeviceTypeFilter && (
          <div className={styles.selectedFiltersSection}>
            {DEVICE_FILTER_LABELS.map(
              (option) =>
                activeDeviceTypeFilter.includes(option.value) && (
                  <Button
                    key={option.value}
                    className={styles.chipButton}
                    appearance="outline"
                    size="small"
                    onClick={() => handleDeviceFilterChange(option.value)}
                  >
                    {option.label} x
                  </Button>
                )
            )}

            {DEVICE_HEALTH_FILTER_LABELS.map(
              (option) =>
                activeDeviceHealthFilter.includes(option.value) && (
                  <Button
                    key={option.value}
                    className={styles.chipButton}
                    appearance="outline"
                    size="small"
                    onClick={() => {
                      const next = activeDeviceHealthFilter.filter(
                        (value) => value !== option.value
                      );
                      if (!isHealthFilterControlled) {
                        setInternalDeviceHealthFilter(next);
                      }
                      onDeviceHealthFilterChange?.(next);
                    }}
                  >
                    Health: {option.label} x
                  </Button>
                )
            )}

            {DEVICE_DEPLOYMENT_FILTER_LABELS.map(
              (option) =>
                activeDeviceDeploymentFilter.includes(option.value) && (
                  <Button
                    key={option.value}
                    className={styles.chipButton}
                    appearance="outline"
                    size="small"
                    onClick={() => {
                      const next = activeDeviceDeploymentFilter.filter(
                        (value) => value !== option.value
                      );
                      if (!isDeploymentFilterControlled) {
                        setInternalDeviceDeploymentFilter(next);
                      }
                      onDeviceDeploymentFilterChange?.(next);
                    }}
                  >
                    Env: {option.label} x
                  </Button>
                )
            )}
          </div>
        )}

        {renderNodes(filteredNodes)}

        {filteredNodes.length === 0 && (
          <Text className={styles.emptyState}>
            No locations or device models found.
          </Text>
        )}

        <Dialog
          open={Boolean(activeEditorContext && activeEditorDraft?.isOpen)}
          onOpenChange={(_event, data) => {
            if (!data.open && activeEditorNodeId) {
              closeAddNodeEditor(activeEditorNodeId);
            }
          }}
        >
          <DialogSurface>
            <DialogBody className={styles.editorDialogBody}>
              <DialogTitle>
                {activeEditorDraft?.mode === "edit"
                  ? "Rename"
                  : activeEditorDraft?.mode === "location"
                    ? `Add ${TOPOLOGY_TYPE_LABELS[activeEditorChildType ?? "site"] ?? "Topology Location"}`
                    : "Add Folder"}
              </DialogTitle>
              <DialogContent>
                {activeEditorContext &&
                  activeEditorDraft &&
                  activeEditorNodeId &&
                  activeEditorChildType && (
                    <div className={styles.addEditor}>
                      <Field
                        label={
                          activeEditorDraft.mode === "edit"
                            ? "Name"
                            : activeEditorDraft.mode === "location"
                              ? "Location name"
                              : "Folder name"
                        }
                      >
                        <Input
                          value={activeEditorDraft.value}
                          placeholder={
                            activeEditorDraft.mode === "location"
                              ? "Type location name…"
                              : "Type folder name"
                          }
                          onChange={(_event, data) => {
                            updateAddNodeDraft(activeEditorNodeId, {
                              value: data.value,
                            });
                          }}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              handleAddSubfolder(
                                activeEditorContext.node,
                                activeEditorContext.levelKey
                              );
                            }
                          }}
                        />
                      </Field>

                      {activeEditorDraft.mode !== "edit" &&
                        activeEditorDraft.mode === "location" &&
                        activeEditorChildType &&
                        TOPOLOGY_META_FIELDS[activeEditorChildType] && (
                          <div className={styles.metaFieldsGrid}>
                            {TOPOLOGY_META_FIELDS[activeEditorChildType]!.map(
                              (fieldDef) => (
                                <div
                                  key={fieldDef.key}
                                  className={
                                    fieldDef.fullWidth
                                      ? styles.metaFieldFull
                                      : undefined
                                  }
                                >
                                  {fieldDef.type === "enum" ? (
                                    <Field label={fieldDef.label}>
                                      <Dropdown
                                        placeholder="Select…"
                                        selectedOptions={
                                          getTopologyMetaValue(
                                            activeEditorDraft.topologyMeta,
                                            fieldDef.key
                                          ) !== undefined
                                            ? [
                                                String(
                                                  getTopologyMetaValue(
                                                    activeEditorDraft.topologyMeta,
                                                    fieldDef.key
                                                  )
                                                ),
                                              ]
                                            : []
                                        }
                                        value={String(
                                          getTopologyMetaValue(
                                            activeEditorDraft.topologyMeta,
                                            fieldDef.key
                                          ) ?? ""
                                        )}
                                        onOptionSelect={(_event, data) => {
                                          updateAddNodeDraft(
                                            activeEditorNodeId,
                                            {
                                              topologyMeta: buildTopologyMeta(
                                                activeEditorChildType,
                                                activeEditorDraft.topologyMeta,
                                                fieldDef.key,
                                                data.optionValue
                                              ),
                                            }
                                          );
                                        }}
                                      >
                                        {fieldDef.options!.map((opt) => (
                                          <Option
                                            key={opt.value}
                                            value={opt.value}
                                          >
                                            {opt.label}
                                          </Option>
                                        ))}
                                      </Dropdown>
                                    </Field>
                                  ) : fieldDef.type === "number" ? (
                                    <Field label={fieldDef.label}>
                                      <SpinButton
                                        value={Number(
                                          getTopologyMetaValue(
                                            activeEditorDraft.topologyMeta,
                                            fieldDef.key
                                          ) ?? 0
                                        )}
                                        onChange={(_event, data) => {
                                          updateAddNodeDraft(
                                            activeEditorNodeId,
                                            {
                                              topologyMeta: buildTopologyMeta(
                                                activeEditorChildType,
                                                activeEditorDraft.topologyMeta,
                                                fieldDef.key,
                                                data.value
                                              ),
                                            }
                                          );
                                        }}
                                      />
                                    </Field>
                                  ) : fieldDef.type === "text" ? (
                                    <Field label={fieldDef.label}>
                                      {fieldDef.key === "timeZone" ? (
                                        <Combobox
                                          className={styles.locationCombobox}
                                          freeform
                                          placeholder={fieldDef.placeholder}
                                          value={String(
                                            getTopologyMetaValue(
                                              activeEditorDraft.topologyMeta,
                                              fieldDef.key
                                            ) ?? ""
                                          )}
                                          onInput={(event) => {
                                            const nextValue = (
                                              event.target as HTMLInputElement
                                            ).value;
                                            updateAddNodeDraft(
                                              activeEditorNodeId,
                                              {
                                                topologyMeta: buildTopologyMeta(
                                                  activeEditorChildType,
                                                  activeEditorDraft.topologyMeta,
                                                  fieldDef.key,
                                                  nextValue
                                                ),
                                              }
                                            );
                                          }}
                                          onOptionSelect={(_event, data) => {
                                            updateAddNodeDraft(
                                              activeEditorNodeId,
                                              {
                                                topologyMeta: buildTopologyMeta(
                                                  activeEditorChildType,
                                                  activeEditorDraft.topologyMeta,
                                                  fieldDef.key,
                                                  data.optionValue ??
                                                    data.optionText ??
                                                    ""
                                                ),
                                              }
                                            );
                                          }}
                                        >
                                          {getTimeZoneSuggestions(
                                            String(
                                              getTopologyMetaValue(
                                                activeEditorDraft.topologyMeta,
                                                fieldDef.key
                                              ) ?? ""
                                            )
                                          ).map((timeZone) => (
                                            <Option
                                              key={timeZone}
                                              value={timeZone}
                                              text={timeZone}
                                            >
                                              {timeZone}
                                            </Option>
                                          ))}
                                        </Combobox>
                                      ) : (
                                        <Input
                                          placeholder={fieldDef.placeholder}
                                          value={String(
                                            getTopologyMetaValue(
                                              activeEditorDraft.topologyMeta,
                                              fieldDef.key
                                            ) ?? ""
                                          )}
                                          onChange={(_event, data) => {
                                            updateAddNodeDraft(
                                              activeEditorNodeId,
                                              {
                                                topologyMeta: buildTopologyMeta(
                                                  activeEditorChildType,
                                                  activeEditorDraft.topologyMeta,
                                                  fieldDef.key,
                                                  data.value
                                                ),
                                              }
                                            );
                                          }}
                                        />
                                      )}
                                    </Field>
                                  ) : fieldDef.type === "boolean" ? (
                                    <Field label={fieldDef.label}>
                                      <Switch
                                        checked={Boolean(
                                          getTopologyMetaValue(
                                            activeEditorDraft.topologyMeta,
                                            fieldDef.key
                                          )
                                        )}
                                        onChange={(_event, data) => {
                                          updateAddNodeDraft(
                                            activeEditorNodeId,
                                            {
                                              topologyMeta: buildTopologyMeta(
                                                activeEditorChildType,
                                                activeEditorDraft.topologyMeta,
                                                fieldDef.key,
                                                data.checked
                                              ),
                                            }
                                          );
                                        }}
                                      />
                                    </Field>
                                  ) : null}
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {activeEditorDraft.mode !== "edit" &&
                        activeEditorDraft.mode === "location" && (
                          <div className={styles.locationPicker}>
                            {activeEditorDraft.resolvedLocationName && (
                              <div className={styles.detectedNameRow}>
                                <Text className={styles.detectedNameLabel}>
                                  Detected:{" "}
                                  {activeEditorDraft.resolvedLocationName}
                                </Text>
                                <Button
                                  size="small"
                                  appearance="subtle"
                                  onClick={() =>
                                    updateAddNodeDraft(activeEditorNodeId, {
                                      value:
                                        activeEditorDraft.resolvedLocationName,
                                    })
                                  }
                                >
                                  Use this name
                                </Button>
                              </div>
                            )}

                            {shouldUseLocationSearch(activeEditorChildType) && (
                              <Field label="Search map">
                                <Combobox
                                  className={styles.locationCombobox}
                                  freeform
                                  value={activeEditorDraft.mapSearchValue ?? ""}
                                  placeholder="Search for a city or area…"
                                  onInput={(event) => {
                                    const searchVal = (
                                      event.target as HTMLInputElement
                                    ).value;
                                    updateAddNodeDraft(activeEditorNodeId, {
                                      mapSearchValue: searchVal,
                                    });
                                    const countryHint = getCountryFromPath(
                                      activeEditorContext.path
                                    );
                                    void requestLocationSuggestions(
                                      activeEditorNodeId,
                                      searchVal,
                                      {
                                        parentNode: activeEditorContext.node,
                                        path: activeEditorContext.path,
                                        childType: activeEditorChildType,
                                        countryCodeHint: countryHint
                                          ? COUNTRY_TO_CODE[countryHint]
                                          : undefined,
                                      }
                                    );
                                  }}
                                  onOptionSelect={(_event, data) => {
                                    const suggestion =
                                      activeEditorSuggestionByName.get(
                                        data.optionText ?? ""
                                      );
                                    if (suggestion) {
                                      applyLocationSuggestion(
                                        activeEditorNodeId,
                                        suggestion
                                      );
                                      updateAddNodeDraft(activeEditorNodeId, {
                                        mapSearchValue: suggestion.country
                                          ? `${suggestion.name}, ${suggestion.country}`
                                          : suggestion.name,
                                      });
                                    }
                                  }}
                                >
                                  {activeEditorLocationSuggestions
                                    .slice(0, 8)
                                    .map((suggestionName) => {
                                      const suggestion =
                                        activeEditorSuggestionByName.get(
                                          suggestionName
                                        );
                                      return (
                                        <Option
                                          key={`${activeEditorNodeId}-${suggestionName}`}
                                          value={suggestionName}
                                          text={suggestionName}
                                        >
                                          {suggestion?.country
                                            ? `${suggestion.name}, ${suggestion.country}`
                                            : suggestionName}
                                        </Option>
                                      );
                                    })}
                                </Combobox>
                              </Field>
                            )}

                            <Field label="Pin on map">
                              <div className={styles.miniMap}>
                                <MapLibreMap
                                  ref={mapRef}
                                  mapStyle={locationMapStyle}
                                  longitude={activeEditorMapView.longitude}
                                  latitude={activeEditorMapView.latitude}
                                  zoom={activeEditorMapView.zoom}
                                  onMove={(event: {
                                    viewState: {
                                      latitude: number;
                                      longitude: number;
                                      zoom: number;
                                    };
                                  }) => {
                                    setMapViewByNodeId((previous) => ({
                                      ...previous,
                                      [activeEditorNodeId]: {
                                        latitude: event.viewState.latitude,
                                        longitude: event.viewState.longitude,
                                        zoom: event.viewState.zoom,
                                      },
                                    }));
                                  }}
                                  onClick={(event: MapLayerMouseEvent) => {
                                    void applyPinnedLocation(
                                      activeEditorNodeId,
                                      event.lngLat.lat,
                                      event.lngLat.lng
                                    );
                                  }}
                                  reuseMaps
                                >
                                  <NavigationControl
                                    position="top-right"
                                    showCompass={false}
                                  />
                                  {activeEditorDraft.latitude !== undefined &&
                                    activeEditorDraft.longitude !==
                                      undefined && (
                                      <Marker
                                        longitude={activeEditorDraft.longitude}
                                        latitude={activeEditorDraft.latitude}
                                        color={tokens.colorBrandForeground1}
                                      />
                                    )}
                                </MapLibreMap>
                              </div>
                            </Field>

                            <Text className={styles.locationMeta}>
                              {activeEditorDraft.latitude !== undefined &&
                              activeEditorDraft.longitude !== undefined
                                ? `Pinned: ${activeEditorDraft.latitude.toFixed(4)}, ${activeEditorDraft.longitude.toFixed(4)}`
                                : "Click the map to pin coordinates"}
                            </Text>
                          </div>
                        )}
                    </div>
                  )}
              </DialogContent>
              <DialogActions>
                <Button
                  appearance="secondary"
                  onClick={() => {
                    if (activeEditorNodeId) {
                      closeAddNodeEditor(activeEditorNodeId);
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  appearance="primary"
                  disabled={
                    !activeEditorDraft ||
                    activeEditorDraft.value.trim().length === 0 ||
                    !activeEditorContext
                  }
                  onClick={() => {
                    if (!activeEditorContext) return;
                    if (activeEditorDraft?.mode === "edit") {
                      commitEditingNode(
                        activeEditorContext.node.id,
                        activeEditorDraft.value
                      );
                      closeAddNodeEditor(activeEditorContext.node.id);
                    } else {
                      handleAddSubfolder(
                        activeEditorContext.node,
                        activeEditorContext.levelKey
                      );
                    }
                  }}
                >
                  {activeEditorDraft?.mode === "edit" ? "Save" : "Add"}
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
