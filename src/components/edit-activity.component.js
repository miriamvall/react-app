import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditActivity extends Component {

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

	//display activity to edit (not updated yet)
	componentDidMount(){
		axios.get('http://localhost:4000/activities/edit-activity/' + this.props.match.params.id)
		.then(res => {
			this.setState({
				name: res.data.name,
				date: res.data.date,
				organizer: res.data.organizer,
				attendees: res.data.attendees,
				location: res.data.location
			});
		})
		.catch((err) => {
			console.log(err);
		});
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
		// cancels the event to make it able to be called again
		e.preventDefault()

		const activityObject = {
			name: this.state.name,
			date: this.state.date,
			organizer: this.state.organizer,
			attendees: this.state.attendees,
			location: this.state.location
		};

		axios.put('http://localhost:4000/activities/update-activity/' + this.props.match.params.id, activityObject)
		.then((res) => {
			console.log('activity successfully updated :)');
		})
		.catch((err) => {
			console.log(err);
		});

		// redirect to the full activity list
		this.props.history.push('/activity-list');
	}

  render() {
     return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onNewName} />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date (format: DD/MM/YYYY)</Form.Label>
          <Form.Control type="text" value={this.state.date} onChange={this.onNewDate} />
        </Form.Group>

        <Form.Group controlId="Organizer">
          <Form.Label>Organizer</Form.Label>
          <Form.Control type="text" value={this.state.organizer} onChange={this.onNewOrganizer} />
        </Form.Group>

        <Form.Group controlId="Attendees">
          <Form.Label>Attendees</Form.Label>
          <Form.Control type="text" value={this.state.attendees} onChange={this.onNewAttendees} />
        </Form.Group>

        <Form.Group controlId="Location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={this.state.location} onChange={this.onNewLocation} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Activity
        </Button>
      </Form>
    </div>);
  }
}