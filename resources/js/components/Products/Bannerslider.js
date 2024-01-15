import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import pixelslider from '../../assets/img/pixel-slider.jpg';
import Interactive from '../../assets/img/Interactive1.png';
import HPLogo from '../../assets/img/HP-Logo.png';
import HTC from '../../assets/img/HTC.png';
import OculusLogo from '../../assets/img/Oculus-Logo.png';
import SamsungLogo from '../../assets/img/Samsung-Logo.png';
import LGLogo from '../../assets/img/LG-Logo.png';
import MicrosoftLogo from '../../assets/img/Microsoft-Logo.png';
import QualcommLogo from '../../assets/img/Qualcomm-Logo.png';
import ValveIndex from '../../assets/img/Valve-Index.png';
import Chip1 from '../../assets/img/Chip1.png';
import Monitor from '../../assets/img/Monitor.png';
import Gear from '../../assets/img/Gear.png';
import Flowchart from '../../assets/img/Flowchart.png';
import Coding from '../../assets/img/Coding.png';
import Slider from './Slider/Slider';

import { Modal, Button, Form } from 'react-bootstrap';

import ContactForm from '../contactForm'
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});


const Bannerslider = (props) => {
	const {  } = props

	const sectionRef = useRef();
	const box1 = useRef();
	const boxspan1 = useRef();
	const topLine = useRef();
	const box2 = useRef();
	const boxspan2 = useRef();
	const leftline = useRef();
	const toptobottom = useRef();
	const box3 = useRef();
	const boxspan3 = useRef();
	const toptobottomright = useRef();
	const box4 = useRef();
	const boxspan4 = useRef();
	const leftline2 = useRef();
	const box5 = useRef();
	const boxspan5 = useRef();
	const box6 = useRef();
	const bottomline = useRef();
	const boxspan6 = useRef();

	const [show, setShow] = useState(false);

	const [targatedArrows, setTargatedArrows] = useState([topLine,toptobottomright,boxspan5,boxspan4,toptobottom,boxspan1]);
	const [hoverTransArrows, setHoverTransArrows] = useState([boxspan2,boxspan3,boxspan4,boxspan5,boxspan6,boxspan1]);

	const changeArrowAnime1 = () => {
		applyArrowAnime(targatedArrows,"box-1-active")
		applyHoverArrowAnime(hoverTransArrows)
	}
	const removeArrowAnime1 = () => {
		removeArrowAnime(targatedArrows,"box-1-active")
		removeHoverArrowAnime(hoverTransArrows)
	}
	const arrowArry3 = [boxspan3,toptobottomright,boxspan5,boxspan4,toptobottom,boxspan1];
	const HoverarrowArry3 = [boxspan1,topLine,boxspan2,boxspan4,boxspan5,boxspan6]
	const changeArrowAnime3 = () => {
		
		applyArrowAnime(arrowArry3,"box-2-active")
		applyHoverArrowAnime(HoverarrowArry3)
		applyDarkOnBox([box1])
	}
	const removeArrowAnime3 = () => {
		removeArrowAnime(arrowArry3,"box-2-active")
		removeHoverArrowAnime(HoverarrowArry3)
		removeDarkOnBox([box1])
	}

	const arrowArry5 = [boxspan5,boxspan4,boxspan5,toptobottom];
	const HoverarrowArry5 = [boxspan3,boxspan1,topLine,boxspan2,boxspan4,boxspan6,toptobottomright]
	const changeArrowAnime5 = () => {
		
		applyArrowAnime(arrowArry5,"box-3-active")
		applyHoverArrowAnime(HoverarrowArry5)
		applyDarkOnBox([box1,box3])
	}
	const removeArrowAnime5 = () => {
		removeArrowAnime(arrowArry5,"box-3-active")
		removeHoverArrowAnime(HoverarrowArry5)
		removeDarkOnBox([box1,box3])
	}

	const arrowArry6 = [boxspan4,boxspan6,toptobottom];
	const HoverarrowArry6 = [boxspan3,boxspan1,topLine,boxspan2,boxspan4,boxspan5,toptobottomright]
	const changeArrowAnime6 = () => {
		
		applyArrowAnime(arrowArry6,"box-4-active")
		applyHoverArrowAnime(HoverarrowArry6)
		applyDarkOnBox([box1,box3,box5])
	}
	const removeArrowAnime6 = () => {
		removeArrowAnime(arrowArry6,"box-4-active")
		removeHoverArrowAnime(HoverarrowArry6)
		removeDarkOnBox([box1,box3,box5])
	}

	const arrowArry4 = [boxspan4,toptobottom];
	const HoverarrowArry4 = [boxspan3,boxspan4,boxspan1,topLine,boxspan2,boxspan5,boxspan6,toptobottomright]
	const changeArrowAnime4 = () => {
		
		applyArrowAnime(arrowArry4,"box-5-active")
		applyHoverArrowAnime(HoverarrowArry4)
		applyDarkOnBox([box1,box3,box5,box6])
	}
	const removeArrowAnime4 = () => {
		removeArrowAnime(arrowArry4,"box-5-active")
		removeHoverArrowAnime(HoverarrowArry4)
		removeDarkOnBox([box1,box3,box5,box6])
	}

	const arrowArry2 = [boxspan2];
	const HoverarrowArry2 = [boxspan3,boxspan4,boxspan1,topLine,toptobottom,boxspan5,boxspan6,toptobottomright]
	const changeArrowAnime2 = () => {
		
		applyArrowAnime(arrowArry2,"box-6-active")
		applyHoverArrowAnime(HoverarrowArry2)
		applyDarkOnBox([box1,box3,box5,box6,box4])
	}
	const removeArrowAnime2 = () => {
		removeArrowAnime(arrowArry2,"box-6-active")
		removeHoverArrowAnime(HoverarrowArry2)
		removeDarkOnBox([box1,box3,box5,box6,box4])
	}

	const applyDarkOnBox = (targates) => {
		for (const targate of targates ) {
            targate.current.classList.add('box-dark');
        }
	}

	const removeDarkOnBox = (targates) => {
		for (const targate of targates ) {
            targate.current.classList.remove('box-dark');
        }
	}

	const applyArrowAnime = (targates,cls) => {
		for (const targate of targates ) {
            targate.current.classList.add(cls);
        }
	}
	const applyHoverArrowAnime = (targates) => {
		for (const targate of targates ) {
            targate.current.classList.add("hover-transparent");
        }
	}
	const removeArrowAnime = (targates,cls) => {
		for (const targates of targates ) {
            targates.current.classList.remove(cls);
        }
	}
	const removeHoverArrowAnime = (targates) => {
		for (const targate of targates ) {
            targate.current.classList.remove("hover-transparent");
        }
	}

	const toggleImages = document.getElementsByClassName("toogle-images-common");
	const cradClickHandler = (refId) => {
		for (const toggleImage of toggleImages ) {
            toggleImage.style.display = "none";
        }

		document.querySelectorAll(`[data-id='${refId}']`)[0].style.display = "block";
		// slideUp(refId)
	}

	const slideUp = (eleId) => {
    	var elem = document.querySelectorAll(`[data-id='${eleId}']`)[0]
	  	elem.style.transition = "all 2s ease-in-out";
	  	elem.style.top = "-50px";
	}

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};

	useEffect(() => {
		cradClickHandler('collapseOne')
	}, []);


  	return (
	    <React.Fragment>
	    <div>
	    	<section className="product-banner">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-6">
	    					<div className="product-banner-content">
	    						<h1>Unlock your <br /> product's <span className="green-text">true <br />potential</span></h1>
	    					</div>
	    				</div>
	    				<div className="col-md-6">
	    					<div className="product-banner-img">
	    						<img src={Interactive} />
	    					</div>
	    				</div>
	    				<div className="col-md-12">
	    					<div className="product-banner-bottom">
	    						<h2>IMRNEXT technology IMRNEXT technology</h2>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>
	    	 <section className="product-slider-sec">
		        <div className="slider-text container">
		            <div className="row">
		                <div className="col-md-5">
		                    <div className="slider-title">
		                        <h2>Our product <br />engineering capability </h2>
		                    </div>
		                </div>
		                <div className="col-md-7">
		                    <div className="slider-content">
		                        <p>We can collaborate with you at any level of product development to help realise the true potential of your technology. From R&D to full turnkey solutions, our product is designed to fit in at any level of your technology stack.</p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
	    	<section className="faq-product">
	    		<div className="container">
	    			<div className="row align-items-center">
	    				<div className="col-md-6">
	    					<div className="faq-sec-left">
	    						<div id="accordion">
								  <div className="card">
								    <div className="card-header" id="headingOne">
								      <h5 className="mb-0">
								        <button className="btn btn-link" 
								        onClick={() => {cradClickHandler('collapseOne')}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								          Electronics & RF design
								        </button>
								      </h5>
								    </div>

								    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
								      <div className="card-body">
								        We design embedded systems, high speed interfaces & sensitive RF devices up to 60ghz as well as schematic design & PCB design
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingTwo">
								      <h5 className="mb-0">
								        <button className="btn btn-link collapsed"
								        onClick={() => {cradClickHandler('collapseTwo')}}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								          RF Testing and Profiling
								        </button>
								      </h5>
								    </div>
								    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								      <div className="card-body">
								        We’ve actively worked with partners on WIFI 5, 6, 6E, Wigig 60GHz, 4G and 5G Cellular
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingThree">
								      <h5 className="mb-0">
								        <button className="btn btn-link collapsed"
								        onClick={() => {cradClickHandler('collapseThree')}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								          Mechanical and industrial Designs
								        </button>
								      </h5>
								    </div>
								    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								      <div className="card-body">
								        We’re experienced in CAD, thermal design and ergonomics – for form, fit and function
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingFour">
								      <h5 className="mb-0">
								        <button className="btn btn-link collapsed"
								        onClick={() => {cradClickHandler('collapseFour')}} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								          Manufacturing Design, QA and Validation
								        </button>
								      </h5>
								    </div>
								    <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								      <div className="card-body">
								        We offer ODM integration for production testing and validation
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingFive">
								      <h5 className="mb-0">
								        <button onClick={() => {cradClickHandler('collapseFive')}} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
								          Software Development
								        </button>
								      </h5>
								    </div>
								    <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								      <div className="card-body">
								        We develop embedded firmware, real time operating systems on any processor platform & logic devices 
								      </div>
								    </div>
								  </div>
								</div>
	    					</div>
	    				</div>
	    				<div className="col-md-6">
	    					<div className="faq-right-img">
	    						<img data-id='collapseOne' src={Chip1} className="tab-img-1 toogle-images-common animated animatedFadeInUp fadeInUp" />
	    						<img data-id='collapseTwo' src={Monitor} className="tab-img-2 toogle-images-common animated animatedFadeInUp fadeInUp" />
	    						<img data-id='collapseThree' src={Gear} className="tab-img-3 toogle-images-common animated animatedFadeInUp fadeInUp" />
	    						<img data-id='collapseFour' src={Flowchart} className="tab-img-4 toogle-images-common animated animatedFadeInUp fadeInUp" />
	    						<img data-id='collapseFive' src={Coding} className="tab-img-5 toogle-images-common animated animatedFadeInUp fadeInUp" />
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>

	    	<section className="service-section">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="service-title">
	    						<h2>Industry-leading support<br /> wherever you need it</h2>
	    						<p>Our range of engineering services covers every aspect of product development from start to finish. Take us on the journey with you or plug us in at any point in your product life cycle.</p>
	    					</div>
	    					<div className="outer-ser-number">
	    						<span className="box-span box-span-1" ref={boxspan1}>
		    						<div className="box-inner box-1" ref={box1} onMouseEnter={changeArrowAnime1} onMouseLeave={removeArrowAnime1}>
		    							<h3>Feasibility / Ideation</h3>
		    						</div>
		    						<p className="top-line" ref={topLine}></p>
	    						</span>
	    						<div className="flex-box-outer">
	    							<span className="box-span box-span-2" ref={boxspan2}>
		    							<div className="box-inner box-2" ref={box2} onMouseEnter={changeArrowAnime2} onMouseLeave={removeArrowAnime2}>
			    							<h3>Full Turn-key Product and Manufacture</h3>
			    						</div>
			    						<p className="left-line" ref={leftline}></p> 
			    						<p className="top-to-bottom" ref={toptobottom}></p>
		    						</span>
		    						<span className="box-span box-span-3" ref={boxspan3}>
			    						<div className="box-inner box-3" ref={box3} onMouseEnter={changeArrowAnime3} onMouseLeave={removeArrowAnime3}>
			    							<h3>Research and Development</h3>
			    						</div>
			    						<p className="top-to-bottom-right" ref={toptobottomright}></p>
		    						</span>
	    						</div>
	    						<div className="flex-box-outer">
	    							<span className="box-span box-span-4" ref={boxspan4}>
		    							<div className="box-inner box-4" ref={box4} onMouseEnter={changeArrowAnime4} onMouseLeave={removeArrowAnime4}>
			    							<h3>Test and Optimisation</h3>
			    						</div>
			    						<p className="left-line-2" ref={leftline2}></p>
		    						</span>
		    						<span className="box-span box-span-5" ref={boxspan5}>
			    						<div className="box-inner box-5" ref={box5} onMouseEnter={changeArrowAnime5} onMouseLeave={removeArrowAnime5}>
			    							<h3>Our Purpose-built SoC</h3>
			    						</div>
		    						</span>
	    						</div>
	    						<span className="box-span box-span-6" ref={boxspan6}>
		    						<div className="box-inner box-6" ref={box6} onMouseEnter={changeArrowAnime6} onMouseLeave={removeArrowAnime6}>
			    							<h3>Full Product Reference Design</h3>
			    					</div>
			    					<p className="bottom-line" ref={bottomline}></p>
		    					</span>
	    						
	    						<div className="box-img">
	    							<img src="http://imrnext.xcelanceweb.com/images/white-logo.png?eedf96a1e9ec3a450ad43904d84b21fe" />
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>

	    	<section className="logo-section">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="service-title logo-titles">
	    						<h2>Meet our collaborators</h2>
	    						
	    					</div>
	    				</div>
	    			</div>
	    			<div className="row">
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={HPLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={HTC} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={OculusLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={SamsungLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={LGLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={MicrosoftLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={QualcommLogo} />
	    					</div>
	    				</div>
	    				<div className="col-md-3">
	    					<div className="logo-service">
	    						<img src={ValveIndex} />
	    					</div>
	    				</div>
					</div>
					<div class="bottom-logo-text">
						<p>Request IMRNext's Product & Services Overview</p>
						<div className="btn-logo">
							<a href="#" onClick={handleShow}>Learn More</a>
						</div>
					</div>
					<Modal show={show} onHide={handleClose}>
				        <Modal.Header closeButton>
				          <Modal.Title></Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				          <ContactForm onSubmit={onLoginFormSubmit} />
				        </Modal.Body>
				    </Modal>
	    		</div>
	    	</section>
	    	
	    </div>
	    
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bannerslider);