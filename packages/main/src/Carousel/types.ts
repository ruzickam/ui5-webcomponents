/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  arrowsPlacement?: "Content" | "Navigation";
  cyclic?: boolean;
  hideNavigationArrows?: boolean;
  hidePageIndicator?: boolean;
  itemsPerPageL?: any;
  itemsPerPageM?: any;
  itemsPerPageS?: any;
};
type Outputs = {
  onUi5Navigate: (e: CustomEvent<{ selectedIndex: number }>) => void;
};
export type CarouselProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
