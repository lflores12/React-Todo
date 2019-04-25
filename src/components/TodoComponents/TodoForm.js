import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit = {props.handleAddTodo}>
            <input 
                type = 'text'
                name = 'todo'
                value = {props.value}
                placeholder = 'todo'
                onChange = {props.handleChange}
            />
            <button onClick = {props.handleAddTodo} >Add Todo</button>
            <button>Clear Todo</button>
        </form>
    );
};

export default TodoForm;