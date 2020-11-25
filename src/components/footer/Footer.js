import React from 'react'
import FooterLogo from '../../assets/images/logo.png'
import 'font-awesome/css/font-awesome.min.css';
import './_footer.scss'


const Footer = () => {
    return (

        <footer class="site-footer">
				<div class="container">
					 <img src={FooterLogo} height={'100px'} width={'100px'} alt="Logo" />

					<address>
						<p>Islamabad <br />Pakistan<br />
						{/* <a href="mailto:info@bandname.com">info@bandname.com</a> */}
						</p>
					</address>

					<div class="social-links">
						<a href="#"><i class="fa fa-facebook-square"></i></a>
						<a href="#"><i class="fa fa-linkedin"></i></a>
						<a href="#"><i class="fa fa-github"></i></a>
					</div>

					<p class="copy">This site is developed using ReactJS by Yahya Kayani from the original template of Themezy</p>
				</div>
			</footer>
    )
}

export default Footer