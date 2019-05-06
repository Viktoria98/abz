import React, { Component } from 'react';
import './Users.scss';
import axios from 'axios';

class Users extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  users: [],
            }
      }

      componentDidMount() {
            axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
                  .then(res => {
                        const users = res.data.users;
                        this.setState({ users });
                        console.log(res.data.users);
                  })
      }

	render() {
		return (
			<div className='users'>
                        <div className="wrapper req-wrapper">
                              <h2>Our cheerful users</h2>
                              <h5>Attention! Sorting users by registration date</h5>
                              <div className="flex">
                                    {this.state.users.map(user => 
                                       <div key={user.id} className="user-flex">
                                          <img src={user.photo} />
                                          <div className="user-info">
                                                <h4>{user.name}</h4>
                                                <span>{user.position}</span>
                                                <span>{user.email}</span>
                                                <span>{user.phone}</span>
                                          </div>
                                       </div>                                                                     
                                    )
                                    }                              
                              </div>
                              <button>Show more</button>
                        </div>
      		</div>
		)
	}
}

export default Users;