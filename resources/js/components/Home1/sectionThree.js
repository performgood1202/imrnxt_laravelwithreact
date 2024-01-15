import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

import whitelogo from "../../assets/img/white-logo.png";
import herovideo from "../../assets/img/hero-video.png";
import Interactive from "../../assets/img/Interactive.png";

import Footer from "../Footer";


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

const SectionThree = (props) => {
	const { setShowSectionTwo,setShowSectionThree,showSectionThree,setbodyOverflow,setSecondsec,setSecndFromthree,setHideFooter } = props

	const sectionRef3 = useRef();

	let CountScroll3 = 0;
	const section1AniTrigger3 = (event) => {
		
		if (event.deltaY < 0)
		{
		// scrolling up
			CountScroll3--;
			if (CountScroll3 <= 0 || window.scrollY == 0) {
				
				document.getElementById('main-sec-home').classList.remove('main-sec-home-none')
				setbodyOverflow(true)
				setSecndFromthree(true)
				setSecondsec(true);
				setShowSectionTwo(true)
				setShowSectionThree(false)
				window.scrollTo(0, 0);
			}
				
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
		
			CountScroll3++;
			
			
		}
		// console.log(CountScroll3);

	}

	useEffect(() => {
		if (!isMobile) {
			if (showSectionThree) {
				setHideFooter(false)
			}
			
			CountScroll3 = 0
			sectionRef3.current.addEventListener("wheel", section1AniTrigger3, { passive: true });

	    	return () => sectionRef3.current.removeEventListener("wheel", section1AniTrigger3);
	    }
	}, [showSectionThree]);


  	return (
	    <React.Fragment>
	    	<section ref={sectionRef3} className={"animated animatedFadeInUp fadeInUp home-banner-possibility visble-opacity-"+(showSectionThree?'show unlock-poss-active':'hide')}>
  				<div class="container">
  					<div class="row">
  						<div class="col-md-6">
  							<div class="banner-content-1 banner-content-possibility animated animatedFadeInUp fadeInUp">
								<h1>Unlock possibility</h1>
								<p>Our world-first, patented technology is a game<br /> changer. IMRNext enables lightning-fast<br /> compression, pixel-perfect resolution and<br /> a seamless user experience on any network.</p>
								<div class="btn-contactus"><a href="/technology">Learn More</a></div>
							</div>
  						</div>
  						<div class="col-md-6">
  							<div class="banner-img-possibility">
								<img src={herovideo} />
							</div>
  						</div>
  					</div>
  				</div>
  			</section>
  			<section className={"service-section home-last-sec visble-opacity-"+(showSectionThree?'show':'hide')}>
  				<div class="container">
  					<div class="row">
  						<div class="col-md-12">
  							<div class="service-title">
	  							<h2>Push the boundaries of <br />your product</h2>
	  							<p>From R&D to full turnkey solutions, IMRNext is designed to fit in at any level of<br /> your technology stack.  Learn about how we collaborate with clients to unlock <br />new possibilities for their products.</p>
	  							<div class="btn-logo"><a href="/products">Learn More</a></div>
	  							<img src={Interactive} />
	  						</div>
  						</div>
  					</div>
  				</div>
  			</section>
  			{
  				showSectionThree
  				? (<Footer />) : ''
  			}
  			
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionThree);