import React, { Component, Fragment } from 'react'
import { Container,Row,Col,} from 'react-bootstrap'

class Privacy extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Privacy Page </h4>
      <p className="section-title-contact">
      Sed in mi velit. Nam porta quam a ante ornare porttitor. Nullam gravida eget dui vitae egestas. 
      Etiam tempor aliquam ante quis facilisis. Integer odio urna, auctor vel ornare at, venenatis ac mi. 
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis
       imperdiet, leo sed vestibulum molestie, elit tellus vestibulum odio, sit amet commodo ligula est ut n
       ulla. Sed efficitur nibh quis interdum facilisis. Cras interdum nisl turpis, in ultricies leo ornare 
       nec. Aliquam sit amet felis vel purus pellentesque dapibus. Nam non nisl ex.
      </p>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Privacy