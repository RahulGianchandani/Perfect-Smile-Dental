import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
const Header = () => {

    const [navBg, setNavBg] = useState(false);
  
    const changeNavBg = () => {
     window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeNavBg);
      return () => {
        window.removeEventListener('scroll', changeNavBg);
      }
    }, [])



    return (
        <nav class={`navbar navbar-expand-lg header ${navBg && "sticky"}`}>
            <div class="container-fluid px-5">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <RxHamburgerMenu color='#3385d7' />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <NavLink
                            to="/contact"
                            className={"text-white text-decoration-none fw-bold"}
                        >
                            CONTACT US
                        </NavLink>
                        <NavLink
                            to="/transformations"
                            className={"text-white text-decoration-none ms-5 fw-bold"}
                        >
                            TRANSFORMATIONS
                        </NavLink>
                        <NavLink
                            to="/"
                            className={"text-white text-decoration-none ms-5 fw-bold"}
                        >
                            HOME
                        </NavLink>
                    </ul>
                </div>
                <div id='imgDiv'>
                    <NavLink
                        to="/"
                        className={"text-white text-decoration-none ms-5 fw-bold"}
                    >
                        <img src={logo} className='inline' />
                    </NavLink>

                </div>
            </div>
        </nav>

    )
}

export default Header