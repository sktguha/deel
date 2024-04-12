
export function DisplayItem({selectedOptions, option, onSelectedOptionsChange, getBoldedText, inputRef}) {
  return (<div
    style={{ cursor: "pointer" }}
    onClick={() => {
      alert(option.label);
      if (selectedOptions.find(sOption => sOption.id === option.id)) {
        return;
      }
      onSelectedOptionsChange([...selectedOptions, option]);
    }} key={option.id}>{getBoldedText(option.label, inputRef.current.value)}</div>);
}
