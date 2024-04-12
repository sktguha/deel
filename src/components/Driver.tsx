import { useState } from "react";
import { AutoComplete } from "./AutoComplete";

export function Driver({single ,required, errorTextProp}) {
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
  return <AutoComplete errorText={errorTextProp || errorText} single={single} selectedOptions={selectedOptions}
    getOptions={(text) => new Promise((res) => setTimeout(() => res(defaultOptions), Math.random() * 2500))}
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
