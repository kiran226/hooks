import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';
// import CounterOne from './components/CounterOne';
// import DataFetching from './DataFetching';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';
// import ClickCounter from './components/ClickCounter';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';

export const CountContext= React.createContext();

function App() {
  const initialState=0
  const reducer=(state,action)=>{
    switch(action){
      case 'increment':
        return state+1
    
      case 'decrement':
        return state-1
    
      case 'reset':
        return initialState
      
      default:
        return state;  
  }
  }
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* <ClickCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      Count-{count}
      <CountContext.Provider value={{CountState:count,CountDispatch:dispatch }}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider>
    </div>
  );
}

export default App;
