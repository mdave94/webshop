import React, { Component } from 'react'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class MegaMenuMobile extends Component {

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



     MenuItemClick=(event)=>{
          event.target.classList.toggle("active");
          var panel = event.target.nextElementSibling;
          if(panel.style.maxHeight){
               panel.style.maxHeight = null;
          }else{
               panel.style.maxHeight= panel.scrollHeight+ "px"
          }

     }


render() {


          const CatList = this.state.MenuData;

          const MyView = CatList.map((CatList,i)=>{
               return <div key={i.toString()}>
      <button onClick={this.MenuItemClick} className="accordionMobile">
      <img className="accordionMenuIconMobile" src={CatList.category_image} />&nbsp; {CatList.category_name}
                        </button>
          <div className="panelMobile">
      <ul>
          {
               (CatList.subcategory_name).map((SubList,i)=>{
                    return <li key={i}><a href="#" className="accordionItemMobile" >{SubList.subcategory_name} </a></li>

               })    
          }
          
      </ul>
         </div> 
             
               </div>



          });



          return (
                <div className="accordionMenuDivMobile">
                   <div className="accordionMenuDivInsideMobile">

                   {MyView}

                   </div>

              </div>
          )
     }
}

export default MegaMenuMobile