import React, { Component } from 'react';
import './Registration.scss';

class Registration extends Component {
	render() {
		return (
			<div className='registration'>
                        <div className="wrapper">
                              <h2>Register to get a work</h2>
                              <h5>Attention! After successful registration 
                              and alert, update the list of users in the block from the top</h5>
                              <form className="flex">
                                    <div>
                                          <input placeholder="Your name" />
                                          <label className="ul" for="">Upload</label>
                                    </div>
                                    <div>
                                          <input placeholder="Your email" />
                                          <label className="ul" for="">Upload</label>
                                    </div>
                                    <div>
                                          <input placeholder="+38 (___)  ___ __ __" />
                                          <label className="ul" for="">Upload</label>
                                    </div>
                                    <select>
                                          <option value="" disabled selected hidden>Select your position</option>
                                          <option value="1">1</option>
                                          <option value="1">2</option>
                                          <option value="1">3</option>
                                    </select>
                                    <div className="upload">
                                          <span className="us">Upload your photo</span>
                                          <input type="file" id="file" className="up-ph" />
                                          <label for="file">Upload</label>
                                          <p>File format jpg  up to 5 MB, the minimum size of 70x70px</p>
                                    </div>
                                    <button>Sign Up</button>
                              </form>
                        </div>
      		</div>
		)
	}
}

export default Registration;