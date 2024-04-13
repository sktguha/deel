import { genericFn } from "../types/Common.types";
import { MenuItem } from "../types/Common.types";
import { DisplayItem } from "./DisplayItem";

interface ItemsDisplayPropTypes {
  itemsRef: any;
  availableOptions: MenuItem[];
  maxDisplayItems: number;
  selectedOptions: MenuItem[];
  onSelectedOptionsChange: genericFn;
  getBoldedText: genericFn;
  inputRef: any;
}

export function ItemsDisplay({
  itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText,
  inputRef }: ItemsDisplayPropTypes) {
  const availableOptionsLimit = availableOptions.slice(0, maxDisplayItems);
  return (<div className="available-options-to-select" ref={itemsRef}>
    {
      availableOptionsLimit.map(
        (option, i) => {
          // alert(i);
          return (
            <DisplayItem isLast={i === availableOptionsLimit.length-1} key={option.id} {...{ selectedOptions, option, onSelectedOptionsChange, getBoldedText, inputRef }} />
          );
        }
      )
    }
  </div>);
}
