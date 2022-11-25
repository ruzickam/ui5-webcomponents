/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TableColumnComponent } from "@ui5/webcomponents/src/TableColumn";
import { TableGroupRowComponent } from "@ui5/webcomponents/src/TableGroupRow";
import { TableRowComponent } from "@ui5/webcomponents/src/TableRow";

interface Slots {
  slotColumns?: ReactElement<typeof TableColumnComponent>[];
}

type ChildrenType = ReactElement<
  typeof TableGroupRowComponent | typeof TableRowComponent
>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  busy?: boolean;
  busyDelay?: any;
  growing?: "Button" | "None" | "Scroll";
  growingButtonSubtext?: string;
  growingButtonText?: string;
  hideNoData?: boolean;
  mode?: "MultiSelect" | "None" | "SingleSelect";
  noDataText?: string;
  stickyColumnHeader?: boolean;
};
type Outputs = {
  onUi5LoadMore: (e: CustomEvent<void>) => void;
  onUi5PopinChange: (e: CustomEvent<{ poppedColumns: Array<any> }>) => void;
  onUi5RowClick: (e: CustomEvent<{ row: HTMLElement }>) => void;
  onUi5SelectionChange: (
    e: CustomEvent<{
      selectedRows: Array<any>;
      previouslySelectedRows: Array<any>;
    }>
  ) => void;
};
export type TableProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
