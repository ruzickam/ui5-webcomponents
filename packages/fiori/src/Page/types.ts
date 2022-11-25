/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { BarComponent } from "@ui5/webcomponents-fiori/src/Bar";

interface Slots {
  slotFooter?: ReactElement<typeof BarComponent>;
  slotHeader?: ReactElement<typeof BarComponent>;
}

type ChildrenType = ReactNode;

type Inputs = {
  backgroundDesign?: "List" | "Solid" | "Transparent";
  disableScrolling?: boolean;
  floatingFooter?: boolean;
  hideFooter?: boolean;
};
type Outputs = {};
export type PageProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
