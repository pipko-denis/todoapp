import React from 'react';

const TodoListItem = ( { itemText, important=false, ...others } ) => {

  console.log(others);

  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <span style={style}> { itemText } </span>
  )
}

export default TodoListItem;