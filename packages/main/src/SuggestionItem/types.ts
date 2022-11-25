/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  additionalText: string;
  additionalTextState?:
    | "Error"
    | "Information"
    | "None"
    | "Success"
    | "Warning";
  description: string;
  icon: string;
  iconEnd?: boolean;
  image: string;
  text?: string;
  type?: "Active" | "Detail" | "Inactive" | "Navigation";
};
type Outputs = {};
export type SuggestionItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
