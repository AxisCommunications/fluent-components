import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type IllustrationKind =
  | "add-user-profile"
  | "data"
  | "devices"
  | "empty-folder"
  | "empty-space"
  | "file-missing"
  | "general"
  | "media"
  | "no-access"
  | "no-connection"
  | "no-content"
  | "no-match"
  | "no-sites"
  | "not-found"
  | "settings"
  | "success"
  | "team"
  | "under-construction";

export interface ContentProps {
  readonly body: ReactNode;
  readonly illustration: IllustrationKind;
  readonly title: string;
}

export type EmptyViewProps = PropsWithChildren<
  {
    readonly after?: ReactNode;
    readonly illustration: IllustrationKind;
    readonly title: string;
  } & HtmlDivAttributesRestProps
>;

export type HtmlDivAttributesRestProps = Pick<
  HTMLAttributes<HTMLDivElement>,
  "className" | "style"
>;
