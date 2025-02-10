import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  InlineDrawer,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { HomeFilled, HomeRegular, bundleIcon } from "@fluentui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteCategory } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import { NavigationFooter } from "./navigation-footer";
import { NavigationMenuList } from "./navigation-menu-list";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);

const componentId = "navigation-menu";
export const navigationMenuClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "300px",
    ...shorthands.border(0),
  },
  body: {
    backgroundImage: `linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to bottom, ${tokens.colorNeutralStroke1}, ${tokens.colorNeutralBackground3})`,
    backgroundColor: tokens.colorNeutralBackground3,
    backgroundSize: "100% 2px, 100% 2px, 94% 1px, 100% 0px",
    ...shorthands.margin(0),
    ...shorthands.padding(
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS,
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS
    ),
    ":first-child": {
      paddingTop: "unset",
    },
  },
  header: {
    ...shorthands.margin(0),
    ...shorthands.padding(
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS,
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS
    ),
    backgroundColor: tokens.colorNeutralBackground3,
  },
  footer: {
    ...shorthands.margin(0),
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingVerticalS,
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS
    ),
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

export function useNavigationMenuStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(navigationMenuClassNames.root, styles.root);
  return { styles, rootStyle };
}

export function NavigationMenu({ ...rest }) {
  const { styles, rootStyle } = useNavigationMenuStyles();
  const navigate = useNavigate();

  return (
    <InlineDrawer
      data-testid={componentId}
      position={"start"}
      open={true}
      className={rootStyle}
      {...rest}
    >
      <DrawerHeader className={styles.header}>
        <div>
          <Button
            appearance="transparent"
            icon={<HomeIcon />}
            onClick={() => navigate(routes.Home)}
          >
            fluent components
          </Button>
        </div>
      </DrawerHeader>
      <DrawerBody className={styles.body}>
        <Accordion multiple defaultOpenItems={["1", "2", "3"]}>
          <AccordionItem value="1">
            <AccordionHeader size="small">Misc</AccordionHeader>
            <AccordionPanel>
              <NavigationMenuList category={RouteCategory.MISC} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader size="small">Components</AccordionHeader>
            <AccordionPanel>
              <NavigationMenuList category={RouteCategory.COMPONENT} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionHeader size="small">Styles</AccordionHeader>
            <AccordionPanel>
              <NavigationMenuList category={RouteCategory.STYLE} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DrawerBody>
      <DrawerFooter className={styles.footer}>
        <NavigationFooter />
      </DrawerFooter>
    </InlineDrawer>
  );
}
