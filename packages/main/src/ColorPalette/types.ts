/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { ColorPaletteItemComponent } from "@ui5/webcomponents/src/ColorPaletteItem";

interface Slots {}

type ChildrenType = ReactElement<typeof ColorPaletteItemComponent>[];

type Inputs = {};
type Outputs = {
  onUi5ItemClick: (e: CustomEvent<{ color: string }>) => void;
};
export type ColorPaletteProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
