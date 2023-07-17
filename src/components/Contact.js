import { useState } from 'react';
import def_pp from './images/download.png';

function Contact(props){

    let[editable,seteditable]=useState(false);
    

    function edit(e){
        seteditable(true);
    }
    function update(e){
        props.update(e);
        seteditable(false);
    }


    return(
        <div className="contact">
            
            <img src={def_pp} alt="profile pic"></img>
            <div className='input-boxes'>
                <div className={(editable?'forcehide ':'') + "name"}>{props.name}</div>
                <div className={(editable?'forcehide ':'') + "number"}>{props.number}</div>
            </div>
            

            <div className='input-boxes'>
                <input className={(editable?'':'forcehide ')} name='name' defaultValue={props.name} type='text' onChange={props.texthandler}></input>
                <input className={(editable?'':'forcehide ')} name='phone' defaultValue={props.number} type='text' onChange={props.texthandler}></input>
            </div>

            <div className='ctrl-btns'>
                <button className={(editable?'forcehide ':'') + "edit"} name={props.number} onClick={edit}>Edit</button>
                <button className={(editable?'':'forcehide ') + "update"} name={props.number} onClick={update}>update</button>
                <button className='delete' name={props.number} onClick={props.delete}>Delete</button>
            </div>
            
        </div>
    );
}

export default Contact