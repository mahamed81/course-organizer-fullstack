import React, { Component } from 'react';
import { Search, Card, Icon, Modal, Breadcrumb, Dropdown} from 'semantic-ui-react';
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

const createPrereqCard = prereq => {
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
const createCourseCard = course => {
    //let prereqs = course.prereq.map(prereq => {
    //  return createPrereqCard(prereq)
    //});
  return <Card fluid color="grey">
  <Card.Content>
      <Card.Header>{course.CourseTitle}</Card.Header>
      <Card.Meta>{course.CourseDepartmentShort + " " + course.CourseNumber}</Card.Meta>
      <Card.Description >

      </Card.Description>
      <Breadcrumb>
          <Modal trigger={<Breadcrumb.Section className="prereq" link><Icon name="archive"/>Prequisite(s)</Breadcrumb.Section>}>
              <Modal.Content>
              <h3>Prequisite(s)</h3>
               <Card.Group>{course.CoursePrerequisite}</Card.Group>
              </Modal.Content>
          </Modal>
          <Breadcrumb.Divider icon='right angle'/>
          <Modal trigger={<Breadcrumb.Section className="prereq" link><Icon name="align left"/>Description</Breadcrumb.Section>}>
              <Modal.Content>
              <h3>Course Description</h3>
              <div>{course.CourseDescription}</div>
              </Modal.Content>
          </Modal>
      </Breadcrumb>
  </Card.Content>
  </Card>
}

 const ConnectedCatalog = (props) => {

  console.log(props);

  let courseList;
  if (props.courses !== undefined) {
    if (props.courses.length > 0) {
        courseList = props.courses.map(course => {
          return createCourseCard(course)
       })
     }   
  }

    return (
      <div>
        <Search 
            className="cards"
        />
        <Dropdown placeholder='Departments'  multiple search selection className="searchbar" />
        <Card.Group className="cards">
         {  
          (courseList !== null && courseList !== undefined) && (
            courseList
          )                         
         }
        </Card.Group>
        
      </div>
    );
}

const Catalog = connect(mapStateToProps)(ConnectedCatalog);
export default Catalog;