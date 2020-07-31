import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ items = [] }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
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



export default TodoList;