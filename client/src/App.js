import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppNavBar from './components/AppNavBar'
import Search from './pages/SearchPage'
import Saved from './pages/SavedPage'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <Container>
        <div className="App">
          <AppNavBar />
          <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={Search} />
            </Switch>
          </div>
        </BrowserRouter>
        </div>
      </Container>
    );
  }
  
}

export default App;
