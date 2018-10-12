import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import {Icon, Step } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'

const apply = (props) => (
  <Segment>
    <Icon name='book'/>
    <h1>COMPUTER SCIENCE MAJOR, BACHELOR OF SCIENCE</h1>
    <Divider section />
    <Icon name='thumbs up outline'/>
    CSC 160 – Introduction to Computer Science and Communication <br/>
    <Icon name='thumbs up outline'/>
    CSC 170 – Introduction to Programming <br/>
    <Icon name='thumbs up outline'/>
    CSC 210 – Data Structures <br/>
    <Icon name='thumbs up outline'/>
    CSC 240 – Introduction to Networking and Communications <br/> 
    <Icon name='thumbs up outline'/>
    CSC 320 – Algorithms<br/> 
    <Icon name='thumbs up outline'/>
    CSC 345 – Principles of Computer Organization<br/>
    <Icon name='thumbs up outline'/>
    CSC 385 – Formal Logic and Computation Theory<br/>
    CSC 450 – Programming Languages and Compilers I<br/>
    CSC 451 – Programming Languages and Compilers II<br/>
    <Icon name='thumbs up outline'/>
    MAT 145 – Calculus I<br/>
    <Icon name='thumbs up outline'/>
    MAT 271 – Discrete Mathematical Structures (students who have already completed MAT 171 may choose to substitute a third MAT elective from the list below)
    <Divider section />
    Two courses from:<br/>
    <Icon name='thumbs up outline'/>
    MAT 146 – Calculus II<br/>
    <Icon name='thumbs up outline'/>
    MAT 245 – Calculus III<br/>
    MAT 246 – Linear Algebra<br/>
    MAT 304 – Graph Theory<br/>
    MAT 355 – Numerical Mathematics and Computation<br/>
    MAT 363 – Dynamical Systems<br/>
    MAT 369 – Modeling and Differential Equations in Biological and Natural Sciences<br/>
    <Divider section />
    Three electives (12 credits), including at least two electives numbered 300 or above, chosen from:<br/>
    CSC courses above 200<br/>
    PHY 261 – Electronics<br/>
    MIS 475 – Systems Analysis and Design<br/>
    <Icon name='thumbs up outline'/>
    MAT 355 – Numerical Mathematics and Computation (if not selected above)<br/>
    <Divider section />
  </Segment>
)

export default apply