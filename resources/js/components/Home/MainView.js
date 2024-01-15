import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import apis from "../../apis";
import { LOGIN } from "../../constants/type";
// import { video } from "../../assets/video/video.mp4";
import HomeLoader from '../HomeLoader';
import { gsap, TimelineMax, TweenMax } from "gsap";
// import ScrollMagic from 'scrollmagic'

import {isMobile} from 'react-device-detect';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionVideo from './SectionVideo';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';

const mapStateToProps = (state) => ({
	loginSuccess: state.common.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
	updateOrgsList: (data) => dispatch({ type: LOGIN, payload: apis.auth.login(data) }),
});


const MainView = (props) => {
		gsap.registerPlugin(ScrollTrigger);
		const { hideLoader, setMenuhide, setmenuFix, setHideFooter,setbodyOverflow } = props
  	let mainProps = {}
  	
  	var lastScrollTop = 0;
  	const [HLoader, setHLoader] = useState(true);

  	const [offset, setOffset] = useState(0);

  	const [bannerScrollTrigger, setBannerScrollTrigger] = useState(null);

  	const [Hidedesktop, setHidedesktop] = useState(true);

  	const [showVideoBanner, setShowVideoBanner] = useState(false);

  	const [showSectionOne, setshowSectionOne] = useState(false);
  	const [startSecondSec, setStartSecondSec] = useState(false);

  	const [showSectionTwo, setShowSectionTwo] = useState(false);
  	const [showSectionThree, setshowSectionThree] = useState(false);
  	const [showSectionFour, setshowSectionFour] = useState(false);
  	const [showSectionFive, setshowSectionFive] = useState(false);

  	const [showRealTime, setShowRealTime] = useState(false);

  	const [interalValue, setInteralValue] = useState('');
  	const [interalOuter, setInteralOuter] = useState('');
  	const [interalBann, setInteralBann] = useState('');

  	const [secTwoTop, setSecTwoTop] = useState(0);

  	const [secFourTop, setSecFourTop] = useState(0)

  	const [showSecondSec,setShowSecondSec] = useState(true)
  	
  	const [gImgActive,setGImgActive] = useState(false)
  	

    const loaderFun = () => {
    	document.body.style.overflow = "hidden";
	  	setTimeout(function() {
		    document.getElementById("logo2").classList.add("test");
		    document.getElementById("logo1").classList.add("test1");
		    document.getElementById("logo3").classList.add("test2");
		    document.getElementsByClassName('logo-outer')[0].classList.add('logo1')
		    
	  	}, 5000);
	  	setTimeout(function() {
	    	document.getElementsByClassName('main-outer')[0].classList.add('gred')
	  	}, 2500);
    }
    // const bannerTrigger = {}



  	useEffect(() => {
  		if (isMobile){
  			setHLoader(false)
  			setShowVideoBanner(true)
  			setshowSectionOne(true) 
  			setShowSectionTwo(true) 
  			setshowSectionThree(true)
  			setshowSectionFour(true) 
  			setshowSectionFive(true)
  		} else {
		  	setTimeout(function() {
			   	let div = document.getElementsByClassName('navbar')
			   	setHLoader(false)
			   	setShowVideoBanner(true)
			   	document.body.style = ''
			   	setStartSecondSec(true)
			}, 7500);
		}
	}, []);

	useEffect(() => {
		if (!HLoader) {
			setMenuhide(false)
		}
	},[HLoader])


  	let loaderProps = {
  		loaderFun,setMenuhide,setmenuFix
  	}
  	let SectionThreeProps = {
  		setShowSectionTwo, setshowSectionThree, setshowSectionFour,setbodyOverflow, setGImgActive
  	}
  	let SectionFourProps = {
  		setshowSectionThree, setshowSectionFour, setshowSectionFive, showSectionFour,setbodyOverflow,showSecondSec,setShowSecondSec
  	}
  	let SectionFiveProps = {
  		setshowSectionFour, setshowSectionFive,setHideFooter,setbodyOverflow, setShowSecondSec
  	}
  	let SectionTwoProps = {
  		setShowSectionTwo, setshowSectionOne, setshowSectionThree,showSectionTwo,setbodyOverflow, gImgActive,setGImgActive
  	}
  	let SectionOneProps = {
  		setshowSectionOne, setShowSectionTwo, setShowVideoBanner,setbodyOverflow
  	}
  	let SectionVidProps = {
  		setmenuFix,
  		startSecondSec,
  		setShowVideoBanner,
  		setshowSectionOne,
  		showRealTime, setShowRealTime,setbodyOverflow
  	}

  	return (
  		<React.Fragment>
  			{ 
  				HLoader ? 
	  			<React.Fragment>
	  			<HomeLoader {...loaderProps}/> 
		      	</React.Fragment>
		      	: (
		      		<>
		      		{
		      			showVideoBanner ? (

		      				<SectionVideo {...SectionVidProps} />

		      			) : ''
		      		}
		      		

			      	<>
			      		{ showSectionOne
			      				? (
					      			<SectionOne {...SectionOneProps} />
				      			) : ''
				      	}
				      </>

			      	<>
			      		{ showSectionTwo
			      				? (
					      			<SectionTwo {...SectionTwoProps} />
				      			) : ''
				      	}
				      </>

				      <>
			      		{ showSectionThree
			      				? (
					      			<SectionThree {...SectionThreeProps} />
				      			) : ''
				      	}
				      </>

				      <>
			      		{ showSectionFour
			      				? (
					      			<SectionFour {...SectionFourProps} />
				      			) : ''
				      	}
				      </>
				      <>
			      		{ showSectionFive
			      				? (
					      			<SectionFive {...SectionFiveProps} />
				      			) : ''
				      	}
				      </>

			      	
			      	</>
		      	)
  			}
		</React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);