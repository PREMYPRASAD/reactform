import React, {Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {
  render() {
    return (
        <div className="todo-container">
            
            <form className="input-section">
                <h1>
            Todo App</h1>
                <input type='text'placeholder='enter items...' />
                
            </form>
            <ul>
                <li>
                    Items <i className="fa-solid fa-trash"></i>
                </li>
                <li>
                    Items<i className="fa-solid fa-trash"></i>
                </li>
            </ul>
      </div>
    )
  }
}
export default TodoApp
