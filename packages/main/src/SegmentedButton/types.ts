/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { SegmentedButtonItemComponent } from "@ui5/webcomponents/src/SegmentedButtonItem";

interface Slots {}

type ChildrenType = ReactElement<typeof SegmentedButtonItemComponent>[];

type Inputs = {
  accessibleName: string;
  selectedItem: SegmentedButtonItem;
};
type Outputs = {
  onUi5SelectionChange: (e: CustomEvent<{ selectedItem: HTMLElement }>) => void;
};
export type SegmentedButtonProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
