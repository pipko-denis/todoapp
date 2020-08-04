import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component{

  constructor(){
    super();
    this.state = {
      done: false,
      important: false,
    };

    this.onDeleteClick = () => {
      console.log('delete click in item',this.props.label,this.state);
      //this.props.onDeleted();
    }

    this.onLabelClick = () => {
      //this.props.important = !this.props.important;
      console.log(`done ${this.props.label}. Is it important: ${this.props.label}`);      
      //console.log(this.classNames);
      //this.setState({ done: ! this.state.done});
      this.setState( (state) => {
        return {
          done : !state.done
        }
      } );
    }

    this.onImportantClick = () => {
      //this.setState({ important: !this.state.important});
      this.setState( (state) => {
        return {
          important: !state.important
        }
      });
    }
  }



  render() {

    //console.log(others);

    const { label = '', onDeleted} = this.props;
    const {done, important} = this.state;

    let classNames = 'todo-list-item';

    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    if ( done ){
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }
    const {onLabelClick, onImportantClick} = this
    return (
      <span className={classNames} >
        <span
          className="todo-list-item-label"
          //style={style}
          //onClick={() => console.log(`done ${label}`)}
          //onClick={ this.onLabelClick.bind(this) }
          onClick={onLabelClick}
          >
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onImportantClick}
          >
          <i className="fa fa-exclamation" />
          
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
          >
          <i className="fa fa-trash-o" />
        </button>

      </span>
    );
  }

}

