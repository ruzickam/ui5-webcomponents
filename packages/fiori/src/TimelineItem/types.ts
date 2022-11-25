/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  icon?: string;
  name?: string;
  nameClickable?: boolean;
  subtitleText?: string;
  titleText?: string;
};
type Outputs = {
  onUi5NameClick: (e: CustomEvent<void>) => void;
};
export type TimelineItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
