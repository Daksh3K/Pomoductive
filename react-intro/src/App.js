import React from "react";
import TodoItem from './components/TodoItem'
import todosData from "./todosData"; // to-do list data

var todos = todosData

class App extends React.Component{
    constructor() {
        super()
        this.state = {todos: todos, text: ""}
        this.handleItemCheck = this.handleItemCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleItemCheck = (childState) => {
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

    generateUniqueID = () => {
        do {
            var isFound = false;
            var id = Math.floor(Math.random() * 10)
            for (var item of todos) {
                if (item.id === id) {
                    isFound = true;
                }
            }
        } while (isFound)
        return id;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        
        const newItem = {
            // TODO: add a check to make sure the id generated is unique.
            id: this.generateUniqueID(),
            text: this.state.text,
            completed: false
        }

        this.setState((prevState) => {
            var prevTodos = prevState.todos
            prevTodos.push(newItem)
            return ({todos: prevTodos, text: ""}) 
        }, () => console.log(typeof this.state.todos))
    }


    handleChange = (e) => {
        this.setState({text: e.target.value})
    }


    render() {
        console.log(this.state.todos)
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} items={item} changeFunction={this.handleItemCheck} />)
        return(
            <div className="list-container">

                <h1 className="heading"> To-Do List </h1>
                <hr className="heading-line"/>


                {todoItems}

                <div className="input-container">
                    <form onSubmit={this.handleSubmit} className="input-container-flex">
                        <input
                            className="list-input"
                            id="todo-input"
                            onChange={this.handleChange}
                            value={this.state.text}
                            className="list-input"
                        />
                        <button className="list-input-button">+</button>
                    
                    </form>
                </div>
            </div>
        )

    }

}

export default App;