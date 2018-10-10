import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import {Icon, Step } from 'semantic-ui-react'

const classname = 'courses';




const complete = (props) => (
  <Segment>
    <Icon name='book'/>
    <h1>{classname}</h1>
    apples
    <Divider section />
    Gremlins
  </Segment>
)

export default complete