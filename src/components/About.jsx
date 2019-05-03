import React, { Component } from 'react';
import './About.scss';
import manMobileSvg from '../imgs/man-mobile.svg';

class About extends Component {
	render() {
		return (
			<div className='about'>
                        <div className="wrapper">
                              <h2>Let's get acquainted</h2>
                              <div className='flex'>
                                    <img src={manMobileSvg} />
                                    <div className='text-block'>
                                          <h3>I am cool frontend developer</h3>
                                          <p>
                                          When real users have a slow experience on mobile, 
                                          they're much less likely to find what they are looking 
                                          for or purchase from you in the future. For many sites 
                                          this equates to a huge missed opportunity, especially 
                                          when more than half of visits are abandoned if a mobile 
                                          page takes over 3 seconds to load. 
                                          </p>
                                          <p className='sp'>
                                          Last week, Google Search and Ads teams announced 
                                          two new speed initiatives to help improve user-experience 
                                          on the web.
                                          </p>
                                          <span>Sign Up</span>
                                    </div>
                              </div>
                        </div>
      		</div>
		)
	}
}

export default About;