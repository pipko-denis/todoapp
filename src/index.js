import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/serach-panel';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';

const App = () => {

  const items = [
                  { label: 'Learn react 2', important: false, id: 1, }
                  , { label: 'Build awsome application', important: true, id: 2,}
                  , { label: 'Build awsome application', important: false, id: 2, }
                ]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  //const value = '<script>alert("test")</script>'

  return (
    <div className="todo-app">
      {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox }
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

ReactDOM.render(<App/>,document.getElementById("root"));