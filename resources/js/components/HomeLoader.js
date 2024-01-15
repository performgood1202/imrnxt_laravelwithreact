import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { LOGOUT } from '../constants/type'

import apis from "../apis";

import logo1 from '../assets/img/left-shape.svg';
import logo2 from '../assets/img/green-shape.svg';
import logo3 from '../assets/img/right-shape.svg';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const HomeLoader = (props) => {
	const { loaderFun,setMenuhide,setmenuFix } = props
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		loaderFun()
		setMenuhide(true)
		setmenuFix(false)
	}, []);

	const { currentUser, logout } = props;

  	return (
	    <React.Fragment>
	    	<div class="main-outer">
			  <div class="logo-outer">
			    <span class="img-l">
			      <img src={logo1} id="logo1" class="left-s" />
			    </span>
			    <img src={logo2} id="logo2" class="c-s" />
			    <span class="img-l">
			      <img src={logo3} id="logo3" class="right-s" />
			    </span>
			  </div>
			</div>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLoader);