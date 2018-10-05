import React, { Component } from 'react';
import { Search, Card, Image, Icon, Modal, Breadcrumb} from 'semantic-ui-react';
import AugsburgLogo from '../assets/Augsburg_Logo_White.png';
import { Provider } from 'react-redux';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import './styles/Catalog.css';

const API = 'http://localhost:5000/api/';
const COURSE = 'courses';
const USER = 'users';

class Catalog extends Component {
  
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
    

<<<<<<< HEAD
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({isLoading: false, results: [], value:''})
  
  onResultSelect = (e, {result}) => {
    console.log(result);
  }


  handleSearchChange = (e, {value}) => {
    console.log(value);

    this.setState({isLoading: true, value});

    setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent();

        const re = new RegExp(_.escapeRegExp(this.state.value),'i');
        const isMatch = result => re.test(result);
        this.setState({
            isLoading: false,
            results: _.filter(this.state.courses, isMatch),
            
          })
    }, 300)
  }

  componentDidMount() {

    fetch(API + COURSE)
    .then( res => {
        return res.json();
    }).then(data => {
        console.log(data);
    })

  }
=======
>>>>>>> 6e42de0cf85f1c1d725ff889346a428f319f4dd7

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
<<<<<<< HEAD
        <Search
        loading={this.isLoading}
        onResultSelect={this.handleResultSelect}
        results={this.course}
       
=======
        <Search 
            className="cards"
>>>>>>> 6e42de0cf85f1c1d725ff889346a428f319f4dd7
        />
        <Card.Group className="cards">
         {courseList}
        </Card.Group>
        
      </div>
    );
  }
}

export default Catalog;