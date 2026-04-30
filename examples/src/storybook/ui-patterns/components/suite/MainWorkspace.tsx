import {
  Badge,
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  Button,
  Caption1,
  Tab,
  TabList,
  Tag,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  AppsRegular,
  ChevronDownRegular,
  DismissRegular,
  FilterRegular,
  PeopleRegular,
  RocketRegular,
  SettingsRegular,
} from "@fluentui/react-icons";
import { DesignMatchedTable } from "../DesignMatchedTable";
import { WorkspaceToolbar } from "./WorkspaceToolbar";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "40px 32px 44px 40px 1fr",
    rowGap: "8px",
    ...{
      padding: "16px",
    },
    height: "100%",
    minWidth: 0,
  },
  workspaceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workspaceIdentity: {
    display: "flex",
    alignItems: "center",
    columnGap: "16px",
  },
  title: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: "28px",
  },
  actionGroup: {
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
  },
  card: {
    ...{
      border: `1px solid ${tokens.colorNeutralStroke2}`,
      borderRadius: tokens.borderRadiusMedium,
      padding: "16px",
    },
    display: "grid",
    gridTemplateRows: "28px 32px 1fr 48px",
    rowGap: "8px",
    minHeight: 0,
  },
  cardTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: "28px",
  },
  chipRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chips: {
    display: "flex",
    columnGap: "8px",
  },
  tableWrap: {
    minHeight: 0,
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...{
      padding: "0 8px",
    },
  },
  paginationActions: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
});

const workspaceActions = [
  {
    key: "pipeline",
    label: "Create deployment pipeline",
    icon: <RocketRegular fontSize={16} />,
  },
  { key: "app", label: "Create app", icon: <AppsRegular fontSize={16} /> },
  {
    key: "access",
    label: "Manage access",
    icon: <PeopleRegular fontSize={16} />,
  },
  {
    key: "settings",
    label: "Workspace settings",
    icon: <SettingsRegular fontSize={16} />,
  },
];

export function MainWorkspace() {
  const styles = useStyles();

  return (
    <main className={styles.root}>
      <Breadcrumb aria-label="workspace breadcrumb">
        <BreadcrumbButton>Home</BreadcrumbButton>
        <BreadcrumbDivider />
        <BreadcrumbButton>Workspace</BreadcrumbButton>
      </Breadcrumb>

      <section className={styles.workspaceHeader}>
        <div className={styles.workspaceIdentity}>
          <h1 className={styles.title}>Workspace</h1>
          <Badge size="small" color="danger">
            Badge
          </Badge>
        </div>
        <div className={styles.actionGroup}>
          {workspaceActions.map((action) => (
            <Button key={action.key} size="small" icon={action.icon}>
              {action.label}
            </Button>
          ))}
        </div>
      </section>

      <TabList defaultSelectedValue="tab1">
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Data</Tab>
        <Tab value="tab3">Pipelines</Tab>
      </TabList>

      <WorkspaceToolbar />

      <section className={styles.card}>
        <div className={styles.cardTitle}>Table name</div>

        <div className={styles.chipRow}>
          <div className={styles.chips}>
            <Tag
              dismissible
              dismissIcon={{ children: <DismissRegular fontSize={12} /> }}
            >
              Primary text
            </Tag>
            <Tag
              dismissible
              dismissIcon={{ children: <DismissRegular fontSize={12} /> }}
            >
              Primary text
            </Tag>
            <Tag
              dismissible
              dismissIcon={{ children: <DismissRegular fontSize={12} /> }}
            >
              Primary text
            </Tag>
            <Tag
              dismissible
              dismissIcon={{ children: <DismissRegular fontSize={12} /> }}
            >
              Primary text
            </Tag>
          </div>

          <Button
            appearance="secondary"
            size="small"
            icon={<FilterRegular fontSize={14} />}
            iconPosition="before"
          >
            Filter
            <ChevronDownRegular fontSize={12} />
          </Button>
        </div>

        <div className={styles.tableWrap}>
          <DesignMatchedTable />
        </div>

        <footer className={styles.pagination}>
          <Caption1>Showing items 1 - 20 of 274</Caption1>
          <div className={styles.paginationActions}>
            <Button appearance="subtle" size="small">
              &lt;
            </Button>
            <Button appearance="subtle" size="small">
              Page 1 of 14
            </Button>
            <Button appearance="subtle" size="small">
              &gt;
            </Button>
          </div>
        </footer>
      </section>
    </main>
  );
}
