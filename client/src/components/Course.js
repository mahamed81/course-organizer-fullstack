import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';


/**
 * This is used to populate the main page with courses
 * These courses are being displayed using the semantic-ui
 * Card component
 */
export default class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // this array contains the data that will be rendered to the card
            courses = [
                {
                    name: 'Software Engineeing',
                    courseNum: 395,
                    course: 'CSC'
                }
            ]
        }
    }

}