import {
  Menu,
  MenuItem,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuSplitGroup,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  DarkThemeFilled,
  DarkThemeRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import { ThemeSubmenuProps } from "./profile-menu.types";
import { useTranslation } from "./translation-context";

const ThemeIcon = bundleIcon(DarkThemeFilled, DarkThemeRegular);

type KnownTheme = "light" | "dark";
function isKnownTheme(theme: unknown): theme is KnownTheme {
  return theme === "light" || theme === "dark";
}

export const ThemeSubmenu = ({
  options,
  value,
  onChange,
}: ThemeSubmenuProps) => {
  const { t } = useTranslation();

  const currentTheme = options?.find(({ id }) => id === value);
  const label = currentTheme?.label;
  const id = currentTheme?.id;
  const translatedLabel = isKnownTheme(id) ? t(id) : id;

  return (
    <Menu hasCheckmarks={true} checkedValues={{ theme: value ? [value] : [] }}>
      <MenuSplitGroup>
        <MenuTrigger>
          <MenuItem icon={<ThemeIcon />} data-testid="theme-menu-trigger">
            {label ?? translatedLabel}
          </MenuItem>
        </MenuTrigger>
      </MenuSplitGroup>
      <MenuPopover>
        <MenuList>
          {options?.map(({ id, label }) => {
            const translatedLabel = isKnownTheme(id) ? t(id) : id;
            return (
              <MenuItemRadio
                name={"theme"}
                data-testid={`theme-menu-item-${id}`}
                key={id}
                value={id}
                onClick={() => onChange(id)}
              >
                {label ?? translatedLabel}
              </MenuItemRadio>
            );
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
