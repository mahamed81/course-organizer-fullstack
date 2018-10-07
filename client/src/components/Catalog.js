import React, { Component } from 'react';
import { Search, Card, Icon, Modal, Breadcrumb} from 'semantic-ui-react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import './styles/Catalog.css';
import { connect } from 'react-redux';

/**
 * This method takes in as input, the state of the redux store.
 * It then returns an object containing the courses in the store.
 * @param {the current state of the redux store} state 
 * @return {the current courses for the user}
 */
const mapStateToProps = state => {
    return { courses: state.courses };
};

const API = 'http://localhost:5000/api/';
const COURSE = 'courses';
const USER = 'users';

class ConnectedCatalog extends Component {
  
      constructor(props) {
        super(props);

        this.state = {
            value: '',
            // this array contains the data that will be rendered to the card
            // currently using placeholder data
            courses: [
                {
                    name: 'Software Engineering',
                    num: 395,
                    department: 'CSC',
                    description: 'Topics: Intro to Software Engineering',
                    prereq:  [
                        {
                            name: 'Intro to Programming II',
                            num: 170,
                            department: 'CSC',
                            description: 'Learning how to program!'
                        }
                    ]
                },
                {
                    name: 'Programming Languages and Compilers I',
                    num: 450,
                    department: 'CSC',
                    description: 'Principles that govern the design and implementation of programming languages. Topics include formal languages, programming language syntax and semantics, parsing, and interpretation. Emphasis on design issues.',
                    prereq:  [
                        {
                            name: 'Intro to Programming II',
                            num: 170,
                            department: 'CSC',
                            description: 'Learning how to program!'
                        }
                    ]
                },
                
            ]
        }
    }
    


  createPrereqCard = prereq => {
      return <Card fluid color="grey">
          <Card.Content>
        <Card.Header>{prereq.name}</Card.Header>
        <Card.Meta>{prereq.department + " " + prereq.num}</Card.Meta>
        <Card.Description >
            {prereq.description}
        </Card.Description>
    </Card.Content>
      </Card>
  }

  /**
   * This method takes in a course object, and returns a card that is displayed to the page
   * 
   */
  createCourseCard = course => {
      let prereqs = course.prereq.map(prereq => {
        return this.createPrereqCard(prereq)
      });
    return <Card fluid color="grey">
    <Card.Content>
        <Card.Header>{course.name}</Card.Header>
        <Card.Meta>{course.department + " " + course.num}</Card.Meta>
        <Card.Description >

        </Card.Description>
        <Breadcrumb>
            <Modal trigger={<Breadcrumb.Section className="prereq" link><Icon name="archive"/>Prequisite(s)</Breadcrumb.Section>}>
                <Modal.Content>
                <h3>Prequisite(s)</h3>
                 <Card.Group>{prereqs}</Card.Group>
                </Modal.Content>
            </Modal>
            <Breadcrumb.Divider icon='right angle'/>
            <Modal trigger={<Breadcrumb.Section className="prereq" link><Icon name="align left"/>Description</Breadcrumb.Section>}>
                <Modal.Content>
                <h3>Course Description</h3>
                <div>{course.description}</div>
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
        <Search 
            className="cards"
        />
        <Card.Group className="cards">
         {courseList}
        </Card.Group>
        
      </div>
    );
  }
}

const Catalog = connect(null, mapStateToProps) (ConnectedCatalog);
export default Catalog;