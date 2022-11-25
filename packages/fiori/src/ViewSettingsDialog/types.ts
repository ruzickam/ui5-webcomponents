/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { FilterItemComponent } from "@ui5/webcomponents-fiori/src/FilterItem";
import { SortItemComponent } from "@ui5/webcomponents-fiori/src/SortItem";

interface Slots {
  slotFilterItems?: ReactElement<typeof FilterItemComponent>[];
  slotSortItems?: ReactElement<typeof SortItemComponent>[];
}

type ChildrenType = undefined;

type Inputs = {
  sortDescending?: boolean;
};
type Outputs = {
  onUi5BeforeOpen: (e: CustomEvent<void>) => void;
  onUi5Cancel: (
    e: CustomEvent<{
      sortOrder: string;
      sortBy: string;
      sortByItem: HTMLElement;
      sortDescending: boolean;
      filterItems: Array<any>;
    }>
  ) => void;
  onUi5Confirm: (
    e: CustomEvent<{
      sortOrder: string;
      sortBy: string;
      sortByItem: HTMLElement;
      sortDescending: boolean;
      filterItems: Array<any>;
    }>
  ) => void;
};
export type ViewSettingsDialogProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
