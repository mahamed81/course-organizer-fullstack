import React, { Component } from 'react';
import  Course  from './components/Course';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import AugsburgLogo from './assets/Augsburg_Logo_White.png';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
            // this array contains the data that will be rendered to the card
            // currently using placeholder data
            courses: [
                {
                    name: 'Software Engineering',
                    num: 395,
                    department: 'CSC',
                    description: 'Topics: Intro to Software Engineering'
                },
                {
                    name: 'Programming Languages and Compilers I',
                    num: 450,
                    department: 'CSC',
                    description: 'Principles that govern the design and implementation of programming languages. Topics include formal languages, programming language syntax and semantics, parsing, and interpretation. Emphasis on design issues.'
                }
            ]
        }
    }
  render() {
    const courseList = this.state.courses.map(course => {
      return <Card>
          <Card.Content>
              <Card.Header>{course.name}</Card.Header>
              <Card.Meta>{course.department + " " + course.num}</Card.Meta>
              <Card.Description>
                  {course.description}
              </Card.Description>
          </Card.Content>
      </Card>
  })
    return (
      <div>
        <div className="headerBar">
            <div>
                <h1>Augsburg University Course Catalog</h1>
                <Button icon><Icon name="bars" size="big"/></Button>
            </div>

            <Image src={AugsburgLogo} className="logoAugs"></Image>
        </div>
        <div className="cards">
         <Course courseList={courseList}/>
        </div>
        
      </div>
    );
  }
}

export default App;
