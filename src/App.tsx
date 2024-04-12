// @ts-nocheck
import "./App.css";
import { Driver } from "./components/Driver";


export default function App(){
  return <div className="main-container">
    <section>
      <h2>Base example</h2>
      <Driver />
    </section>
    <section>
      <h2>Base example multi selection with jsonmock API integration , loading states , maxlimit increased</h2>
      <Driver label={"Autocomplete: Enter to search across posts"} maxDisplayItems={18} api/>
    </section>
    <section>
      <h2>Base example multi selection allowed</h2>
      <Driver />
    </section>
    <section>
      <h2>Single Selection only</h2>
      <Driver single/>
    </section>
    <section>
      <h2>Required field example ( critical in form validations , form library integrations etc)</h2>
      <Driver required/>
    </section>
    <section>
      <h2>Custom errorText example according to custom logic( critical in form validations , form library integrations etc)</h2>
      <Driver errorTextProp="Customised error text according to custom form logic"/>
    </section>
  </div>
  
}

