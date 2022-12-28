import { Component } from "react";
import "./css/Todo.css";

// return a todo, OR edit todo form
class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {editClicked: false, value:this.props.todo};
    }

    // edit button clicked, start editing
    handelEditClick = (evt) => {
        this.setState(currentSt =>({...currentSt, editClicked: true}));
    }

    // every change update the state
    handelChange = (evt) => {
        this.setState(currentSt =>({value: evt.target.value}));
    }

    // finally on submitting do changes
    handelEditSubmit = (evt) => {
        evt.preventDefault();
        this.setState(currentSt =>({editClicked: false}));
        this.props.editTodo({id:this.props.id, value: this.state.value})
    }

    handelRemove = () => {
        this.props.remove(this.props.id);
    }
    
    render() {
        let isEditing = this.state.editClicked;
        return (

            <div>
            { !isEditing 
                // render the todo            
                ?   (<div className="Todo">
                        <p>{this.props.todo}</p>
                        <button onClick={this.handelEditClick} >edit</button>
                        <button onClick={this.handelRemove}>delete</button>                
                    </div>)

                // render the editing todo form
                :   (<div className="Todo">
                        <form onSubmit={this.handelEditSubmit}>
                            <input  name={this.state.value} 
                                    value={this.state.value}
                                    onChange={this.handelChange}></input>
                        </form>
                    </div>)
            }
            </div>
        )
    }
}

export default Todo;