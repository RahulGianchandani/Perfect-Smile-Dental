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
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='homePage'>
      <header className='d-flex max-sm:flex-col-reverse'>
        <div id='leftSideHeader' className='max-sm:h-auto col-7 p-4 max-sm:w-auto max-sm:text-center max-sm:justify-items-center'>
        <h6 className="mb-5">ברוכים הבאים לקליניקה שלנו</h6>
          <h1 className="mb-0 text-white">הפוך את שלך</h1>
          <h1 className="text-white mb-5">חיוך לזרוח</h1>
          <p className='text-white fw-bold max-sm:w-full'>lorep sadsas sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa dsadsad asdsad asdsad sadsad asd sad sadsad asdsa</p>
          <Link to="/appointment"><button>לקבוע פגישה</button></Link>
        </div>
        <div id='rightSideHeader' className='col-5 max-sm:w-auto max-sm:h-[500px]'>

        </div>
      </header>


      <section id='serviceSec'>
        <h1 className='text-center h1 theme-blue-color mb-24 pt-32 lg: max-lg:pt-12 max-lg:mb-12'>בחר שירות</h1>
        <div className='container pb-36 max-md:pb-12'>
          <div id='treatments' className='grid grid-cols-3 gap-5 max-sm:grid-cols-1'>
            <Link to="/service-mouth-dental">
              <div className='service   service1  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 mt-3 mb-6'>השתלת שיניים בפה</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      לסת מחוסרת שיניים או עם שיניים הרוסות ניתן היום לשקם בעזרת שתלים מיוחדים. ביום הטיפול מחדירים את השתלים ומשקמים עם גשר זמני.


                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/service-basal-graft">
              <div className='service   service2  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 xl:mt-3 mb-6 max-xl:mt-8'>השתלת בזאל</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      1. השתלה עם שיקום סופי תוך יומיים.
                      2. פתרונות למקרים קשים בגלל בעיות מסובכות בעצם אפשרות שיקום של כתרי זירקוניה על גבי השתלים.


                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/service-zirconia-crowns">
              <div className='service   service3  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 xl:mt-3 mb-6 max-xl:mt-8'>כתרי זירקוניה</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      הלבשת כתרי זירקוניה מלאה עם ציפוי יהלום בעיצוב ממוחשב בצורת השן השלמה והיפה על השן הפגומה.


                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/service-ct-scan">
              <div className='service   service4  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 xl:mt-3 mb-6 max-xl:mt-8'>סריקת סי טי</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      צילום CT מידות מדויקות מאוד בעזרת סורק אינטראורלי חיסכון בזמן, ותהליך שהוא הרבה יותר נוח ונקי למטופל.

                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/service-transparent-orthodontics">
              <div className='service   service5  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 mt-3 mb-6'>יישור שיניים שקוף</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      שיטה חדשנית ליישור שיניים ע"י פלטות שקופות בלתי נראות שמאפשר למטופל לעבור יישור שיניים אסטטי.


                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/service-panorama-photography">
              <div className='service   service6  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-black text-center h1 mt-3 mb-6'>                          צילום פנורמה
                  </h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>תיאור הטיפול</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      צילום פנורמי הוא כינוי כולל לטכניקות שונות שניתן להשתמש בהן ליצירת תמונות עם זווית צפייה רחבה מאוד.
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      קרא עוד
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonSec" className=' bg-[#f3f3f3]'>

        <div className=' '>
          <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators z-0">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item h-auto active d-flex gap-28 max-sm:gap-4 max-lg:gap-6" data-bs-interval="10000">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-10 max-md:mb-2'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>
                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi1} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>לאחר מסע ארוך ומייגע של 6 רופאים שלא היו מוכנים לתת לי השתלות שיניים, הגעתי למרפאה של חמודי ולהפתעתי קיבלתי תשובות לכל שאלה! ונאמר לי שכן, יהיו לך שניים וחיוך מושלם. ד"ר עיד מדיהם, סובלני, עדין וחמוד, עקף את העצב, שתל שתלים מעבר למצופה! !!!</p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>- רונה הנשיאה.</h6>
                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>
                </div>
                <div className='col-5 testiImg '>
                  <img src={testi1} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
              <div className="carousel-item h-auto  d-flex gap-28 max-sm:gap-4 max-lg:gap-6" data-bs-interval="2000">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-10 max-md:mb-2'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>
                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi3} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>מוחמד הוא הרופא הכי מקצועי שהכרתי, סבלני ביותר. ביצעתי טיפול שיניים ברמה גבוהה, הכי מרוצה.! זה נחמד להיות במרפאה. אני מאוד ממליץ על זה.</p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>- ריקי מלכה.</h6>
                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>
                </div>
                <div className='col-5 testiImg '>
                  <img src={testi3} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
              <div className="carousel-item h-auto  d-flex gap-28 max-sm:gap-4 max-lg:gap-6">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-10 max-md:mb-2'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>
                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi2} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>זה מומלץ מאוד. צוות מקצועי, אנשים נחמדים ושירות מכל הלב</p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>— פתאלה מרה.</h6>
                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>
                </div>
                <div className='col-5 testiImg '>
                  <img src={testi2} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
              <div className="carousel-item h-auto  d-flex gap-28 max-sm:gap-4 max-lg:gap-6">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-10 max-md:mb-2'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>
                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi4} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>זה הרופא. המטפל הטוב ביותר. שפגשתי בחיי. תמיד. צוחק בכבוד. כבוד גדול. לפגוש אדם כמו חמוד הרופא. גם עוזר. לאנשים מאוקראינה יותר טוב ממה שאתה חושב. ממליצה בחום ובאהבה 🌹🌹🌹❤️❤️❤️❤️</p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>— אילן זהוב.</h6>
                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>
                </div>
                <div className='col-5 testiImg '>
                  <img src={testi4} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
              <div className="carousel-item h-auto  d-flex gap-28 max-sm:gap-4 max-lg:gap-6">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-10 max-md:mb-2'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>

                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi6} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>עברתי טיפולי שיניים והשתלות, ממליצה מכל הלב על העבודה המקצועית, הצוות המנוסה והאמין. לחיים!!!

                  </p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>- כל תודובר.</h6>
                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>

                </div>
                <div className='col-5 testiImg '>
                  <img src={testi6} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
              <div className="carousel-item h-auto  d-flex gap-28 max-sm:gap-4 max-lg:gap-6">
                <div className='col-sm-7 text-center text-sm-end max-sm:p-4'>
                  <h1 className=' h1 mr-sm-20 theme-blue-color mb-10 pt-14 max-md:pt-8 max-md:mb-6'>המלצות</h1>
                  <h2 className='h2 mb-16 max-md:mb-6 theme-dark-blue'>קח את זה מהמטופלים שלנו</h2>
                  <div className='d-flex justify-center d-block d-sm-none'>
                    <img src={testi5} className='rounded-full h-[100px] w-[100px]'>
                    </img>
                  </div>
                  <div>
                    <img src={quotes} className='mb-4 max-sm:mt-5 max-sm:w-16 inline'></img>
                  </div>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <img className='inline' src={star}></img>
                  <p className='mt-4 text-end pl-96 h-20 max-xl:pl-4 max-xl:h-max max-2xl:pl-8 max-2xl:h-max max-sm:h-[155px] max-sm:text-sm'>חמודי אלוף מומלץ בחום👍 צוות מקצועי 💉 אנשים נחמדים 🥰 ושירות מכל הלב 🧡 כתרי זירקוניה 😬 בציפוי יהלום 🤩</p>

                  <h6 className='h5 mb-5 max-sm:!mb-5 font-bold mt-4 theme-dark-blue max-sm:text-end'>- פארודית ראפ.</h6>

                  <button type="button" className='mr-7 align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <TfiArrowCircleLeft color='#3385D7' size={"40"} />
                  </button>
                  <button type="button" className='align-middle pb-14 max-sm:pb-8' data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <TfiArrowCircleRight color='#3385D7' size={"40"} />
                  </button>
                </div>
                <div className='col-5 testiImg '>
                  <img src={testi5} className="d-block w-100 h-[712px] max-xl:h-[800px] object-cover" alt="..." />
                </div>

              </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
          </div>


        </div>
      </section>

      <section id="expSec" className=''>
        <h1 className='text-center h1 text-white pt-32 max-md:pt-12'>חוויות מטופל</h1>
        <h1 className='text-center h2 theme-blue-color mb-24 max-md:mb-12 mt-4 '>ראה מה יש למטופלים לומר על החוויה שלהם</h1>
        <div className='container pb-36 max-md:pb-12'>

          <div className='row justify-center gap-y-10 '>
            <iframe src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fdentistryperfectsmile%2Fvideos%2F590234879085678%2F&show_text=false&width=560&t=0" clas width="560" height="469" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" className='vidIframe col-sm-6 md:h-[300px] lg:h-[300px] xl:h-[469px]' allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            <iframe src="https://www.facebook.com/plugins/video.php?height=469&href=https%3A%2F%2Fwww.facebook.com%2Fdentistryperfectsmile%2Fvideos%2F3144463749138938%2F&show_text=false&width=560&t=0" width="560" height="469" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" className='vidIframe col-sm-6 md:h-[300px] lg:h-[300px] xl:h-[469px]' allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>


          </div>
        </div>
      </section>

      <section id="transformSec" className=''>
        <h1 className='text-center h1 theme-blue-color  mb-24 max-md:mb-12 pt-32 max-md:pt-12'>השירותים שלנו</h1>
        <div className='container pb-36 max-md:pb-12'>
          {/* <span>Before</span>
          <span>After</span> */}
          <div className='grid grid-cols-2 gap-y-20 justify-items-center max-xl:grid-cols-1 max-xl:gap-y-10'>

            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans1B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans1A} className='transform-images transform-img-after ' alt="Image two" />}
            />
            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans2B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans2A} className='transform-images transform-img-after ' alt="Image two" />}
            />
            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans3B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans3A} className='transform-images transform-img-after ' alt="Image two" />}
            />
            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans4B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans4A} className='transform-images transform-img-after ' alt="Image two" />}
            />
            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans5B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans5A} className='transform-images transform-img-after ' alt="Image two" />}
            />
            <ReactCompareSlider className='transform-img-mainDiv ' onlyHandleDraggable={true}
              style={{ filter: "brightness(1) !important" }}
              itemOne={<ReactCompareSliderImage src={trans6B} className='transform-images transform-img-before ' alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={trans6A} className='transform-images transform-img-after ' alt="Image two" />}
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home