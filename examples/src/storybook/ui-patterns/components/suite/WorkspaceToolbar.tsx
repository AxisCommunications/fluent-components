import {
  Button,
  Divider,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Toolbar,
  ToolbarButton,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  ChevronDownRegular,
  FilterRegular,
  GridRegular,
  SearchRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    ...{
      border: `1px solid ${tokens.colorTransparentStroke}`,
      borderRadius: tokens.borderRadiusMedium,
    },
  },
  start: {
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
    flex: 1,
  },
  end: {
    display: "flex",
    alignItems: "center",
    columnGap: "2px",
  },
  compactInput: {
    width: "120px",
  },
  searchInput: {
    width: "180px",
  },
});

export function WorkspaceToolbar() {
  const styles = useStyles();

  return (
    <Toolbar className={styles.root} aria-label="Workspace toolbar">
      <div className={styles.start}>
        <Button
          appearance="primary"
          size="small"
          icon={<FilterRegular fontSize={16} />}
        >
          Button
        </Button>

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button
              size="small"
              appearance="secondary"
              icon={<ChevronDownRegular fontSize={14} />}
            >
              Sort
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Name</MenuItem>
              <MenuItem>Date</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>

        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />

        <Divider vertical />

        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />

        <Divider vertical />

        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
      </div>

      <div className={styles.end}>
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <ToolbarButton
          appearance="subtle"
          icon={<GridRegular fontSize={16} />}
        />
        <Input
          className={styles.searchInput}
          size="small"
          contentBefore={<SearchRegular fontSize={12} />}
          placeholder="Placeholder text"
        />
      </div>
    </Toolbar>
  );
}
