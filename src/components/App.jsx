import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import '../styles/normalize.css'

import Header from 'components/Header';

class App extends Component {
	render() {
		return (
			<div className='App'>
       			<Header />
      		</div>
		)
	}
}

export default App;