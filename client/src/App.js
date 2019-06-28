import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar'
import Search from './components/SearchPage'
import Saved from './components/SavedPage'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <Container>
        <div className="App">
          <AppNavBar />
        </div>
        <div>
          <Search />
          <Saved />
        </div>
      </Container>
    );
  }
  
}

export default App;
