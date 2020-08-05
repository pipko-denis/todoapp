import React, {Component} from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add'
import './app.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      items: [
        { label: 'Learn react 2', important: false, id: 5, }
        , { label: 'Build awsome application 1', important: true, id: 7, }
        , { label: 'Build awsome application 2', important: false, id: 3, }
      ],
      filter: null
    }

    this.onFilterChanged = (value) => {
      this.setState( (state) => {
        return { filter: value}
      });
    }

    this.onAddItem = (text) => {
      //console.log('onadditem app.js',text);
      this.setState(  ({ items } = this.state) => {
          const idsArray = items.map( (el) => { return el.id} );
          const newId = Math.max(...idsArray)+1;          
          const newArr = [...items];
          newArr.push({ label: text, important: false, id: newId});
          //console.log('app.js newArr:', newArr);
          return {items: newArr};

        }
      );
    }

    this.onToggleDone = (id) => {
      //console.log('app.js on toggle DONE ' + id);
      this.setState((state) => {
        const elemIndex = state.items.findIndex((el) => { return el.id === id });
        const oldElem = state.items[elemIndex];
        //console.log(oldElem, elemIndex);
        const newElem = Object.assign({}, oldElem, { done: !oldElem.done });
        const newArr = [...state.items.slice(0, elemIndex), newElem, ...state.items.slice(elemIndex + 1)];
        return { items: newArr }
      })
    }

    this.onToggleImportant = (id) => {
      //console.log('app.js on toggle IMPORTANT ' + id);
      this.setState( (state) => {
        const elemIndex = state.items.findIndex( (el) => { return el.id === id} );
        const oldElem = state.items[elemIndex];
        //console.log(oldElem, elemIndex);
        const newElem = Object.assign({}, oldElem, { important: !oldElem.important});
        const newArr = [...state.items.slice(0, elemIndex), newElem, ...state.items.slice(elemIndex+1)];
        return { items : newArr  }
      })
    }

    this.onDeleted = (id) =>  {
      // const elemToDelete = this.state.items.find(el => { return el.id == id });
      // const elemToDelIndex = this.state.items.indexOf(elemToDelete)
      this.setState( (state) => {
        const elemToDelIndex = state.items.findIndex( (el) => { return el.id === id });
        let resultArr = [...state.items];
        resultArr.splice(elemToDelIndex, 1);

        return { items: resultArr}        
      });
      
    }

  }
  
  
  render(){

    // const items = [
    //   { label: 'Learn react 2', important: false, id: 1, }
    //   , { label: 'Build awsome application 1', important: true, id: 2, }
    //   , { label: 'Build awsome application 2', important: false, id: 3, }
    // ]

    const {items, filter} = this.state;
    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;

    const doneCnt = items.filter( (el) => el.done  ).length;

    let doneCnt2 = 0;

    // this.state.items.map( (el) => {
    //   if (el.done) doneCnt2 ++;
    //   return null;
    // })
    // console.log(doneCnt2);

    const cntTodo = items.length - doneCnt;

    //console.log(filter,items);

    //  if(filter) {
    //   const filterred = items.filter((el) => el.label.indexOf(filter) > -1);
    //   console.log(filterred);
    //   console.log('filtering');
    //  } else { 
    //    const filterred = [...this.state.items] ;
    //    console.log(filterred);
    // }


    const itemsFiltered = ( (filter) ? items.filter((el) => { return el.label.indexOf(filter) > -1 }) : [...this.state.items] );
    //console.log(itemsFiltered);

    return (
      <div className="todo-app">
        {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox}
        <AppHeader className="app-header" toDo={cntTodo} done={doneCnt} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onFilterChanged={this.onFilterChanged}
          />
          <ItemStatusFilter />
        </div>
        <TodoList items={itemsFiltered}
          onDeleted={this.onDeleted}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <TodoAdd 
          onAddItem={this.onAddItem}
        />
      </div>
    )
  }
}


// const AppR = () => {

//   const items = [
//     { label: 'Learn react 2', important: false, id: 1, }
//     , { label: 'Build awsome application 1', important: true, id: 2, }
//     , { label: 'Build awsome application 2', important: false, id: 3, }
//   ]

//   const isLoggedIn = true;
//   const loginBox = <span>Log in please</span>;
//   //const value = '<script>alert("test")</script>'

//   return (
//     <div className="todo-app">
//       {isLoggedIn ? <span>{(new Date()).toISOString()}</span> : loginBox}
//       <AppHeader className="app-header" toDo={0} done={3} />
//       <div className="top-panel d-flex">
//         <SearchPanel />
//         <ItemStatusFilter />
//       </div>
//       <TodoList items={items}
//         onDeleted={(id) => { console.log('del in app id:',id)}}
//       />
//     </div>
//   )
// }

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

//export default App;