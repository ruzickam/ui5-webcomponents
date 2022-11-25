/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { BreadcrumbsItemComponent } from "@ui5/webcomponents/src/BreadcrumbsItem";

interface Slots {}

type ChildrenType = ReactElement<typeof BreadcrumbsItemComponent>[];

type Inputs = {
  design?: "NoCurrentPage" | "Standard";
  separatorStyle?:
    | "BackSlash"
    | "DoubleBackSlash"
    | "DoubleGreaterThan"
    | "DoubleSlash"
    | "GreaterThan"
    | "Slash";
};
type Outputs = {
  onUi5ItemClick: (
    e: CustomEvent<{
      item: HTMLElement;
      altKey: boolean;
      ctrlKey: boolean;
      metaKey: boolean;
      shiftKey: boolean;
    }>
  ) => void;
};
export type BreadcrumbsProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
