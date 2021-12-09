import React from "react";
import TodoItem from './components/TodoItem'
import todosData from "./todosData"; // to-do list data

var todos = todosData

class App extends React.Component{
    constructor() {
        super()
        this.state = {todos: todos}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (childState) => {
        var counter = 0;
        this.setState((prevState) => {
            for (var item of prevState.todos) {
                if (item.id === childState.id) {
                    if (childState.checked === true) {
                        prevState.todos.splice(counter, 1)
                    }
                }
                counter ++
            }

            return {todos: prevState.todos}
        })
    }



    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} items={item} changeFunction={this.handleChange} />)
        return(
            <div className="todo-list">
                {todoItems}
            </div>
        )

    }

}

export default App;