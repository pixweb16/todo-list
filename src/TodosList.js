import { Component } from "react"
import Todo from "./Todo";
import TodoAddForm from "./TodoAddForm";
import "./css/TodosList.css";

// generate todos and handle events, return todos list
class TodosList extends Component {
    constructor() {
        super();
        this.state = { todosList:[{id: '1', value: 'test1'},{id: '2', value: 'test2'}] };
    }

    // add todo by passing an object
    add = (newTodo) => {
        this.setState(currentSt => ({todosList: [...currentSt.todosList, newTodo]}) )
    }

    // edit todo by receiving (id,value) 
    editTodo = (editedTodo) => {

// TODO *****************************
        // editing the selected todo by id
        let newTodosList = this.state.todosList;
        for (let object of newTodosList) {
            if (object.id === editedTodo.id) {
                object.value = editedTodo.value;
            }
        }
        // setting the new state
        this.setState(currentSt => ({todosList: newTodosList}));
    }

    
    // remove todo by passing id
    remove = (id) => {
        this.setState(currentSt => ({todosList: currentSt.todosList.filter(t => t.id !== id)}) )
    }

    render() {
        
        // render todos
        let todos = this.state.todosList.map(
            
                todo => <Todo   key={todo.id} 
                                id={todo.id} 
                                todo={todo.value} 
                                editTodo={this.editTodo}
                                remove={this.remove} />)
        
        return(
            <div className="TodosList" >
                
                {/* Header, title */}
                <div className="TodosList-header">
                    <h2>Todo List</h2>
                    <p>a simple react todo app</p>
                </div>
                
                {/* Todos render */}
                <div className="TodosList-todos-list">
                    {todos}
                </div>

                {/* button add todo */}
                <div className="TodosList-new-todo">
                    <TodoAddForm add={this.add} />
                </div>
            </div>
        )
    }

}

export default TodosList;