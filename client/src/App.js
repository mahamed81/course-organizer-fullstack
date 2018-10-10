import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Button, Icon, Image } from 'semantic-ui-react';
import AugsburgLogo from './assets/Augsburg_Logo_White.png';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Auth from './Auth';

const auth = new Auth();

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
    
      login() {
        this.props.auth.login();
        this.props.history.replace(`/`)
      }
    
      logout() {
        this.props.auth.logout();
      }
    


  render() {

    const { isAuthenticated } = this.props.auth;
    console.log(this.props)
    return (
        <div>
        <nav className="headerBar">
            <div>
                <h1>Augsburg University Course Catalog</h1>                     

                {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
    
            }
            {
              isAuthenticated() && (
                <Button.Group>
                <Link to="/home"><Button><Icon name="home"/>Home</Button></Link>           
                <Link to="/transcript"><Button><Icon name="file alternate"/>Transcript</Button></Link>
                <Link to="/catalog"><Button><Icon  name="book" />Courses</Button></Link> 
           
                  <Button
                    id="qsLogoutBtn"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                  </Button.Group>	
                )
            }
            </div>
            <Image src={AugsburgLogo} className="logoAugs"></Image>
        </nav>                   
 
                    
        </div>

    );
  }
}

export default App;