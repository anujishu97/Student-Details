import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';

export default class Create extends Component {
  constructor(props) {
    super(props)
    
    const token=localStorage.getItem("token")
    console.log(token);
    let loggedIn = true
    if(token ==  null)
    {
        loggedIn = false
    }

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone= this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDOb=this.onChangeDOb.bind(this);

    this.state = {
      fname: '',
      email: '',
      phone:'',
      dob:'',
      loggedIn
    }
  }
  onChangeFname(e) {
    this.setState({
      fname: e.target.value
    });
  }
  onChangeEmail(e) {
   this.setState({
     email:e.target.value
   })
  }
  onChangePhone(e) {
    this.setState({
    phone: e.target.value
    })
  }

  onChangeDOb(e)
  {
    var today = new Date();
    var birthDate = new Date(e.target.value);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
        alert("hi"+age_now);
    }
    else{
      if(age_now<18)
      {
        alert("You are not above 18.");
        document.getElementById("date").value="";
      }
      else
      {
        this.setState({
          dob:e.target.value
        })
      }
    }
   
  
   
  }


 emailvalidate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return false;
            }
            else
            {
              return true;
            }
     
  }
  onSubmit(e) {
    e.preventDefault();
  //  alert(this.state.dob)

    if(this.state.dob=='')
    {
      alert("Pleas fill all the fields")
    }
    else
    {
      if(this.emailvalidate(this.state.email)==true)
      {
        const obj = {
          fname: this.state.fname,
        email: this.state.email,
          phone: this.state.phone,
          dob:this.state.dob
        };
        axios.post('http://localhost:4000/business/add', obj)
            .then(res => {
            console.log(res.data)
            alert("Added Successfully");
            });
        
        this.setState({
          fname: '',
         email: '',
          phone: '',
          dob:''
        })
        document.getElementById("date").value="";
        return(
          <Redirect to="/index"/>
      )
      }
   
  }
  }
 
  render() {
    console.log(this.state.loggedIn)
    if(this.state.loggedIn === false)
    {
      alert("Please Login First")
       return <Redirect to="/" />
      
    }
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Student Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.fname}
                      onChange={this.onChangeFname}
                      required
                      /> 
                </div>
                <div className="form-group">
                    <label>E-mail: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      required
                      />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input id="date" type="date" name="date_of_birth" onChange={this.onChangeDOb}></input>
                </div>
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChangePhone}
                      required
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Add Student" 
                      className="btn btn-primary"/>
                </div>
               
            </form>
        </div>
    )
  }
}