import React from 'react';
import logo from './logo.svg';
import '../css/App.css';
import TodoList from './todolist';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do List - React & Firebase</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoList />
    </div>
  );
}

export default App;
