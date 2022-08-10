import React from 'react';
import Carousel from 'react-material-ui-carousel'
import "./banner.css"
const data = ["./image/ban1.jpg", "./image/ban2.jpg", "./image/ban3.jpg", "./image/ban4.jpg","./image/ban5.jpg", "./image/ban6.jpg", "./image/ban7.jpg"]
const Banner = () => {
    return (
        <Carousel className='carasole' autoPlay={true} animation='slide' indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={true}>
           
            {
                data.map((imag,i) => {
                    return (
                        <><img src={imag} alt="" className='banner_img' /></>
                    )
                })
            }
        </Carousel>

    )
}
export default Banner;