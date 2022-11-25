/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotAction?: ReactNode;
  slotAvatar?: ReactNode;
}

type ChildrenType = undefined;

type Inputs = {
  interactive?: boolean;
  status?: string;
  subtitleText?: string;
  titleText?: string;
};
type Outputs = {
  onUi5Click: (e: CustomEvent<void>) => void;
};
export type CardHeaderProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
