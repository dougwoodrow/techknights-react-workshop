import React, {Component} from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Doug's React To-Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
