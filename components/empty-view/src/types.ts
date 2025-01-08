import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { bundleIllustrationSmart } from "@axiscommunications/fluent-illustrations";

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
  | "no-match-general"
  | "no-sites"
  | "not-found"
  | "prohibited"
  | "settings"
  | "success"
  | "team"
  | "under-construction";

export interface ContentProps {
  readonly body: ReactNode;
  readonly illustration:
    | IllustrationKind
    | ReturnType<typeof bundleIllustrationSmart>;
  readonly title: string;
}

export type EmptyViewProps = PropsWithChildren<
  {
    readonly after?: ReactNode;
    readonly illustration:
      | IllustrationKind
      | ReturnType<typeof bundleIllustrationSmart>;
    readonly title: string;
  } & HtmlDivAttributesRestProps
>;

export type HtmlDivAttributesRestProps = Pick<
  HTMLAttributes<HTMLDivElement>,
  "className" | "style"
>;
