import React, { Component } from 'react';
import './styles/Home.css';
import {Grid, Button, Divider, Image, Header, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'

export default class Home extends Component { 
    state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })
    render() {
        const { visible } = this.state
       
        return (
            <div>
            <Button onClick={this.handleButtonClick}>Menu</Button>
    
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >
                <Menu.Item as='a'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='gamepad' />
                  Transcript
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='camera' />
                  Course
                </Menu.Item>
              </Sidebar>
    
              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                  <Header as='h3'>Application Content</Header>
                  <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  </p>
                  <Image src='/images/wireframe/paragraph.png' />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
       
       
            
        );
    }
}
