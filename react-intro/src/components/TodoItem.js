import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.items.completed,
      id: this.props.items.id,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCheck() {
    this.setState((prevState) => {
      return { checked: !prevState.checked };
    });
  }

  handleDelete = (e) => {
    this.props.changeFunction(e.currentTarget.id);
  };

  render() {
    let textDecor;
    let displayCheck;
    if (this.state.checked) {
      textDecor = "line-through";
      displayCheck = "inline-block";
    } else {
      textDecor = null;
      displayCheck = "none";
    }

    return (
      <div className="todo-item-container">
        <label
          htmlFor={this.state.id}
          className="todo-item-text"
          style={{ textDecoration: textDecor }}
        >
          {this.props.items.text}
        </label>

        <div className="todo-item-buttons">
          <button
            className="todo-item-delete-button"
            onClick={this.handleDelete}
            id={this.state.id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="todo-item-delete-svg h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="todo-item-delete-svg"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <input
            id={this.state.id}
            className="todo-item-checkbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheck}
          />
          <button
            className="todo-item-checksvgbutton"
            style={{ display: displayCheck }}
            onClick={() => {
              this.setState((prevState) => {
                return { checked: !prevState.checked };
              });
            }} // what in the world is this ? how many brackets ?????
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="todo-item-check-svg h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
