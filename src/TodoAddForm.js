import { Component } from "react";
import {uniqueId} from "./helpers";

// form for adding new todo
class TodoAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value:''};
    }

    handelChange = (evt) => {
        this.setState(() =>({value: evt.target.value}));
    }

    handelSubmit = (evt) => {
        evt.preventDefault();
        this.props.add({...this.state, id: uniqueId()})
        this.setState(st =>({value: ''}));        
    }

    render() {
        
        return(
            <form onSubmit={this.handelSubmit} >
    
                <input  id="todoInput" 
                        name="todoInput" type="text" 
                        value={this.state.value} 
                        onChange={this.handelChange}
                        placeholder="write something..."
                        required>
                </input>
                
                <button>add todo</button>
            
            </form>
        )
    }
}

export default TodoAddForm;