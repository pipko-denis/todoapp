import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component{

  state = {
    filter: null,
  }

  onSearchInputChanged = (e) => {
    const value = e.target.value;
    console.log(value)
    this.props.onFilterChanged(value)
  }


  render(){

    const searchText = "Type here to search";

    return (<span className="search-panel">
      <input type="text"
        className="form-control search-input"
        disabled={false}
        placeholder={searchText}
        onChange={this.onSearchInputChanged}
      />
    </span>)
  };
}


export default SearchPanel;