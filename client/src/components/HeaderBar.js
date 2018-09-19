import React, { Component } from 'react';
import './styles/HeaderBar.css';
import AugsburgLogo from '../assets/Augsburg_Logo_White.png';
import { Image, Icon, Button } from 'semantic-ui-react';

/**
 * This class contains the header for each page, and will allow 
 * users smooth navigation from page to page
 */
class HeaderBar extends Component {
    render() {
        return(
        <div className="headerBar">
            <div>
                <h1>Augsburg University Course Catalog</h1>
                <Button icon><Icon name="bars" size="big"/></Button>
            </div>

            <Image src={AugsburgLogo} className="logoAugs"></Image>
        </div>
        )
    }
}

export default HeaderBar;