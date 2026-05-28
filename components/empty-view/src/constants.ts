import {
  AddUserDark,
  AddUserGroupDark,
  AddUserGroupLight,
  AddUserLight,
  AddUserProfileDark,
  AddUserProfileLight,
  AddUserToGroupDark,
  AddUserToGroupLight,
  AppointmentDark,
  AppointmentLight,
  BluetoothPermissionsDark,
  BluetoothPermissionsLight,
  BluetoothPermissonsErrorDark,
  BluetoothPermissonsErrorLight,
  CloudConnectDark,
  CloudConnectErrorDark,
  CloudConnectErrorLight,
  CloudConnectLight,
  CloudLocationDark,
  CloudLocationLight,
  CodeErrorDark,
  CodeErrorLight,
  CreateDataDark,
  CreateDataLight,
  DataDark,
  DataLight,
  DesktopDark,
  DesktopLight,
  DevicesDark,
  DevicesLight,
  DisconnectedDark,
  DisconnectedLight,
  DocumentsDark,
  DocumentsLight,
  DoorErrorDark,
  DoorErrorLight,
  EmailSentDark,
  EmailSentLight,
  EmptyFolderDark,
  EmptyFolderLight,
  EmptyGeneralDark,
  EmptyGeneralLight,
  EmptySpaceDark,
  EmptySpaceLight,
  ExtendSystemDark,
  ExtendSystemLight,
  FileMissingDark,
  FileMissingLight,
  FolderDark,
  FolderLight,
  GridLocationDark,
  GridLocationLight,
  ImportExcelDark,
  ImportExcelLight,
  InstructionConditionalDark,
  InstructionConditionalLight,
  InstructionCrosslineCountingDark,
  InstructionCrosslineCountingLight,
  InstructionDragMenuItemDark,
  InstructionDragMenuItemLight,
  InstructionFallDetectionDark,
  InstructionFallDetectionLight,
  InstructionHardHatDetectionDark,
  InstructionHardHatDetectionLight,
  InstructionHighSpeedApproachingTrafficDark,
  InstructionHighSpeedApproachingTrafficLight,
  InstructionHighSpeedOneWayDark,
  InstructionHighSpeedOneWayLight,
  InstructionLineCrossingDark,
  InstructionLineCrossingLight,
  InstructionMenuItemFocusDark,
  InstructionMenuItemFocusLight,
  InstructionMigrateSystemDark,
  InstructionMigrateSystemLight,
  InstructionMotionInAreaDark,
  InstructionMotionInAreaLight,
  InstructionMotionLineCrossingDark,
  InstructionMotionLineCrossingLight,
  InstructionNewSystemDark,
  InstructionNewSystemLight,
  InstructionObjectInAreaDark,
  InstructionObjectInAreaLight,
  InstructionOccupancyInAreaDark,
  InstructionOccupancyInAreaLight,
  InstructionSearchDark,
  InstructionSearchLight,
  InstructionTailgatingDetectionDark,
  InstructionTailgatingDetectionLight,
  InstructionTimeInAreaDark,
  InstructionTimeInAreaLight,
  InstructionZoneCrossingDark,
  InstructionZoneCrossingLight,
  LaunchDark,
  LaunchLight,
  LocationDark,
  LocationLight,
  LoginDark,
  LoginLight,
  MediaDark,
  MediaErrorDark,
  MediaErrorLight,
  MediaLight,
  MilPermissionsDark,
  MilPermissionsLight,
  NavigationDark,
  NavigationLight,
  NoAccessDark,
  NoAccessLight,
  NoConnectionDark,
  NoConnectionLight,
  NoContentDark,
  NoContentLight,
  NoEmailsDark,
  NoEmailsLight,
  NoEventsDark,
  NoEventsLight,
  NoFriendsDark,
  NoFriendsLight,
  NoMatchDark,
  NoMatchGeneralDark,
  NoMatchGeneralLight,
  NoMatchLight,
  NoReportsDark,
  NoReportsLight,
  NoSitesDark,
  NoSitesLight,
  NotFoundDark,
  NotFoundLight,
  NotificationsDark,
  NotificationsLight,
  OrganizationDark,
  OrganizationLight,
  PasswordSentDark,
  PasswordSentLight,
  ProhibitedDark,
  ProhibitedLight,
  ResetPasswordDark,
  ResetPasswordLight,
  SetPasswordDark,
  SetPasswordLight,
  SettingsDark,
  SettingsLight,
  SidebarDark,
  SidebarLight,
  SignedDocumentsDark,
  SignedDocumentsLight,
  SuccessDark,
  SuccessLight,
  TeamDark,
  TeamLight,
  TruckDark,
  TruckLight,
  TwoFactorAuthentificationDark,
  TwoFactorAuthentificationLight,
  UnderConstructionDark,
  UnderConstructionLight,
  UnpackDark,
  UnpackLight,
  UserDark,
  UserGroupDark,
  UserGroupLight,
  UserLight,
  UserProfileDark,
  UserProfileLight,
  WelcomePlaneDark,
  WelcomePlaneLight,
  bundleIllustrationSmart,
} from "@axiscommunications/fluent-illustrations";
import { IllustrationKind } from "./types.js";

export const Illustration: Record<
  IllustrationKind,
  ReturnType<typeof bundleIllustrationSmart>
> = {
  "add-user-profile": bundleIllustrationSmart(
    AddUserProfileDark,
    AddUserProfileLight
  ),

  "media-error": bundleIllustrationSmart(MediaErrorDark, MediaErrorLight),
  "code-error": bundleIllustrationSmart(CodeErrorDark, CodeErrorLight),

  data: bundleIllustrationSmart(DataDark, DataLight),
  devices: bundleIllustrationSmart(DevicesDark, DevicesLight),
  "empty-folder": bundleIllustrationSmart(EmptyFolderDark, EmptyFolderLight),
  "empty-space": bundleIllustrationSmart(EmptySpaceDark, EmptySpaceLight),
  "file-missing": bundleIllustrationSmart(FileMissingDark, FileMissingLight),
  general: bundleIllustrationSmart(EmptyGeneralDark, EmptyGeneralLight),
  media: bundleIllustrationSmart(MediaDark, MediaLight),
  "no-access": bundleIllustrationSmart(NoAccessDark, NoAccessLight),
  "no-connection": bundleIllustrationSmart(NoConnectionDark, NoConnectionLight),
  "no-content": bundleIllustrationSmart(NoContentDark, NoContentLight),
  "no-match": bundleIllustrationSmart(NoMatchDark, NoMatchLight),
  "no-match-general": bundleIllustrationSmart(
    NoMatchGeneralDark,
    NoMatchGeneralLight
  ),
  "no-sites": bundleIllustrationSmart(NoSitesDark, NoSitesLight),
  "not-found": bundleIllustrationSmart(NotFoundDark, NotFoundLight),
  prohibited: bundleIllustrationSmart(ProhibitedDark, ProhibitedLight),
  settings: bundleIllustrationSmart(SettingsDark, SettingsLight),
  success: bundleIllustrationSmart(SuccessDark, SuccessLight),
  team: bundleIllustrationSmart(TeamDark, TeamLight),
  "under-construction": bundleIllustrationSmart(
    UnderConstructionDark,
    UnderConstructionLight
  ),
  "add-user": bundleIllustrationSmart(AddUserDark, AddUserLight),
  "add-user-group": bundleIllustrationSmart(
    AddUserGroupDark,
    AddUserGroupLight
  ),
  "add-user-to-group": bundleIllustrationSmart(
    AddUserToGroupDark,
    AddUserToGroupLight
  ),
  appointment: bundleIllustrationSmart(AppointmentDark, AppointmentLight),
  "bluetooth-permissions": bundleIllustrationSmart(
    BluetoothPermissionsDark,
    BluetoothPermissionsLight
  ),
  "bluetooth-permissons-error": bundleIllustrationSmart(
    BluetoothPermissonsErrorDark,
    BluetoothPermissonsErrorLight
  ),
  "cloud-connect": bundleIllustrationSmart(CloudConnectDark, CloudConnectLight),
  "cloud-connect-error": bundleIllustrationSmart(
    CloudConnectErrorDark,
    CloudConnectErrorLight
  ),
  "cloud-location": bundleIllustrationSmart(
    CloudLocationDark,
    CloudLocationLight
  ),
  "create-data": bundleIllustrationSmart(CreateDataDark, CreateDataLight),
  desktop: bundleIllustrationSmart(DesktopDark, DesktopLight),
  disconnected: bundleIllustrationSmart(DisconnectedDark, DisconnectedLight),
  documents: bundleIllustrationSmart(DocumentsDark, DocumentsLight),
  "door-error": bundleIllustrationSmart(DoorErrorDark, DoorErrorLight),
  "email-sent": bundleIllustrationSmart(EmailSentDark, EmailSentLight),
  folder: bundleIllustrationSmart(FolderDark, FolderLight),
  "grid-location": bundleIllustrationSmart(GridLocationDark, GridLocationLight),
  "import-excel": bundleIllustrationSmart(ImportExcelDark, ImportExcelLight),
  launch: bundleIllustrationSmart(LaunchDark, LaunchLight),
  location: bundleIllustrationSmart(LocationDark, LocationLight),
  login: bundleIllustrationSmart(LoginDark, LoginLight),
  "mil-permissions": bundleIllustrationSmart(
    MilPermissionsDark,
    MilPermissionsLight
  ),
  navigation: bundleIllustrationSmart(NavigationDark, NavigationLight),
  "no-emails": bundleIllustrationSmart(NoEmailsDark, NoEmailsLight),
  "no-events": bundleIllustrationSmart(NoEventsDark, NoEventsLight),
  "no-friends": bundleIllustrationSmart(NoFriendsDark, NoFriendsLight),
  "no-reports": bundleIllustrationSmart(NoReportsDark, NoReportsLight),
  notifications: bundleIllustrationSmart(NotificationsDark, NotificationsLight),
  organization: bundleIllustrationSmart(OrganizationDark, OrganizationLight),
  "password-sent": bundleIllustrationSmart(PasswordSentDark, PasswordSentLight),
  "reset-password": bundleIllustrationSmart(
    ResetPasswordDark,
    ResetPasswordLight
  ),
  "set-password": bundleIllustrationSmart(SetPasswordDark, SetPasswordLight),
  sidebar: bundleIllustrationSmart(SidebarDark, SidebarLight),
  "signed-documents": bundleIllustrationSmart(
    SignedDocumentsDark,
    SignedDocumentsLight
  ),
  truck: bundleIllustrationSmart(TruckDark, TruckLight),
  "two-factor-authentification": bundleIllustrationSmart(
    TwoFactorAuthentificationDark,
    TwoFactorAuthentificationLight
  ),
  unpack: bundleIllustrationSmart(UnpackDark, UnpackLight),
  user: bundleIllustrationSmart(UserDark, UserLight),
  "user-group": bundleIllustrationSmart(UserGroupDark, UserGroupLight),
  "user-profile": bundleIllustrationSmart(UserProfileDark, UserProfileLight),
  "welcome-plane": bundleIllustrationSmart(WelcomePlaneDark, WelcomePlaneLight),
  "extend-system": bundleIllustrationSmart(ExtendSystemDark, ExtendSystemLight),
  "instruction-conditional": bundleIllustrationSmart(
    InstructionConditionalDark,
    InstructionConditionalLight
  ),
  "instruction-crossline-counting": bundleIllustrationSmart(
    InstructionCrosslineCountingDark,
    InstructionCrosslineCountingLight
  ),
  "instruction-drag-menu-item": bundleIllustrationSmart(
    InstructionDragMenuItemDark,
    InstructionDragMenuItemLight
  ),
  "instruction-fall-detection": bundleIllustrationSmart(
    InstructionFallDetectionDark,
    InstructionFallDetectionLight
  ),
  "instruction-hard-hat-detection": bundleIllustrationSmart(
    InstructionHardHatDetectionDark,
    InstructionHardHatDetectionLight
  ),
  "instruction-high-speed-approaching-traffic": bundleIllustrationSmart(
    InstructionHighSpeedApproachingTrafficDark,
    InstructionHighSpeedApproachingTrafficLight
  ),
  "instruction-high-speed-one-way": bundleIllustrationSmart(
    InstructionHighSpeedOneWayDark,
    InstructionHighSpeedOneWayLight
  ),
  "instruction-line-crossing": bundleIllustrationSmart(
    InstructionLineCrossingDark,
    InstructionLineCrossingLight
  ),
  "instruction-menu-item-focus": bundleIllustrationSmart(
    InstructionMenuItemFocusDark,
    InstructionMenuItemFocusLight
  ),
  "instruction-migrate-system": bundleIllustrationSmart(
    InstructionMigrateSystemDark,
    InstructionMigrateSystemLight
  ),
  "instruction-motion-in-area": bundleIllustrationSmart(
    InstructionMotionInAreaDark,
    InstructionMotionInAreaLight
  ),
  "instruction-motion-line-crossing": bundleIllustrationSmart(
    InstructionMotionLineCrossingDark,
    InstructionMotionLineCrossingLight
  ),
  "instruction-new-system": bundleIllustrationSmart(
    InstructionNewSystemDark,
    InstructionNewSystemLight
  ),
  "instruction-object-in-area": bundleIllustrationSmart(
    InstructionObjectInAreaDark,
    InstructionObjectInAreaLight
  ),
  "instruction-occupancy-in-area": bundleIllustrationSmart(
    InstructionOccupancyInAreaDark,
    InstructionOccupancyInAreaLight
  ),
  "instruction-search": bundleIllustrationSmart(
    InstructionSearchDark,
    InstructionSearchLight
  ),
  "instruction-tailgating-detection": bundleIllustrationSmart(
    InstructionTailgatingDetectionDark,
    InstructionTailgatingDetectionLight
  ),
  "instruction-time-in-area": bundleIllustrationSmart(
    InstructionTimeInAreaDark,
    InstructionTimeInAreaLight
  ),
  "instruction-zone-crossing": bundleIllustrationSmart(
    InstructionZoneCrossingDark,
    InstructionZoneCrossingLight
  ),
} as const;
