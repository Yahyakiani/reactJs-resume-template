import React from 'react'
import FooterLogo from '../../assets/dummy/logo-footer.png'
import 'font-awesome/css/font-awesome.min.css';
import './_footer.scss'


const Footer = () => {
    return (

        <footer class="site-footer">
				<div class="container">
					 <img src={FooterLogo} alt="Site Name" />

					<address>
						<p>495 Brainard St. Detroit, MI 48201 <br></br><a href="tel:354543543">(563) 429 234 890</a> <br /> <a href="mailto:info@bandname.com">info@bandname.com</a></p>
					</address>

					<div class="social-links">
						<a href="#"><i class="fa fa-facebook-square"></i></a>
						<a href="#"><i class="fa fa-linkedin"></i></a>
						<a href="#"><i class="fa fa-github"></i></a>
					</div>

					<p class="copy">Copyright 2014 Company Name. Designed by Themezy. All right reserved</p>
				</div>
			</footer>
    )
}

export default Footer