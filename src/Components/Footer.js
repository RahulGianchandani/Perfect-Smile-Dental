import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { ImWhatsapp } from 'react-icons/im'


const Footer = () => {
    return (
        <footer id='footer'>
            <div id='footer-top' className='max-md:!py-12'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center align-content-center text-center px-72 max-xl:px-12 max-sm:flex-col'>
                        <section className='p-2'>
                            <h4 className=' mb-3'>שעות פתיחה</h4>
                            <h5 className=' mb-3'>יום שני יום שישי</h5>
                            <p className=' mb-3'>6:00 AM - 10:00 AM</p>
                            <h5 className=' mb-3'>יום שבת</h5>
                            <p className=' mb-3'>8:00 AM - 4:00 PM</p>
                        </section>
                        <section className='p-2'>
                            <img src={logo} className='mb-4 inline' />
                            <h4 className='mb-3'>התקשר אלינו</h4>
                            <a className=' ' href="tel:035-505-448">035-505-448</a>
                            <a className='mb-3' href="tel:052-686-6442">052-686-6442</a>
                            <h4 className='mb-3'>לכתוב הודעה</h4>
                            <a href="mailto:perfect.smile.israel@gmail.com">perfect.smile.israel@gmail.com</a>
                        </section>
                        <section className='p-2'>
                            <h4 className='mb-3'>הכתובת שלנו</h4>
                            <h5 className='mb-3'>המרכז</h5>
                            <a href='https://ul.waze.com/ul?place=ChIJ61DxPANKHRUReqQ56XTOA-U&ll=32.08543840%2C34.85252370&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank'>
                                <p className='mb-0'>רחוב הזיתים 96</p>
                                <p className='mb-0'> גבעת שמואל</p>
                                <p className='mb-3'>בניין אור בגבעה</p>
                            </a>
                            <h5 className='mb-3'>צפון</h5>
                            <a href='https://ul.waze.com/ul?place=ChIJ29BIz77LHRURd2BlieZyMN0&ll=32.85574400%2C35.19934700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank'>
                                <p className='mb-0'>טמרה כביש צפוני</p>
                            </a>
                            <h5 className='mb-3'>צפון</h5>
                            <a href='https://ul.waze.com/ul?place=EiJIYS1BdHNtYSd1dCBTdCwgS2lyeWF0IEF0YSwgSXNyYWVsIi4qLAoUChIJQ2FCwMq2HRUR9_SJx06jzpQSFAoSCVNWlpWlth0VER_Wcq80xzJs&ll=32.80452670%2C35.10391570&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank'>
                                <p className='mb-0'>16 קריית אתא העצמאות</p>
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