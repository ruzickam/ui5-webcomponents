/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotCloseIcon?: ReactElement<typeof IconComponent>;
}

type ChildrenType = undefined;

type Inputs = {
  readonly: boolean;
  selected: boolean;
  text?: string;
};
type Outputs = {
  onUi5Select: (e: CustomEvent<void>) => void;
};
export type TokenProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
