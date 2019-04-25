import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState ({ input: '' });
    };

    render(){
    return (
        <form onSubmit = {this.handleSubmit}>
            <input 
                type = 'text'
                name = 'input'
                value = {this.state.input}
                placeholder = 'todo'
                onChange = {this.onUpdate}
            />
            <button type = 'submit'>Add Todo</button>
        </form>
    );
};
}
export default TodoForm;