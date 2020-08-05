import React, {Component} from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {

  constructor() {
    super();
    
    //const { onDeleted } = this.props;

    this.onDeleted = (id) => {
      console.log('deleted in list', id);
      this.props.onDeleted(id);      
    };
    this.onToggleDone = (id) => {
      console.log('onToggleDone list');
      this.props.onToggleDone(id);
    };
    this.onToggleImportant = (id) => {
      console.log('onToggleImportant list');
      this.props.onToggleImportant(id);
    };
  }

  render() {

    //const items = [];
    const { items = [] } = this.props;

    const elements = items.map((item) => {
    const { id, ...itemProps } = item;

        return (
          <li key={id} className="list-group-item">
            <TodoListItem {...itemProps}
              onDeleted={ () => this.onDeleted(id) }
              onToggleDone={ () => this.onToggleDone(id)}
              onToggleImportant={() => this.onToggleImportant(id)}
            />
          </li>
        );
    });

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  };
};

  //console.log(items[0])
  // const aaa = {...items[0]};
  // aaa.label = 'test';
  // console.log(items[0]);
  // console.log(aaa);
    //el => {  return (<li><TodoListItem label={el.label} important={el.important} ></TodoListItem></li>) }


  // const elements = items.map( 

  //   ({ id, ...itemProps} ) => { 

  //     return (
  //       <li key={id} className="list-group-item">
  //         <TodoListItem {...itemProps} />
  //         </li>
  //     ) 
  //   }
  // )



//export default TodoList;