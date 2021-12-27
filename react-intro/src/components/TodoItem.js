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
    if (this.state.checked) {
      textDecor = "line-through";
    } else {
      textDecor = null;
    }

    return (
      <div className="todo-item-container">
        <label
          for={this.state.id}
          className="todo-item-text"
          style={{ textDecoration: textDecor }}
        >
          {this.props.items.text}
        </label>

        <div className="todo-item-buttons">
          <button onClick={this.handleDelete} id={this.state.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
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
        </div>
      </div>
    );
  }
}

export default TodoItem;
