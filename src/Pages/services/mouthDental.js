import React from 'react'
import serviceGirl from '../../images/dentist4-services-pic5.webp'
import serviceImg from '../../images/services/a-dental-patient-being-prepped-for-a-full-arch-implant-1.webp'
import { Link } from 'react-router-dom'
const MouthDental = () => {
    return (
        <div id='homePage'>
               <header className='d-flex max-sm:flex-col-reverse'>
        <div id='leftSideHeader' className='max-sm:h-auto col-7 p-4 max-sm:w-auto max-sm:text-center max-sm:justify-items-center'>
        <h6 className="mb-5">ברוכים הבאים לקליניקה שלנו</h6>
          <h1 className="mb-0 text-white">הפוך את שלך</h1>
          <h1 className="text-white mb-5">חיוך לזרוח</h1>
          <p className='text-white fw-bold max-sm:w-full'>lorep sadsas sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
          <Link to="/appointment#appointFormSec"><button>לקבוע פגישה</button></Link>
        </div>
        <div id='rightSideHeader' className='col-5 max-sm:w-auto max-sm:h-[500px]'>

        </div>
      </header>
            <section className='serviceDetailSec'>
                <div className='d-lg-flex'>
                    <div className='imgDiv col-lg-6'>
                        <img src={serviceImg} className='h-full w-full' alt=''></img>
                    </div>
                    <div className='serviceDetailsDiv text-end bg-[#f3f3f3] col-lg-6 max-xl:p-10 p-20'>
                        <h1 className='theme-blue-color h1'>Dental Implants</h1>
                        <h5 className='h5 relative before:absolute before:border-b-4 before:border-[#1f2e88] before:h-[30px] before:w-[100px] before:bottom-[-30px]'>Dental implantation is a groundbreaking medical treatment, which is an alternative to dentures in cases of loss of natural teeth. The treatment is very widespread, has high chances of success, and is done by qualified dentists, even if they are not experts in the field. The surgical procedure itself includes anesthesia and insertion of an implant into the jawbone, and the mounting of a crown over it (by gluing or screwing).</h5>
                        <p className='mt-5'>A single tooth or several single teeth can be performed, as well as dental implants based on a bridge connected to implants (all in 4 or all in 6)</p>
                        <h5 className='h5 my-3 theme-dark-blue'>In what cases is dental implant treatments recommended?</h5>
                        <p>Dental implantation is recommended in cases where the natural tooth cannot be cured and needs to be extracted. It should be noted that dental implantation is also considered a preventive treatment for jawbone loss, because when a gap is created in the jaw as a result of a missing tooth or teeth, the body ceases to secrete "building materials" and over time the jawbone sinks and gives an adult appearance, which affects the overall appearance of the face. In addition, the remaining healthy teeth had a tendency to "fill" the gap by moving to the area empty of teeth – and therefore, contrary to popular belief, dental implant treatments are not only an aesthetic matter but a medical solution for tooth loss.</p>
                        {/* <h5 className='h5 my-3 theme-dark-blue'>Rehabilitation, recovery and return to routine after dental implants</h5>
                        <p>Dental implantation as its name implies – a surgical procedure, which requires a gradual return to routine. After dental implants, pain, local bleeding, difficulty opening the mouth may appear, so it is recommended at this stage to take painkillers, avoid physical activity for up to two weeks from the date of implantation (to prevent bleeding from worsening due to an increase in blood pressure) and attend a follow-up appointment with the attending physician. It should be noted that in order to prolong the implantation results and enjoy it for many years, it is important to maintain daily hygiene, brush your teeth twice a day, floss after every meal, and come to a dental hygienist for a dental cleaning and a follow-up visit to the dentist once every six months.</p> */}
                    </div>
                </div>
            </section>

            <section id="appointSec" className=''>
                <div className='container py-32 max-w-[1200px]'>

                    <div className='bg-[#3043b8] appointDiv '>
                        <div className='d-sm-flex gap-9'>
                            <div id='imgDiv' className=' h-96 col-sm-6'>
                                <img src={serviceGirl} className='w-100 h-100' />
                            </div>
                            <div className='rightSideText max-sm:text-center max-sm:mt-5 '>
                                <h6 className='text-[#3385d7] fw-bold mb-3'>הזמינו ביקור</h6>
                                <h2 className='text-3xl md:text-5xl text-white'>המומחים המובילים שלנו מחכים לעזור לך. צור איתנו קשר</h2>
                                <Link to="/appointment#appointFormSec"><button>לקבוע פגישה</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MouthDental