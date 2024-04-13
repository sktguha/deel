import React, { useState, useRef } from "react";
import { ItemsDisplay } from "./ItemsDisplay";
import loader from "../loader.gif"
import getBoldedText from "../utils/getBoldedText";
import debounce from "../utils/debounce";
import ErrorBoundary from "./ErrorBoundary";
import { AutoCompletePropTypes } from "../types/Proptypes.types.";



export function AutoComplete({
  placeholder = "autocomplete demo",
  label = "Autocomplete",
  single = false,
  errorText,
  getOptions,
  maxDisplayItems = 12, selectedOptions = [], onSelectedOptionsChange } : AutoCompletePropTypes) {
  const [availableOptions, setAvailableOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const itemsRef = useRef();

  function showItems() {
    itemsRef.current && (itemsRef.current["style"]["display"] = "block" as never);
    // inputRef.current.focus();
    // if(!noFocus) itemsRef.current.focus();
  }

  function removeOption(idToRemove: string) {
    onSelectedOptionsChange(selectedOptions.filter(option => option.id !== idToRemove));
  }

  return (
    <ErrorBoundary>
      <div className="Autocomplete">
        <div>{label}</div>
        {errorText && <div className="error-text">{errorText}</div>}
        <div className="input-container">
          <input type="text"
            className={"input-box " + (errorText && "input-box-error")}
            disabled={single && selectedOptions.length >= 1}
            onBlur={((e: React.UIEvent) => {
              setTimeout(() => {
                (itemsRef.current) && (itemsRef.current["style"]["display"] = "none" as never);
              }, 300);
            }) as any} tabIndex={-1}
            ref={inputRef as any} placeholder={placeholder} onClick={() => showItems()} onChange={debounce((e: React.UIEvent) => {
              setLoading(true);
              getOptions((e.target as unknown as {"value": any}).value).then((options: any[]) => {
                setLoading(false)
                const text = (e.target as unknown as {"value": any}).value;
                console.log(text);
                console.log(options);
                const availOptions = options.filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) !== -1);
                console.log(availOptions);
                setAvailableOptions(availOptions as never[]);
                showItems();
              }, (err: React.UIEvent) => {
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
              <span onClick={() => removeOption(option.id)} className="pill-item-cross"><b> x</b></span>
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
    </ErrorBoundary>
  );
}
