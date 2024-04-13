// @ts-nocheck
import "./App.css";
import { Driver } from "./components/Driver";


export default function App(){
  return <div className="main-container">
    <h2>Autocomplete Demo ( 7 use cases). type "h" or "he" to get results</h2>
    <section>
      <h2>1. Base example</h2>
      <Driver />
    </section>
    <section>
      <h2>2. Base example multi selection with jsonmock API integration , loading states , maxlimit increased</h2>
      <Driver label={"Autocomplete: Enter any string to search across jsonmock posts"} maxDisplayItems={18} api/>
    </section>
    <section>
      <h2>3. Base example multi selection allowed</h2>
      <Driver />
    </section>
    <section>
      <h2>4. Single Selection only</h2>
      <Driver single/>
    </section>
    <section>
      <h2>5. Required field example ( critical in form validations , form library integrations etc)</h2>
      <Driver required/>
    </section>
    <section>
      <h2>6. Custom errorText example according to custom logic( critical in form validations , form library integrations etc)</h2>
      <Driver errorTextProp="Customised error text according to custom form logic"/>
    </section>
    <section>
      <h2>7. Required field example with single option allowed ( critical in form validations , form library integrations etc)</h2>
      <Driver single required/>
    </section>
  </div>
  
}

