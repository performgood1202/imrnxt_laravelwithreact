import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import {isMobile} from 'react-device-detect';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

const SectionOne = (props) => {
	const { setshowSectionOne,setShowSectionTwo,setShowVideoBanner, setbodyOverflow } = props

	const sectionRef = useRef();

	var lastScrollTop = 0;
	var scrollAtTop = 0;
	const section1AniTriggerOld = () => {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		

		if ((window.innerHeight + window.scrollY) >= sectionRef.current.scrollHeight) {
			// setTimeout(function() {
				setshowSectionOne(false)
				setShowSectionTwo(true)
				window.scrollTo(0, 1);
			// }, 700);
	    }


    	// if (document.documentElement.scrollTop == 0) {
     //    	console.log(scrollAtTop++);
    	// } 
	    if (st > lastScrollTop){
	    	console.log('down')
	    } else {
	    	console.log('up')
	    	if (scrollAtTop == 2) {
	    		// setshowSectionOne(false)
	    		// setShowVideoBanner(true)
	    	}
	    	if (document.documentElement.scrollTop == 0) {
	        	// console.log(scrollAtTop++);
	        	setshowSectionOne(false)
	    		setShowVideoBanner(true)
	    	} 
	    }

	    lastScrollTop = st <= 0 ? 0 : st;
	}

	const section1AniTrigger = () => {

		if (event.deltaY < 0)
		{
		// scrolling up
			setshowSectionOne(false)
	    	setShowVideoBanner(true)
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			// slideUp();
			setshowSectionOne(false)
			setShowSectionTwo(true)
			window.scrollTo(0, 1);
			// setTimeout(function() {
				
				
			// }, 1000);
			
		}

	}

	useEffect(() => {
		if (!isMobile) {
			setbodyOverflow(true)
			// window.addEventListener("scroll", section1AniTrigger, { passive: true });

	  //   	return () => window.removeEventListener("scroll", section1AniTrigger);
	  		window.addEventListener("wheel", section1AniTrigger, { passive: true });

	    	return () => window.removeEventListener("wheel", section1AniTrigger);
	    }
	}, []);


  	return (
	    <React.Fragment>
	    	<section className="compress-section animated animatedFadeInUp fadeInUp" ref={sectionRef}>
			      		<div className="container">
			      			<div class="col-md-12">
			      				<h2>Compress quickly without<br /> sacrificing quality</h2>
			      				<div className="outer-number-show">
			      					<div className="inner-number-show">
			      						<div class="internal-effect">
			      							<span>Less than</span>
				      						<h2>200</h2>
				      						<p>microseconds</p>
			      						</div>
			      						
			      					</div>
			      					<div className="inner-number-show">
			      						<div class="internal-effect">
			      							<span>up to</span>
				      						<h2>8k60</h2>
				      						{/* megapixels per second <br /> */}
				      						<p>for video data rates</p>
			      						</div>
			      						
			      					</div>
			      					<div className="inner-number-show">
			      						<div class="internal-effect">
			      							<span>up to</span>
				      						<h2>60:1</h2>
				      						<p>for video frame<br /> compression</p>
			      						</div>
			      						
			      					</div>
			      					<div className="inner-number-show">
			      						<div class="internal-effect">
			      							<span>up to</span>
				      						<h2>8k60</h2>
				      						<p>wireless game streaming<br /> to any display</p>
			      						</div>
			      						
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOne);