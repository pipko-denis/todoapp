import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStausFilter extends Component{

  //const { state = 0 } = props;

  render(){

    //const { state = 0 } = this.props;

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-outline-second">Active</button>
        <button type="button" className="btn btn-outline-second">Done</button>
      </div>
    );
  }


}



