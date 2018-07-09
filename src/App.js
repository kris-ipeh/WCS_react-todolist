import React, { Component } from 'react';
import Todo from "./Components/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
        <Todo />
      </div>
    );
  }
}

export default App;