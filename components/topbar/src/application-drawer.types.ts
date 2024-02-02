export type ApplicationDrawerContent = SingleApplicationDrawerContent & {
  children?: SingleApplicationDrawerContent[];
};

export type SingleApplicationDrawerContent = {
  id: string;
  /** For proper rendering, this should be a bundled filled and unfilled version of an icon.
   *  Created with bundleIcon(). */
  icon: JSX.Element;
  label: string;
};

export type ApplicationDrawerProps = {
  link?: { text: string; url: string };
  title: JSX.Element;
  content?: ApplicationDrawerContent[];
  applicationId: string;
  onChange: (id: string) => void;
};
