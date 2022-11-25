/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { FilterItemOptionComponent } from "@ui5/webcomponents-fiori/src/FilterItemOption";

interface Slots {
  slotValues?: ReactElement<typeof FilterItemOptionComponent>[];
}

type ChildrenType = undefined;

type Inputs = {
  text?: string;
};
type Outputs = {};
export type FilterItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
