import React from 'react'
import testi3 from '../images/test3.jpg'
import testi2 from '../images/test2.jpg'
import testi4 from '../images/test4.jpg'
import testi5 from '../images/test5.jpg'
import testi6 from '../images/test6.jpg'
import testi1 from '../images/rona-after.jpeg'
import quotes from '../images/icons8-quote-100.png'
import star from '../images/icons8-star-30.png'

const Home = () => {
    return (
        <div id='homePage'>
            <header className='d-flex'>
                <div id='leftSideHeader' className='col-7'>
                    <h6 className='mb-5' >WELCOME TO OUR CLINIC</h6>
                    <h1 className='mb-0 text-white'>Make your</h1>
                    <h1 className='text-white mb-5'>smile Shine</h1>
                    <p className='text-white fw-bold'>lorep sadsa sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
                    <button>MAKE AN APPOINTMENT</button>
                </div>
                <div id='rightSideHeader' className='col-5'>

                </div>
            </header>

            <section id='serviceSec'>
                <h1 className='text-center h1 theme-blue-color mb-24 pt-32'>Our Services</h1>
                <div className='container pb-36'>
                    <div id='treatments' className='grid grid-cols-3 gap-2'>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>Mouth dental implant</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        A jaw without teeth or with destroyed teeth can be restored today with the help of special implants. On the day of treatment, the implants are inserted and restored with a temporary bridge.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>BASAL GRAFT</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        1. Implantation with final restoration within two days.
                                        2. Solutions for difficult cases due to complicated problems actually the possibility of restoration of zirconia crowns on top of the implants.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>Zirconia crowns</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        Wearing full zirconia crowns with diamond coating in a computerized design in the shape of the complete and beautiful tooth on the damaged tooth.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>CT scan</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        CT scan, very accurate measurements with the help of an intraoral scanner, saving time, and a process that is much more comfortable and clean for the patient.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>Transparent orthodontics</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        An innovative method of straightening teeth with invisible transparent braces that allows the patient to undergo aesthetic teeth straightening.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='service   service1  duration-300'>
                            <div className='relative mainTextDiv'>
                                <h6 className='text-white text-center h2 mt-3 mb-6'>Panorama photography</h6>
                                <div className='text-white text-center textDiv '>
                                    <h6 className='h4 mb-4'>Treatment description</h6>
                                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                                        Panoramic photography is an umbrella term for various techniques that can be used to create images with a very wide viewing angle.
                                    </p>
                                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonSec" className=' bg-[#f3f3f3]'>
                <h1 className='text-center h1 theme-blue-color mb-24 pt-20'>Testimonials</h1>
                <div className='container pb-36'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                    {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="" aria-current="true" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div> */}
                        <div className="carousel-inner">
                            <div className="carousel-item h-auto active d-flex gap-28" data-bs-interval="10000">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>After a long and tiring journey of 6 second doctors who were not ready to give me dental implants, I arrived at Hamudi's clinic and to my surprise I received answers to every question! And I was told yes, you will have two and a perfect smile. Dr. Eid Mediham, tolerant, gentle and cute, bypassed the nerve, planted implants beyond what was expected! !!!</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Rona President.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi1} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item h-auto  d-flex gap-28" data-bs-interval="2000">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>Muhammad is the most professional doctor I have ever known, extremely patient. I performed dental treatment at a high level, most satisfied.! It's nice to be in the clinic. I highly recommend it.</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Ricky Malka.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi3} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item h-auto  d-flex gap-28">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>It is highly recommended. Professional staff, nice people and wholehearted service</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Fathalla Mreh.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi2} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item h-auto  d-flex gap-28">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>This is the doctor. the therapist Best. that I have met in my life. Always. Laughs respectfully. Great honor. meet a person like cutie the doctor. also helps. to people from Ukraine Better than you think. I recommend with warmth and love 🌹🌹🌹❤️❤️❤️❤️</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Ilan Zahov.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi4} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item h-auto  d-flex gap-28">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>I underwent dental treatments and implants, I wholeheartedly recommend the professional work, the experienced and reliable team. Cheers!!!</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Igal Todover.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi6} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item h-auto  d-flex gap-28">
                                <div className='col-8 text-end'>
                                    <h2 className='h2 mb-20 theme-dark-blue'>Take it from our patients</h2>
                                    <div>
                                        <img src={quotes} className='mb-4 inline'></img>
                                    </div>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <img className='inline' src={star}></img>
                                    <p className='mt-4 text-end pl-96 '>Hamudi Alof is highly recommended👍 professional staff 💉 nice people 🥰 and service from the heart 🧡 zirconia crowns 😬 with diamond coating 🤩</p>

                                    <h6 className='h5 font-bold mt-4 theme-dark-blue'>— Barodi Rap.</h6>
                                </div>
                                <div className='col-4 h-96'>
                                    <img src={testi5} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home