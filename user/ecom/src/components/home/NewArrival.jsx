import React, { Component, Fragment } from 'react'
import { Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {
    
   constructor(props){
       super(props);

       this.next = this.next.bind(this);
       this.previous = this.previous.bind(this);
   } 

   next(){
        this.slider.slickNext();
   }

   previous(){
        this.slider.slickPrev();
   }

  render() {
      
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3 ,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <Fragment>
            
                      <Container className="text-center" fluid={true}>

                            <div className="section-title text-center mb-55"><h2> NEW ARRIVAL  
                                <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}>
                            <i className='fa fa-angle-left'></i>
                          </a>
                          <a className='btn btn-sm ml-2 site-btn'  onClick={this.next} >
                            <i className='fa fa-angle-right'></i>
                          </a></h2>
                             
                             <p>New Arrival random text</p>
                            </div>


        <div>
      
            <Slider ref={c=>(this.slider = c)} {...settings}>
            <div>
            
            <img className="center" alt='' src="https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_960_720.jpg" />   
                
        
            </div>
            <div>
            <img className="center" alt='' src="https://cdn.pixabay.com/photo/2017/09/09/11/52/t-shirts-2731768_960_720.jpg" />   
            </div>

    
            </Slider>
      </div>

                       </Container>
        </Fragment>
    )
  }
}

export default NewArrival
