import React, { Component } from 'react';
import  Course  from './components/Course';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Augsburg University</h1>
        <Course/>
      </div>
    );
  }
}

export default App;
