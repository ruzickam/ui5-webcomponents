/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  count?: string;
  icon?: string;
  text?: string;
};
type Outputs = {
  onUi5Click: (e: CustomEvent<{ targetRef: HTMLElement }>) => void;
};
export type ShellBarItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
