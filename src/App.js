import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const TodoArray = [
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
      todoOnState: TodoArray,
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    };
  };

  toggleCompleted = id => {
    this.setState({
      todoOnState: this.state.todoOnState.map(todo => 
       todo.id === id ?{...todo, completed: !todo.completed} :todo
       )
    });
  };

addTodo = event => {
  event.preventDefault();
  this.setState({
    todoOnState: [...this.state.todoOnState, this.state.todo],
    todo: {
      task: '',
      id: '',
      completed: ''
    }

  });
};

handleChanges = event => {
  this.setState({
    todo: {
      ...this.state.todo,
      task: event.target.value,
      id: Date.now(),
      completed: false
    }
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos = {this.state.todoOnState}
        toggleCompleted = {this.toggleCompleted}
        />
        <TodoForm 
        handleAddTodo = {this.addTodo}
        value = {this.state.todo.task}
        handleChange = {this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
