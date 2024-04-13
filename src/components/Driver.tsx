import { useState } from "react";
import { AutoComplete } from "../types/AutoComplete";
import { DriverPropTypes } from "./AutoComplete.types";

export function Driver({ single, required, errorTextProp, maxDisplayItems, api, label }:
  DriverPropTypes) {
  const defaultOptions = [{
    label: "hello",
    id: 1
  },
  {
    label: "help",
    id: 2
  },
  {
    label: "helldivers",
    id: 3
  }
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorText, setErrorText] = useState(required ? "This is a required field" : false);
  const getOptionsLocal = (text: string) => new Promise((res) => setTimeout(() => res(defaultOptions), Math.random() * 2500));
  const getOptionsApi = (text: string) => fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      console.log("jsonmock returns: ", json);
      return json.map((elem: { id: string, title: string }) => {
        return {
          id: elem.id,
          label: elem.title
        }
      })
    });
  return <AutoComplete label={label} maxDisplayItems={maxDisplayItems} errorText={errorTextProp || errorText as string} single={single} selectedOptions={selectedOptions}
    getOptions={api ? getOptionsApi : getOptionsLocal}
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
