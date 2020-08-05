import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component{

  constructor(){
    super();
    this.state = {
      done: false,
      important: false,
    };

    // this.onDeleteClick = () => {
    //   console.log('delete click in item',this.props.label,this.state);
    //   this.props.onDeleted();
    // }

    // this.onLabelClick = () => {
    //   console.log(`done ${this.props.label}. Is it important: ${this.props.label}`);            
    //   this.props.onToggleDone();
    //   this.setState( (state) => {        
    //     return {
    //       done : !state.done,          
    //     }
    //   } );
    // }

    // this.onImportantClick = () => {
    //   //this.setState({ important: !this.state.important});
    //   this.props.onToggleImportant();
    //   this.setState( (state) => {        
    //     return {
    //       important: !state.important
    //     }
    //   });
    // }
  }



  render() {

    //console.log(others);

    const { label = '', onDeleted, onToggleDone, onToggleImportant, done, important} = this.props;
    //const {done, important} = this.state;

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
    //const {} = this
    return (
      <span className={classNames} >
        <span
          className="todo-list-item-label"
          //style={style}
          //onClick={() => console.log(`done ${label}`)}
          //onClick={ this.onLabelClick.bind(this) }
          onClick={onToggleDone}
          >
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
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

