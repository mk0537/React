import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEx';
import { useState } from 'react';
import {ShowHide, Sol1} from './hook/Exam';
import TimerFunction, {UserList,Count, Cleanup} from './hook/UseEffectEx';
import { Counter_ref, InputFocus, InputSample } from './hook/UseRefEx';


function App() {

  return (
    <div className="App">
      <Cleanup count = {0} value ={1} />
    </div>
  );
}

export default App;
