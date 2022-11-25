/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  icon?: string;
  subtitleText?: string;
  target?: string;
  targetSrc?: string;
  titleText?: string;
};
type Outputs = {
  onUi5Click: (e: CustomEvent<void>) => void;
};
export type ProductSwitchItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
