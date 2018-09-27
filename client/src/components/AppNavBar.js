import React, { Component } from 'react';

import {
<<<<<<< HEAD
  Button, Icon,
=======
    Sidebar,
    Button
>>>>>>> 50bce2bbc9120417ed102c917da6eafbbab70ce1
} from 'semantic-ui-react'

/**
 * This class will be used to create the pop-out navigation bar
 */
export default class AppNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    handleButtonClick = () => {this.setState({visible: !this.state.visible})}
    
    render() {

        return (
            <div>
                

                
            </div>
        )
    }
  
}