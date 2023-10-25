import React, { useEffect, useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [serviceSelect, setServiceSelect] = useState(0);
  const [serviceName, setServiceName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [mapSelect, setMapSelect] = useState(0);
  const [date, setDate] = useState(
    new Date()
  );
  console.log(date);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    messege: "",
  });
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    console.log("element", element);
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // const name = e.target.name

    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentPage != 2) {
      setCurrentPage(currentPage + 1)
    } else {
      alert("EMAIL SEND IS REMAINING ONLY, THANKS")
    }
  };

  return (
    <div id="homePage">
      <header className="d-flex max-sm:flex-col-reverse">
        <div
          id="leftSideHeader"
          className="max-sm:h-auto col-7 p-4 max-sm:w-auto max-sm:text-center max-sm:justify-items-center"
        >
          <h6 className="mb-5">ברוכים הבאים לקליניקה שלנו</h6>
          <h1 className="mb-0 text-white">הפוך את שלך</h1>
          <h1 className="text-white mb-5">חיוך לזרוח</h1>
          <p className="text-white fw-bold max-sm:w-full">
            lorep sadsas sadsa dasdsad asdsad sadas dasdsad asdsad asdsad asdsa
            dsadsad asdsad asdsad sadsad asd sad sadsad asdsa
          </p>
        </div>
        <div
          id="rightSideHeader"
          className="col-5 max-sm:w-auto max-sm:h-[500px]"
        ></div>
      </header>

      <section id="appointFormSec">
        <h1 className="text-center h1 theme-blue-color  mb-24 pt-32 max-md:pt-14 max-md:mb-10">
          לקבוע פגישה
        </h1>
        <div className="container pb-36 max-md:pb-12">
          <Stepper activeStep={currentPage} className="mb-14 max-md:mb-6">
            <Step label="שירותים" className="step1" />
            <Step label="תאריך ומיקום" className="step2" />
            <Step label="פרטים" className="step3" />
          </Stepper>

          {currentPage === 0 && (
            <>
              <h3 className="mb-14 h3 max-md:mb-8 theme-dark-blue fw-bold text-center ">
                בחר שירות
              </h3>
              <section id="serviceSec">
                <div className="container max-w-[1350px]">
                  <div
                    id="treatments"
                    className="grid grid-cols-3 gap-5 max-sm:grid-cols-1"
                  >
                    <div
                      className={`service service1  duration-300 h-52 ${serviceSelect === 1 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Mouth dental implant");
                        setServiceSelect(1);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          השתלת שיניים בפה
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service2  duration-300 h-52 ${serviceSelect === 2 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("BASAL GRAFT");
                        setServiceSelect(2);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          השתלת בזאל
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service3  duration-300 h-52 ${serviceSelect === 3 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Zirconia crowns");
                        setServiceSelect(3);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          כתרי זירקוניה
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service4  duration-300 h-52 ${serviceSelect === 4 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("CT scan");
                        setServiceSelect(4);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          סריקת סי טי
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service5  duration-300 h-52 ${serviceSelect === 5 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Transparent orthodontics");
                        setServiceSelect(5);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          יישור שיניים שקוף
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service6  duration-300 h-52 b ${serviceSelect === 6 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Panorama photography");
                        setServiceSelect(6);
                        handleNext();
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          צילום פנורמה
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {currentPage === 1 && (
            <>
              <h3 className="mb-14 h3 max-md:mb-8 theme-dark-blue fw-bold text-center ">
                בחר תאריך ושעה
              </h3>
              <section id="DtLocSec">
                <div className="container max-w-[1350px]">
                  <div className="row justify-center">
                    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-8 dateDiv">

                      <DatePicker
                        className="border-2 p-2 rounded-lg border-black cursor-pointer"
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        minDate={new Date()}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        onKeyDown={(e) => {
                          e.preventDefault();
                        }}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>
                    <div className="locationsDiv">
                      <h3 className="mt-14 mb-14 h3 theme-dark-blue fw-bold text-center ">
                        בחר מרפאת ארונות
                      </h3>
                      <div className="d-flex gap-5">
                        <div
                          onClick={() => {
                            setClinicName("North, Tamra North Road");
                            setMapSelect(1);
                            handleNext();
                          }}
                          className="col mapsDiv relative"
                        >
                          <iframe
                            className={`maps  duration-300 ${mapSelect === 1 && "SelectedService"
                              }`}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.276234777326!2d35.18631!3d32.86441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dca9a3e03c6c5%3A0x47af1042f792feb1!2sNorthern%20Road%2FTamra!5e0!3m2!1sen!2s!4v1695833819264!5m2!1sen!2s"
                            width="100%"
                            height="300px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div
                          onClick={() => {
                            setClinicName(
                              "The Center, 96 Zeytim St Givat Shmuel Or building in Givat"
                            );
                            setMapSelect(2);
                            handleNext();
                          }}
                          className="col mapsDiv relative"
                        >
                          <iframe
                            className={`maps duration-300 ${mapSelect === 2 && "SelectedService"
                              }`}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432691.3673359095!2d34.852524!3d32.085438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a033cf150eb%3A0xe503ce74e939a47a!2sHa-Zeitim%20St%2096%2C%20Giv&#39;at%20Shmu&#39;el%2C%20Israel!5e0!3m2!1sen!2sus!4v1695831105312!5m2!1sen!2sus"
                            width="100%"
                            height="300px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div
                          onClick={() => {
                            setClinicName(
                              "North, Ha-Atsma'ut St 16"
                            );
                            setMapSelect(3);
                            handleNext();
                          }}
                          className="col mapsDiv relative"
                        >
                          <iframe
                            className={`maps duration-300 ${mapSelect === 3 && "SelectedService"
                              }`}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5372669818494!2d35.1039157!3d32.8045267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db6cac0426143%3A0x94cea34ec789f4f7!2sHa-Atsma&#39;ut%2C%20Kiryat%20Ata%2C%20Israel!5e0!3m2!1sen!2s!4v1698225586678!5m2!1sen!2s"
                            width="100%"
                            height="300px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {currentPage === 2 && (
            <>
              <h3 className="mb-14 max-md:mb-8 h3 theme-dark-blue fw-bold text-center ">
                מלא את הטופס
              </h3>

              <section id="detailSec">
                <div className="container max-w-[1350px]">
                  <div className="d-flex justify-center">
                    <div className="">
                      <div
                        id="detailsSavedDiv"
                        className="d-flex justify-center"
                      >
                        <div id="" className="text-right">
                          <h6 className="h6 theme-blue-color fw-bold">
                            <span className="text-[#8d8d8d]">
                              {serviceName}
                            </span>
                            :שירות:{" "}

                          </h6>
                          <h6 className="h6 theme-blue-color fw-bold">
                            <span className="text-[#8d8d8d]">{clinicName}</span>
                            :מרפאה:{" "}
                          </h6>
                          <h6 className="h6 theme-blue-color fw-bold">
                            <span className="text-[#8d8d8d]">
                              {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                            </span>
                            :תאריך פגישה{" "}

                          </h6>
                        </div>
                      </div>

                      <section id="formSec" className=" bg-[#ffffff12] mt-4">
                        <div className="container pt-16 pb-10 max-md:pb-2">
                          <div className="d-flex justify-center gap-16">
                            <form className=" bg-slate-400  ">
                              {/* <label for="fname">First Name</label> */}
                              <input
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="השם שלך.."
                                onChange={handleChange}
                              />
                              {/* <label for="lname">Last Name</label> */}
                              <input
                                type="text"
                                id="lname"
                                name="lname"
                                placeholder="שם משפחתך.."
                                onChange={handleChange}
                              />

                              {/* <label for="topic">Topic</label> */}
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="האימייל שלך.."
                                onChange={handleChange}
                              />

                              {/* <label for="subject">Subject</label> */}
                              <textarea
                                id="subject"
                                className=" h-40 mb-16"
                                name="messege"
                                placeholder="כתוב הודעה.."
                                onChange={handleChange}
                              ></textarea>
                            </form>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          <div id="Btns" className="text-end max-md:!text-center">
            <button
              id="nxtBtn"
              className="disabled:cursor-not-allowed disabled:opacity-60"
              disabled={
                // (currentPage === 0 && serviceSelect === 0) ||
                // (currentPage === 1 && mapSelect === 0) ||
                (currentPage === 2 &&
                  (formData?.fname === "" ||
                    formData?.lname === "" ||
                    formData?.email === "" ||
                    formData?.messege === ""))
              }
              onClick={() => handleNext()}
            >
              {currentPage === 2 ? "סיים" : "הַבָּא"}
            </button>
            <button
              id="prvBtn"
              className="ml-3 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={currentPage <= 0}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              קודם
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
