import React, { Component } from 'react';

import {
<<<<<<< HEAD
  Button, Icon,
=======
    Sidebar,
    Button
>>>>>>> b0c60c8c08cd7470429a622a98f7bd121ae1e971
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
<<<<<<< HEAD
        <Button.Group>
        
            <Button><Icon name="home"/>Home</Button>
            <Button><Icon name="file alternate"/>Transcript</Button>
                <Button><Icon  name="book" />Courses</Button>
        </Button.Group>
        
=======
            <div>
                

                
            </div>
>>>>>>> b0c60c8c08cd7470429a622a98f7bd121ae1e971
        )
    }
  
}