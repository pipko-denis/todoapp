import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStausFilter extends Component{


  onFilterStatusChanged = () =>{
    console.log('onFilterStatusChanged item-status-filter');
    this.props.onFilterStatusChanged('all');
  }

  render(){

    //const { onFilterStatusChanged } = this.props;

    //console.log(`btn btn${"-ouline"}-info`);

    const { filterStatus, onFilterStatusChanged} = this.props;

    const buttonsArray = [{ label: 'All', statusName: 'all', id: 1 }, { label: 'Active', statusName: 'active', id: 2 }, { label: 'Done', statusName: 'done', id: 3 }];

    let buttonsJsx = '';

    const buttons = buttonsArray.map( (el) => {
        //console.log(filterStatus,el.statusName)
        return (<button type="button" 
                className={`btn btn${(filterStatus === el.statusName) ? "-info" : "-outline-second"}`} 
                onClick={ () => onFilterStatusChanged( el.statusName ) } 
                key={el.id}
                value={this.filterValue}>{el.label}</button>);
    })
    //console.log

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }


}



