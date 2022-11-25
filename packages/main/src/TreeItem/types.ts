/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TreeItemComponent } from "@ui5/webcomponents/src/TreeItem";

interface Slots {}

type ChildrenType = ReactElement<typeof TreeItemComponent>[];

type Inputs = {
  accessibleName: string;
  additionalText: string;
  additionalTextState?:
    | "Error"
    | "Information"
    | "None"
    | "Success"
    | "Warning";
  expanded?: boolean;
  hasChildren?: boolean;
  icon?: string;
  indeterminate?: boolean;
  navigated: boolean;
  selected?: boolean;
  text?: string;
  type?: "Active" | "Detail" | "Inactive" | "Navigation";
};
type Outputs = {};
export type TreeItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
