import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const CountContextF=useContext(CountContext)
    return (
        <div>
            ComponentF -{CountContextF.CountState}
            <button onClick={()=>CountContextF.CountDispatch('increment')}>Increment</button>
            <button onClick={()=>CountContextF.CountDispatch('decrement')}>Decrement</button>
            <button onClick={()=>CountContextF.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
