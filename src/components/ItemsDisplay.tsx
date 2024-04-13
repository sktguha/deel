import { DisplayItem } from "./DisplayItem";

export function ItemsDisplay({
  itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText,
  inputRef }) {
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
