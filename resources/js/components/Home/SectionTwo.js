import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Goggles from '../../assets/img/Goggles.svg';

import {isMobile} from 'react-device-detect';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const SectionTwo = (props) => {
	const { setshowSectionOne, setShowSectionTwo, setshowSectionThree, showSectionTwo, setbodyOverflow,gImgActive,setGImgActive } = props

	
	const [reactSecTop,setReactSecTop] = useState(0)

	const sectionRef = useRef();
	const sectionRef1 = useRef();

	var lastScrollTop = 0;
	var scrollAtTop = 0;
	var scrollAtTopSec = 0;
	var scrollAtCenter = 0;
	var enterImgActive = 0;


	const TriggerActiveSecTwo = () => {
		setTimeout(function() {
			scrollAtTopSec = 2
		}, 2000);
		
	}

	let CountScroll1 = 0;
	let CountScrollVar = 0;
	const section1AniTrigger = (event) => {
		
		if (event.deltaY < 0)
		{
		// scrolling up
			setShowSectionTwo(false)
	    	setshowSectionOne(true)
				
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			
			setGImgActive(true)
    		enterImgActive = 1;
    		TriggerActiveSecTwo()
		}

	}

	const section1AniTrigger1 = (event) => {
		console.log('section1AniTrigger1')
		if (event.deltaY < 0)
		{
		// console.log('scrolling up')
			setGImgActive(false)
	    	enterImgActive = 0;
				
		}
		else if (event.deltaY > 0)
		{
		// console.log('scrolling down')
			
			setShowSectionTwo(false)
			setshowSectionThree(true)
		}
		// console.log(CountScroll1);

	}

	useEffect(() => {
		if (isMobile){
			setGImgActive(true)
		} else {

			setbodyOverflow(true)
			if (gImgActive) {
				CountScroll1 = 0;
				// console.log('iftrue')
				sectionRef1.current.addEventListener("wheel", section1AniTrigger1, { passive: true });

	    		return () => sectionRef1.current.removeEventListener("wheel", section1AniTrigger1);

			} else {
				CountScrollVar = 0
				CountScrollVar = 0
				
				// console.log('qweryuio')
				sectionRef.current.addEventListener("wheel", section1AniTrigger, { passive: true });

	    		return () => sectionRef.current.removeEventListener("wheel", section1AniTrigger);
			}
		}

	}, [showSectionTwo,gImgActive]);

  	return (
	    <React.Fragment>
	    	<section className={"animated animatedFadeInUp fadeInUp seamless-section"+ (gImgActive ? '-active' : '')} ref={sectionRef}>
			      		<div className="container">
			      			<div className="row align-items-center">
			      				<div className="col-md-4">
			      				{
			      					!gImgActive ?
			      						(
			      					<div className="outer-seamless-div">
				      					<h2>Seamless user experience <span className="green-text">on any network</span></h2>
					      				<p>IMRNext prioritises image quality and dynamically adjusts compression to fit the available network bandwidth - so no matter the network quality, we maximise the user’s experience.</p>

										<p>Real-time control of video compression based on signal strength, latency and image detail level eliminates stuttering caused by delays and jitter across network transmission.</p>

										<p>Even during fast movements and obstructions, adaptive link management ensures reliable video transport while presenting clear, crisp text and graphics for more demanding applications.</p>
				      				</div>
				      				)
			      					: (
			      						<>
			      						{
			      							isMobile ?
			      							(<div className="outer-seamless-div">
					      					<h2>Seamless user experience <span className="green-text">on any network</span></h2>
						      				<p>IMRNext prioritises image quality and dynamically adjusts compression to fit the available network bandwidth - so no matter the network quality, we maximise the user’s experience.</p>

											<p>Real-time control of video compression based on signal strength, latency and image detail level eliminates stuttering caused by delays and jitter across network transmission.</p>

											<p>Even during fast movements and obstructions, adaptive link management ensures reliable video transport while presenting clear, crisp text and graphics for more demanding applications.</p>
					      					</div>): ""
			      						}
			      						

			      						<div class="tabs-outer">
				      					<ul class="nav nav-tabs" role="tablist">
										    <li class="nav-item">
										      <a class="nav-link active" data-toggle="tab" href="#home">Real-time control</a>
										    </li>
										    <li class="nav-item">
										      <a class="nav-link" data-toggle="tab" href="#menu1">Adaptive link management</a>
										    </li>
										    <li class="nav-item">
										      <a class="nav-link" data-toggle="tab" href="#menu2">High defination graphics</a>
										    </li>
										  </ul>

				      				</div>
				      				</>
			      						)
			      				}
				      				
				      				
				      			</div>
				      			<div className="col-md-8 goggle-animate" ref={sectionRef1}>
				      				<img className={"goggle-img "+ (gImgActive ? 'goggle-img-active' : '' )} src={Goggles} />
				      			</div>
			      			</div>
			      		</div>
			      	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);