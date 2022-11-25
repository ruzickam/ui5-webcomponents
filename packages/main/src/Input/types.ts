/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { SuggestionGroupItemComponent } from "@ui5/webcomponents/src/SuggestionGroupItem";
import { SuggestionItemComponent } from "@ui5/webcomponents/src/SuggestionItem";
import { IconComponent } from "@ui5/webcomponents/src/Icon";

interface Slots {
  slotIcon?: ReactElement<typeof IconComponent>[];
  slotValueStateMessage?: ReactNode;
}

type ChildrenType = ReactElement<
  typeof SuggestionGroupItemComponent | typeof SuggestionItemComponent
>[];

type Inputs = {
  accessibleName: string;
  accessibleNameRef?: string;
  disabled?: boolean;
  maxlength: any;
  name?: string;
  noTypeahead?: boolean;
  placeholder?: string;
  previewItem: SuggestionGroupItem | SuggestionItem;
  readonly?: boolean;
  required?: boolean;
  showClearIcon?: boolean;
  showSuggestions?: boolean;
  type?: "Email" | "Number" | "Password" | "Tel" | "Text" | "URL";
  value?: string;
  valueState?: "Error" | "Information" | "None" | "Success" | "Warning";
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Input: (e: CustomEvent<void>) => void;
  onUi5SuggestionItemPreview: (
    e: CustomEvent<{ item: HTMLElement; targetRef: HTMLElement }>
  ) => void;
  onUi5SuggestionItemSelect: (e: CustomEvent<{ item: HTMLElement }>) => void;
};
export type InputProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
