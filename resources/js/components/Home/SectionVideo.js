import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import AOS from 'aos';
import {isMobile} from 'react-device-detect';
import computer from '../../assets/img/computer.png';
import scrollwhite from '../../assets/img/scroll-white.png';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const SectionVideo = (props) => {
	const { showRealTime,setShowRealTime,setmenuFix,setShowVideoBanner,setshowSectionOne,setbodyOverflow } = props

	const banerScrollEle = useRef();
  const imageScrollEle = useRef();
  const scrollImg = useRef();

  const OriginalVideo = '/videos/HeroVideo.mp4';
  const OriginalToLowVideo = '/videos/video-home-pix.mp4';
  	
  const [removeScrollOnThis, setRemoveScrollOnThis] = useState(false);
  const [showLowQualityVideo, setShowLowQualityVideo] = useState(false);

	const [onScrollClass, setOnScrollClass] = useState('');
	const [scale, setScale] = useState(1);
  const [scaleDesk, setScaleDesk] = useState(1.2);
  const [showRightText, setShowRightText] = useState(false);

	let styleBanner = { transform: `scale(${scale})` };
	let desktopStyle = { transform: `scale(${scaleDesk})` };

	const startSecondSec = () => {
      setTimeout(function() {
      	let bannDiv = document.getElementById("banner-outer-section");
      	if (bannDiv) {
      		bannDiv.classList.add('banner-rectangle');
      		setTimeout(function(){
      		setShowRealTime(true)
      			
      		},1000)

      	}
	}, 5000);
  }
  let scale1 = 1;
  var scrollCount = 0;

	var lastScrollTop = 0;

	var bannerSectionMain = document.getElementById("banner-section");
    
  const slideUp = () => {
    window.removeEventListener("scroll", section1AniTrigger);
    var elem = document.getElementById("banner-section");
	  elem.style.transition = "all 2s ease-in-out";
	  elem.style.marginTop = "-100%";
	}
    
  const scrollDown = () => {
		setShowVideoBanner(false)
		setShowRealTime(false)
		setshowSectionOne(true)
	}

	const section1AniTrigger = () => {

	  var st = window.pageYOffset || document.documentElement.scrollTop;
	   
		if ((window.innerHeight + window.scrollY) >= imageScrollEle.current.scrollHeight) {
			scrollCount = 1;
		}
	   	if (st > lastScrollTop){
			if(scale1 >= 0.8){
	        	scale1 = scale1 - 0.1;
	        	if(scale1 <= 1){
				 	setScale(scale1)
				 	bannerSectionMain.classList.add("slideDown");
				}
	        }	
	        if (scrollCount > 0 && scale1 == 0.7000000000000001) {
	        	slideUp();
	        	setTimeout(function() {
	        		setRemoveScrollOnThis(true)
	        		setShowVideoBanner(false)
	        		setShowRealTime(false)
	        		setshowSectionOne(true)
	        		window.scrollTo(0, 1);
	        	}, 1000);
        	}
	        
		} else {
			if(scale1 <= 0.9){
				console.log('e')
			 	scale1 = scale1 + 0.1;
			 	if(scale1 >= 0){
			 		
			 		if (scale1 < 1) {
			 			console.log('else')
			 			setScale(scale1+0.1);
			 		}
			 		
			 	}  	
		    }

		}
	   	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	   // console.log(scale1)
	   	if (scale1 < 1) {
	   		setOnScrollClass('banner-rectangle on-scroll-video')
	   		setmenuFix(true)
	   	} else {
	   		setOnScrollClass('banner-rectangle')
	   		setmenuFix(false)
	   	}
  
    }

  const toggleVideoBanner = (event) => {
  	let _curntTarget = event.currentTarget;
  	if (_curntTarget.classList.contains('Imr-Off')) {
  		setShowLowQualityVideo(false)
  		_curntTarget.classList.remove('Imr-Off')
  		
  	} else {
  		setShowLowQualityVideo(true)
  		_curntTarget.classList.add('Imr-Off')

  	}
  }

  const section1AniTriggerWheel = () => {

		if (event.deltaY < 0)
		{
		// scrolling up
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			setShowRightText(true)
			
		}

	}

	useEffect(() => {
		
		if (isMobile) {
			setShowRealTime(true)
		} else {
			startSecondSec()
			
		}
	}, []);

	useEffect(() => {
		if (!isMobile) {

				if (!showRightText) {
					setbodyOverflow(true)
					window.addEventListener("wheel", section1AniTriggerWheel, { passive: true });
	    		return () => window.removeEventListener("wheel", section1AniTriggerWheel);
				} else {
					setbodyOverflow(false)
					window.addEventListener("scroll", section1AniTrigger, { passive: true });
    			return () => window.removeEventListener("scroll", section1AniTrigger);
				}
			
    }

	}, [showRealTime,showRightText]);


  	return (
	    <React.Fragment>
	    	<section className="banner-section" id='banner-section' >
				      		<div className={'outerdiv ' + onScrollClass} style={styleBanner} ref={banerScrollEle} id='banner-outer-section'>
				      		<div class='innerdiv'>
					      		<video id='banner-video' width="750" height="500" src={showLowQualityVideo?OriginalToLowVideo:OriginalVideo} type="video/mp4" loop autoplay="true" muted="muted">
										</video>
					      		<div className="container">
					      			<div class="banner-content">
					      				<h1>Endless <br /><span>possibilities</span></h1>
					      				
					      			</div>
					      			<>
					      			{ showRealTime
					      				? 
					      					(
					      						<div className="real-time-text ">
								      				<div class="left-imr">
								      					<h1>Real-time <span className="green-text">latency</span></h1>
									      				<div className="imr-box">
									      					<div class="box-outer" onClick={toggleVideoBanner}>
									      						<span></span> 
									      					</div>
									      					<h4>With IMR Technology</h4>
									      				</div>
								      				</div>
								      				<>
								      				{
								      					showRightText
								      					? (
								      					<div class="right-imr animated animatedFadeInUp fadeInUp" >
									      					<h3>IMRNext's hardware and software is a <span className="green-text">complete cable replacement solution</span> that provides bidirectional video, audio and control to enable <span className="green-text">next-level user immersion</span>.</h3>
									      				</div>
									      				)
								      					: ''
								      				}
								      				
								      				</>
								      			</div>
					      					)
					      				:
					      				''

					      			}
					      			</>
					      		</div>
					      		<img src={scrollwhite} class="scroll-img" ref={scrollImg} onClick={scrollDown} />
					      		</div>
					      		</div>
					      		<>
					      		{ showRealTime
					      				? (
					      				<>
							      		<div className="desktop-video" ref={imageScrollEle}>
								      		<img src={computer} />
								      	</div>
								      	</>
						      			) : ''
						      	}
						      	</>
					      	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionVideo);