/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { TokenComponent } from "@ui5/webcomponents/src/Token";

interface Slots {
  slotTokens?: ReactElement<typeof TokenComponent>[];
}

type ChildrenType = undefined;

type Inputs = {
  showValueHelpIcon?: boolean;
};
type Outputs = {
  onUi5TokenDelete: (e: CustomEvent<{ token: HTMLElement }>) => void;
  onUi5ValueHelpTrigger: (e: CustomEvent<void>) => void;
};
export type MultiInputProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
