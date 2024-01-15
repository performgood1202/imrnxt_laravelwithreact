import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

import whitelogo from "../../assets/img/white-logo.png";
import whitelogo22 from "../../assets/img/white-logo22.png";


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

const SectionTwo = (props) => {
	const { setShowSectionTwo,setshowSectionOne,setShowSectionThree,setSecOneslideDown,showSectionTwo,setbodyOverflow,secondsec,setSecondsec,SecndFromthree,setSecndFromthree,CountScroll,setCountScroll,setHideFooter } = props

	const sectionRef2 = useRef();
	const sectionRef1 = useRef();
	const mainSecHome = useRef();

	let CountScroll1 = 0;
	let CountScrollVar = 0;
	const section1AniTrigger2 = (event) => {
		
		if (event.deltaY < 0)
		{
		// scrolling up
			CountScrollVar--;
			if (CountScrollVar < 0) {
				setSecOneslideDown(true)
				setshowSectionOne(true)
				setShowSectionTwo(false) 
				
			} else {
				sectionRef2.current.classList.remove('home-banner-2-active')
			}
				
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			CountScrollVar++;
			if (CountScrollVar == 1) {
				sectionRef2.current.classList.add('home-banner-2-active')
			}
			if (CountScrollVar > 1) {
				sectionRef2.current.classList.add('home-banner-remove')
				setSecondsec(true)
			}
			
		}
		// console.log(CountScroll);

	}

	const section1AniTrigger1 = (event) => {
		
		if (event.deltaY < 0)
		{
		// console.log('scrolling up')
			CountScroll1--;
			if (CountScroll1 < 0) {
				sectionRef2.current.classList.remove('home-banner-remove')
				setSecondsec(false)

			}
				
		}
		else if (event.deltaY > 0)
		{
		// console.log('scrolling down')
			CountScroll1++;
			if (CountScroll1 > 0) {
				setShowSectionTwo(false)
				mainSecHome.current.classList.add('main-sec-home-none')
				setShowSectionThree(true)
				setbodyOverflow(false)

			}
			// if (CountScroll > 4) {
			// 	sectionRef.current.classList.add('home-banner-remove')
			// }
			
		}
		// console.log(CountScroll1);

	}

	useEffect(() => {
		if (!isMobile) {
			if (secondsec) {
				setHideFooter(true)
				CountScroll1 = 0;
				if (SecndFromthree) {
					sectionRef2.current.classList.add('home-banner-remove','home-banner-2-active')
				}
				sectionRef1.current.addEventListener("wheel", section1AniTrigger1, { passive: true });

	    		return () => sectionRef1.current.removeEventListener("wheel", section1AniTrigger1);

			} else {
				CountScrollVar = 0
				if (SecndFromthree) {
					CountScrollVar = 1
				}
				// console.log('qweryuio ' + CountScrollVar)
				if (CountScroll == 0 && !SecndFromthree) {
					CountScrollVar = 0
				}
				// console.log('qweryuio ' + CountScrollVar)
				sectionRef2.current.addEventListener("wheel", section1AniTrigger2, { passive: true });

	    		return () => sectionRef2.current.removeEventListener("wheel", section1AniTrigger2);
			}
		}

	}, [showSectionTwo,secondsec]);
	// useEffect(() => {
	// 	CountScroll1 = 0;
	// 	sectionRef1.current.addEventListener("wheel", section1AniTrigger1, { passive: true });

 //    	return () => sectionRef1.current.removeEventListener("wheel", section1AniTrigger1);

	// }, [secondsec]);


  	return (
	    <React.Fragment>
	    	<div className="main-sec-home" id="main-sec-home" ref={mainSecHome} >
	    		<section className={"home-banner-2 visble-opacity-" +(showSectionTwo?'show':'hide')} ref={sectionRef2}>
	  				<div class="container">
	  					<div class="row">
	  						<div class="col-md-6">
	  							<div class="banner-content-1 imr-with-img">
									<h1><span class="gredient-text">Welcome to</span></h1>
									<img class="img-white-logo" src={whitelogo22} />
									<p class="white-text">From XR and home entertainment to<br /> training, engineering and beyond, IMRNext<br /> is redefining what’s possible in wireless<br /> media and data streaming.</p>
								</div>
								<div class="banner-content-1 on-scroll-content">
									<h1><span class="gredient-text">Find your edge</span></h1>
									<p class="white-text">Join the growing number of innovators <br />leveraging our market-leading, real-time<br /> latency to achieve ever more immersive<br /> and sophisticated user experiences.</p>
								</div>
	  						</div>
	  					</div>
	  				</div>
	  			</section>
	  			<section className={"versatile-section visble-opacity-" +(showSectionTwo?'show':'hide')} ref={sectionRef1}>
	  				<div class="pixelperfect-outer">

	  					<h2>Versatile   <br />technology, <br /><span class="green-text">custom solutions</span></h2>
	  					<p>From industrial and manufacturing to <br />mining, defence and healthcare, we <br />partner with clients across an ever-growing<br /> range of industries and<br /> applications that go far beyond gaming.</p>
	  					
	  				</div>
	  			</section>
	    	</div>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);