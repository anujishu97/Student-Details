import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {Redirect} from 'react-router-dom';

export default class Index extends Component {

  constructor(props) {
      super(props);
      const token=localStorage.getItem("token")
    console.log(token);
    let loggedIn = true
    if(token ==  null)
    {
        loggedIn = false
    }
      this.state = {business: [],loggedIn};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          console.log(response);
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      console.log(this.state.loggedIn)
      if(this.state.loggedIn === false)
      { 
        alert("Please login first")
         return <Redirect to="/" />
      }
      return (
        <div>
          <h3 align="center">Student List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date of Birth</th>
               
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }