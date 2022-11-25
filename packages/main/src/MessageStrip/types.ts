/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotIcon?: ReactElement<typeof IconComponent>;
}

type ChildrenType = ReactNode;

type Inputs = {
  design?: "Information" | "Negative" | "Positive" | "Warning";
  hideCloseButton?: boolean;
  hideIcon?: boolean;
};
type Outputs = {
  onUi5Close: (e: CustomEvent<void>) => void;
};
export type MessageStripProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
