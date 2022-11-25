/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TreeItemComponent } from "@ui5/webcomponents/src/TreeItem";

interface Slots {
  slotHeader?: ReactNode;
}

type ChildrenType = ReactElement<typeof TreeItemComponent>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  footerText?: string;
  headerText?: string;
  mode?:
    | "Delete"
    | "MultiSelect"
    | "None"
    | "SingleSelect"
    | "SingleSelectAuto"
    | "SingleSelectBegin"
    | "SingleSelectEnd";
  noDataText?: string;
};
type Outputs = {
  onUi5ItemClick: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemDelete: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemMouseout: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemMouseover: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5ItemToggle: (e: CustomEvent<{ item: HTMLElement }>) => void;
  onUi5SelectionChange: (
    e: CustomEvent<{
      selectedItems: Array<any>;
      previouslySelectedItems: Array<any>;
      targetItem: HTMLElement;
    }>
  ) => void;
};
export type TreeProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
