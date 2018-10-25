import React, { Component } from 'react';
import { Search, Card, Dropdown, Grid, Segment, Divider } from 'semantic-ui-react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import './styles/Catalog.css';
import { connect } from 'react-redux';
import { createCourseCard } from './CreateCourseCard';

/**
 * This method takes in as input, the state of the redux store.
 * It then returns an object containing the courses in the store.
 * @param {the current state of the redux store} state
 * @return {the current courses for the user}
 */
const mapStateToProps = state => {
    return { courses: state.courses };
};


 const ConnectedCatalog = (props) => {

//<<<<<<< HEAD
  let courseList;
  if (props.courses !== undefined) {
    if (props.courses.length > 0) {

      props.courses.sort((a,b) => {

      })
        courseList = props.courses.map(course => {
          return createCourseCard(course)
       })
//=======
//>>>>>>> home


     }
  }

    return (
      <div>
        <Search
            className="cards"
        />
        <Dropdown placeholder='Departments'  multiple search selection className="searchbar"  />
        <Card.Group className="cards" itemsPerRow={3}>
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
