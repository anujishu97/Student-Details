import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';

export default class Navigation extends Component {
    constructor(props){
        super(props);
        

    }
    render() {
        const token=localStorage.getItem("token");
        return (
                 <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/Create'} className="navbar-brand">Student Details</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                {token === null ? (
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Login</Link>
                  </li>
                    ):(
                        <div></div>
                          )}
                        
                   {token === null ? (
            <div></div>
          ) : (
              
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>

                      )}
        {token === null ? (
            <div></div>
          ) : (
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Index</Link>
                  </li>
          )}
           {token === null ? (
            <div></div>
          ) : (
                  <li className="nav-item">
                    <Link to={'/logout'} className="nav-link">Logout</Link>
                  </li>
          )}
                </ul>
              </div>
            </nav>
            </div>
        )
    }
}
