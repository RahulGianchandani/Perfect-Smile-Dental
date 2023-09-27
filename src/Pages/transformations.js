import React from 'react'
import testi3 from '../images/test3.jpg'
import testi2 from '../images/test2.jpg'
import testi4 from '../images/test4.jpg'
import testi5 from '../images/test5.jpg'
import testi6 from '../images/test6.jpg'
import testi1 from '../images/rona-after.jpeg'
import quotes from '../images/icons8-quote-100.png'
import star from '../images/icons8-star-30.png'
import trans1B from '../images/transformations/bf1before.png'
import trans1A from '../images/transformations/bf1after.png'
import trans2B from '../images/transformations/bf2before.png'
import trans2A from '../images/transformations/bf2after.png'
import trans3B from '../images/transformations/bf3before.png'
import trans3A from '../images/transformations/bf3after.png'
import trans4B from '../images/transformations/bf4before.png'
import trans4A from '../images/transformations/bf4after.png'
import trans5B from '../images/transformations/bf5before.png'
import trans5A from '../images/transformations/bf5after.png'
import trans6B from '../images/transformations/bf6before.png'
import trans6A from '../images/transformations/bf6after.png'

import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const Transformations = () => {
  return (
    <div id='homePage'>
      <header className='d-flex'>
        <div id='leftSideHeader' className='col-7 w-'>
          <h6 className='mb-5' >WELCOME TO OUR CLINIC</h6>
          <h1 className='mb-0 text-white'>Make your</h1>
          <h1 className='text-white mb-5'>smile Shine</h1>
          <p className='text-white fw-bold'>lorep sadsa sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
          <button>MAKE AN APPOINTMENT</button>
        </div>
        <div id='rightSideHeader' className='col-5'>

        </div>
      </header>



     

      <section id="transformSec" className=''>
        <h1 className='text-center h1 theme-blue-color  mb-24 pt-32'>Patient Transformations</h1>
        <div className='container pb-36'>
          {/* <span>Before</span>
          <span>After</span> */}
          <div className='grid grid-cols-2 gap-y-20 justify-items-center'> 

          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans1B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans1A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans2B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans2A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans3B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans3A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans4B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans4A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans5B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans5A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
          <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
          style={{ filter: "brightness(1) !important" }} 
          itemOne={<ReactCompareSliderImage src={trans6B}  className='transform-images transform-img-before '  alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={trans6A}  className='transform-images transform-img-after ' alt="Image two" />}
          />
        </div>
          </div>
      </section>

    </div>
  )
}

export default Transformations