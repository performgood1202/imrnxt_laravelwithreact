import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import apis from "../../apis";
import { LOGIN } from "../../constants/type";
// import { video } from "../../assets/video/video.mp4";
import HomeLoader from '../HomeLoader';
import Bannerslider from './Bannerslider';

const mapStateToProps = (state) => ({
	loginSuccess: state.common.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
	updateOrgsList: (data) => dispatch({ type: LOGIN, payload: apis.auth.login(data) }),
});


const MainView = (props) => {	const { hideLoader, setMenuhide, setmenuFix, setHideFooter,setbodyOverflow } = props
  let mainProps = {}
  
    // const bannerTrigger = {}



  	useEffect(() => {
	  setbodyOverflow(false)

		}, []);
  	let BannersliderProps = {
  	}

  	return (
  		<React.Fragment>
  			<Bannerslider {...BannersliderProps} />
			</React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);