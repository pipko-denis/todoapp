import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {

  const items = [
    { label: 'Learn react 2', important: false, id: 1, }
    , { label: 'Build awsome application 1', important: true, id: 2, }
    , { label: 'Build awsome application 2', important: false, id: 3, }
  ]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  //const value = '<script>alert("test")</script>'

  return (
    <div className="todo-app">
      {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox}
      <AppHeader className="app-header" toDo={0} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList items={items}
        onDeleted={(id) => { console.log('del in app id:',id)}}
      />
    </div>
  )
}

// const App = () => {
//   const [i, changeIt] = React.useState(0);
// const inc = () => {
//   return changeIt(i+1);
// }
//   const inc = () => changeIt(i + 1)
//   const dec = () => changeIt(i - 1)
//   const rand = () => changeIt(Math.floor(Math.random() * 100))

//   return (
//     <div>
//       Hello {`${i}`}
//       <br/>
//       <button onClick={() => inc()}>inc</button>
//       <button onClick={() => dec()}>dec</button>
//       <button onClick={() => rand()}>random</button>
//     </div>
//   )
// }

// //const el = ();

export default App;