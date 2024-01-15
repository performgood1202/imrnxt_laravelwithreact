import React, { useState, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, Redirect, useLocation } from "react-router-dom";
import { deviceType, osName, withOrientationChange } from "react-device-detect";
import { Container } from 'react-bootstrap';

import {
  	APP_LOAD,
  	INFO,
  	REMOVE_REDIRECT
} from "../constants/type";

import {isMobile} from 'react-device-detect';

import apis from "../apis";
import Header from './Header';
import HomeLoader from './HomeLoader';

import Home from "./Home";

import Home1 from "./Home1";
import About from "./About";
import Scanner from "./Scanner";

import Products from "./Products";

import SectionThree from "./Home1/sectionThree";

import Footer from "./Footer";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const AppComponent = (props) => {
	const { appLoaded, currentUser, onLoad, redirectTo, emptyRedirect } = props;
	// const _Location = useLocation();
	const location = useLocation();
	const [menuHide,setMenuhide] = useState(true);
	const [menuFix,setmenuFix] = useState(false);
	const [hideFooter,setHideFooter] = useState(true);

	// const [bodyOverflow,setbodyOverflow] = useState(false);

	useEffect(() => {
		if (isMobile) {
			setmenuFix(true)
		}
		console.log(location.pathname);

		if (!location.pathname == '/') {
			setMenuhide(false);
		}
	},[])

	const setbodyOverflow = (tgl) => {
		if (tgl) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}


	let headerProps = {
		currentUser,
		menuHide,
		menuFix
	}

	let homeProps = {
		setMenuhide,
		setmenuFix,
		setHideFooter,
		setbodyOverflow
	}
	let technologyProps = {
		setMenuhide,
		setmenuFix,
		setHideFooter,
		setbodyOverflow
	}

	let productProps = {
		setMenuhide,
		setmenuFix,
		setHideFooter,setbodyOverflow
	}

	let aboutProps = {
		setMenuhide,
		setmenuFix,
		setHideFooter,setbodyOverflow
	}

	let scannerProps = {
		setMenuhide,
		setmenuFix,
		setHideFooter,setbodyOverflow
	}

	return (
		<React.Fragment>
				<React.Fragment>
					<Header {...headerProps} />
						<Routes>
							<Route exact path="/" element={<Home1 {...homeProps} />} />
							<Route exact path="/technology" element={<Home {...technologyProps} />} />
							<Route path="/products" element={<Products {...productProps} />} />
							<Route path="/company" element={<About {...aboutProps} />} />
							<Route path="/scanner" element={<Scanner {...scannerProps} />} />
							

							// <Route path="*" element={<Home />} />
						</Routes>
					{
						!hideFooter ?
						(<Footer />)
						: ''
					}
				</React.Fragment>
		</React.Fragment>
  	);
};

const App = withOrientationChange(AppComponent);

export default connect(mapStateToProps, mapDispatchToProps)(App);