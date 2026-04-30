/**
 * Fluent UI Composite Components Library
 *
 * This folder contains custom composite components built using Fluent UI v9 base components.
 *
 * All components follow Fluent design guidelines:
 * ✓ Fluent-first: composed only from @fluentui/react-components
 * ✓ Token-driven: all styling via makeStyles + Fluent tokens
 * ✓ Accessible: semantic HTML, ARIA labels, keyboard support
 * ✓ Typed: strict TypeScript with explicit prop interfaces
 * ✓ Documented: JSDoc + Storybook stories for each component
 *
 * Components:
 * - FormField: Form control with label, input, validation messaging
 * - StatCard: Metric display card with trend indicator
 * - InfoCard: Content card with icon, title, description, action
 * - BreadcrumbHeader: Compact breadcrumb trail with inline title
 * - FullPageHeader: Page header with optional status, actions, and tabs
 * - SectionHeader: Secondary header for section context beneath the page header
 * - PageHeader: Top section with breadcrumb, title, actions
 * - FilterBar: Horizontal filters, sort, and search
 * - EmptyState: Hero message for empty content areas
 * - DataTable: Composable table with Root/Header/Row pattern
 * - Pagination: Page navigation with item range display
 */

export { FormField, type FormFieldProps } from "./FormField";
export {
  FileUpload,
  type FileUploadItem,
  type FileUploadItemStatus,
  type FileUploadProps,
} from "./FileUpload";
export { StatCard, type StatCardProps } from "./StatCard";
export { InfoCard, type InfoCardProps } from "./InfoCard";
export {
  BreadcrumbHeader,
  type BreadcrumbHeaderProps,
} from "./BreadcrumbHeader";
export {
  FullPageHeader,
  type FullPageHeaderProps,
  type FullPageHeaderStatus,
  type FullPageHeaderTab,
  type FullPageHeaderAction,
} from "./FullPageHeader";
export {
  SectionHeader,
  type SectionHeaderProps,
  type SectionHeaderAction,
} from "./SectionHeader";
export { PageHeader, type PageHeaderProps } from "./PageHeader";
export { FilterBar, type FilterBarProps } from "./FilterBar";
export {
  FilterToolbar,
  type FilterToolbarProps,
  type FilterToolbarAction,
  type FilterToolbarFilter,
} from "./FilterToolbar";
export {
  InlineFilterDrawer,
  ORGANISATION_NAVIGATION_TREE,
  type DeviceCategory,
  type DeviceDeployment,
  type DeviceDeploymentFilter,
  type DeviceHealth,
  type DeviceHealthFilter,
  type DeviceTypeFilter,
  type InlineFilterDrawerProps,
  type OrganisationNode,
  type OrganisationNodeType,
} from "./InlineFilterDrawer";
export { EmptyState, type EmptyStateProps } from "./EmptyState";
export {
  DataTable,
  DataTableRoot,
  DataTableHeader,
  DataTableRow,
  DataTableCell,
  type DataTableRootProps,
  type DataTableHeaderProps,
  type DataTableRowProps,
  type DataTableCellProps,
} from "./DataTable";
export { Pagination, type PaginationProps } from "./Pagination";
