import React from 'react';
// import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

import "./SliderDesign.css";

function SliderDesign(){
    return(
            <div className='hh'>

        <Marquee pauseOnHover speed={150} delay={0} gradient={true} gradientWidth={"50px"} direction='left'  >
                <div className='image_wrapper2'>
                    <img   src={import.meta.env.BASE_URL+ "/src/pages/sponsors/logo/oldToyota.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/apollo.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/ceat.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/gcst.png"} alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/goorej.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/indianOil.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/jkTyres.png"  }alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/ktm.png" }alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/oldToyota.png" } alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/mahindra.png"} alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/oyo.png" }alt="" />
                </div>
               
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/sopan.png"} alt="" />
                </div>
                <div className='image_wrapper2'>
                    <img  src={import.meta.env.BASE_URL+"/src/pages/sponsors/logo/tata.png"} alt="" />
                </div>
        </Marquee>
        </div>


    )
}

export default SliderDesign;
