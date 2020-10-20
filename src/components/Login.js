import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
export default class Login extends Component {
    constructor(props)
    {
        super(props)
        let loggedIn=false;
        this.state={
            username:"",
            password:"",
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm=(e)=>{
    
   const {username,password}=this.state

   if(username === "Anuj" && password === "Anuj@12345")
   {
    localStorage.setItem('token','Anuhhuhuhuh')
       this.setState({
           loggedIn: true 
          
       })
   }
    }
    render() {
        if(this.state.loggedIn)
        {
            return <Redirect to="/create" />
        }
      
        return (
            <div>
              <form onSubmit={this.submitForm()}>
              <div className="form-group">
                    <label>Username : </label>
                    <input type="text" 
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                      />
             
            </div>
            <div className="form-group">
                    <label>Password : </label>
                    <input type="password" 
                      className="form-control"
                      name="password"
                      value={this.state.password} onChange={this.onChange}
                      />
                </div>
         
                <div className="form-group">
                    <input type="submit" 
                      value="Login" 
                      className="btn btn-primary"/>
                </div>
              </form>
            </div>
        )
        
    }
}