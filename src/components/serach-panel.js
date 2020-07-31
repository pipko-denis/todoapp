import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  const searchText = "Type here to search";

  return (<span className="search-panel">
    <input type="text"
            className="form-control search-input" 
            disabled={false} 
            placeholder={searchText} />            
          </span>)
}


export default SearchPanel;