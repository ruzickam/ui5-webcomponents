/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TableCellComponent } from "@ui5/webcomponents/src/TableCell";

interface Slots {}

type ChildrenType = ReactElement<typeof TableCellComponent>[];

type Inputs = {
  navigated?: boolean;
  selected?: boolean;
  type?: "Active" | "Inactive";
};
type Outputs = {};
export type TableRowProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
