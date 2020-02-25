//useState with array

import React,{useState} from 'react'

function HookCounter4() {
    const [items,setItems]=useState([{id:1,value:3},{id:2,value:99}]);
    const addItem=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item=><li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}

export default HookCounter4
