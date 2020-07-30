import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn react 1','Build awsome application']
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
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

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;

  return (
    <div>
      
      {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

//const el = ();

ReactDOM.render(<App/>,document.getElementById("root"));