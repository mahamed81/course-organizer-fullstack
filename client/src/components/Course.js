import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import './styles/Course.css'

/**
 * This is used to populate the main page with courses
 * These courses are being displayed using the semantic-ui
 * Card component
 */
class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // this array contains the data that will be rendered to the card
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
        console.log(this.state)

        return (
            <Card.Group className="CardGroup">
                {this.props.courseList}
            </Card.Group>
        )
    }
}

export default Course;