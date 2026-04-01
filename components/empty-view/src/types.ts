import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type IllustrationKind =
  | "add-user-profile"
  | "code-error"
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
  | "menu-item-focus"
  | "drag-menu"
  | "media-error"
  | "under-construction"
  | "add-user"
  | "add-user-group"
  | "add-user-to-group"
  | "appointment"
  | "bluetooth-permissions"
  | "bluetooth-permissons-error"
  | "cloud-connect"
  | "cloud-connect-error"
  | "cloud-location"
  | "create-data"
  | "desktop"
  | "disconnected"
  | "documents"
  | "door-error"
  | "email-sent"
  | "folder"
  | "grid-location"
  | "import-excel"
  | "launch"
  | "location"
  | "login"
  | "mil-permissions"
  | "navigation"
  | "no-emails"
  | "no-events"
  | "no-friends"
  | "no-reports"
  | "notifications"
  | "organization"
  | "password-sent"
  | "reset-password"
  | "set-password"
  | "sidebar"
  | "signed-documents"
  | "truck"
  | "two-factor-authentification"
  | "unpack"
  | "user"
  | "user-group"
  | "user-profile"
  | "welcome-plane"
  | "extend-system"
  | "migrate-system"
  | "new-system"
  | "search";

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
