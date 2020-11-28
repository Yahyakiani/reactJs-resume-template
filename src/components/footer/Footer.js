import React from 'react'
import FooterLogo from '../../assets/images/logo.png'
import 'font-awesome/css/font-awesome.min.css';
import './_footer.scss'


const Footer = () => {
    return (

        <footer className="site-footer">
				<div className="container">
					 <img src={FooterLogo} height={'100px'} width={'100px'} alt="Logo" />

					<address>
						<p>Islamabad <br />Pakistan<br /><br />Contact: +92335-3736462
						</p>
					</address>

					<div className="social-links">
						<a href="https://github.com/Yahyakiani"><i className="fa fa-github"></i></a>
						<a href="https://www.linkedin.com/in/yahya-kayani/"><i className="fa fa-linkedin"></i></a>
						<a href="mailto:yahyakiani1@gmail.com"><i className="fa fa-google"></i></a>
					</div>

					<p className="copy">This site is developed using ReactJS by Yahya Kayani from the original template of Themezy</p>
				</div>
			</footer>
    )
}

export default Footer