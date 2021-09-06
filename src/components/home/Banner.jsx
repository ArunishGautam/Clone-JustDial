import React from 'react';
import '../../index.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../img/gym.jpg';
import image2 from '../../img/house.jpg';
import image3 from '../../img/imgonline-com-ua-twotoone-Wc3fr3uIQXUC.jpg';
import image4 from '../../img/resturent.jpg';
import image5 from '../../img/990442-apsrtc.webp';
import image6 from '../../img/railway-station.jpg';
import image7 from '../../img/doctor.webp';
import image8 from '../../img/ecom.png';
import image9 from '../../img/face-mask-pharmacy-pa-20-927x617.jpg';
import image10 from '../../img/hos.jpg';
import image11 from '../../img/school.jpg';
import image12 from '../../img/stationary.webp';

import {Box , makeStyles, Typography} from '@material-ui/core';
const userStyle = makeStyles({
      image:{
        width:'100',
        height: '50vh',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        '& :first-child': {
            fontSize: 66,
            color: '#ffffff',
            lineWeight:1
        },
        '& :last-child': {
          fontSize: 40,
          color:'#ffffff'
      }
      }
})
const Banner=()=>{
   const classes=userStyle();
    return(
        <>
        <Box className={classes.image} >
         <AliceCarousel className={classes.dotItem} autoPlay autoPlayInterval="1000" disableDotsControls='true' disableButtonsControls='true'>
         <img src={image1} className="sliderimg" alt="" />
         <img src={image2} className="sliderimg" alt=""/>
         <img src={image3} className="sliderimg" alt=""/>
         <img src={image4} className="sliderimg" alt=""/>
         <img src={image5} className="sliderimg" alt=""/>
         <img src={image6} className="sliderimg" alt=""/>
         <img src={image7} className="sliderimg" alt="" />
         <img src={image8} className="sliderimg" alt=""/>
         <img src={image9} className="sliderimg" alt=""/>
         <img src={image10} className="sliderimg" alt=""/>
         <img src={image11} className="sliderimg" alt=""/>
         <img src={image12} className="sliderimg" alt=""/>
    </AliceCarousel>
    </Box>
        </>
    )
}
export default Banner;