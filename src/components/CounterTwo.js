import React,{useReducer} from 'react';
const intialState={
    firstCounter:0,
    secondCounter:10
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter+action.value}
            
        case 'decrement':
            return {...state, firstCounter: state.firstCounter-action.value}

        case 'increment5':
            return {...state, firstCounter: state.firstCounter+action.value}

        case 'decrement5':
            return {...state, firstCounter: state.firstCounter-action.value}

        case 'reset':
            return intialState;

        case 'increment2':
             return {...state, secondCounter: state.secondCounter+action.value}

        case 'decrement2':
             return {...state, secondCounter: state.secondCounter-action.value}

        default :
            return state
    }
}
function CounterTwo() {
    const[count,dispatch]=useReducer(reducer,intialState);
    return (
        <div>
        <h1>FirstCount-{count.firstCounter}</h1>
        <h1>SecondCount-{count.secondCounter}</h1>
        
            <div>
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement</button>
            
            <button onClick={()=>dispatch({type:'increment5', value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement5', value:5})}>Decrement5</button>

            </div>
            
            <div>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>
            
            <div>
            <button onClick={()=>dispatch({type:'increment2', value:1})}>Increment2</button>
            <button onClick={()=>dispatch({type:'decrement2', value:1})}>Decrement2</button>
            </div>
            
        </div>
    )
}

export default CounterTwo
