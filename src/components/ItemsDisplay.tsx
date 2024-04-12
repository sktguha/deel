import { DisplayItem } from "./DisplayItem";

export function ItemsDisplay({
  itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, 
  inputRef }) 
{
  return (<div className="available-options-to-select" ref={itemsRef}>
    {
    availableOptions.slice(0, maxDisplayItems).map(
    option => <DisplayItem key={option.id} {...{selectedOptions, option, onSelectedOptionsChange, getBoldedText, inputRef}}/>
    )
}
  </div>);
}
