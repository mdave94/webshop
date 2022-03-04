import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
            <Fragment>
                     <Container className="text-center" fluid={true}>
                        <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                        </div>
                    <Row>
                        <Col className='p-0' xl={3} lg={3} md={6} sm={6} xs={6} >
                            <Card className="image-box card">
                                <img className="center" alt='' src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                                <Card.Body> 
                                    <p className="product-name-on-card">Collection 1</p>
                                    

                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col className='p-0' xl={3} lg={3} md={6} sm={6} xs={6} >
                            <Card className="image-box card">
                                <img className="center" alt='' src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                                <Card.Body> 
                                    <p className="product-name-on-card">Collection 2 </p>
                                    

                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col className='p-0' xl={3} lg={3} md={6} sm={6} xs={6} >
                            <Card className="image-box card">
                                <img className="center" alt='' src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                                <Card.Body> 
                                    <p className="product-name-on-card">Collection 3 </p>
                                    

                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col className='p-0' xl={3} lg={3} md={6} sm={6} xs={6} >
                            <Card className="image-box card">
                                <img className="center" alt='' src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
                                <Card.Body> 
                                    <p className="product-name-on-card">Collection 4</p>
                                    

                                </Card.Body>
                            </Card>
                            
                        </Col>

                    </Row>
                </Container>
            </Fragment>
    )
  }
}

export default Collection
