import React from 'react'
import  Nav  from '../Nav'
import logo from '../../assets/images/logo.png'
import './_header.scss'
import { route_constants } from '../constants/Routes'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header class="site-header">
            <div class="container">
                <Link to={route_constants.HOME} id="branding">
                    <img src={logo} height={'40rem'} width={'40rem'} alt="Logo" />
                    <small class="site-description">Yahya Kayani</small>
                </Link>
                <Nav />
                <div class="mobile-menu"></div>
            </div>
        </header>

    )
}

export default Header