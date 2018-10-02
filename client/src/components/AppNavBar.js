import React, { Component } from 'react';

import {
  Button, Icon,
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
            <Button.Group>
            <Button><Icon name="home"/>Home</Button>	           
            <Button><Icon name="file alternate"/>Transcript</Button>
            <Button><Icon  name="book" />Courses</Button>
        </Button.Group>	       
        )
    }
  
}