import {getContactList} from "../Controllers/contact_list_fetch";
import Contact from './Contact';
import { useState } from "react";

function App() {

  const [clist,updateclist]=useState(getContactList());

  // updateclist();
  return (
    <div className="App">
      {console.log(clist)}
      {clist.map((c)=>{return(
        <Contact name={c.name} image={c.image} number={c.phone}></Contact>
      );})}
    </div>
  );
}

export default App;
