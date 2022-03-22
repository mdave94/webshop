import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'

 class About extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">About Me Page </h4>
      <p className="section-title-contact">
    Hello! I'M David. I'm a web developer who start something new. 

    I have some experiece with C++,Java,Javascript. In the last year I worked with Laravel framework, and now I started this project with Laravel backend and React frontend. <br></br>

    For starting I use react-with-laravel-build-pwa-ecommerce-project Udemy course. I want to understand how to manage whole project with 2 framework, and I hope this course help whit it. <br></br>

    After this project I going to make a new frontend design, making this project litlebit more mine :D. <br></br>

    Peace ! 



      </p>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default About