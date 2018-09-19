import React, { Component } from 'react';
import {
    Sidebar,
    Button
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