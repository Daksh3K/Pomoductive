import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData"; // to-do list data

var todos = todosData;

class App extends React.Component {
  /**
   * Native react constructor method
   */
  constructor() {
    super();
    this.state = { todos: todos, text: "" };
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Function is called whenever the delete button of
   * a todo item is pressed
   * @param {object} childState
   */
  handleItemDelete = (childID) => {
    this.setState((prevState) => {
      for (var [index, item] of prevState.todos.entries()) {
        if (item.id === parseInt(childID)) {
          prevState.todos.splice(index, 1);
        }
      }
      return { todos: prevState.todos };
    });
  };

  /**
   * Helper function to generate unique IDs
   * @returns a unique ID
   */
  generateUniqueID = () => {
    do {
      var isFound = false;
      var id = Math.floor(Math.random() * 100);
      for (var item of todos) {
        if (item.id === id) {
          isFound = true;
        }
      }
    } while (isFound);
    return id;
  };

  /**
   * Function is called whenever user enters/clicks add button
   * It adds a new todo item to the array and re-renders it
   * @param {*} e
   * @returns
   */
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      // TODO: add a check to make sure the id generated is unique.
      id: this.generateUniqueID(),
      text: this.state.text,
      completed: false,
    };

    this.setState(
      (prevState) => {
        var prevTodos = prevState.todos;
        prevTodos.push(newItem);
        return { todos: prevTodos, text: "" };
      },
      () => console.log("new item created")
    );
  };

  /**
   * Function is called whenever the user interactions with input field
   * @param {*} e
   */
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  /**
   * Native react render method
   * @returns
   */
  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        items={item}
        changeFunction={this.handleItemDelete}
      />
    ));
    return (
      <main>
        <div className="timer-container"> </div>

        <div className="todo-container elevation-1">
          <h1 className="todo-heading"> To-Do List </h1>
          <hr className="todo-heading-line" />

          {todoItems}

          <div className="todo-input-container">
            <form onSubmit={this.handleSubmit} className="todo-container-flex">
              <input
                className="todo-input"
                id="todo-input"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button className="todo-input-button">+</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
