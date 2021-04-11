import React, { Component } from 'react';
import first from '../../Images/first.jpg';
import second from "../../Images/second.png";
import third from "../../Images/third.png";
import fourth from "../../Images/fourth.png";
import fifth from "../../Images/fifth.jpg";

export class Gallery extends Component {



    render() {

        return (
            <section>
                <div className="carouseldemo" class="bd-example" >
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={first} class="d-block w-100" alt="First slide"/>
                                    <div class="carousel-caption d-none d-md-block">                                       
                                        
                                    </div>
                            </div>
                                <div class="carousel-item">
                                    <img src={second} class="d-block w-100" alt="Second slide"/>
                                        <div class="carousel-caption d-none d-md-block">                                           
                                            
                                        </div>
                               </div>
                                    <div class="carousel-item">
                                        <img src={third} class="d-block w-100" alt="Third Slide"/>
                                            <div class="carousel-caption d-none d-md-block">                                              
                                               
                                            </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={fourth} class="d-block w-100" alt="Fourth Slide"/>
                                            <div class="carousel-caption d-none d-md-block">                                                
                                                
                                            </div>
                                    </div>  
                                    <div class="carousel-item">
                                        <img src={fifth} class="d-block w-100" alt="TFifth Slide"/>
                                            <div class="carousel-caption d-none d-md-block">                                               
                                                
                                            </div>
                                    </div>  


                                    </div>
                                    
                                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
            </section>
        )
    }
}
export default Gallery;