//useState with object
//useState hook doesn't automatically merge and update the object.we have to manually update the object
//to handle this,in useState hook we use spread operator synatx
//where as setState will merge and update the state automatically.

//rules of hooks:-

//hooks should be used in the top level
//hooks shouldn't be used in loops, conditions and nested functions


import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]= useState({firstName:'', lastName:''});
    return (
        <form>
            <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName: e.target.value})}/>
            <h2>Your First Name -{name.firstName}</h2>
            <h2>Your Last Name -{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2> 
        </form>    
              
    )
}

export default HookCounter3

