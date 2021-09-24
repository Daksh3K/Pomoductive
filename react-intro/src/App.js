import React from "react";
import TodoItem from './components/TodoItem'
import todosData from "./todosData"; // to-do list data


function App(){
    let todoItems = todosData.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem}/>)

    return(
    <div className="todo-list">
        {todoItems}
    </div>
    )
}

export default App;