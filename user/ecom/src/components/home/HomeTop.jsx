import React, { Component, Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import MegaMenu from './MegaMenu';
import HomeSlider from './HomeSlider';
import AppURL from '../../api/AppURL';
import axios from 'axios';


class HomeTop extends Component {

      constructor(){
        super();
        this.state ={
            MenuData:[]
        }
    }

    componentDidMount(){
        axios.get(AppURL.AllCategoryDetails).then(response =>{ 
              this.setState({MenuData:response.data});

        }).catch(error=>{

        });
    }


  render() {

    return (
        <Fragment>
            <Container className='p-0 m-0 overflow-hidden' fluid={true}>
                <Row>
                    <Col lg={3} md={3} sm={12} xs={12}>
                      <MegaMenu data={this.state.MenuData} />
                    </Col>

                    <Col lg={8} md={6} sm={12} xs={12}>
                    <HomeSlider/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

  }
}

export default HomeTop;
