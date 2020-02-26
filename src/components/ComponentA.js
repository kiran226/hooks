import React, { useContext } from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const CountContextA=useContext(CountContext);
    return (
        <div>
            ComponentA -{CountContextA.CountState}
            <button onClick={()=>CountContextA.CountDispatch('increment')}>Increment</button>
            <button onClick={()=>CountContextA.CountDispatch('decrement')}>Decrement</button>
            <button onClick={()=>CountContextA.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
