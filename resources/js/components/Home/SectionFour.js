import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import imr from '../../assets/img/imr7.png';
import chip from '../../assets/img/chip.png';
import {isMobile} from 'react-device-detect';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const SectionFour = (props) => {
	const { setshowSectionThree, setshowSectionFour, setshowSectionFive, showSectionFour,setbodyOverflow,showSecondSec,setShowSecondSec } = props

	const sectionRef = useRef();
	const sectionRef1 = useRef();
	const sectionRef0 = useRef();

	

	var lastScrollTop = 0;
	var scrollAtTop = 0;
	var scrollAtCenter = 0;
	var scrollAtTopSec = 0;
	var enterImgActive = 0;

	const TriggerActiveSecTwo = () => {
		setTimeout(function() {
			scrollAtTopSec = 2
		}, 2000);
		
	}
	const section1AniTrigger1 = () => {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		// console.log((window.innerHeight + window.scrollY)+"-----"+sectionRef.current.scrollHeight)
	    if (st > lastScrollTop){
		    if ((window.innerHeight + window.scrollY) >= sectionRef.current.scrollHeight) {
		    	setshowSectionFour(false)
				setshowSectionFive(true)
				window.scrollTo(0, 1);
		    }

	    } else {
	    	if (document.documentElement.scrollTop == 0){
	    		// scrollAtTop++;
	    		setShowSecondSec(true)
	    	}
	    }

	    lastScrollTop = st <= 0 ? 0 : st;
	}

	const section1AniTrigger = (event) => {
		
		if (event.deltaY < 0)
		{
		// scrolling up
			setshowSectionFour(false)
	    	setshowSectionThree(true)
				
		}
		else if (event.deltaY > 0)
		{
		// scrolling down
			
			setShowSecondSec(false)
		}

	}


	useEffect(() => {
		if (isMobile){
			setShowSecondSec(false)
		} else {
			if (showSecondSec) {
				setbodyOverflow(true)
				sectionRef.current.addEventListener("wheel", section1AniTrigger, { passive: true });
				// console.log('true');
	    		return () => sectionRef.current.removeEventListener("wheel", section1AniTrigger);
				

			} else {
				setbodyOverflow(false)
		   		window.addEventListener("scroll", section1AniTrigger1, { passive: true });
		   		// console.log('false'+ sectionRef.current.scrollHeight);
		    	return () => window.removeEventListener("scroll", section1AniTrigger1);
			}
		}

	}, [showSectionFour,showSecondSec]);


  	return (
	    <React.Fragment>
	    	<section ref={sectionRef} className="tech-section animated animatedFadeInUp fadeInUp">
	    	<>
	    		{
	    			showSecondSec ?
	    				(
	    					<div className="container" ref={sectionRef0}>
			      			<div className="row">
			      				<div class="col-md-6 animated animatedFadeInUp fadeInUp">
				      				<div className="tech-outer-left">
				      					<h2 className="tech-title"><span className="green-text">Continuously</span><br /> evolving tech</h2>
				      					<p>We’re constantly innovating to enhance and expand the capabilities of our technology. IMRNext’s patented novel compression methods cover mixed reality devices, multi-user network scenarios, device configurations, movement of players, eye position, antenna steering methods for XR and much more. </p>
				      				</div>
				      			</div>
				      			<div className="col-md-6 animated animatedFadeInUp fadeInUp">
				      				
				      				<div className="outer-number-show">
				      					<div className="inner-number-show">
				      						<div className="internal-effect">
					      						<h2>09</h2>
					      						<p>Public patents</p>
				      						</div>
				      						
				      					</div>
				      					<div className="inner-number-show">
				      						<div className="internal-effect">
					      						<h2>25</h2>
					      						<p>Patents pending</p>
				      						</div>
				      						
				      					</div>
				      					<div className="inner-number-show tech-sec-number">
				      						<div className="internal-effect">
				      							<span>Network Agnostic</span>
					      						<img src={icon1} />
					      						<p>IMRNext is an open ecosystem designed to co-exist with other standard technologies</p>
				      						</div>
				      						
				      					</div>
				      					<div className="inner-number-show tech-sec-number">
				      						<div className="internal-effect">
				      							<span>Network Agnostic</span>
					      						<img src={icon2} />
					      						<p>Compatible with any standards-compliant network and security protocol (HDMI, DP, TCP/IP, USB, WiFi, 802 11)</p>
				      						</div>
				      						
				      					</div>
				      				</div>
			      			</div>
			      		</div>	
			      		</div>

	    					)

	    			: (
	    			<>
  						{
  							isMobile ?
  							(
  							<div className="container" ref={sectionRef0}>
				      			<div className="row">
				      				<div class="col-md-4 animated animatedFadeInUp fadeInUp">
					      				<div className="tech-outer-left">
					      					<h2 className="tech-title"><span className="green-text">Continuously</span><br /> evolving tech</h2>
					      					<p>We’re constantly innovating to enhance and expand the capabilities of our technology. IMRNext’s patented novel compression methods cover mixed reality devices, multi-user network scenarios, device configurations, movement of players, eye position, antenna steering methods for XR and much more. </p>
					      				</div>
					      			</div>
					      			<div className="col-md-8 animated animatedFadeInUp fadeInUp">
					      				
					      				<div className="outer-number-show">
					      					<div className="inner-number-show">
					      						<div className="internal-effect">
						      						<h2>09</h2>
						      						<p>Public patents</p>
					      						</div>
					      						
					      					</div>
					      					<div className="inner-number-show">
					      						<div className="internal-effect">
						      						<h2>25</h2>
						      						<p>Patents pending</p>
					      						</div>
					      						
					      					</div>
					      					<div className="inner-number-show tech-sec-number">
					      						<div className="internal-effect">
					      							<span>Network Agnostic</span>
						      						<img src={icon1} />
						      						<p>IMRNext is an open ecosystem designed to co-exist with other standard technologies</p>
					      						</div>
					      						
					      					</div>
					      					<div className="inner-number-show tech-sec-number">
					      						<div className="internal-effect">
					      							<span>Network Agnostic</span>
						      						<img src={icon2} />
						      						<p>Compatible with any standards-compliant network and security protocol (HDMI, DP, TCP/IP, USB, WiFi, 802 11)</p>
					      						</div>
					      						
					      					</div>
					      				</div>
				      			</div>
				      		</div>	
				      		</div>
	      					): ""
  						}
	    			<div className="device-outer animated animatedFadeInUp fadeInUp" ref={sectionRef1}>
			      			<h1>Your device or ours</h1>
			      			<div className="row">
			      				<div className="col-md-6">
			      					<div className="inner-chip">
			      						<img src={imr} />
			      						<h2 className="green-text">Custom <br /> Processor </h2>
			      						<div className="supply-outer">
			      							<p>Supply chain logistics through Avnet Global partner</p>
			      							<p>Several device configurations available depending on IO requirements</p>
			      							<p>Proven hardware design for most applications</p>
			      						</div>
			      					</div>
			      				</div>
			      				<div className="col-md-6">
			      					<div className="inner-chip">
			      						<img src={chip} />
			      						<h2 className="purple-text">Software <br /> Solution </h2>
			      						<div className="supply-outer">
			      							<p>Integrate with existing designs</p>
			      							<p>Supports most SOCs, FPGA, and GPU based platforms</p>
			      						</div>
			      					</div>
			      				</div>
			      				<div className="col-md-12">
			      					<div className="table-chip">
			      						<table>
			      							<tr>
			      								<td>Compression:</td>
			      								<td>up to 45:1 typical – dynamic adjustable</td>
			      							</tr>
			      							<tr>
			      								<td>Latency Compression:</td>
			      								<td>~ 0.250msec</td>
			      							</tr>
			      							<tr>
			      								<td>Latency Decompression:</td>
			      								<td>~ 0.211msec</td>
			      							</tr>
			      							<tr>
			      								<td>Frame Rate:</td>
			      								<td>60, 90, 120 up to 144 fps</td>
			      							</tr>
			      							<tr>
			      								<td>Video Resolutions:</td>
			      								<td>2x1K to 2x4K and above (HMD dependent), TV streaming to 8K</td>
			      							</tr>
			      							<tr>
			      								<td>FoV:</td>
			      								<td>not limited (HMD dependent), on/off</td>
			      							</tr>
			      							<tr>
			      								<td>Chroma Formats:</td>
			      								<td>pixel compression, 4:4:4, 4:2:0</td>
			      							</tr>
			      							<tr>
			      								<td>Video Input:</td>
			      								<td>RGB or YUV (default RGB)</td>
			      							</tr>
			      							<tr>
			      								<td>Precision:</td>
			      								<td>8 bits or 10 bits (default 8 bits)</td>
			      							</tr>
			      							<tr>
			      								<td>Other:</td>
			      								<td>No interframe referencing – no motion blur / artefacts</td>
			      							</tr>
			      							<tr>
			      								<td>Eye tracking:</td>
			      								<td>Supports eye tracking input to focus quality and increase CR%</td>
			      							</tr>
			      							
			      						</table>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      		</>
	    				)
	    		}
			      		
			    </>		
			      	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionFour);