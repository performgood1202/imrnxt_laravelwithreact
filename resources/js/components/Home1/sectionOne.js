import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import FadeIn from 'react-fade-in';

import africanman from "../../assets/img/african-man.png";
import scroll from "../../assets/img/scroll.png";


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

const SectionOne = (props) => {
	const { setShowSectionTwo,setshowSectionOne,secOneslideDown,showSectionOne,setbodyOverflow,setCountScroll,setSecndFromthree,setHideFooter } = props

	const [clrnterval,setClrnterval] = useState(false)

	const sectionRef = useRef();
	const scrollImg = useRef();

	const slideUp = () => {
    	sectionRef.current.removeEventListener("wheel", section1AniTrigger);
	  	sectionRef.current.style.transition = "all 2s ease-in-out";
	  	sectionRef.current.style.marginTop = "-100%";
	}

	let SecCiunt = 1000;
	let MyInterval1;
	const slideDown = () => {
		// MyInterval = setInterval(function () {console.log('enter')}, 1000);
		 MyInterval1 = setInterval(function () {
						if (SecCiunt != 0) {
							SecCiunt  = SecCiunt - 5;
							console.log('c'+SecCiunt)
							// sectionRef.current.style.transition = "all 2s ease-in-out";
				  			sectionRef.current.style.top = "-"+SecCiunt+"px";
						}
						if (SecCiunt == 0) { 
						  clearInterval(MyInterval1);
						  setShowSectionTwo(false) 
  
						}
						console.log('ffdf'+MyInterval1)
					}, 1);
	  	
	}

	const section1AniTrigger = () => {

		if (event.deltaY < 0)
		{
		// scrolling up
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			// slideUp();
			setshowSectionOne(false)
			setShowSectionTwo(true)
			// setTimeout(function() {
				
				
			// }, 1000);
			
		}

	}

	const scrollDown = () => {
		setshowSectionOne(false)
		setShowSectionTwo(true)
	}

	useEffect(() => {
		if (!isMobile) {
			// slideDown()
			setHideFooter(true)
			setCountScroll(0)
			setSecndFromthree(false)
			sectionRef.current.addEventListener("wheel", section1AniTrigger, { passive: true });

	    	return () => sectionRef.current.removeEventListener("wheel", section1AniTrigger);
		}
		
	}, [showSectionOne]);



  	return (
	    <React.Fragment>
	    	<section className={"home-banner-1 visble-opacity-"+(showSectionOne?'show':'hide home-slide-top')} ref={sectionRef}>
  				<div class="container">
  					<div class="row">
  						<div class="col-md-6">
  							<div class="banner-content-1">
  								<h1><span class="small-text">Welcome to</span><br /> the future of <br /> <span class="gredient-text">wireless</span> user <br /><span class="gredient-text">experience</span></h1>
  							</div>
  						</div>
  						<div class="col-md-6">
  							<div class="banner-img-1">
  								<img src={africanman} />
  							</div>
  						</div>
  					</div>
  					<div class="product-banner-bottom black-text"><h2 class="">THE FUTURE OF VR/AR THE FUTURE OF VR/AR </h2></div>
  					
  				</div>
  				<img src={scroll} class="scroll-img"  ref={scrollImg} onClick={scrollDown} />
  			</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOne);