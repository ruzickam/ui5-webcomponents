/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { UploadCollectionItemComponent } from "@ui5/webcomponents-fiori/src/UploadCollectionItem";

interface Slots {
  slotHeader?: ReactNode;
}

type ChildrenType = ReactElement<typeof UploadCollectionItemComponent>[];

type Inputs = {
  accessibleName?: string;
  hideDragOverlay?: boolean;
  mode?:
    | "Delete"
    | "MultiSelect"
    | "None"
    | "SingleSelect"
    | "SingleSelectAuto"
    | "SingleSelectBegin"
    | "SingleSelectEnd";
  noDataDescription?: string;
  noDataText?: string;
};
type Outputs = {
  onUi5Drop: (e: CustomEvent<{ dataTransfer: any }>) => void;
  onUi5ItemDelete: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5SelectionChange: (e: CustomEvent<{ selectedItems: Array<any> }>) => void;
};
export type UploadCollectionProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
