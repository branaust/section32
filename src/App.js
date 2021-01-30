import React from "react"
import './App.css';
import CounterHooks from './CounterHooks'
import Toggler from './Toggler'
import SimpleFormHooks from './SimpleFormHooks'
import SimpleFormHooks2 from './SimpleFormHooks2'
import SimpleFormHooks3 from "./SimpleFormHooks3";

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormHooks2 />
      <SimpleFormHooks3 />
    </div>
  );
}

export default App;
