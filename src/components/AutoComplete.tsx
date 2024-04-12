import { useState, useRef } from "react";
import { ItemsDisplay } from "./ItemsDisplay";

export function AutoComplete({ placeholder = "autocomplete", label = "Autocomplete", single = false, errorText, getOptions, maxDisplayItems = 12, selectedOptions = [], onSelectedOptionsChange }) {
  const [availableOptions, setAvailableOptions] = useState([]);
  const [text, setText] = useState("");

  const inputRef = useRef();
  const itemsRef = useRef();

  function showItems(noFocus) {
    itemsRef.current.style.display = "block";
    // inputRef.current.focus();
    // if(!noFocus) itemsRef.current.focus();
  }

  function getBoldedText(label, text) {
    return <div dangerouslySetInnerHTML={{
      __html: label.split(text).join("<b>" + text + "</b>")
    }} />;
  }

  function removeOption(idToRemove) {
    onSelectedOptionsChange(selectedOptions.filter(option => option.id !== idToRemove));
  }

  return (
    <div className="App">
      <div>{label}</div>
      {errorText && <div className="error-text">{errorText}</div>}
      <input type="text"
        className={"input-box " + (errorText && "input-box-error")}
        disabled={single && selectedOptions.length >= 1}
        onBlur={(e) => {
          console.log(e);
          console.log("body blur");
          setTimeout(() => { 
            itemsRef.current.style.display = "none"
          }, 300);
        }} tabIndex={-1}
        ref={inputRef} placeholder={placeholder} onClick={() => showItems(true)} onChange={(e) => {
          getOptions(text).then((options) => {
            // setLoading(false)
            const text = e.target.value;
            console.log(text);
            console.log(options);
            const availOptions = options.filter(option => option.label.indexOf(text) !== -1);
            console.log(availOptions);
            setText(text);
            setAvailableOptions(availOptions);
            showItems();
          }, (err) => {
            // here can integrate with a logging library
            console.error("error occured: ", err);
          });
        }} />
      {/* {JSON.stringify(selectedOptions)} */}
      <div className="selected-options" style={{ backgroundColor: "light-blue" }}>
        {selectedOptions.map((option) => {
          return (<div key={option.id} style={{ backgroundColor: "blue", marginRight: "5px", display: "inline-block" }}>
            <span>{option.label}</span>
            <span onClick={() => removeOption(option.id)}> x</span>
          </div>);
        })}
      </div>
      <div onClick={()=>{
        // alert("onclick");
      }}>
      <ItemsDisplay {...{ itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef }}/>
      </div>
      {/* {ItemsDisplay(itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef)} */}
    </div>
  );
}
