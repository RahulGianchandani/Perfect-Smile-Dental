import React, { useEffect, useState } from 'react'
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
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { Step, Stepper } from 'react-form-stepper';
import moment from 'moment'

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [serviceSelect, setServiceSelect] = useState(0);
  const [serviceName, setServiceName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [mapSelect, setMapSelect] = useState(0);
  const [date, setDate] = useState(moment().startOf('day').format('YYYY-MM-DD hh:mm'));
  console.log("mapSelect", mapSelect);



  console.log("date", date);
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





      <section id="appointFormSec" >
        <h1 className='text-center h1 theme-blue-color  mb-24 pt-32'>Make An Appointment</h1>
        <div className='container pb-36'>
          <Stepper activeStep={currentPage} className='mb-14'>
            <Step label="Services" />
            <Step label="Date & Location" />
            <Step label="Details" />
          </Stepper>

          {currentPage === 0 &&
            <>
              <h3 className="mb-14 h3 theme-dark-blue fw-bold text-center ">Choose Service</h3>
              <section id='serviceSec'>
                <div className='container max-w-[1350px]'>
                  <div id='treatments' className='grid grid-cols-3 gap-5 max-sm:grid-cols-1'>
                    <div className={`service service1  duration-300 h-52 ${serviceSelect === 1 && "SelectedService"}`} onClick={() => { setServiceName("Mouth dental implant"); setServiceSelect(1) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 mt-3 mb-6'>Mouth dental implant</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                    <div className={`service service2  duration-300 h-52 ${serviceSelect === 2 && "SelectedService"}`} onClick={() => { setServiceName("BASAL GRAFT"); setServiceSelect(2) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>BASAL GRAFT</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                    <div className={`service service3  duration-300 h-52 ${serviceSelect === 3 && "SelectedService"}`} onClick={() => { setServiceName("Zirconia crowns"); setServiceSelect(3) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>Zirconia crowns</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                    <div className={`service service4  duration-300 h-52 ${serviceSelect === 4 && "SelectedService"}`} onClick={() => { setServiceName("CT scan"); setServiceSelect(4) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>CT scan</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                    <div className={`service service5  duration-300 h-52 ${serviceSelect === 5 && "SelectedService"}`} onClick={() => { setServiceName("Transparent orthodontics"); setServiceSelect(5) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 mt-3 mb-6'>Transparent orthodontics</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                    <div className={`service service6  duration-300 h-52 b ${serviceSelect === 6 && "SelectedService"}`} onClick={() => { setServiceName("Panorama photography"); setServiceSelect(6) }}>
                      <div className='relative mainTextDiv'>
                        <h6 className='text-white text-center h2 mt-3 mb-6'>Panorama photography</h6>
                        <div className='text-white text-center textDiv '>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          }

          {currentPage === 1 &&
            <>
              <h3 className="mb-14 h3 theme-dark-blue fw-bold text-center ">Choose Date and Time</h3>
              <section id='DtLocSec'>
                <div className='container max-w-[1350px]'>
                  <div className='row justify-center'>
                    <div className='col-2 dateDiv'>
                      <Datetime onChange={(value) => setDate(value)} initialValue={date} />
                    </div>
                    <div className='locationsDiv'>
                      <h3 className="mt-14 mb-14 h3 theme-dark-blue fw-bold text-center ">Choose Closet Clinic</h3>
                      <div className='d-flex gap-5'>
                        <div onClick={() => { setClinicName("North, Tamra North Road"); setMapSelect(1) }} className='col-6 mapsDiv relative'>

                          <iframe className={`maps  duration-300 ${mapSelect === 1 && "SelectedService"}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.276234777326!2d35.18631!3d32.86441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dca9a3e03c6c5%3A0x47af1042f792feb1!2sNorthern%20Road%2FTamra!5e0!3m2!1sen!2s!4v1695833819264!5m2!1sen!2s" width="100%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div onClick={() => { setClinicName("The Center, 96 Zeytim St Givat Shmuel Or building in Givat"); setMapSelect(2) }} className='col-6 mapsDiv relative'>
                          <iframe className={`maps duration-300 ${mapSelect === 2 && "SelectedService"}`} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432691.3673359095!2d34.852524!3d32.085438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a033cf150eb%3A0xe503ce74e939a47a!2sHa-Zeitim%20St%2096%2C%20Giv&#39;at%20Shmu&#39;el%2C%20Israel!5e0!3m2!1sen!2sus!4v1695831105312!5m2!1sen!2sus" width="100%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </>
          }

          {currentPage === 2 &&
            <>
              <h3 className="mb-14 h3 theme-dark-blue fw-bold text-center ">Fill the form</h3>

              <section id='detailSec'>
                <div className='container max-w-[1350px]'>
                  <div className='d-flex justify-center'>
                  <div className=''>
                    <div id='detailsSavedDiv' className='d-flex justify-center'>
                    <div id=''>

                      <h6 className='h6 theme-blue-color fw-bold'>Service: <span className='text-[#8d8d8d]'>{serviceName}</span></h6>
                      <h6 className='h6 theme-blue-color fw-bold'>Clinic: <span className='text-[#8d8d8d]'>{clinicName}</span></h6>
                      <h6 className='h6 theme-blue-color fw-bold'>Appointment Date: <span className='text-[#8d8d8d]'>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</span></h6>
                    </div>
                    </div>

                    <section id='formSec' className=' bg-[#ffffff12] mt-4'>
                      <div className='container pt-16 pb-10'>
                        <div className='d-flex justify-center gap-16'>
                          <form className=' bg-slate-400  '>
                            {/* <label for="fname">First Name</label> */}
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            {/* <label for="lname">Last Name</label> */}
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                            {/* <label for="topic">Topic</label> */}
                            <input type="email" id="email" name="email"  placeholder="Your email.."/>

                            {/* <label for="subject">Subject</label> */}
                            <textarea id="subject" className=' h-40 mb-16' name="subject" placeholder="Write message.."></textarea>
                          
                          </form>
                      
                        </div>
                      </div>
                    </section>

                  </div>
                  </div>
                </div>
              </section>

            </>
          }

          <div id='Btns' className='text-end'>
            <button id='nxtBtn' className='' onClick={() => setCurrentPage(currentPage + 1)} >
              {currentPage === 2 ? "Finish" : "Next"}
            </button>
            <button id='prvBtn' className='ml-3 disabled:cursor-not-allowed disabled:opacity-60' disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          </div>
        </div>
      </section >



    </div >
  )
}

export default Appointment