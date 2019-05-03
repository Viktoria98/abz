import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import '../styles/normalize.css'

import Header from 'components/Header';
import Banner from 'components/Banner';
import About from 'components/About';
import Relationships from 'components/Relationships';
import Requirements from 'components/Requirements';
import Users from 'components/Users';

class App extends Component {
	render() {
		return (
			<div className='App'>
       			<Header />
       			<Banner />
       			<About />
       			<Relationships />
       			<Requirements />
                        <Users />
      		</div>
		)
	}
}

export default App;