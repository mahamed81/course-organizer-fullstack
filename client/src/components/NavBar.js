import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import AugsburgLogo from '../assets/Augsburg_Logo_White.png';
import { Button, Icon, Image } from 'semantic-ui-react';
import './styles/NavBar.css';

class NavBar extends Component {
    

    render() {
        
        return(
            <nav className="headerBar">
            <div>
                <h1>Augsburg University Course Catalog</h1>                     
                <Button.Group>
                    <Link to="/home"><Button><Icon name="home"/>Home</Button></Link>           
                    <Link to="/transcript"><Button><Icon name="file alternate"/>Transcript</Button></Link>
                    <Link to="/catalog"><Button><Icon  name="book" />Courses</Button></Link> 
                </Button.Group>	
            </div>
            <Image src={AugsburgLogo} className="logoAugs"></Image>
            
        </nav>
        );
    }

}

export default withRouter(NavBar);