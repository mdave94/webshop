import React, { Component, Fragment } from 'react'
import { Container,Row,Col,} from 'react-bootstrap'

class Refund extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Refund Page </h4>
      <p className="section-title-contact">
      Fusce imperdiet augue ac mauris ornare, nec mollis metus eleifend. Duis et nibh sapien.
       Aliquam tempus ligula eu lorem egestas pulvinar fringilla vel metus. Nullam mattis id nisl 
       ac eleifend. Cras sagittis commodo posuere. Fusce dolor libero, laoreet id tempus a, tincidunt 
       eu dolor. In in risus tempor massa accumsan tincidunt.</p>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Refund