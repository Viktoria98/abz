import React, { Component } from 'react';
import axios from 'axios';
import logoSvg from '../logo/logo.svg';
import signOutSvg from '../icons/sign-out.svg';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			person: {}
		}
	}

	componentDidMount() {
		axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users/1`)
			.then(res => {
				const person = res.data.user;
				this.setState({ person });
        		console.log(res.data.user);
			})
	}

	render() {
		return (
			<div className='Header'>
				<div className="wrapper header-wrapper">
					<div className='logo'>
						<img src={logoSvg}  />
					</div>
					<ul className="menu">
						<li className="menu_item"><a href="#" className="menu_link">About me</a></li>
						<li className="menu_item"><a href="#" className="menu_link">Relationships</a></li>
						<li className="menu_item"><a href="#" className="menu_link">Requirements</a></li>
						<li className="menu_item"><a href="#" className="menu_link">Users</a></li>
						<li className="menu_item"><a href="#" className="menu_link">Sign Up</a></li>
					</ul>
					<div className="user">
						<div className="user-info">
							<span className="personName">{this.state.person.name}</span>
							<span className="personEmail">{this.state.person.email}</span>
						</div>
						<img className="userPhoto" src={this.state.person.photo}/>
						<img className="signOutSvg" src={signOutSvg} />
					</div>
				</div>
      		</div>
		)
	}
}

export default Header;