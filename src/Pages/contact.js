import React from 'react'
import phone from '../images/phone.webp'
import email from '../images/email.webp'
import contactImg from '../images/dentist4-contact-pic1.webp'



import { FaFacebook, FaInstagram, FaWaze } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contactPage'>
      <header className='max-sm:!h-auto'>
        <div className='container max-w-[1350px]'>
          <div className='d-flex max-md:!block'>
            <div className='leftSideImg col-md-7'>
              <div id='imgBox'>
                <img src={contactImg} />
              </div>
            </div>
            <div className='rightSideText col-md-5 max-md:text-center max-md:mt-5'>
              <h6 className='mb-2 ' >צור קשר</h6>
              <h1 className='mb-0 text-white'>תשאיר לנו א </h1>
              <h1 className='text-white mb-5'>הוֹדָעָה</h1>
              <p className='text-white fw-bold md:pl-40'>lorep sadsa sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
              <div className="sm:flex mt-4 sm:mt-5 text-center max-md:justify-center justify-end ">
                <div>
                  <img src={phone} className='inline'></img>
                  <p className="text-white w-100 mb-3 mt-4">
                  התקשר אלינו
                  </p>
                  <h5 className="h5"><a className="text-white" href="tel:035-505-448">035-505-448</a></h5>
                  <h5 className="h5"><a className="text-white" href="tel:052-686-6442">052-686-6442</a></h5>
                </div>
                <div className='sm:ml-10 max-sm:mt-5 max-sm:mb-10 '>
                  <img src={email} className='inline'></img>
                  <p className="text-white w-100 mb-3 mt-4">
                  כתובת הדואר שלנו
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

      <section id='formSec' className=' bg-[#ffffff12] lg:h-[490px]'>
        <div className='container pt-10 pb-10'>
          <div className='d-flex  justify-center max-md:flex-wrap gap-16'>
            <form className='col-12 col-md-8 col-lg-8 col-xl-6'>
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
            <div id='addressDiv  ' className='col-4 col-md-2 col-lg-2 col-xl-3'>
              <h4 class="h4 theme-blue-color fw-bold">שעות פתיחה</h4>
              <p className=' text-[#8d8d8d]' ><b>יום שני יום שישי</b><br />
                6:00 AM - 10:00 PM</p>
              <p className=' text-[#8d8d8d] mt-4' ><b>יום שבת</b><br />
                8:00 AM - 4:00 PM</p>

              <h4 class="h4 theme-blue-color mt-4 fw-bold">הכתובת שלנו</h4>
              <p className=' text-[#8d8d8d]'>
                <b>המרכז</b><br />
                רחוב הזיתים 96<br />
                גבעת שמואל<br />
                בניין אור בגבעה</p>
              <p className=' text-[#8d8d8d] mt-3'>
                <b>צפון</b><br />
                טמרה כביש צפוני</p>
              <p className=' text-[#8d8d8d] mt-3'>
                <b>צפון</b><br />
                16 קריית אתא העצמאות</p>
            </div>
            <div className='col-4 col-md-2 col-lg-2 col-xl-3' id='socialDiv'>
              <h4 class="h4 theme-blue-color fw-bold">חֶברָתִי</h4>
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

      <section id='mapSec' className='flex'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432691.3673359095!2d34.852524!3d32.085438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a033cf150eb%3A0xe503ce74e939a47a!2sHa-Zeitim%20St%2096%2C%20Giv&#39;at%20Shmu&#39;el%2C%20Israel!5e0!3m2!1sen!2sus!4v1695831105312!5m2!1sen!2sus" width="600px" height="500px" className=' bottom-0 col-6' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429968.99530591874!2d35.48871267074521!3d32.65591067356402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db13574f0b757%3A0x5f020d9747f42823!2sHa-Atsma&#39;ut%20St%2016%2C%20Kiryat%20Ata%2C%20Israel!5e0!3m2!1sen!2s!4v1698145931436!5m2!1sen!2s" width="600" height="500px"className=' bottom-0 col-6' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}

export default Contact