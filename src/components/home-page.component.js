import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class HomePage extends Component {
	render(){
		return(
		<Jumbotron>
			<h1>Welcome to the app!</h1>
			<p>It allows you to control ongoing, past or future activities using a MERN stack.</p>
			<p>
				<Link to="/create-activity">
					<Button variant="primary">Get started!</Button>
				</Link>
			</p>
		</Jumbotron>);
	}
}