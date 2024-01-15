import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import apis from "../../apis";
import { LOGIN } from "../../constants/type";

import FadeIn from 'react-fade-in';

import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';

import {isMobile} from 'react-device-detect';


const mapStateToProps = (state) => ({
	loginSuccess: state.common.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
	updateOrgsList: (data) => dispatch({ type: LOGIN, payload: apis.auth.login(data) }),
});


const MainView = (props) => {
	const { hideLoader, setMenuhide, setmenuFix, setHideFooter,setbodyOverflow } = props
  	
  	const [showSectionOne, setshowSectionOne] = useState(false);

  	const [showSectionTwo, setShowSectionTwo] = useState(false);

  	const [showSectionThree, setShowSectionThree] = useState(false);
  	const [secOneslideDown, setSecOneslideDown] = useState(false);

  	const [secondsec,setSecondsec] = useState(false)
  	const [SecndFromthree,setSecndFromthree] = useState(false)
  	const [CountScroll,setCountScroll] = useState(0)

  	let sectionOneProp = {
  		setShowSectionTwo,setshowSectionOne,secOneslideDown,showSectionOne,setbodyOverflow,setCountScroll,setSecndFromthree,setHideFooter
  	}
  	let sectionTwoProp = {
  		setShowSectionTwo,setshowSectionOne,setShowSectionThree,setSecOneslideDown,showSectionTwo,setbodyOverflow,secondsec,setSecondsec,SecndFromthree,setSecndFromthree,CountScroll,setCountScroll,setHideFooter
  	}
  	let sectionThreeProp = {
  		setShowSectionTwo,setShowSectionThree,showSectionThree,setbodyOverflow,setSecondsec,setSecndFromthree,setHideFooter
  	}

  	useEffect(() => {
  		if (isMobile) {
  			setbodyOverflow(false)
  			setshowSectionOne(true)
  			setShowSectionTwo(true)
  			setShowSectionThree(true)
  			
  		} else {
  			window.scrollTo(0, 0);
  			setshowSectionOne(true)
  			setbodyOverflow(true)
  		}
  		
  		
	}, []);

	// useEffect(() => {
	// 	if (showSectionThree) {
	// 		setHideFooter(false)
	// 	}

	// }, [showSectionThree]);

  	return (
  		<React.Fragment>
  			<SectionOne {...sectionOneProp} />
  			<SectionTwo {...sectionTwoProp} />
  			<SectionThree {...sectionThreeProp} />
  			
		</React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);