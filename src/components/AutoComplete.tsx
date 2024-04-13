import { useState, useRef } from "react";
import { ItemsDisplay } from "./ItemsDisplay";
import loader from "../loader.gif"
import getBoldedText from "../utils/getBoldedText";
import debounce from "../utils/debounce";

export function AutoComplete({
  placeholder = "autocomplete demo",
  label = "Autocomplete",
  single = false,
  errorText,
  getOptions,
  maxDisplayItems = 12, selectedOptions = [], onSelectedOptionsChange }) {
  const [availableOptions, setAvailableOptions] = useState([]);
  const [loading, setLoading ] = useState(false);

  const inputRef = useRef();
  const itemsRef = useRef();

  function showItems() {
    itemsRef.current.style.display = "block";
    // inputRef.current.focus();
    // if(!noFocus) itemsRef.current.focus();
  }

  function removeOption(idToRemove) {
    onSelectedOptionsChange(selectedOptions.filter(option => option.id !== idToRemove));
  }

  return (
    <div className="App">
      <div>{label}</div>
      {errorText && <div className="error-text">{errorText}</div>}
      <div className="input-container">
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
        ref={inputRef} placeholder={placeholder} onClick={() => showItems(true)} onChange={debounce((e) => {
          setLoading(true);
          getOptions(e.target.value).then((options) => {
            setLoading(false)
            const text = e.target.value;
            console.log(text);
            console.log(options);
            const availOptions = options.filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) !== -1);
            console.log(availOptions);
            setAvailableOptions(availOptions);
            showItems();
          }, (err) => {
            // here can integrate with a logging library
            console.error("error occured: ", err);
          });
        })} />
        {loading && <img width="33" height="33" src={loader} />}
      </div>
      {/* {JSON.stringify(selectedOptions)} */}
      <div className="selected-options">
        {selectedOptions.map((option) => {
          return (<div key={option.id} className="pill-item">
            <span>{option.label}</span>
            <span onClick={() => removeOption(option.id)} className="pill-item-cross"> x</span>
          </div>);
        })}
      </div>
      <div onClick={() => {
        // alert("onclick");
      }}>
        <ItemsDisplay {...{ itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef }} />
      </div>
      {/* {ItemsDisplay(itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef)} */}
    </div>
  );
}
