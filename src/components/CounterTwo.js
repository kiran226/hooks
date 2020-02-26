import React,{useReducer} from 'react';
const intialState=0;
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return state+action.value
            
        case 'decrement':
            return state-action.value

        case 'increment5':
            return state+action.value

        case 'decrement5':
            return state-action.value

        case 'reset':
            return intialState;

        default :
            return state
    }
}
function CounterTwo() {
    const[count,dispatch]=useReducer(reducer,intialState);
    return (
        <div>
        Count-{count}
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <button onClick={()=>dispatch({type:'increment5', value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement5', value:5})}>Decrement5</button>
        </div>
    )
}

export default CounterTwo
