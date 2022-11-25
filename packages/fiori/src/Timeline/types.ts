/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TimelineItemComponent } from "@ui5/webcomponents-fiori/src/TimelineItem";

interface Slots {}

type ChildrenType = ReactElement<typeof TimelineItemComponent>[];

type Inputs = {
  accessibleName: string;
  layout?: "Horizontal" | "Vertical";
};
type Outputs = {};
export type TimelineProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
