/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotThumbnail?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  disableDeleteButton?: boolean;
  file?: any;
  fileName?: string;
  fileNameClickable?: boolean;
  hideRetryButton?: boolean;
  hideTerminateButton?: boolean;
  progress?: any;
  uploadState?: "Complete" | "Error" | "Ready" | "Uploading";
};
type Outputs = {
  onUi5FileNameClick: (e: CustomEvent<void>) => void;
  onUi5Rename: (e: CustomEvent<void>) => void;
  onUi5Retry: (e: CustomEvent<void>) => void;
  onUi5Terminate: (e: CustomEvent<void>) => void;
};
export type UploadCollectionItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
