import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
class App extends Component {
  render() {
    return (
      <Router>
       <div class="container">
        <Navigation/>
    
          <Switch>
              <Route path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route exact path="/" component={Login} />
              <Route  path="/logout" component={Logout} />
              <Route  path="/Home" component={Home}/>
              <Route path="/signup" component={Signup}/>
              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
