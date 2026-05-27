import {
  Badge,
  Card,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  AppsRegular,
  PeopleRegular,
  RocketRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterToolbar } from "../components/composites/FilterToolbar";
import { FullPageHeader } from "../components/composites/FullPageHeader";

const useStyles = makeStyles({
  canvas: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXL,
    width: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  surface: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingHorizontalXL,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow16,
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },

  contentCard: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    minHeight: "180px",
    padding: tokens.spacingHorizontalL,
  },

  contentEyebrow: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  contentTitle: {
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
  },

  contentBody: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase300,
  },

  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
});

const LayoutPatternPreview = () => {
  const styles = useStyles();

  return (
    <div className={styles.canvas}>
      <div className={styles.surface}>
        <FullPageHeader
          breadcrumbs={[
            { label: "Platform", onClick: () => console.log("Platform") },
            {
              label: "Applications",
              onClick: () => console.log("Applications"),
            },
            { label: "Fleet Control" },
          ]}
          title="Fleet Control"
          status={{
            label: "Healthy",
            meta: "24 active deployments",
            color: "success",
          }}
          actions={[
            {
              label: "Create deployment",
              icon: <RocketRegular />,
              appearance: "primary",
              onClick: () => console.log("Create deployment"),
            },
            {
              label: "Manage access",
              icon: <PeopleRegular />,
              appearance: "secondary",
              onClick: () => console.log("Manage access"),
            },
            {
              label: "Connect app",
              icon: <AppsRegular />,
              appearance: "secondary",
              onClick: () => console.log("Connect app"),
            },
          ]}
          tabs={[
            { value: "overview", label: "Overview" },
            { value: "deployments", label: "Deployments" },
            { value: "devices", label: "Devices" },
            { value: "activity", label: "Activity" },
          ]}
          defaultSelectedTab="deployments"
        />

        <FilterToolbar
          filters={[
            { id: "status-active", label: "Status: Active" },
            { id: "region-emea", label: "Region: EMEA" },
            { id: "channel-stable", label: "Channel: Stable" },
            { id: "owner-platform", label: "Owner: Platform" },
          ]}
          defaultSelectedFilterIds={["status-active", "region-emea"]}
          searchPlaceholder="Search deployments"
          primaryActions={[
            {
              id: "bulk-restart",
              label: "Restart selected",
              appearance: "primary",
            },
            { id: "export", label: "Export", appearance: "secondary" },
          ]}
          secondaryActions={[
            { id: "refresh", label: "Refresh", appearance: "subtle" },
          ]}
          onSearchChange={(value) => console.log("search", value)}
        />

        <div className={styles.contentGrid}>
          <Card className={styles.contentCard}>
            <Text className={styles.contentEyebrow}>Release train</Text>
            <Text className={styles.contentTitle}>Stable channel rollout</Text>
            <Text className={styles.contentBody}>
              14 sites are receiving the current production image in phased
              waves with automatic health checks between each stage.
            </Text>
            <div className={styles.footerRow}>
              <Badge appearance="tint" color="success">
                On track
              </Badge>
              <Text className={styles.contentBody}>Next wave in 18 min</Text>
            </div>
          </Card>

          <Card className={styles.contentCard}>
            <Text className={styles.contentEyebrow}>Exceptions</Text>
            <Text className={styles.contentTitle}>Pending manual review</Text>
            <Text className={styles.contentBody}>
              3 deployments require approval because device health regressed
              during the pre-check window.
            </Text>
            <div className={styles.footerRow}>
              <Badge appearance="tint" color="warning">
                Needs review
              </Badge>
              <Text className={styles.contentBody}>
                Assigned to Platform Ops
              </Text>
            </div>
          </Card>

          <Card className={styles.contentCard}>
            <Text className={styles.contentEyebrow}>Coverage</Text>
            <Text className={styles.contentTitle}>
              Regional rollout summary
            </Text>
            <Text className={styles.contentBody}>
              92% of enrolled devices report healthy telemetry after the last
              deployment, with EMEA leading adoption.
            </Text>
            <div className={styles.footerRow}>
              <Badge appearance="tint" color="brand">
                92% complete
              </Badge>
              <Text className={styles.contentBody}>Updated 5 minutes ago</Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "UI patterns/Layout Patterns",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Recommended hierarchy for pages that already have a primary page header: use FullPageHeader for page identity and FilterToolbar below it for task controls such as filtering, search, and bulk actions.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LayoutPatternPreview />,
};
