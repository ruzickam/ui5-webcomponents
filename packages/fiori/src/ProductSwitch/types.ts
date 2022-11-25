/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { ProductSwitchItemComponent } from "@ui5/webcomponents-fiori/src/ProductSwitchItem";

interface Slots {}

type ChildrenType = ReactElement<typeof ProductSwitchItemComponent>[];

type Inputs = {};
type Outputs = {};
export type ProductSwitchProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
