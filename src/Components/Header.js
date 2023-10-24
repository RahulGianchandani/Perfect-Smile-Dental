import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useTranslation } from "react-i18next";

const Header = () => {
 



    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 20 || document.body.clientWidth < 978 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('resize', changeNavBg);
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }


    }, [])


    return (
        <nav class={`navbar navbar-expand-lg header ${navBg && "sticky"} max-sm:py-0`}>

         
            <div class="container-fluid px-sm-5">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu color='#3385d7' />
                </button>
                <div class="collapse navbar-collapse order-2 order-lg-1" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <NavLink
                            to="/appointment"
                            className={"text-white text-decoration-none fw-bold"}
                        >
                            הזמינו תור

                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={"text-white text-decoration-none ms-lg-5 fw-bold"}
                        >
                            צור קשר
                        </NavLink>
                        <NavLink
                            to="/transformations"
                            className={"text-white text-decoration-none ms-lg-5 fw-bold"}
                        >
                            טרנספורמציות
                        </NavLink>
                        <NavLink
                            to="/"
                            className={"text-white text-decoration-none ms-lg-5 fw-bold"}
                        >
                            דף הבית

                        </NavLink>
                    </ul>
                </div>
                <div id='imgDiv' className='navbar-brand order-1 order-lg-2'>
                    <NavLink
                        to="/"
                        className={"text-white text-decoration-none ms-5 fw-bold"}
                    >
                        <img src={logo} className='inline max-sm:!w-24' />
                    </NavLink>

                </div>
            </div>
        </nav>

    )
}

export default Header