import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

/**
 * How to use:
 * ```
 * <div className={navStyles.container}>
 *   <TabList
 *     className={navStyles.tabList}
 *     size="large"
 *     vertical
 *   >
 *     <Tab />
 *     <Tab />
 *     <div className={navStyles.spacer}/>
 *     <Tab />
 *   </TabList>
 * </div>
 * ```
 */
export const useNavigationStyles = makeStyles({
  container: {
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalS,
      tokens.spacingVerticalL
    ),
    backgroundColor: tokens.colorNeutralBackground4,
  },
  spacer: {
    flexGrow: 1,
  },
  tabList: {
    height: "100%",
    rowGap: tokens.spacingVerticalXS,
  },
});
