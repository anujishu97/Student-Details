import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
export default class Logout extends Component {
    constructor(props)
    {
        super(props)
        localStorage.removeItem('token')
        
    }
    componentDidMount(){
        alert("You have been logged out");
    }
    render() {
        return (
            <div>

            <Redirect to='/'></Redirect>
            </div>
        )
    }
}
