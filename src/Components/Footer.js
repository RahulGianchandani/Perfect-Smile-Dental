import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
const Footer = () => {




    return (
        <footer id='footer'>
            <div id='footer-top'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center align-content-center text-center px-72'>
                        <section className=''>
                            <h4 className=' mb-3'>Opening hours</h4>
                            <h5 className=' mb-3'>Monday - Friday</h5>
                            <p className=' mb-3'>6:00 AM - 10:00 AM</p>
                            <h5 className=' mb-3'>Saturday</h5>
                            <p className=' mb-3'>8:00 AM - 4:00 PM</p>
                        </section>
                        <section>
                            <img src={logo} className='mb-4 inline' />
                            <h4 className='mb-3'>Call Us</h4>
                            <a className=' ' href="tel:035-505-448">035-505-448</a>
                            <a className='mb-3' href="tel:052-686-6442">052-686-6442</a>
                            <h4 className='mb-3'>Write a message</h4>
                            <a href="mailto:perfect.smile.israel@gmail.com">perfect.smile.israel@gmail.com</a>
                        </section>
                        <section>
                            <h4 className='mb-3'>Our address</h4>
                            <h5 className='mb-3'>The Center</h5>
                            <p className='mb-0'>96 Zeytim St</p>
                            <p className='mb-0'>Givat Shmuel</p>
                            <p className='mb-3'>Or building in Givat</p>
                            <h5 className='mb-3'>North</h5>
                            <p className='mb-0'>Tamra North Road</p>
                        </section>

                    </div>
                </div>
            </div>

            <div id='footer-bottom'>
                <p>All Rights Reserved — © Copyright PerfectSmile 2023.</p>
            </div>
        </footer>
    )
}

export default Footer