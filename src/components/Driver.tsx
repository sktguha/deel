import { useState } from "react";
import { AutoComplete } from "./AutoComplete";

export function Driver() {
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
  return <AutoComplete selectedOptions={selectedOptions}
    getOptions={(text) => new Promise((res) => setTimeout(() => res(defaultOptions), Math.random() * 2500))}
    onSelectedOptionsChange={(options) => {
      console.log("new options is ", options);
      // if options.length === 0 && required is true, then setErrorText("This is a required field")
      setSelectedOptions(options);
    }} />;
}
