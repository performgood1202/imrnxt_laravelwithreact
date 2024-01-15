import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import pixelslider from '../../assets/img/pixel-slider.jpg';
import {isMobile} from 'react-device-detect';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const SectionThree = (props) => {
	const { setShowSectionTwo, setshowSectionThree, setshowSectionFour,setbodyOverflow, setGImgActive } = props

	const sectionRef = useRef();
	// const divisor = useRef();
	// const handle = useRef();
	// const slider = useRef();

	var lastScrollTop = 0;
	var scrollAtTop = 0;
	var scrollAtCenter = 0;
	

	const section1AniTrigger = () => {

		if (event.deltaY < 0)
		{
		// scrolling up
			setshowSectionThree(false)
			setGImgActive(true)
		    setShowSectionTwo(true)
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			setshowSectionThree(false)
			setshowSectionFour(true)
			
		}

	}

	// const moveDivisor = () => {
	// 	// console.log(slider.current)
	// 	if(slider.current) {
	// 		console.log(handle.current)	
	// 		console.log(divisor.current)	
	// 		if (handle.current) { handle.current.style.left = slider.value+"%"; }
	// 		if (divisor.current) { divisor.current.style.width = slider.value+"%"; }
	//   	}
		
	// }

	

	// const slider = document.getElementById('before-after-slider');
	// const before = document.getElementById('before-image');
	// const beforeImage = before.getElementsByTagName('img')[0];
	// const resizer = document.getElementById('resizer');

	
	const slider = useRef();
	const before = useRef();
	const beforeImage = useRef();
	const resizer = useRef();

	let active = false;

	useEffect(() => {
			setbodyOverflow(false)

			//Sort overflow out for Overlay Image
			document.addEventListener("DOMContentLoaded", function() {
			  let width = slider.current.offsetWidth;
			  console.log(width);
			  beforeImage.current.style.width = width + 'px';
			});

			//Adjust width of image on resize 
			window.addEventListener('resize', function() {
			  let width = slider.current.offsetWidth;
			  console.log(width);
			  beforeImage.current.style.width = width + 'px';
			})

			resizer.current.addEventListener('mousedown',function(){
			  active = true;
			 resizer.current.classList.add('resize');

			});

			document.body.addEventListener('mouseup',function(){
			  active = false;
			 resizer.current.classList.remove('resize');
			});

			document.body.addEventListener('mouseleave', function() {
			  active = false;
			  resizer.current.classList.remove('resize');
			});

			document.body.addEventListener('mousemove',function(e){
			  if (!active) return;
			  let x = e.pageX;
			  x -= slider.current.getBoundingClientRect().left;
			  slideIt(x);
			  pauseEvent(e);
			});

			resizer.current.addEventListener('touchstart',function(){
			  active = true;
			  resizer.current.classList.add('resize');
			});

			document.body.addEventListener('touchend',function(){
			  active = false;
			  resizer.current.classList.remove('resize');
			});

			document.body.addEventListener('touchcancel',function(){
			  active = false;
			  resizer.current.classList.remove('resize');
			});

			//calculation for dragging on touch devices
			document.body.addEventListener('touchmove',function(e){
			  if (!active) return;
			  let x;
			  
			  let i;
			  for (i=0; i < e.changedTouches.length; i++) {
			  x = e.changedTouches[i].pageX; 
			  }
			  
			  x -= slider.current.getBoundingClientRect().left;
			  slideIt(x);
			  pauseEvent(e);
			});
			// moveDivisor();
			if (!isMobile) {
				sectionRef.current.addEventListener("wheel", section1AniTrigger, { passive: true });

	    		return () => sectionRef.current.removeEventListener("wheel", section1AniTrigger);
			}	
			
		}, []);

	function slideIt(x){
	    let transform = Math.max(0,(Math.min(x,slider.current.offsetWidth)));
	    before.current.style.width = transform+"px";
	    resizer.current.style.left = transform-0+"px";
	}

	//stop divs being selected.
	function pauseEvent(e){
	    if(e.stopPropagation) e.stopPropagation();
	    if(e.preventDefault) e.preventDefault();
	    e.cancelBubble=true;
	    e.returnValue=false;
	    return false;
	}
	
  	return (
	    <React.Fragment>
	    <section className="pixelperfect-section animated animatedFadeInUp fadeInUp" ref={sectionRef}>
		    <div className="pixelperfect-outer">
				<h2>Pixel-perfect <br /><span className="green-text">and on-time</span></h2>
				<p>Enjoy visually lossless image quality with zero<br /> motion artefacts introduced up to 8k60. </p>
			</div>
			 <div class="container">
	  
				  <div id="before-after-slider" ref={slider}>
				    <div id="before-image" ref={before}>
				      <video id='before-video' width="750" height="500" src="/videos/chromatic-pix.mp4" type="video/mp4" loop autoplay="true" muted="muted" ref={beforeImage} alt="before" >
					  </video>
				    </div>
				  
				    <div id="after-image">
				      <video id='before-video' width="750" height="500" src="/videos/chromatic.mp4" type="video/mp4" loop autoplay="true" muted="muted" ref={beforeImage} alt="before" >
					  </video>
				    </div>

				    <div id="resizer" ref={resizer}></div>
				  
				 </div>
				</div>
			</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionThree);