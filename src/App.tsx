// @ts-nocheck
import "./App.css";
import { useState, useRef } from "react";


function AutoComplete({placeholder="autocomplete", 
  single=false,
  errorText,
  getOptions, 
  maxDisplayItems=12, 
  selectedOptions=[], 
  onSelectedOptionsChange}) {
  const [availableOptions, setAvailableOptions ] = useState([]);
  const [text, setText] = useState("");

  const inputRef = useRef();
  const itemsRef = useRef();

  function showItems(noFocus) {
    itemsRef.current.style.display = "block";
    // inputRef.current.focus();
    // if(!noFocus) itemsRef.current.focus();
  }

  function getBoldedText(label, text){
    return <div dangerouslySetInnerHTML={{
      __html: label.split(text).join("<b>"+text+"</b>")
    }} />
  }

  function removeOption(idToRemove){
    onSelectedOptionsChange(selectedOptions.filter(option=>option.id !==idToRemove));
  }
 
  return (
    <div className="App" >
      <h2>Autocomplete</h2>
      {errorText && <div class="error-text">{errorText}</div>}
      <input type="text" 
      className={"input-box "+(errorText && "input-box-error")}
      disabled={single && selectedOptions.length >= 1 }
      onBlur={(e)=>{
      console.log(e);
      console.log("body blur")
      setTimeout(()=>itemsRef.current.style.display = "none", 100);
    }} tabIndex={-1}
      ref={inputRef} placeholder={placeholder} onClick={()=>showItems(true)} onChange={
        (e)=>{
          getOptions(text).then((options)=>{
              // setLoading(false)
              const text = e.target.value;
              console.log(text);
              console.log(options);
              const availOptions = options.filter(option=>option.label.indexOf(text)!==-1);
              console.log(availOptions);
              setText(text);
              setAvailableOptions(availOptions);
              showItems();
            }, (err)=>{ 
              // here can integrate with a logging library
              console.error("error occured: ", err);
              });
        }
      }/>
      {/* {JSON.stringify(selectedOptions)} */}
      <div className="selected-options" style={{backgroundColor: "light-blue"}}>
      {
      selectedOptions.map((option)=>{
        return (<div key={option.id} style={{ backgroundColor: "blue", marginRight: "5px", display: "inline-block"}}>
          <span>{option.label}</span>
          <span onClick={()=>removeOption(option.id)}> x</span>
        </div>)
      })
      }
      </div>
      {
        ItemsDisplay(itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef)
      }
    </div>
  );
}

function ItemsDisplay(itemsRef, availableOptions, maxDisplayItems, selectedOptions, onSelectedOptionsChange, getBoldedText, inputRef) 
{
return (<div className="available-options-to-select" ref={itemsRef}>{
  availableOptions.slice(0, maxDisplayItems).map(option => 
  DisplayItem(selectedOptions, option, onSelectedOptionsChange, getBoldedText, inputRef))
}
</div>);
}

function DisplayItem(selectedOptions, option, onSelectedOptionsChange, getBoldedText, inputRef) 
{
  return (<div
  style={{ cursor: "pointer" }}
  onClick={() => {
    // alert(option.label);
    if (selectedOptions.find(sOption => sOption.id === option.id)) {
    return;
    }
    onSelectedOptionsChange([...selectedOptions, option]);
  }} key={option.id}>{getBoldedText(option.label, inputRef.current.value)}</div>);
}

export default function App(){
  const defaultOptions = [{
    label: "Hello",
    id:1 
  },
  {
    label: "Help",
    id:2 
  },
  {
    label: "Helldivers",
    id:3 
  }
]
const [selectedOptions, setSelectedOptions ] = useState([])
  return <AutoComplete selectedOptions={selectedOptions} 
  errorText="This is a required field"
  getOptions={
    (text)=>new Promise((res)=>setTimeout(()=>res(defaultOptions),Math.random()*2500))
  }
  onSelectedOptionsChange={(options)=>{
    console.log("new options is ",options);
    // if options.length === 0 && required is true, then setErrorText("This is a required field")
    setSelectedOptions(options);
  }}/>
}

