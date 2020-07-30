import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = ['Learn react 1', 'Build awsome application']

  const itemProps = {test: 'test', test2: 1};

  return (
    <ul>
      <li><TodoListItem itemText={items[0]} otherProps={itemProps}></TodoListItem></li>
      <li><TodoListItem itemText={items[1]} important ></TodoListItem></li>
    </ul>
  )
}

export default TodoList;