import React from "react";


class TodoItem extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            checked: this.props.items.completed
        }
        this.handleCheck = this.handleCheck.bind(this);
    }


    handleCheck() {
        console.log(`Previous State: ${this.state.checked}`)
        this.setState(prevState => { // NOTE: this.setState() is asynchornous
            return {checked: !prevState.checked}
        }, () => console.log(`Previous State: ${this.state.checked}`)) // wtf is this, 
        // why do i need an arrow function for a callback, is this a js moment
    }
 

    render() {
        return(
            <div className="todo-items">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
                <p>{this.props.items.text}</p>
            </div>
        )
    }
}

// BUG: todo-item 4 checkbox is misaligned due to checking it

export default TodoItem;