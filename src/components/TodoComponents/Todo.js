import React from 'react';

const Todo = props => {
   let classNames = 'item';
    if (props.todos.completed){
        classNames += 'completed';
    }

    function handleCompleted() {
        props.toggleCompleted(props.todos.id);
    }
    return (
        <div className = {classNames} onClick = {handleCompleted}>
            <p>{props.todos.task}</p>
        </div>
    );
};

export default Todo;