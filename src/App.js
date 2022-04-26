import React from 'react';
import './App.css';
import Toggle from "./components/Toggle";
import Tab from "./components/Tab"
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import Toggle2 from "./components/Toggle2";

function App() {
  return (
    <div className="App">
      <Toggle2/>
      <Toggle/>
      <Tab/>
      <Slider/>
      <Input/>
      <Dropdown/>

    </div>
  );
}

export default App;
