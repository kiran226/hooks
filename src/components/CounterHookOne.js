import React from 'react'
import useCounter from '../custom-hooks/useCounter'

function CounterHookOne() {
    const[count,increment,decrement,reset]=useCounter(0,1);
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

export default CounterHookOne
