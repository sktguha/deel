// @ts-nocheck
import "./App.css";
import { useState  } from "react";


function AutoComplete({placeholder="autocomplete", 
  getOptions, 
  predetermindedOptions, 
  selectedOptions=[], 
  onSelectedOptionsChange}) {
  const [availableOptions, setAvailableOptions ] = useState([]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" placeholder={placeholder} onChange={
        (e)=>{
          const text = e.target.value;
          console.log(text);
          // setLoading(true)
          getOptions(text).then((options)=>{
              // setLoading(false)
              console.log(options);
              const availOptions = options.filter(option=>option.label.indexOf(text)!==-1);
              setAvailableOptions(availOptions);
            }, (err)=>{ 
              // here can integrate with a logging library
              console.error("error occured: ", err);
              });
          // setAvailableOptions([{label: text}])
          
        }
      }/>
      {JSON.stringify(selectedOptions)}
      {
        <div>{
          availableOptions.map(option=><div onClick={()=>{
            alert(option.label);
            onSelectedOptionsChange([...selectedOptions,option])
          }} key={option.id}>{option.label}</div>)
          }
          </div>
      }
    </div>
  );
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
const [selectedOptions, setOptions ] = useState([])
  return <AutoComplete selectedOptions={selectedOptions} 
  getOptions={
    (text)=>new Promise((res)=>setTimeout(()=>res(defaultOptions),Math.random()*2500))
  }
  onSelectedOptionsChange={(options)=>{
    console.log("new options is ",options);
    setOptions(options);
  }}/>
}

