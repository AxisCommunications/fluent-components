import {
  AdvancedColumnDef,
  AdvancedDataGrid,
} from "@axiscommunications/fluent-advanced-data-grid";
import { Badge } from "@fluentui/react-components";

interface Device {
  id: string;
  name: string;
  model: string;
  type: string;
  location: string;
  status: "Online" | "Offline" | "Maintenance";
  firmware: string;
  storageGb: number;
}

const devices: Device[] = [
  {
    id: "1",
    name: "Entrance Cam",
    model: "P3265-LVE",
    type: "Dome",
    location: "Building A",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 256,
  },
  {
    id: "2",
    name: "Lobby Cam",
    model: "M3216-LVE",
    type: "Dome",
    location: "Building A",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 128,
  },
  {
    id: "3",
    name: "Parking North",
    model: "Q6135-LE",
    type: "PTZ",
    location: "Parking",
    status: "Maintenance",
    firmware: "11.8.61",
    storageGb: 512,
  },
  {
    id: "4",
    name: "Parking South",
    model: "Q6135-LE",
    type: "PTZ",
    location: "Parking",
    status: "Offline",
    firmware: "11.8.61",
    storageGb: 512,
  },
  {
    id: "5",
    name: "Warehouse 1",
    model: "P1455-LE",
    type: "Bullet",
    location: "Warehouse",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 256,
  },
  {
    id: "6",
    name: "Warehouse 2",
    model: "P1455-LE",
    type: "Bullet",
    location: "Warehouse",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 256,
  },
  {
    id: "7",
    name: "Dock Camera",
    model: "P1455-LE",
    type: "Bullet",
    location: "Warehouse",
    status: "Offline",
    firmware: "11.7.45",
    storageGb: 128,
  },
  {
    id: "8",
    name: "Rooftop PTZ",
    model: "Q6225-LE",
    type: "PTZ",
    location: "Roof",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 1024,
  },
  {
    id: "9",
    name: "Server Room",
    model: "M4317-PLVE",
    type: "Multisensor",
    location: "Building B",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 512,
  },
  {
    id: "10",
    name: "Cafeteria",
    model: "M3216-LVE",
    type: "Dome",
    location: "Building B",
    status: "Maintenance",
    firmware: "11.8.61",
    storageGb: 128,
  },
  {
    id: "11",
    name: "Reception B",
    model: "P3265-LVE",
    type: "Dome",
    location: "Building B",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 256,
  },
  {
    id: "12",
    name: "Loading Bay",
    model: "P1455-LE",
    type: "Bullet",
    location: "Warehouse",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 256,
  },
  {
    id: "13",
    name: "Stairwell A",
    model: "M3216-LVE",
    type: "Dome",
    location: "Building A",
    status: "Offline",
    firmware: "11.7.45",
    storageGb: 64,
  },
  {
    id: "14",
    name: "Perimeter East",
    model: "Q1798-LE",
    type: "Bullet",
    location: "Perimeter",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 1024,
  },
  {
    id: "15",
    name: "Perimeter West",
    model: "Q1798-LE",
    type: "Bullet",
    location: "Perimeter",
    status: "Online",
    firmware: "11.9.12",
    storageGb: 1024,
  },
];

const statusColor: Record<Device["status"], "success" | "danger" | "warning"> =
  {
    Online: "success",
    Offline: "danger",
    Maintenance: "warning",
  };

const columns: AdvancedColumnDef<Device>[] = [
  { columnId: "name", header: "Name", getValue: (d) => d.name, width: 160 },
  { columnId: "model", header: "Model", getValue: (d) => d.model, width: 140 },
  {
    columnId: "type",
    header: "Type",
    type: "select",
    groupable: true,
    selectOptions: [
      { label: "Dome", value: "Dome" },
      { label: "PTZ", value: "PTZ" },
      { label: "Bullet", value: "Bullet" },
      { label: "Multisensor", value: "Multisensor" },
    ],
    getValue: (d) => d.type,
    width: 140,
  },
  {
    columnId: "location",
    header: "Location",
    groupable: true,
    getValue: (d) => d.location,
    width: 150,
  },
  {
    columnId: "status",
    header: "Status",
    type: "select",
    selectOptions: [
      { label: "Online", value: "Online" },
      { label: "Offline", value: "Offline" },
      { label: "Maintenance", value: "Maintenance" },
    ],
    getValue: (d) => d.status,
    renderCell: (d) => (
      <Badge appearance="tint" color={statusColor[d.status]}>
        {d.status}
      </Badge>
    ),
    width: 140,
  },
  {
    columnId: "firmware",
    header: "Firmware",
    getValue: (d) => d.firmware,
    width: 120,
  },
  {
    columnId: "storageGb",
    header: "Storage (GB)",
    type: "number",
    aggregation: "sum",
    getValue: (d) => d.storageGb,
    width: 130,
  },
];

export function AdvancedDataGridExample() {
  return (
    <AdvancedDataGrid
      items={devices}
      columns={columns}
      getRowId={(d) => d.id}
      defaultPageSize={10}
      pageSizeOptions={[5, 10, 25]}
      defaultFilterModel={[
        {
          columnId: "status",
          operator: "equals",
          value: "Online",
          enabled: false,
        },
        { columnId: "type", operator: "equals", value: "Dome", enabled: false },
        {
          columnId: "storageGb",
          operator: "greaterThan",
          value: "256",
          enabled: false,
        },
      ]}
      exportFileName="devices"
      aria-label="Devices"
    />
  );
}

export const AdvancedDataGridExampleAsString = `import {
  AdvancedColumnDef,
  AdvancedDataGrid,
} from "@axiscommunications/fluent-advanced-data-grid";
import { Badge } from "@fluentui/react-components";

interface Device {
  id: string;
  name: string;
  model: string;
  type: string;
  location: string;
  status: "Online" | "Offline" | "Maintenance";
  firmware: string;
  storageGb: number;
}

const columns: AdvancedColumnDef<Device>[] = [
  { columnId: "name", header: "Name", getValue: (d) => d.name, width: 160 },
  { columnId: "model", header: "Model", getValue: (d) => d.model, width: 140 },
  {
    columnId: "type",
    header: "Type",
    type: "select",
    groupable: true,
    selectOptions: [
      { label: "Dome", value: "Dome" },
      { label: "PTZ", value: "PTZ" },
      { label: "Bullet", value: "Bullet" },
      { label: "Multisensor", value: "Multisensor" },
    ],
    getValue: (d) => d.type,
  },
  { columnId: "location", header: "Location", groupable: true, getValue: (d) => d.location },
  {
    columnId: "status",
    header: "Status",
    type: "select",
    getValue: (d) => d.status,
    renderCell: (d) => <Badge appearance="tint">{d.status}</Badge>,
  },
  { columnId: "firmware", header: "Firmware", getValue: (d) => d.firmware },
  {
    columnId: "storageGb",
    header: "Storage (GB)",
    type: "number",
    aggregation: "sum",
    getValue: (d) => d.storageGb,
  },
];

export function AdvancedDataGridExample() {
  return (
    <AdvancedDataGrid
      items={devices}
      columns={columns}
      getRowId={(d) => d.id}
      defaultPageSize={10}
      pageSizeOptions={[5, 10, 25]}
      defaultFilterModel={[
        { columnId: "status", operator: "equals", value: "Online", enabled: false },
        { columnId: "type", operator: "equals", value: "Dome", enabled: false },
        {
          columnId: "storageGb",
          operator: "greaterThan",
          value: "256",
          enabled: false,
        },
      ]}
      exportFileName="devices"
      aria-label="Devices"
    />
  );
}`;
