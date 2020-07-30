import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ( { items = [] }) => {
  
  //console.log(items[0])
  // const aaa = {...items[0]};
  // aaa.label = 'test';
  // console.log(items[0]);
  // console.log(aaa);

  const elements = items.map( 
    //el => {  return (<li><TodoListItem label={el.label} important={el.important} ></TodoListItem></li>) }
    el => { 
      return (<li><TodoListItem {...el} ></TodoListItem></li>) 
    }
  )

  return (
    <ul>{elements}</ul>
  )
}

export default TodoList;