import React, { Component } from 'react';
import './Relationships.scss';

import cssSvg from '../imgs/css.svg';
import htmlSvg from '../imgs/html.svg';
import jsSvg from '../imgs/javascript.svg';


class Relationships extends Component {
	render() {
		return (
			<div className='relationships'>
                        <div className="wrapper">
                              <h2>About my relationships with web-development</h2>
                              <div className='flex'>
                                    <div className='flex-item html'>
                                          <img src={htmlSvg} />
                                          <h3>I'm in love with HTML</h3>
                                          <p>Hypertext Markup Language (HTML) is
                                          the standard markup language for creating
                                          web pages and web applications.</p>
                                    </div>
                                    <div className='flex-item css'>
                                          <img src={cssSvg} />
                                          <h3>CSS is my best friend</h3>
                                          <p>Cascading Style Sheets (CSS) is a style 
                                          sheet language used for describing the 
                                          presentation of a document written in a 
                                          markup language like HTML.</p>
                                    </div>
                                    <div className='flex-item js'>
                                          <img src={jsSvg} />
                                          <h3>JavaScript is my passion</h3>
                                          <p>JavaScript is a high-level, interpreted 
                                          programming language. It is a language which 
                                          is also characterized as dynamic, weakly typed, 
                                          prototype-based and multi-paradigm.</p>
                                    </div>
                              </div>
                        </div>
      		</div>
		)
	}
}

export default Relationships;