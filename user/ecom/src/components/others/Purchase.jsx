import React, { Component, Fragment } from 'react';
import { Container,Row,Col, } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Purchase extends Component {

     constructor(){
          super();
          this.state={
               purchase:""
          }
     }

     componentDidMount(){
          
          let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");
          console.log('SiteInfoPurchase');
          console.log(SiteInfoPurchase);
          if(SiteInfoPurchase === null){

               axios.get(AppURL.AllSiteInfo).then(response =>{
                    let StatusCode = response.status;
                    let JsonData =(response.data)[0]['purchase_guide'];
                  
                    if(StatusCode === 200 && JsonData !== undefined){

                         this.setState({purchase:JsonData});
                         sessionStorage.setItem("SiteInfoPurchase",JsonData)
                    } 
                    else{ 

                         toast.error("Somthing Went Wrong",{
                              position: "bottom-center"
                         });
                    }
      
         
          }).catch(error=>{
               toast.error("Somthing Went Wrong",{
                    position: "bottom-center"
               });
          });

     }  // end If Conditon 
     else{
          this.setState({purchase:SiteInfoPurchase});
     }

     } 

     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Purchase Page </h4>
      <p className="section-title-contact">
           { ReactHtmlParser(this.state.purchase) }
      </p>


                         </Col>
                    </Row>
               </Container>
               <ToastContainer />
          </Fragment>
          )
     }
}

export default Purchase