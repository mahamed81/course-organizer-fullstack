import React, { Component } from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AugsburgLogo from './assets/Augsburg_Logo_White.png';
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
                    <div className="headerBar">
                        <div>
                            <h1>Augsburg University Course Catalog</h1>                     
                            <Button.Group>
                                <Link to="/"><Button><Icon name="home"/>Home</Button></Link>           
                                <Link to="/transcript"><Button><Icon name="file alternate"/>Transcript</Button></Link>
                                <Link to="/catalog"><Button><Icon  name="book" />Courses</Button></Link> 
                            </Button.Group>	
                        </div>
                        <Image src={AugsburgLogo} className="logoAugs"></Image>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/catalog" component={Catalog}/>
                    <Route path="/transcript" component={Transcript}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;