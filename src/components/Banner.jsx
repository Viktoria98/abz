import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
	render() {
		return (
			<div className='banner'>
       			<div className="wrapper banner-wrapper">
       				<h1>Test assignment for Frontend Developer position</h1>
       				<p>We kindly remind you that your test assignment should
       				 be submitted as a link to github/bitbucket repository. 
       				 Please be patient, we consider and respond to every
       				 application that meets minimum requirements. We 
       				 look forward to your submission. Good luck!</p>
       				 <button>Sign Up</button>
       			</div>
      		</div>
		)
	}
}

export default Banner;