import React, { Component } from 'react';
import './Todo.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";


class Todo extends Component {

    state = {
        isEditing: false,
        task: this.props.todo
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateTodo( this.props.id, this.state.task);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <CSSTransition key='editing' timeout={500} classNames='form'>
                
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input
                         type="text"
                         value= {this.state.task}
                         onChange={(e) => this.setState({task: e.target.value})}
                         />
                         <button>save</button>
                    </form>
                </CSSTransition>
                
            
            )
        } else {
             result = (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
               
                        <li className='Todo-task'
                            onClick={() => this.props.toggleCompletion(this.props.id)}
                        >
                            {this.props.todo}
                        </li>
                </CSSTransition>
             )
                        //  className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}>
                        // <div>
                        //     <button onClick={() => this.props.removeTodo(this.props.id)}>X</button>
                        //     <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
                        // </div>
                        
        }
        return (
                <TransitionGroup
                  className={this.props.completed ? "Todo completed" : "Todo"}
                >
                  {result}
                  <div className='Todo-buttons'>
                    <button onClick={() => this.props.removeTodo(this.props.id)}>
                      <i class='fas fa-trash' />
                    </button>
                    { this.props.completed ? null : <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>
                    <i class='fas fa-pen' />
                    </button> }
                    
                  </div>
                </TransitionGroup>
              
        );
    }
}

export default Todo;