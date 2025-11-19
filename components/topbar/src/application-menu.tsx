import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  mergeClasses,
} from "@fluentui/react-components";
import { ApplicationMenuProps } from "./application-menu.types";
import { appIcon, appLabel } from "./application-utils";
import { useApplicationStyles } from "./application.styles";
import { ApplicationArea } from "./top-bar.types";
import { useTranslation } from "./translation-context";

export const ApplicationMenu = ({
  customContent,
  options,
  value,
  onChange,
  applicationArea,
}: ApplicationMenuProps & { applicationArea?: ApplicationArea }) => {
  const { t } = useTranslation();
  const styles = useApplicationStyles();

  const currentSelection = options?.find(({ id }) => id === value);
  const isStandalone = options?.length === 1;

  const onlyCustomContent = !options?.length && !!customContent;

  return (
    <>
      <div
        className={mergeClasses(
          styles.menuRectangle,
          applicationArea === "mySystems" && styles.mySystemsMenuRectangle,
          applicationArea === "myAxis" && styles.myAxisMenuRectangle,
          applicationArea === "myBusiness" && styles.myBusinessMenuRectangle,
          applicationArea === "myPartners" && styles.myPartnersMenuRectangle
        )}
      >
        <div
          className={mergeClasses(
            styles.currentIcon,
            applicationArea !== undefined && styles.applicationAreaIcon
          )}
        >
          {currentSelection
            ? (currentSelection.icon ??
              appIcon(currentSelection.id, applicationArea !== undefined))
            : undefined}
        </div>
      </div>
      <Menu
        positioning={{
          offset:
            applicationArea !== undefined
              ? { mainAxis: 2, crossAxis: 36 }
              : undefined,
        }}
      >
        <MenuTrigger>
          <MenuButton
            appearance="subtle"
            className={mergeClasses(
              isStandalone && styles.standalone,
              styles.singleLine
            )}
            data-testid="application-menu-trigger"
            menuIcon={isStandalone ? null : undefined}
          >
            <span className={styles.applicationLabel}>
              {currentSelection
                ? (currentSelection.label ?? appLabel(t, currentSelection.id))
                : // FIXME: use translateable placeholder
                  ""}
            </span>
          </MenuButton>
        </MenuTrigger>
        <MenuPopover className={styles.menuPopover}>
          <MenuList>
            {customContent !== undefined && (
              <>
                {customContent}
                {!onlyCustomContent && <MenuDivider />}
              </>
            )}
            {options?.map(({ id, icon, label }) => (
              <MenuItem
                data-testid={`application-menu-item-${id}`}
                icon={
                  <div
                    className={mergeClasses(id === value && styles.selectedApp)}
                  >
                    {icon ?? appIcon(id)}
                  </div>
                }
                key={id}
                onClick={() => {
                  if (currentSelection?.id !== id) {
                    onChange?.(id);
                  }
                }}
              >
                <Text
                  className={mergeClasses(
                    id === value && styles.selectedAppLabel
                  )}
                >
                  {label ?? appLabel(t, id)}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

ApplicationMenu.displayName = "ApplicationMenu";
