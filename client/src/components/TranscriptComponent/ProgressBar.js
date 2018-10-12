import React, { Component } from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import {Icon, Step } from 'semantic-ui-react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressBar extends Component {
  state = { percent: 33 }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
    )
  }
}

