import React, { Component } from "react";
import TodoItem from "./TodoItem";
//import './App.css';

class Todos extends Component {
  // componentDidMount() {}


  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return <TodoItem  key={todo.title}
                 todo={todo} />;
      });
    }

    console.log(this.props);
    return <div className="Todos">
            <h3>todoList </h3>
          {todoItems}
       
    </div>;
  }
}

export default Todos;
