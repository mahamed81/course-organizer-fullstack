import React, { Component } from 'react';
import {Icon, Step } from 'semantic-ui-react'
import {Route, BrowserRouter, Link} from 'react-router-dom' 
import complete from "./TranscriptComponent/complete"
import progress from './TranscriptComponent/progress'
import apply from './TranscriptComponent/apply'


export default class Transcript extends Component {
    render() {
        const props = {
          title: "hello"
        }
        return(
          <BrowserRouter>
            <div>
              
              <Step.Group>
          <Link to="/transcript/completed">
          <Step>
            <Icon name='book' />
            <Step.Content>
              <Step.Title>Completed</Step.Title>
              <Step.Description>List of your completed courses.</Step.Description>
            </Step.Content>
          </Step>
          </Link>
     
          <Link to="/transcript/progress">
          <Step >
            <Icon name='book' />
            <Step.Content>
              <Step.Title>Progress</Step.Title>
              <Step.Description>Your transcript</Step.Description>
            </Step.Content>
          </Step>
          </Link>

          <Link to="/transcript/apply">          
          <Step>
            <Icon name='book' />
            <Step.Content>
              <Step.Title>Courses that need to be</Step.Title>
              <Step.Description>Your transcript</Step.Description>
            </Step.Content>
          </Step>
     
            </Link> 


            </Step.Group>
            <div>
                <Route path="/transcript/progress" component={progress}/>
                <Route path="/transcript/completed" component={complete}/>
                <Route path="/transcript/apply" component={apply}/>
            </div>
            </div>


          </BrowserRouter>
        );
    }
}