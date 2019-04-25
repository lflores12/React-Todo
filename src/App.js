import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: '1528817077286',
    completed: false,
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  };

  addTodo = item => {
    this.setState({
      todos:[
        ...this.state.todos, {task: item, id: Date.now, completed: false}
      ]
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => 
       item.id === id ? {...item, completed: !item.completed} : item
       )
    });
  };

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className = 'App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTodo = {this.addTodo}
        />
        <TodoList 
        todos = {this.state.todos}
        toggleCompleted = {this.toggleCompleted}
        />
        <button className = 'clear-btn' onClick = {this.removeCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
