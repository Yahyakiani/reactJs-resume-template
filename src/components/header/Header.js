import React from 'react'
import  Nav  from '../Nav'
import logo from '../../assets/dummy/logo.png'
import './_header.scss'


const Header = () => {
    return (
        <header class="site-header">
            <div class="container">
                <a href="index.html" id="branding">
                    <img src={logo} alt="Site Title" />
                    <small class="site-description">Yahya Kayani</small>
                </a>
                <Nav />
                <div class="mobile-menu"></div>
            </div>
        </header>

    )
}

export default Header