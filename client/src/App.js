import React, { Component } from 'react';
import  Course  from './components/Course';
import { Button, Card, Image, Icon, Modal, Breadcrumb} from 'semantic-ui-react';
import AugsburgLogo from './assets/Augsburg_Logo_White.png';
import AppNavBar from './components/AppNavBar'
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
                    CourseTitle: 'Programming Languages and Compilers I',
                    CourseNumber: 450,
                    CourseDepartmentShort: 'CSC',
                    CourseDescription: 'Principles that govern the design and implementation of programming languages. Topics include formal languages, programming language syntax and semantics, parsing, and interpretation. Emphasis on design issues.',
                    CoursePrerequisite:  [
                            {
                                CourseTitle: 'Intro to Programming II',
                                CourseNumber: 170,
                                CourseDepartmentShort: 'CSC',
                                CourseDescription: 'Learning how to program!'
                            }
                        ]
                },

                {
                    CourseTitle: 'Software Engineering',
                    CourseNumber: 395,
                    CourseDepartmentShort: 'CSC',
                    CourseDescription: 'Topics: Software Engineering',
                    CoursePrerequisite:  [
                            {
                                CourseTitle: 'Intro to Programming II',
                                CourseNumber: 170,
                                CourseDepartmentShort: 'CSC',
                                CourseDescription: 'Learning how to program!'
                            }
                        ]
                },               
                
            ]
        }
    }


  createPrereqCard = prereq => {
      return <Card fluid color="grey">
          <Card.Content>
        <Card.Header>{prereq.CourseTitle}</Card.Header>
        <Card.Meta>{prereq.CourseDepartmentShort + " " + prereq.CourseNumber}</Card.Meta>
        <Card.Description >
            {prereq.CourseDescription}
        </Card.Description>
    </Card.Content>
      </Card>
  }

  /**
   * This method takes in a course object, and returns a card that is displayed to the page
   * 
   */
  createCourseCard = course => {
      let prereqs = course.CoursePrerequisite.map(prereq => {
        return this.createPrereqCard(prereq)
      });

    return <Card fluid color="grey">
    <Card.Content>
        <Card.Header>{course.CourseTitle}</Card.Header>
        <Card.Meta>{course.CourseDepartmentShort + " " + course.CourseNumber}</Card.Meta>
        <Card.Description >

        </Card.Description>
        <Breadcrumb>
            <Modal trigger={<Breadcrumb.Section className="prereq" link>Prequisite(s)</Breadcrumb.Section>}>
                <Modal.Content>
                <h3>Prequisite(s)</h3>
                 <Course courseList={prereqs}/>
                </Modal.Content>
            </Modal>
            <Breadcrumb.Divider icon='right angle'/>
            <Modal trigger={<Breadcrumb.Section className="prereq" link>Description</Breadcrumb.Section>}>
                <Modal.Content>
                <h3>Course Description</h3>
                <div>{course.CourseDescription}</div>
                </Modal.Content>
            </Modal>
        </Breadcrumb>
    </Card.Content>
</Card>
  }
  render() {
    const courseList = this.state.courses.map(course => {
      return this.createCourseCard(course)
  })
    return (
      <div>
        <div className="headerBar">
            <div>
                <h1>Augsburg University Course Catalog</h1>
                <AppNavBar/>
            </div>

            <Image src={AugsburgLogo} className="logoAugs"></Image>
        </div>
        <Card.Group className="cards">
         <Course courseList={courseList}/>
        </Card.Group>
        
      </div>
    );
  }
}

export default App;