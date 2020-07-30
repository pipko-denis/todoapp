import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/serach-panel';

const App = () => {

  const items = [{ label: 'Learn react 1', important: false, }, { label: 'Build awsome application', important: true,}]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  //const value = '<script>alert("test")</script>'

  return (
    <div>
      {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList items={items} />
    </div>
  )
}

//const el = ();

ReactDOM.render(<App/>,document.getElementById("root"));