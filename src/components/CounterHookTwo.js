import React from 'react'
import useCounter from '../custom-hooks/useCounter'

function CounterHookTwo() {
    const[count,increment,decrement,reset]=useCounter(10,10);
      
    return (
        <div>
            Count={count}
            <br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHookTwo
