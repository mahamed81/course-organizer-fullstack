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