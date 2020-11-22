import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

export default class CreateActivity extends Component {
	constructor(props) {
		super(props);

		this.onNewName = this.onNewName.bind(this);
		this.onNewDate = this.onNewDate.bind(this);
		this.onNewOrganizer = this.onNewOrganizer.bind(this);
		this.onNewAttendees = this.onNewAttendees.bind(this);
		this.onNewLocation = this.onNewLocation.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			date: '',
			organizer: '',
			attendees: '',
			location: ''
		}

	}

	

	onNewName(e) {
		this.setState({name: e.target.value});
	}

	onNewDate(e) {
		this.setState({date: e.target.value});
	}

	onNewOrganizer(e) {
		this.setState({organizer: e.target.value});
	}

	onNewAttendees(e) {
		this.setState({attendees: e.target.value});
	}

	onNewLocation(e) {
		this.setState({location: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		const activityObject = {
			name: this.state.name,
			date: this.state.date,
			organizer: this.state.organizer,
			attendees: this.state.attendees,
			location: this.state.location
		};

		let apiURL = 'http://localhost:4000/activities/create-activity';

		axios.post(apiURL, activityObject).then(() => {
			this.setState({name: '', organizer: '', date: '', attendees: '', location: ''});
		}).catch(err => {
			console.log(err)
		});

		
	}

  render() {
    return (<div class="form-wrapper">
      <Form onSubmit={this.onSubmit}>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onNewName}/>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date (format: DD/MM/YYYY)</Form.Label>
          <Form.Control type="text" value={this.state.date} onChange={this.onNewDate}/>
        </Form.Group>

        <Form.Group controlId="Organizer">
          <Form.Label>Organizer</Form.Label>
          <Form.Control type="text" value={this.state.organizer} onChange={this.onNewOrganizer}/>
        </Form.Group>

        <Form.Group controlId="Attendees">
          <Form.Label>Attendees</Form.Label>
          <Form.Control type="text" value={this.state.attendees} onChange={this.onNewAttendees}/>
        </Form.Group>

        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={this.state.location} onChange={this.onNewLocation}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Activity
        </Button>
      </Form>
    </div>);
  }
}