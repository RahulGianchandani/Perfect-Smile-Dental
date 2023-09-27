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

import phone from '../images/phone.webp'
import email from '../images/email.webp'
import contactImg from '../images/dentist4-contact-pic1.webp'



import { FaFacebook, FaInstagram, FaTwitter, FaWaze } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contactPage'>
      <header >
        <div className='container max-w-[1350px]'>
          <div className='d-flex'>
            <div className='leftSideImg col-7'>
              <div id='imgBox'>
                <img src={contactImg} />
              </div>
            </div>
            <div className='rightSideText col-5'>
              <h6 className='mb-2 ' >CONTACT US</h6>
              <h1 className='mb-0 text-white'>Leave us a </h1>
              <h1 className='text-white mb-5'>message</h1>
              <p className='text-white fw-bold pl-40'>lorep sadsa sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
              <div className="d-flex mt-5 text-center justify-end ">
                <div>
                  <img src={phone} className='inline'></img>
                  <p className="text-white w-100 mb-3 mt-4">
                    Phone us
                  </p>
                  <h5 className="h5"><a className="text-white" href="tel:035-505-448">035-505-448</a></h5>
                  <h5 className="h5"><a className="text-white" href="tel:052-686-6442">052-686-6442</a></h5>
                </div>
                <div className='ml-10 '>
                  <img src={email} className='inline'></img>
                  <p className="text-white w-100 mb-3 mt-4">
                    Our mail address
                  </p>
                  <h5 className="h5"><a className="text-white" href="mailto:perfect.smile.israel@gmail.com">perfect.smile.israel@gmail.com</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id=''>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.276234777326!2d35.18631!3d32.86441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dca9a3e03c6c5%3A0x47af1042f792feb1!2sNorthern%20Road%2FTamra!5e0!3m2!1sen!2s!4v1695833819264!5m2!1sen!2s" width="100%" height="500px" className=' bottom-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section id='formSec' className=' bg-[#ffffff12] h-[490px]'>
        <div className='container pt-20 pb-10'>
          <div className='d-flex justify-center gap-16'>
            <form className='col-6'>
              {/* <label for="fname">First Name</label> */}
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              {/* <label for="lname">Last Name</label> */}
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

              {/* <label for="topic">Topic</label> */}
              <input type="text" id="topic" name="topic" placeholder="Topic" />

              {/* <label for="subject">Subject</label> */}
              <textarea id="subject" className=' h-40' name="subject" placeholder="Write message.."></textarea>
              <input type="submit" value="SEND A MESSAGE" className='mb-16 w-100 block' />
            </form>
            <div id='addressDiv col-3 '>
              <h4 class="h4 theme-blue-color fw-bold">Opening Hours</h4>
              <p className=' text-[#8d8d8d]' ><b>Monday - Friday</b><br />
                6:00 AM - 10:00 PM</p>
              <p className=' text-[#8d8d8d] mt-4' ><b>Saturday</b><br />
                8:00 AM - 4:00 PM</p>

              <h4 class="h4 theme-blue-color mt-4 fw-bold">Our address</h4>
              <p className=' text-[#8d8d8d]'>
                <b>The Center</b><br />
                96 Zeytim St<br />
                Givat Shmuel<br />
                Or building in Givat</p>
              <p className=' text-[#8d8d8d] mt-3'>
                <b>North</b><br />
                Tamra North Road</p>
            </div>
            <div className='col-3' id='socialDiv'>
              <h4 class="h4 theme-blue-color fw-bold">Social</h4>
              <a href="https://www.facebook.com/dentistryperfectsmile/" target="__blank" >
                <FaFacebook size={40} className='mt-4' color='#4267B2' />
              </a>
              <a href="https://www.waze.com/en/live-map/directions/il/center-district/givat-shmuel/ha-zeitim-st-96?to=place.EiZIYS1aZWl0aW0gU3QgOTYsIEdpdidhdCBTaG11ZWwsIElzcmFlbCIwEi4KFAoSCRsFhDkDSh0VEVtyLfqIk8wLEGAqFAoSCYWg91EFSh0VEYqUdZN32c6W" target="__blank" >
                <FaWaze size={40} className='mt-4' color='#05c8f7' />
              </a>
              <a href="https://www.instagram.com/perfect_smile_tamra/" target="__blank" >
                <FaInstagram size={40} className='mt-4' color='#F56040' />
              </a>

            </div>
          </div>
        </div>
      </section>

      <section id='mapSec'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432691.3673359095!2d34.852524!3d32.085438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a033cf150eb%3A0xe503ce74e939a47a!2sHa-Zeitim%20St%2096%2C%20Giv&#39;at%20Shmu&#39;el%2C%20Israel!5e0!3m2!1sen!2sus!4v1695831105312!5m2!1sen!2sus" width="100%" height="500px" className=' bottom-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}

export default Contact