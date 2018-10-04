import React, { Component } from 'react';
import NavBar from './components/NavBar'; 
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import _ from 'lodash';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Transcript from './components/Transcript';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
                <div>
                   
                    <NavBar/>
                    
                    <Route exact path="/home" component={Home}/>
                    <Route path="/catalog" component={Catalog}/>
                    <Route path="/transcript" component={Transcript}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;