import React from "react";

class TodoItem extends React.Component() {
    render() {
        return(
            <div className="todo-items">
                <input type="checkbox" checked={this.props.todoItem.completed}/>
                <p>{this.props.todoItem.text}</p>
            </div>
        )
    }
}


// function TodoItem(props){
//     return (
//         <div className="todo-items">
//             <input type="checkbox" checked={props.todoItem.completed}/>
//             <p>{props.todoItem.text}</p>
//         </div>
//     )
// }

// BUG: todo-item 4 checkbox is misaligned due to checking it

export default TodoItem;