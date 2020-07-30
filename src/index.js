import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn react</li>
      <li>Build awsome app</li>
    </ul>
  )
}

const AppHeader = () => {
  return (<h1>My Todo list</h1>)
}

const SearchPanel = () => {
  return (<input placeholder="search" />)
}

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

//const el = ();

ReactDOM.render(<App/>,document.getElementById("root"));