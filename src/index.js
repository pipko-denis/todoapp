import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo list</h1>    
    <input placeholder="search" />
    <ul>
      <li>Learn react</li>
      <li>Build awsome app</li>
    </ul>
  </div>

);

ReactDOM.render(el,document.getElementById("root"));