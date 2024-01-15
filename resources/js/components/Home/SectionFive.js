import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import whitelogo from '../../assets/img/white-logo1.svg';
import Footer from "../Footer";
import {isMobile} from 'react-device-detect';
import { Modal, Button, Form } from 'react-bootstrap';

import ContactForm from '../contactForm'

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const SectionFive = (props) => {
	const { setshowSectionFour, setshowSectionFive,setHideFooter,setbodyOverflow,setShowSecondSec } = props
	const logoeffectRef = useRef();
	const sectionRef = useRef();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = (e) => { e.preventDefault(); setShow(true); }
  	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};
	var lastScrollTop = 0;
	var scrollAtTop = 0;
	var scrollAtCenter = 0;
	const section1AniTrigger = () => {
		var st = window.pageYOffset || document.documentElement.scrollTop;

		const elementRect = sectionRef.current.getBoundingClientRect();
		const absoluteElementTop = elementRect.top + window.pageYOffset;
		const middle = absoluteElementTop - (window.innerHeight / 2);
		

	    if (st > lastScrollTop){
	    	
		    
		    
	    } else {
	    	if (document.documentElement.scrollTop == 0 ){
		    		// setshowSectionThree(false)
		    		// setShowSectionTwo(true)
		    	scrollAtTop++;
		    }
	    	console.log('up'+scrollAtTop)
	    	if (scrollAtTop > 1) {
	    		setshowSectionFive(false)
	    		setHideFooter(true)
	    		setShowSecondSec(false)
	    		setshowSectionFour(true)
	    		window.scrollTo(0, 1);
	    	}
	    }

	    lastScrollTop = st <= 0 ? 0 : st;
	}

	useEffect(() => {
		if (!isMobile) {
			// setTimeout(function() {
			setbodyOverflow(false)
			window.scrollTo(0, 1);
			logoeffectRef.current.classList.add('logo-outer-active')
			setHideFooter(false)
			window.addEventListener("scroll", section1AniTrigger, { passive: true });

	    	return () => window.removeEventListener("scroll", section1AniTrigger);
			// }, 2000);
		}

	}, []);


  	return (
	    <React.Fragment>
	    	<section className="partner-section" ref={sectionRef}>
	      		<div className="container">
	      			<div className="row justify-content-center">
	      				<div class="col-md-6">
		      				<div className="tech-outer-left">
		      					<div ref={logoeffectRef} className="logo-outer1">
		      						<img src={whitelogo} className="c-p" />
		      					</div>
		      					<h2 className="tech-title">Partner with us</h2>
		      					<p>We work hand-in-glove with our customers to co-design solutions that realise the potential of technology. Talk to us about how to unlock possibilities for your business.</p>
		      					<div className="btn-contactus"><a href="#" onClick={handleShow}>Contact us today</a></div>
		      				</div>
		      			</div>
	      			</div>	
	      		</div>
	      		<Modal show={show} onHide={handleClose}>
				        <Modal.Header closeButton>
				          <Modal.Title></Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				          <ContactForm onSubmit={onLoginFormSubmit} />
				        </Modal.Body>
				    </Modal>
	      	</section>
	      	<Footer />
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionFive);