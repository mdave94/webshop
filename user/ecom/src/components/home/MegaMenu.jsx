import React, { Component, Fragment } from 'react';

class MegaMenu extends Component {
    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);

    }

    componentDidMount(){
        this.MegaMenu();
    }
  
    MegaMenu(){
        var accordion = document.getElementsByClassName('accordion'); 
        var accNum = accordion.length;

        for (var i = 0 ;i<accNum;++i){
            accordion[i].addEventListener("click",function(){
                
                this.classList.toggle('active');
                var panel = this.nextElementSibling;

                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight + "px"; 
                }

            })
        }

    }
  
    render() {
    return (
        <Fragment>
            <div className='accordionMenuDiv'>
                <div className='accordionMenuDivInside'>
                    <button className='accordion'>
                            <img className='accordionMenuIcon' alt='' src='https://www.flaticon.com/svg/vstatic/svg/3917/3917317.svg?token=exp=1643635736~hmac=b68722abae8a996d84c0f5bd77939e35' />
                            &nbsp; Men's clothing
                    </button>
                    
                    <div className='panel'>
                        <ul>
                            <li>
                                <a href="x" className='accordionItem'>T-shirts</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Leggings</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Shorts</a>    
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='accordionMenuDivInside'>
                    <button className='accordion'>
                            <img className='accordionMenuIcon' alt='' src='https://www.flaticon.com/svg/vstatic/svg/3917/3917317.svg?token=exp=1643635736~hmac=b68722abae8a996d84c0f5bd77939e35' />
                            &nbsp; Men's clothing
                    </button>
                    
                    <div className='panel'>
                        <ul>
                            <li>
                                <a href="x" className='accordionItem'>T-shirts</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Leggings</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Shorts</a>    
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='accordionMenuDivInside'>
                    <button className='accordion'>
                            <img className='accordionMenuIcon' alt='' src='https://www.flaticon.com/svg/vstatic/svg/3917/3917317.svg?token=exp=1643635736~hmac=b68722abae8a996d84c0f5bd77939e35' />
                            &nbsp; Men's clothing
                    </button>
                    
                    <div className='panel'>
                        <ul>
                            <li>
                                <a href="x" className='accordionItem'>T-shirts</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Leggings</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Shorts</a>    
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='accordionMenuDivInside'>
                    <button className='accordion'>
                            <img className='accordionMenuIcon' alt='' src='https://www.flaticon.com/svg/vstatic/svg/3917/3917317.svg?token=exp=1643635736~hmac=b68722abae8a996d84c0f5bd77939e35' />
                            &nbsp; Men's clothing
                    </button>
                    
                    <div className='panel'>
                        <ul>
                            <li>
                                <a href="x" className='accordionItem'>T-shirts</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Leggings</a>    
                            </li>

                            <li>
                                <a href="x" className='accordionItem'>Shorts</a>    
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default MegaMenu;
