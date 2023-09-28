import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { ImWhatsapp } from 'react-icons/im'


const Footer = () => {
    return (
        <footer id='footer'>
            <div id='footer-top'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center align-content-center text-center px-72 max-xl:px-12 max-sm:flex-col'>
                        <section className='p-2'>
                            <h4 className=' mb-3'>Opening hours</h4>
                            <h5 className=' mb-3'>Monday - Friday</h5>
                            <p className=' mb-3'>6:00 AM - 10:00 AM</p>
                            <h5 className=' mb-3'>Saturday</h5>
                            <p className=' mb-3'>8:00 AM - 4:00 PM</p>
                        </section>
                        <section className='p-2'>
                            <img src={logo} className='mb-4 inline' />
                            <h4 className='mb-3'>Call Us</h4>
                            <a className=' ' href="tel:035-505-448">035-505-448</a>
                            <a className='mb-3' href="tel:052-686-6442">052-686-6442</a>
                            <h4 className='mb-3'>Write a message</h4>
                            <a href="mailto:perfect.smile.israel@gmail.com">perfect.smile.israel@gmail.com</a>
                        </section>
                        <section className='p-2'>
                            <h4 className='mb-3'>Our address</h4>
                            <h5 className='mb-3'>The Center</h5>
                            <a href='https://maps.google.com/maps?width=700&height=440&hl=en&q=%D7%A2%D7%91%D7%A2%D7%AA%20%D7%A9%D7%9E%D7%95%D7%90%D7%9C%2096%D7%94%D7%96%D7%99%D7%AA%D7%99%D7%9D+
                                (Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed' target='_blank'>
                                <p className='mb-0'>96 Zeytim St</p>
                                <p className='mb-0'>Givat Shmuel</p>
                                <p className='mb-3'>Or building in Givat</p>
                            </a>
                            <h5 className='mb-3'>North</h5>
                            <a href='https://www.google.com/maps/place/Northern+Road%2FTamra/@32.8644145,35.1841213,17z/data=!3m1!4b1!4m5!3m4!1s0x151dca9a3e03c6c5:0x47af1042f792feb1!8m2!3d32.86441!4d35.18631' target='_blank'>
                            <p className='mb-0'>Tamra North Road</p>
                            </a>
                        </section>

                    </div>
                </div>
            </div>

            <div id='footer-bottom'>
                <p>All Rights Reserved — © Copyright PerfectSmile 2023.</p>
            </div>
            <a href="https://wa.me/+972526866442" target="_blank"><ImWhatsapp size={40} className='whatsappICON' color="white" /></a>
        </footer>
    )
}

export default Footer