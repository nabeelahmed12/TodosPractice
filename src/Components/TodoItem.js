import React, { Component } from "react";

//import './App.css';

class TodoItem extends Component {
 deleteProject(id){
   //  console.log('test');
this.props.onDelete(id); 
}
 
    render() {
    console.log(this.props);
    return (
      <li className="Todo">
        <strong> {this.props.todo.title } </strong>
        </li>
    );
  }
}

export default TodoItem;
