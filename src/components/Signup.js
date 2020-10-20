import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom';
import axios from 'axios';
export default class Login extends Component {
    constructor(props)
    {
        super(props)
     
        //this.onChange=this.onChange.bind(this)
        this.onusernamechange=this.onusernamechange.bind(this)
        this.onpasswordchange=this.onpasswordchange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:"",
            password:"",
           
        }
    }
   
        onusernamechange(e) {
            this.setState({
                username:e.target.value
            })
        }

        onpasswordchange(e) {
            this.setState({
                password:e.target.value
            })
        }
    

        onSubmit(e) 
    {
       e.preventDefault();
        const obj = {
            username: this.state.username,
            password:this.state.password
        };
        axios.post('http://localhost:4000/business/user', obj)
            .then(res => {
            console.log(res.data)
            alert("Registration has been done Successfully");
            });
    
            this.props.history.push('/');
   
    }
    render() {
    
      
        return (
            <div>
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                    <label>Username : </label>
                    <input type="text" 
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onusernamechange}
                       required/>
             
            </div>
            <div className="form-group">
                    <label>Password : </label>
                    <input type="password" 
                      className="form-control"
                      name="password"
                      value={this.state.password} onChange={this.onpasswordchange}
                       required/>
                </div>
         
                <div className="form-group">
                    <input type="submit" 
                      value="Register" 
                      className="btn btn-primary"/>
                </div>
              </form>
            </div>
        )
        
    }
}
