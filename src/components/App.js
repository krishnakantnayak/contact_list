
import Contact from './Contact';
import { useEffect, useState } from "react";

function App() {

  let [clist, setclist] = useState([]);

  let[newcontactname,setnewcontactname]=useState('');
  let[newcontactnum,setnewcontactnum]=useState('');

  function inputhandler(e){
    
    if(e.target.name==='name'){
      newcontactname=e.target.value;
      setnewcontactname(newcontactname);
    }
    else{
      newcontactnum=e.target.value;
      setnewcontactnum(newcontactnum);
    }
    
  }

  async function deletecon(e){
    console.log(e.target.name);

    let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.name}`, {
      method: 'DELETE',
    });

    if(res.status===200){
      let nl=[];
      for(let i of clist){
        if(i.phone===e.target.name)continue;
        nl.push(i);
      }
  
      setclist(nl);
    }
  }

  async function addnc(){
    let nc={name:newcontactname, phone:newcontactnum};
    
    let res=await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'add_new_con',
        body: nc,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if(res.status===201){
      clist.push(nc);
      let nl=[...clist];
      setclist(nl);
    }
    
    
  }

  async function update(e){
    console.log(e.target.name);
    console.log(newcontactname,newcontactnum);

    let nl=[];

    for( let i of clist){
      if(i.phone===e.target.name){
        if(newcontactname){
          i.name=newcontactname;
        }
        if(newcontactnum){
          i.phone=newcontactnum;
        }
      }

      nl.push(i);
      setclist(nl);

      setnewcontactname('');
      setnewcontactnum('');
    }
  }

  useEffect(() => {
    async function getContactList() {

      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      if(data.length>0)
        setclist(data);
    }
    
    getContactList();
    console.log("data", clist)

  }, []);
  return (
    <div className="App">

      <div className='add-box'>
        <input name='name' id='name' type='text' onChange={inputhandler} placeholder='name'></input>
        <input name='phone' id='phone' type='text' onChange={inputhandler} placeholder='number'></input>
        <button onClick={addnc}>+ New Contact</button>
      </div>

      <span className='contact_list'>
        {clist.map(function (c) {
          return <Contact name={c.name} number={c.phone} delete={deletecon} update={update} texthandler={inputhandler}></Contact>
        })}
      </span>

      

    </div>
  );
}

export default App;
