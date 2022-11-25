/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  hideWeekNumbers?: boolean;
  selectedDates: Array<any>;
  selectionMode?: "Multiple" | "Range" | "Single";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Navigate: (e: CustomEvent<void>) => void;
};
export type DayPickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
