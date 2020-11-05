import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    state = {
        todo: ''
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { todo: this.state.todo, id: uuid(), completed: false  }
        this.props.updateTodo(newTodo);
        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label>New Todo</label>
                    <input  
                        placeholder="My task"
                        value={this.state.todo}
                        onChange={(e) => this.setState({todo: e.target.value})}
                    />
                    <button>ADD TODO</button>
                </form>
                
            </div>
        )
    }
}

export default NewTodoForm;