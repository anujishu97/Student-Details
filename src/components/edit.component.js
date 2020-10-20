import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangefname = this.onChangefname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangeDOb=this.onChangeDOb.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
          fname: '',
          email: '',
          phone:'',
          dob:'',
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                fname: response.data.fname, 
                email: response.data.email,
                phone: response.data.phone,
                dob: response.data.dob,
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangefname(e) {
    this.setState({
     fname: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangephone(e) {
    this.setState({
      phone: e.target.value
    })
  }
   onChangeDOb(e)
   {
     this.setState({
       dob:e.target.value
     })
   }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
     fname: this.state.fname,
     email: this.state.email,
        phone: this.state.phone,
        dob:this.state.dob
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
    window.location.reload(false);
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.fname}
                      onChange={this.onChangefname}
                      />
                </div>
                <div className="form-group">
                    <label>E-mail </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="date_of_birth" onChange={this.onChangeDOb}></input>
                </div>
                <div className="form-group">
                    <label>phone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChangephone}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Details" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}