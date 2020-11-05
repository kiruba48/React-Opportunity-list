import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {

    state = { lists: [] }

    updateTodo = (newTodo) => {
        this.setState({
            lists: [ ...this.state.lists, newTodo]
        })
    }

    remove = (id) => {
        this.setState(curState => ({
            lists: curState.lists.filter(list => list.id !== id)
        }))
    }

    edit = (id, update) => {
        const renderedUpdate = this.state.lists.map(list => {
            if(id === list.id) {
               return { ...list, todo: update }
            }
           return list;
        })
        this.setState({
            lists: renderedUpdate
        })
    }

    toggleCompletion = (id) => {
        const renderedUpdate = this.state.lists.map(list => {
            if(id === list.id) {
               return { ...list, completed: !list.completed  }
            }
           return list;
        })
        this.setState({
            lists: renderedUpdate
        })
    }

    render() {
        const renderTodo = this.state.lists.map(list => {
            return (
                <CSSTransition key={list.id} timeout={500} classNames='todo'>
                <Todo 
                key={list.id} 
                id={list.id} 
                todo={list.todo} 
                completed={list.completed}
                removeTodo={this.remove}
                updateTodo={this.edit}
                toggleCompletion={this.toggleCompletion}
                />
                </CSSTransition>
            )
        })
        return (
            <div className="TodoList">
                <h1>OPPORTUNITIES LIST<span>Each day is a Treasure filled with limitless opportunities</span></h1>
               
                <ul>
                    <TransitionGroup className='todo-list'>{renderTodo}</TransitionGroup>
                </ul>
                
                <NewTodoForm updateTodo={this.updateTodo}/>

                
            </div>
        )
    }
}

export default TodoList;