import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {

  const items = [
    { label: 'Learn react 2', important: false, id: 1, }
    , { label: 'Build awsome application', important: true, id: 2, }
    , { label: 'Build awsome application', important: false, id: 2, }
  ]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  //const value = '<script>alert("test")</script>'

  return (
    <div className="todo-app">
      {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox}
      <AppHeader className="app-header" />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList items={items} />
    </div>
  )
}

//const el = ();

export default App;