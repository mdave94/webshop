import React, { Component, Fragment } from 'react'
import { Container,Row,Col, } from 'react-bootstrap'

export class Purchase extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Purchase Page </h4>
      <p className="section-title-contact">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada nisl fringilla mauris 
      convallis aliquet. Cras cursus rhoncus neque, rhoncus accumsan tortor luctus eget.
       Nulla a pulvinar enim. In faucibus pellentesque imperdiet. Proin hendrerit, massa at tincidunt 
       tristique, ex nunc imperdiet dolor, eget luctus libero magna eget purus. Lorem ipsum dolor sit amet, 
       consectetur adipiscing elit. Vivamus elementum rutrum dolor et feugiat. Integer tempor commodo 
       facilisis. Duis sit amet aliquam libero. Curabitur pellentesque ante quis nisl lobortis bibendum. 
       Maecenas ut quam at neque suscipit mollis.
      </p>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Purchase