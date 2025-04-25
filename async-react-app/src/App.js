import logo from './logo.svg';
import './App.css';
import { Sync } from './sync';
import { Fetch, Axios } from './Async'
import { FetchExam } from './FetchExam'
import {BlogApp} from './Blog'
import { PromiseDemo } from './Promise';
  

function App() {
  return (
    <div className="App">
      <PromiseDemo />
    </div>
  );
}

export default App;
