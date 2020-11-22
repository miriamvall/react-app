import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

//import moment from 'moment';

export default class ActivityTableRow extends Component {

	constructor(props){
		super(props)
		this.deleteActivity = this.deleteActivity.bind(this);
	}

	deleteActivity(){
		axios.delete('http://localhost:4000/activities/delete-activity/' + this.props.obj._id)
		.then((res) => {
			console.log('activity successfully deleted :)');
		})
		.catch((err) => {
			console.log(err);
		});
		
	}

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.organizer}</td>
                <td>{this.props.obj.attendees}</td>
                <td>{this.props.obj.location}</td>
                <td>
                    <Link className="edit-link" to={"/edit-activity/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.deleteActivity}>Delete</Button>
                </td>
            </tr>
        );
    }
}