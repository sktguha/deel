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
  </div>
  
}

