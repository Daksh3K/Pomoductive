import React from "react";


class TodoItem extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            checked: this.props.items.completed,
            id: this.props.items.id
        }
        this.handleCheck = this.handleCheck.bind(this);
    }


    handleCheck() {
        this.setState(prevState => { // NOTE: this.setState() is asynchornous
            return {checked: !prevState.checked}
        }, () => this.props.changeFunction(this.state)) // wtf is this, 
        // why do i need an arrow function for a callback, is this a js moment

        

        
    }


    render() {
        let textDecor;
        if (this.state.checked) {
            textDecor = "line-through"
        } else {
            textDecor = null;
        }

        return(
            <div className="">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
                <p style={{textDecoration:textDecor}}>{this.props.items.text}</p>
            </div>
        )
    }
}

// BUG: todo-item 4 checkbox is misaligned due to checking it

export default TodoItem;