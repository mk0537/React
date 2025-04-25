import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch, userSelector, useSelector} from 'react-redux';
import { addTodo, removeTodo } from './Action';
import store  from './Store'
import { useState } from 'react';

const AddTodo = () => {

  const [inputTodo, setInputTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 추가 메서드
  const handleAddTodo = () => {
    if(inputTodo.trim()) {
      dispatch(addTodo(Date.now(), inputTodo))
      setInputTodo('') // 입력창 비우기
    }
  }

  // 삭제 메서드
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <br />
      <input 
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            placeholder='Add a new todo'
        />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        })}
      </ul>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
      </Provider>
      
    </div>
  );
}

export default App;
