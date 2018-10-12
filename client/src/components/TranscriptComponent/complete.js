import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import {Icon, Step } from 'semantic-ui-react'

const classname = 'courses';




const complete = (props) => (
  <Segment>
    <Icon name='book'/>
    <h1>{"Fall 2015"}</h1>
    CSC 160 – Introduction to Computer Science and Communication<br/>
    CSC 170 – Introduction to Programming<br/>
    MAT 145 – Calculus I
    <Divider section />
    <h1>{"Spring 2016"}</h1>
    CSC 210 – Data Structures<br/>
    CSC 240 – Introduction to Networking and Communications<br/>
    MAT 271 – Discrete Mathematical Structures
    <Divider section />
    <h1>{"Fall 2016"}</h1>
    CSC 320 – Algorithms
    CSC 345 – Principles of Computer Organization<br/>
    CSC 385 – Formal Logic and Computation Theory
    <Divider section />
    <h1>{"Spring 2017"}</h1>
    MAT 146 – Calculus II
    <Divider section />
    <h1>{"Fall 2017"}</h1>
    MAT 245 – Calculus III
    <Divider section />
    <h1>{"Spring 2018"}</h1>
    MAT 355 – Numerical Mathematics and Computation
    <Divider section />
    <h1>{"Fall 2018"}</h1>
    CSC 450 – Programming Languages and Compilers I
    <Divider section />
    <h1>{"Spring 2018"}</h1>
    CSC 451 – Programming Languages and Compilers II

  </Segment>
)

export default complete