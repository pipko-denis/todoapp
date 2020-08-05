import React, {Component} from 'react';
import './todo-add.css';

export default class TodoAdd extends Component{

  constructor(){
    super();

    this.state = {
      text: '',
    }

    //const { onAddItem } = this.props;

    this.onTextChanged = (e) => {
      //console.log('onTextChanged ',e.target.value);      
      const val = e.target.value;
      this.changeInputState(val)
    };

    this.changeInputState = (val) => {
      this.setState((state) => {
        return {
          text: val
        }
      }
      )
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAddItem(this.state.text);
      this.changeInputState('');
    }

    // this.addItem = () => {
    //   this.props.onAddItem(this.state.text);
    //   this.changeInputState('');
    // }
  };

  render(){ 

    //const {text} = this.state;

    return(
      <form className="todo-add d-flex"
        onSubmit={this.onSubmit}
        >
        <input 
          type="text" 
          className="form-control" 
          onChange={this.onTextChanged} 
          value={this.state.text}
          />
        <button
          className="btn btn-outline-secondary ml-1"
          type="submit"
        >Add</button>
      </form>

    );
  }
}