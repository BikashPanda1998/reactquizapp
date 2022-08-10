import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from '@mui/material/Divider';
import {products} from './product';
import './slide.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }
  };
  const Slide=()=>{
    return(
        <div className="products_section">
            <div className="products_deal">
                <h3>Deals of The Day</h3>
                <button className="view_btn">View All</button>
            </div>
            <Divider />
            <Carousel  responsive={responsive} 
             infinite={true}
             draggable={false}
             swipeable={true}
             showDots={false}
             centerMode={true}
             autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl={true}
             removeArrowOnDeviceType={["tablet","mobile"]}
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
             containerClass="carousel-container">
                {
                    products.map((item)=>{
                        return(
                            <div className="products_items">
                                <div className="product_img">
                                    <img src={item.url} alt="productitem"/>
                                </div>
                                <p className="product_name">{item.title.shortTitle}</p>
                                <p className="product_offer">{item.discount}</p>
                                <p className="product_explore">{item.tagline}</p>
                            </div>
                        )
                    })
                }
             </Carousel>
        </div>
    )    
  };
  export default Slide;