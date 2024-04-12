import { useState } from "react";
import { AutoComplete } from "./AutoComplete";

export function Driver({single ,required, errorTextProp, maxDisplayItems, api}) {
  const defaultOptions = [{
    label: "Hello",
    id: 1
  },
  {
    label: "Help",
    id: 2
  },
  {
    label: "Helldivers",
    id: 3
  }
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorText, setErrorText] = useState(required ? "This is a required field" : false);
  const getOptionsLocal = (text) => new Promise((res) => setTimeout(() => res(defaultOptions), Math.random() * 2500));
  const getOptionsApi = (text) => fetch('https://jsonplaceholder.typicode.com/posts?userId='+text)
  .then((response) => response.json())
  .then((json) => {
    console.log("jsonmock returns: ", json);
    return json.map((elem)=>{
      return {
        id:elem.id,
        label: elem.title
      }
    })
  });
  return <AutoComplete maxDisplayItems={maxDisplayItems} errorText={errorTextProp || errorText} single={single} selectedOptions={selectedOptions}
    getOptions={api?getOptionsApi:getOptionsLocal}
    onSelectedOptionsChange={(options) => {
      console.log("new options is ", options);
      if (required && options.length === 0) { 
        setErrorText("This is a required field");
      } else {
        setErrorText(false);
      }
      setSelectedOptions(options);
    }} />;
}
