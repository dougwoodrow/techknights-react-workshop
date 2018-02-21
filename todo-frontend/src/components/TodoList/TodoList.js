import React, {Component} from 'react';
import './TodoList.css';

class TodoList extends Component {

    addNewTodo(e) {
        e.preventDefault();

        let todo = {
            title: this.state.title
        };

        this.setState({todos: this.state.todos.concat(todo)});
        console.log("todo added with title: ", this.state.title);
    }

    clearTodos(e) {
        console.log("todos cleared");
    }

    setTitle(e) {
        this.setState({title: e.target.value});
    }

    setCompletion(e) {
        console.log("toggling item completion");
        console.log(e.target.value);
    }

    componentDidMount() {
        console.log("getting data from the server...");
    }

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            todos: []
        };

        this.handleChange = this.setTitle.bind(this);
        this.handleSubmit = this.addNewTodo.bind(this);
    }

    render() {
        return (
            <div className="TodoListContainer">
                <ul className="TodoList">
                    {this.state.todos.map(function (todo, i) {
                        return(
                            <li id={"TodoListItem-" + i}>
                                <div className="TodoListItem">
                                    <label>
                                        <input onChange={() => console.log("yo!")} type="checkbox"/>
                                        {todo.title}
                                        <small>at</small>
                                    </label>
                                </div>
                            </li>
                        );
                    })}

                </ul>

                <form>
                    <input name="title"
                           id="title"
                           value={this.state.title}
                           onChange={this.handleChange}/>
                    <button className="Btn"
                            type="submit"
                            onClick={this.handleSubmit}>Add New Todo
                    </button>
                </form>

                <button className="Btn"
                        onClick={this.clearTodos.bind(this)}>Clear Todos
                </button>
            </div>
        );
    }
}

export default TodoList;
