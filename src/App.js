import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
// import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      {/* <HookCounter/> */}
      <HookCounter2/>
    </div>
  );
}

export default App;
