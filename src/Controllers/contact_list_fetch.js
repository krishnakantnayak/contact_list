function def(){
    return "default function"
}

async function getContactList(){
    var conts;
    
        let vals=await fetch('https://jsonplaceholder.typicode.com/users');
        conts=await vals.json().then((data)=>{
            return data;
        });
    console.log(typeof vals)
}

function updateContacts(op,record){
    return null;
}



console.log("debigging"); 

export {getContactList,updateContacts};

export default def;