import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

/**
 * Expected appearance:
 * - Tab has the same size as the "large" tab, 44x40
 * - Icon is 20x20
 * - Selected tab:
 *    - icon color is colorNeutralForeground1
 *    - background color is colorNeutralBackground3Selected
 * - Padding:
 *    - 4px padding between tabs
 *    - container has these paddings (top 24px, side 8px, bottom 16px)
 *
 * How to create navigation:
 * ```
 * const navStyles = useNavigationStyles()
 * const { rootStyle } = useTabStyles({ selected: true })
 *
 * return (
 *    <div className={navStyles.container}>
 *      <TabList
 *        className={navStyles.tabList}
 *        size="large"
 *        vertical
 *      >
 *        <Tab className={rootStyle} icon={{ className: navStyles.iconSize, children: <Icon /> }} />
 *        <Tab className={rootStyle} icon={{ className: navStyles.iconSize, children: <Icon /> }} />
 *        <div className={navStyles.spacer} />
 *        <Tab className={rootStyle} icon={{ className: navStyles.iconSize, children: <Icon /> }} />
 *      </TabList>
 *    </div>
 * )
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
  iconSize: {
    fontSize: "20px",
  },
  spacer: {
    flexGrow: 1,
  },
  tabList: {
    height: "100%",
    rowGap: tokens.spacingVerticalXS,
  },
});
