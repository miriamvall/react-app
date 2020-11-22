import React, { Component } from "react";

import Table from 'react-bootstrap/Table';
import ActivityTableRow from './activityTableRow';
//import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";


import axios from 'axios';

//import moment from 'moment';

export default class ActivityList extends Component {

constructor(props) {
	super(props);
	this.state= {
		activities : [],
    filter: ''
	};
}

componentDidMount() {
  axios.get('http://localhost:4000/activities')
    .then(res => {
      console.log(res.data);
      this.setState({
        activities: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

DataTable() {
  return this.sortedActivities().map((res,i) => {
    return <ActivityTableRow obj={res} key={i} />;
  });
}

filteredActivities(){
  return this.state.activities.filter(act => {
    //return act.location.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1;
    return act.location.toLowerCase().startsWith(this.state.filter.toLowerCase());
  });
}

sortedActivities(){
  let fa = this.filteredActivities();
  return fa.sort((a,b) => {
    a = a.date.split('/').reverse().join('');
    b = b.date.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
  });
}

handleChange = event => {
  this.setState({ filter: event.target.value });
};

render() {
  return (
    <div className="general-wrapper">
    <div className="inputFilter">
      <input value={this.state.filter} onChange={this.handleChange} placeholder="filter by location"/>
    </div>
    <div className="table-wrapper">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Organizer</th>
          <th>Attendees</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.DataTable()}
      </tbody>
    </Table>
  </div>
  </div>);
  }
}