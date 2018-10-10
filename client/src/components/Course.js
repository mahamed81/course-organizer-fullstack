import React, { Component } from 'react';
import { Button, Card, Image, Icon, Modal, Breadcrumb} from 'semantic-ui-react';
import './styles/Course.css'

/**
 * This is used to populate the main page with courses
 * These courses are being displayed using the semantic-ui
 * Card component
 */
const createPrereqCard = ({prereq}) => {
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
const createCourseCard = ({course, prereqs}) => {


  return <Card fluid color="grey" key={course.CourseTitle}>
  <Card.Content>
      <Card.Header>{course.CourseTitle}</Card.Header>
      <Card.Meta>{course.CourseDepartmentShort + " " + course.CourseNumber}</Card.Meta>
      <Card.Description >

      </Card.Description>
      <Breadcrumb>
          <Modal trigger={<Breadcrumb.Section className="prereq" link>Prequisite(s)</Breadcrumb.Section>}>
              <Modal.Content>
              <h3>Prequisite(s)</h3>
              <Card.Group>
                  {prereqs}
              </Card.Group>
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

export { createPrereqCard, createCourseCard }