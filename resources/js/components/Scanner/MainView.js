import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import apis from "../../apis";
import { LOGIN } from "../../constants/type";
// import { video } from "../../assets/video/video.mp4";
import HomeLoader from '../HomeLoader';
import scan2 from '../../assets/img/scan2.png';
import scan3 from '../../assets/img/scan3.png';
import scan4 from '../../assets/img/scan4.png';
import scan5 from '../../assets/img/scan5.png';
import scan6 from '../../assets/img/scan6.png';
import scan7 from '../../assets/img/scan7.png';
import scan8 from '../../assets/img/scan8.png';
import scan9 from '../../assets/img/scan9.png';
import email from '../../assets/img/email.png';
import phone from '../../assets/img/phone.png';

const mapStateToProps = (state) => ({
	loginSuccess: state.common.loginSuccess
});

const mapDispatchToProps = (dispatch) => ({
	updateOrgsList: (data) => dispatch({ type: LOGIN, payload: apis.auth.login(data) }),
});


const MainView = (props) => {	const { hideLoader, setMenuhide, setmenuFix, setHideFooter,setbodyOverflow } = props
  let mainProps = {}
  
    // const bannerTrigger = {}


    const OriginalVideo = '/videos/HeroVideo.mp4';
  	useEffect(() => {
	  setbodyOverflow(false)

		}, []);
  	let BannersliderProps = {
  	}

  	return (
  		<React.Fragment>
  			<section className="scaaner-sec-1">
  				<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="scann-content-top text-center">
	    						<h2>Real-time latency. <b>Endless possibility</b></h2>
	    						<p>IMRnext’s hardware and software is a complete cable replacement solution that provides <br />
									wireless bidirectional video, audio and control to enable next-level user immersion. </p>
									<p className="mt-5"><b>We are the experts in real-time low latency wireless media transmission with high fidelity and market leading end to end latency of  5ms.</b></p>
									<video className="w-100 mb-3" src={OriginalVideo} type="video/mp4" loop autoplay="true" muted="muted"></video>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="row mt-5 pt-4 align-items-center">
	    				<div className="col-md-6">
	    					<div class="team-red-outer">
	    						<h3>Less than 200 microseconds for encode & decode  </h3>
	    						<h3>	Video data-rates up to 8k60 megapixels per second  </h3>
	    						<h3>	Compress video frames up to 60:1  </h3>
	    						<h3>Wireless video streaming to any display up to 8K</h3>
	    					</div>
	    				</div>
	    				<div className="col-md-6">
	    					<img className="w-100" src={scan2} />
	    				</div>
	    				<div className="col-md-12">
	    					<p className="mt-5 pt-3 text-center">Our network management and adaptive data rate control enables multiple users in the same space, on the same network. <br />
								IMRnext’s technology operates with your existing hardware, <br />
								working with you to scale with your future growth and technology requirements. </p>
	    				</div>
	    			</div>
	    		</div>
  			</section>

  			<section className="scaaner-sec-2">
  				<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="technical-content">
	    						<h2 className="gredient-text text-center">Technical Specifications</h2>
	    						<div class="table-chip">
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
	    		</div>
  			</section>

  			<section className="scaaner-sec-2 scaaner-sec-4">
  				<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="technical-content">
	    						<h2 className="gredient-text text-center">Applications</h2>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec">
	    						<img className="w-100" src={scan4} />
	    						<div class="inner-app-sec">
	    							<p><b>Immersive learning through simulation</b></p>
	    							<p>Bring your environments into the classroom with multi-user training and simulation.</p>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec purple-sec">
	    						<img className="w-100" src={scan5} />
	    						<div class="inner-app-sec">
	    							<p><b>Collaborative virtual engineering</b></p>
	    							<p>Transform production and maintenance by making information available anywhere, anytime.</p>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec">
	    						<img className="w-100" src={scan6} />
	    						<div class="inner-app-sec">
	    							<p><b>Robotics & industrial automation</b></p>
	    							<p>Unlock tele-presence applications not previously achievable with cabled VR/AR solutions.</p>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec purple-sec">
	    						<img className="w-100" src={scan7} />
	    						<div class="inner-app-sec">
	    							<p><b>Powering the next-gen VR Technology</b></p>
	    							<p>Taking VR to the next level, the IMR7 provides a totally immersive experience and cost-effective solution.</p>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec">
	    						<img className="w-100" src={scan8} />
	    						<div class="inner-app-sec">
	    							<p><b>Say Goodbye cables.  Hello freedom</b></p>
	    							<p>Power the next generation of home entertainment by eliminating cables.</p>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-md-4">
	    					<div class="outer-app-sec purple-sec">
	    						<img className="w-100" src={scan7} />
	    						<div class="inner-app-sec">
	    							<p><b>Real-time audio & video streaming for live events</b></p>
	    							<p>Achieve seamless Audio/Visual experience and make event installations more cost-effective.</p>
	    						</div>
	    					</div>
	    				</div>
	    		</div>
	    	</div>
  			</section>

  			<section className="last-sec-scan">
  				<div className="container">
  					<div className="row">
  						<div className="col-md-12">
  							<div className="technical-content">
	    						<h2 className="text-white text-center mb-5">Contact Us</h2>
	    					</div>
  						</div>
  						<div className="col-md-4">
  							<div className="contact-outer">
  								<h3>Phil Purdy </h3>
  								<p>Engagement Manager</p>
  								<p className="email-txt"><img src={email} />  philpurdy@immersiverobotics.com</p>
  								<p className="email-txt"><img src={phone} />  +61 401 848 042</p>
  							</div>
  						</div>
  						<div className="col-md-4">
  							<div className="contact-outer">
  								<h3>Ash Kumar </h3>
  								<p>CEO</p>
  								<p className="email-txt"><img src={email} />  Ash@immersiverobotics.com</p>
  								<p className="email-txt"><img src={phone} />  +61 401 098 814</p>
  							</div>
  						</div>
  						<div className="col-md-4">
  							<div className="contact-outer">
  								<h3>Daniel Fitzgerald  </h3>
  								<p>CTO</p>
  								<p className="email-txt"><img src={email} />  Daniel@immersiverobotics.com</p>
  								<p className="email-txt"><img src={phone} />  +61 414 624 014</p>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
			</React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);