import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import footerlogo from '../assets/img/white-logo.png';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Share from '@mui/icons-material/Share';

import ContactForm from './contactForm';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const Footer = (props) => {
	const {  } = props

	useEffect(() => {
	}, []);


  	return (
	    <React.Fragment>
	    	<section className="footer-sec">
			      		<div className="container">
			      			<div className="row">
			      				<div className="col-md-6">
			      					<div className="footer-logo"><a href="#"><img src={footerlogo} /></a></div>
			      					<div className="footer-content"><p>IMRNext’s hardware and software is a <span className="white-text">complete cable replacement solution</span> that provides bidirectional video, audio and control to enable next-level user immersion.</p></div>
			      					<div class="outer-email-footer">
			      						<p><span>Email  /</span> <a href="#">connect@imrnext.com</a></p>
			      						<p><span>Address  /</span> <a href="#">55 Barry Parade, Fortitude Valley, Qld, 4006, Australia</a></p>
			      					</div>
			      					{/* 
			      					<div className="footer-icons">
			      						<a href="#"><LinkedIn /></a>
			      						<a href="#"><Facebook /></a>
			      						<a href="#"><Instagram /></a>
			      						<a href="#"><Twitter /></a>
			      						<a href="#"><Share /></a>
			      					</div>
			      					*/} 
				      			</div>
				      			<div className="col-md-6">
				      				<ContactForm />
				      			</div>
			      			</div>	
			      		</div>
			      	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);