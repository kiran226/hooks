import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentD() {
    const CountContextD= useContext(CountContext);
    return (
        <div>
            ComponentD -{CountContextD.CountState}
            <button onClick={()=>CountContextD.CountDispatch('increment')}>Increment</button>
            <button onClick={()=>CountContextD.CountDispatch('decrement')}>Decrement</button>
            <button onClick={()=>CountContextD.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
