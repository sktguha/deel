import { DisplayItemPropTypes } from "./AutoComplete.types";

export function DisplayItem(
  {
    selectedOptions, isLast, option, onSelectedOptionsChange, getBoldedText, inputRef
  }: DisplayItemPropTypes) {
  return (<div
    className={"menu-item " + (isLast && "menu-item-last")}
    style={{ cursor: "pointer" }}
    onClick={() => {
      if (selectedOptions.find((sOption: {"id": string}) => sOption.id === option.id)) {
        return;
      }
      onSelectedOptionsChange([...selectedOptions, option]);
    }} key={option.id}>{getBoldedText(option.label, inputRef.current.value)}</div>);
}
