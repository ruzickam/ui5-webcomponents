/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { ButtonComponent } from "@ui5/webcomponents/src/Button";

interface Slots {
  slotSubtitle?: ReactNode;
  slotTitle?: ReactNode;
}

type ChildrenType = ReactElement<typeof ButtonComponent>[];

type Inputs = {
  accessibleNameRef?: string;
  name?:
    | "AddColumn"
    | "AddDimensions"
    | "AddPeople"
    | "BalloonSky"
    | "BeforeSearch"
    | "Connection"
    | "EmptyCalendar"
    | "EmptyList"
    | "EmptyPlanningCalendar"
    | "ErrorScreen"
    | "FilterTable"
    | "GroupTable"
    | "NoActivities"
    | "NoData"
    | "NoDimensionsSet"
    | "NoEntries"
    | "NoFilterResults"
    | "NoMail"
    | "NoMail_v1"
    | "NoNotifications"
    | "NoSavedItems"
    | "NoSavedItems_v1"
    | "NoSearchResults"
    | "NoTasks"
    | "NoTasks_v1"
    | "PageNotFound"
    | "ReloadScreen"
    | "ResizeColumn"
    | "SearchEarth"
    | "SearchFolder"
    | "SimpleBalloon"
    | "SimpleBell"
    | "SimpleCalendar"
    | "SimpleCheckMark"
    | "SimpleConnection"
    | "SimpleEmptyDoc"
    | "SimpleEmptyList"
    | "SimpleError"
    | "SimpleMagnifier"
    | "SimpleMail"
    | "SimpleNoSavedItems"
    | "SimpleNotFoundMagnifier"
    | "SimpleReload"
    | "SimpleTask"
    | "SleepingBell"
    | "SortColumn"
    | "SuccessBalloon"
    | "SuccessCheckMark"
    | "SuccessHighFive"
    | "SuccessScreen"
    | "Tent"
    | "TntChartArea"
    | "TntChartArea2"
    | "TntChartBar"
    | "TntChartBPMNFlow"
    | "TntChartBullet"
    | "TntChartDoughnut"
    | "TntChartFlow"
    | "TntChartGantt"
    | "TntChartOrg"
    | "TntChartPie"
    | "TntCodePlaceholder"
    | "TntCompany"
    | "TntComponents"
    | "TntExternalLink"
    | "TntFaceID"
    | "TntFingerprint"
    | "TntLock"
    | "TntMission"
    | "TntNoApplications"
    | "TntNoFlows"
    | "TntNoUsers"
    | "TntRadar"
    | "TntSecrets"
    | "TntServices"
    | "TntSessionExpired"
    | "TntSessionExpiring"
    | "TntSuccess"
    | "TntSuccessfulAuth"
    | "TntSystems"
    | "TntTeams"
    | "TntTools"
    | "TntUnableToLoad"
    | "TntUnlock"
    | "TntUnsuccessfulAuth"
    | "TntUser2"
    | "UnableToLoad"
    | "UnableToLoadImage"
    | "UnableToUpload"
    | "UploadCollection"
    | "UploadToCloud";
  size?: "Auto" | "Base" | "Dialog" | "Scene" | "Spot";
  subtitleText?: string;
  titleText?: string;
};
type Outputs = {};
export type IllustratedMessageProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
