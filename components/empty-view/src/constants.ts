import type { bundleIllustrationSmart } from "@axiscommunications/fluent-illustrations";
import { IllustrationKind } from "./types.js";

export type IllustrationModule = {
  default: ReturnType<typeof bundleIllustrationSmart>;
};

/**
 * Each illustration is loaded on demand from its own
 * `@axiscommunications/fluent-illustrations/<name>` module, so consumers only
 * download the illustrations they actually render.
 * Keep the import paths as string literals so bundlers can create one chunk
 * per illustration.
 */
export const illustrationLoaders: Record<
  IllustrationKind,
  () => Promise<IllustrationModule>
> = {
  "add-user-profile": () =>
    import("@axiscommunications/fluent-illustrations/add-user-profile"),
  "media-error": () =>
    import("@axiscommunications/fluent-illustrations/media-error"),
  "code-error": () =>
    import("@axiscommunications/fluent-illustrations/code-error"),
  data: () => import("@axiscommunications/fluent-illustrations/data"),
  devices: () => import("@axiscommunications/fluent-illustrations/devices"),
  "empty-folder": () =>
    import("@axiscommunications/fluent-illustrations/empty-folder"),
  "empty-space": () =>
    import("@axiscommunications/fluent-illustrations/empty-space"),
  "file-missing": () =>
    import("@axiscommunications/fluent-illustrations/file-missing"),
  general: () =>
    import("@axiscommunications/fluent-illustrations/empty-general"),
  media: () => import("@axiscommunications/fluent-illustrations/media"),
  "no-access": () =>
    import("@axiscommunications/fluent-illustrations/no-access"),
  "no-connection": () =>
    import("@axiscommunications/fluent-illustrations/no-connection"),
  "no-content": () =>
    import("@axiscommunications/fluent-illustrations/no-content"),
  "no-match": () => import("@axiscommunications/fluent-illustrations/no-match"),
  "no-match-general": () =>
    import("@axiscommunications/fluent-illustrations/no-match-general"),
  "no-sites": () => import("@axiscommunications/fluent-illustrations/no-sites"),
  "not-found": () =>
    import("@axiscommunications/fluent-illustrations/not-found"),
  prohibited: () =>
    import("@axiscommunications/fluent-illustrations/prohibited"),
  settings: () => import("@axiscommunications/fluent-illustrations/settings"),
  success: () => import("@axiscommunications/fluent-illustrations/success"),
  team: () => import("@axiscommunications/fluent-illustrations/team"),
  "under-construction": () =>
    import("@axiscommunications/fluent-illustrations/under-construction"),
  "add-user": () => import("@axiscommunications/fluent-illustrations/add-user"),
  "add-user-group": () =>
    import("@axiscommunications/fluent-illustrations/add-user-group"),
  "add-user-to-group": () =>
    import("@axiscommunications/fluent-illustrations/add-user-to-group"),
  appointment: () =>
    import("@axiscommunications/fluent-illustrations/appointment"),
  "bluetooth-permissions": () =>
    import("@axiscommunications/fluent-illustrations/bluetooth-permissions"),
  "bluetooth-permissons-error": () =>
    import(
      "@axiscommunications/fluent-illustrations/bluetooth-permissons-error"
    ),
  "cloud-connect": () =>
    import("@axiscommunications/fluent-illustrations/cloud-connect"),
  "cloud-connect-error": () =>
    import("@axiscommunications/fluent-illustrations/cloud-connect-error"),
  "cloud-location": () =>
    import("@axiscommunications/fluent-illustrations/cloud-location"),
  "create-data": () =>
    import("@axiscommunications/fluent-illustrations/create-data"),
  desktop: () => import("@axiscommunications/fluent-illustrations/desktop"),
  disconnected: () =>
    import("@axiscommunications/fluent-illustrations/disconnected"),
  documents: () => import("@axiscommunications/fluent-illustrations/documents"),
  "door-error": () =>
    import("@axiscommunications/fluent-illustrations/door-error"),
  "email-sent": () =>
    import("@axiscommunications/fluent-illustrations/email-sent"),
  folder: () => import("@axiscommunications/fluent-illustrations/folder"),
  "grid-location": () =>
    import("@axiscommunications/fluent-illustrations/grid-location"),
  "import-excel": () =>
    import("@axiscommunications/fluent-illustrations/import-excel"),
  launch: () => import("@axiscommunications/fluent-illustrations/launch"),
  location: () => import("@axiscommunications/fluent-illustrations/location"),
  login: () => import("@axiscommunications/fluent-illustrations/login"),
  "mil-permissions": () =>
    import("@axiscommunications/fluent-illustrations/mil-permissions"),
  navigation: () =>
    import("@axiscommunications/fluent-illustrations/navigation"),
  "no-emails": () =>
    import("@axiscommunications/fluent-illustrations/no-emails"),
  "no-events": () =>
    import("@axiscommunications/fluent-illustrations/no-events"),
  "no-friends": () =>
    import("@axiscommunications/fluent-illustrations/no-friends"),
  "no-reports": () =>
    import("@axiscommunications/fluent-illustrations/no-reports"),
  notifications: () =>
    import("@axiscommunications/fluent-illustrations/notifications"),
  organization: () =>
    import("@axiscommunications/fluent-illustrations/organization"),
  "password-sent": () =>
    import("@axiscommunications/fluent-illustrations/password-sent"),
  "reset-password": () =>
    import("@axiscommunications/fluent-illustrations/reset-password"),
  "set-password": () =>
    import("@axiscommunications/fluent-illustrations/set-password"),
  sidebar: () => import("@axiscommunications/fluent-illustrations/sidebar"),
  "signed-documents": () =>
    import("@axiscommunications/fluent-illustrations/signed-documents"),
  truck: () => import("@axiscommunications/fluent-illustrations/truck"),
  "two-factor-authentification": () =>
    import(
      "@axiscommunications/fluent-illustrations/two-factor-authentification"
    ),
  unpack: () => import("@axiscommunications/fluent-illustrations/unpack"),
  user: () => import("@axiscommunications/fluent-illustrations/user"),
  "user-group": () =>
    import("@axiscommunications/fluent-illustrations/user-group"),
  "user-profile": () =>
    import("@axiscommunications/fluent-illustrations/user-profile"),
  "welcome-plane": () =>
    import("@axiscommunications/fluent-illustrations/welcome-plane"),
  "extend-system": () =>
    import("@axiscommunications/fluent-illustrations/extend-system"),
  "instruction-conditional": () =>
    import("@axiscommunications/fluent-illustrations/instruction-conditional"),
  "instruction-crossline-counting": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-crossline-counting"
    ),
  "instruction-drag-menu-item": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-drag-menu-item"
    ),
  "instruction-fall-detection": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-fall-detection"
    ),
  "instruction-hard-hat-detection": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-hard-hat-detection"
    ),
  "instruction-high-speed-approaching-traffic": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-high-speed-approaching-traffic"
    ),
  "instruction-high-speed-one-way": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-high-speed-one-way"
    ),
  "instruction-line-crossing": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-line-crossing"
    ),
  "instruction-menu-item-focus": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-menu-item-focus"
    ),
  "instruction-migrate-system": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-migrate-system"
    ),
  "instruction-motion-in-area": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-motion-in-area"
    ),
  "instruction-motion-line-crossing": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-motion-line-crossing"
    ),
  "instruction-new-system": () =>
    import("@axiscommunications/fluent-illustrations/instruction-new-system"),
  "instruction-object-in-area": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-object-in-area"
    ),
  "instruction-occupancy-in-area": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-occupancy-in-area"
    ),
  "instruction-search": () =>
    import("@axiscommunications/fluent-illustrations/instruction-search"),
  "instruction-tailgating-detection": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-tailgating-detection"
    ),
  "instruction-time-in-area": () =>
    import("@axiscommunications/fluent-illustrations/instruction-time-in-area"),
  "instruction-zone-crossing": () =>
    import(
      "@axiscommunications/fluent-illustrations/instruction-zone-crossing"
    ),
} as const;
