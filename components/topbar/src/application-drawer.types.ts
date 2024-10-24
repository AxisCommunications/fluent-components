export type ApplicationDrawerContent = SingleApplicationDrawerContent & {
  children?: SingleApplicationDrawerContent[];
};

export type SingleApplicationDrawerContent = {
  id: string;
  /**
   * Size of icon shall be 16 for content with children and 20 for content without children.
   * For proper rendering, this should be a bundled filled and unfilled version of an icon.
   *  Created with bundleIcon().
   */
  icon: JSX.Element;
  /** Label to show in opened drawer. */
  label: string;
  /**
   * @deprecated
   *  Label to show in drawer trigger button when drawer is closed.
   *  If not set, label will be used.
   *  Unused for content with children.
   */
  triggerLabel?: string;
  /**
   * Group label to show before triggerLabel
   */
  triggerGroupShortName?: string;
  /**
   * Only available in `drawer v2`.
   * If link is set, the selector in the drawer will have link properties.
   */
  link?: string;
};

export type ApplicationDrawerProps = {
  /**
   * Selecting version will change the style of the drawer.
   * @default: `"v1"`
   */
  version?: "v1" | "v2";
  link?: { text: string; url: string };
  title: JSX.Element;
  content?: ApplicationDrawerContent[];
  applicationId: string;
  onChange: (id: string) => void;
};
