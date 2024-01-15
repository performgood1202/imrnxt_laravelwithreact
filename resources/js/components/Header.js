import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Share from '@mui/icons-material/Share';

import { LOGOUT } from '../constants/type'

import apis from "../apis";
import whitLogo from '../assets/img/white-logo.png';
import blackLogo from '../assets/img/black-logo.png';

import toggleBlack from '../assets/img/toggle-black.png';
import toggleWhite from '../assets/img/toggle-white.png';
import greenCross from '../assets/img/green-cross.png';

import { Modal, Button, Form } from 'react-bootstrap';

import ContactForm from './contactForm';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const Header = (props) => {
	const { currentUser, logout, menuHide, menuFix } = props;

	const [showMegaMenu,setShoMegaMenu] = useState(false)

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = (e) => { e.preventDefault(); setShow(true); }

  	// const contactProps = {handleClose: handleClose()}
 
 //  	const onLoginFormSubmit = (e) => {
	// 	e.preventDefault();
	// 	handleClose();
	// };

	const handleClick = (e) => {
	    e.preventDefault();
	    // console.log('The link was clicked.');
	    if (showMegaMenu) {
	    	setShoMegaMenu(false)
	    } else {
	    	setShoMegaMenu(true)
	    }
	  }
	const navLinks = document.getElementsByClassName('mainMenuNav');
	const likeBtnClicked = (e) => {
		let _elemnt = e.currentTarget;
		for (const navLink of navLinks ) {
            navLink.classList.remove('tech-btn');
        }
	    _elemnt.classList.add('tech-btn')
	  }

	const removeClassFromMenu = (e) => {
		for (const navLink of navLinks ) {
            navLink.classList.remove('tech-btn');
        }
	}

	useEffect(() => {
		
		let pathLink = window.location.pathname

		for (const navLink of navLinks ) {
            navLink.classList.remove('tech-btn');
        }
        let _Element = document.getElementById(pathLink.replace(/\//g, ""))
        if (_Element) {
        	_Element.classList.add('tech-btn')	
        }

        
	},[])


  	return (
	    <React.Fragment>
	    	<Navbar expand="lg" className={"custom-headers " + (menuHide ? 'menu-visible' : '' ) + (menuFix ? 'header-fixed' : '' ) + (menuFix && showMegaMenu ? ' mengaMnu-toggle' : '')}>
				<Container>
				<Link path="/" to="/"><Navbar.Brand><img onClick={removeClassFromMenu} className={(menuFix) ?'black-Logo':'whit-Logo'} src={ (menuFix && showMegaMenu ? whitLogo : (menuFix ? blackLogo : whitLogo))} /></Navbar.Brand></Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto link-options">
						
							
							<Nav.Link id='technology' className='mainMenuNav' onClick={likeBtnClicked}><Link path="/technology" to="/technology"> Technology </Link></Nav.Link>
							<Nav.Link id='products' className='mainMenuNav' onClick={likeBtnClicked}><Link path="/products" to="/products">Products</Link></Nav.Link>
							<Nav.Link className='mainMenuNav' onClick={likeBtnClicked}><Link path="/company" to="/company">Company</Link></Nav.Link>
							<Nav.Link className='mainMenuNav' onClick={handleShow}>Contact</Nav.Link>
							<Nav.Link><a href="#" onClick={handleClick} className={"megaToggle "+(showMegaMenu ? 'toogle-active' : 'toogle')}>
							<>
							{ showMegaMenu
								?
								(
									<img src={greenCross} />
								)
								:
								(
									<img src={(menuFix ? toggleBlack :toggleWhite)} />	
								)
							}
							</>
							</a></Nav.Link>
							
						</Nav>
					</Navbar.Collapse>
				</Container>
				
				<div className={"megamenu"+ (showMegaMenu ? ' megamenu-show' : '')} >
					<div className="row">
						<div className="col-md-6">
							<div className="menu-mega-outer">
								<ul>
									<li><a href="/technology">Technology</a></li>
									<li><a href="/products">Products</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="footer-content"><p>IMRNext’s hardware and software is a <span className="white-text">complete cable replacement solution</span> that provides bidirectional video, audio and control to enable next-level user immersion.</p></div>
							<div class="outer-email-footer">
	      						<p><span>Email  /</span> <a href="#">connect@imrnext.com</a></p>
	      						<p><span>Address  /</span> <a href="#">55 Barry Parade, Fortitude Valley, Qld, 4006, Australia</a></p>
	      					</div>
							<div className="form-outer form-outer-1">
				      					<input type="text" placeholder="Enter your name" />
				      					<input type="text" placeholder="Enter your email" />
				      					<div class="btn-subscribe">
				      						<a href="#">Subscribe</a>
				      					</div>
				      				</div>
				      				{/*
			      					<div className="footer-icons">
			      						<a href="#"><LinkedIn /></a>
			      						<a href="#"><Facebook /></a>
			      						<a href="#"><Instagram /></a>
		      						<a href="#"><Twitter /></a>
		      						<a href="#"><Share /></a>
		      						</div>
		      						*/} 
						</div>
					</div>
				</div>
				<Modal show={show} onHide={handleClose}>
				        <Modal.Header closeButton>
				          <Modal.Title></Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				          <ContactForm />
				        </Modal.Body>
				    </Modal>
			</Navbar>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);