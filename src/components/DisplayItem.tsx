import { MenuItem, genericFn } from "./AutoComplete.types";

export function DisplayItem(
  {
    selectedOptions, isLast, option, onSelectedOptionsChange, getBoldedText, inputRef
  }: {
    selectedOptions: MenuItem[], 
    isLast: boolean, 
    option: MenuItem, 
    onSelectedOptionsChange: genericFn, getBoldedText: genericFn, inputRef: any
  }) {
  return (<div
    className={"menu-item " + (isLast && "menu-item-last")}
    style={{ cursor: "pointer" }}
    onClick={() => {
      // alert(option.label);
      if (selectedOptions.find((sOption: {"id": string}) => sOption.id === option.id)) {
        return;
      }
      onSelectedOptionsChange([...selectedOptions, option]);
    }} key={option.id}>{getBoldedText(option.label, inputRef.current.value)}</div>);
}
