import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import lady from '../../assets/img/lady.png';
import man1 from '../../assets/img/man1.png';
import man2 from '../../assets/img/man2.png';
import man3 from '../../assets/img/man3.png';
import man4 from '../../assets/img/man4.png';
import about11 from '../../assets/img/about11.png';
import imrlogomark from '../../assets/img/imr-logo-mark.png';


import {isMobile} from 'react-device-detect';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

const SectionOne = (props) => {
	


  	return (
	    <React.Fragment>
	    	<section className="about-main">
	    		<div class="container">
	    			<div class="row">
	    				<div class="col-md-6">
	    					<img src={lady} />
	    				</div>
	    				<div class="col-md-6">
	    					<div class="about-desc-top">
	    						<h1>Our <br /> <span class="gredient-text">Mission</span></h1>
	    						<p>We believe that a truly immersive experience is one of complete freedom: where users aren’t hindered by cables, and designers aren’t constrained by the limitations of hardware. </p>

								<p>Where resolution and quality isn’t compromised by the need for real-time latency.</p>

								<p>Where the line between what’s real and what’s imagined becomes almost invisible.</p>
								<h3>People thought it couldn’t be done, so no one even tried.<br />
									<span class="green-text">We thought differently.</span></h3>

	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>
	    	<section class="service-section about-sec-2">
	    		<div class="container">
	    			<div class="row">
	    				<div class="col-md-12">
	    					<div class="service-title">
	    						<h2>Meet our core <br />leadership team</h2>
	    					</div>
	    				</div>
	    				<div class="col-md-4">
	    					<div class="team-outer">
	    						<img src={man1} />
	    						<h2>Ash Kumar</h2>
	    						<h3>CEO</h3>
	    						<p>Ash Kumar is a Harvard Alumni with global experience and network. Ash has successfully established multiple start-ups, which have organically grown and scaled in digital technology, transformation, and services sectors. Ash has delivered business & global project turnarounds and technology delivery & planning of programs of worth 300M+.</p>

								<p>Ash's business success, organisational maturity and growth and scale is well supported by his management and technology learning at University of Queensland (UQ) and Griffith University which progressed his endeavours to be a sessional professional and completed his master's degree. Ash complements his technology experience with his Bachelor's of Engineering degree (in Electronics and instrumentation). </p>
	    					</div>
	    				</div>
	    				{/*
	    				<div class="col-md-3">
	    					<div class="team-outer">
	    						<img src={man2} />
	    						<h2>Daniel Fitzgerald</h2>
	    						<h3>CTO, Co-founder</h3>
	    						<p>Daniel is the CTO & co-founder at IMRnext, pioneering their world leading wireless media streaming technology.  His expertise is across the fields of computer vision, robotics and AI, in particular neural networks.  Other engagements have included the Engineering Director/VP of Unmanned Systems (UAVs) at PowerVision; and Engineering Director of Avionics R&D department at Cyber Technology.  </p>

								<p>Daniel holds a Ba of Aerospace Avionics Engineering (minor Systems Engineering) and a PhD in AI/Neural networks, computer vision and UAVs
									</p>
	    					</div>
	    				</div>
	    				*/}
	    				<div class="col-md-4">
	    					<div class="team-outer">
	    						<img src={man3} />
	    						<h2>David Kempnich</h2>
	    						<h3>Director, Finance & Strategy</h3>
	    						<p>David is an experienced executive and entrepreneur. David’s early career saw him working as a project engineer in the Australian mining industry before taking a position as the general manager of mechatronics engineering firm Breakaway Innovations (BAI) Pty Ltd. BAI was later acquired by Verve Cycling Pty Ltd and David now sits on the Verve Cycling board. He is also the co-founder and managing director of the “Big Roddy’s” restaurant chain in Australia.</p>

								<p>David’s strengths are in the areas of financial management and strategy, backed up with strong technical understanding.</p>
	    					</div>
	    				</div>
	    				<div class="col-md-4">
	    					<div class="team-outer">
	    						<img src={man4} />
	    						<h2>Phil Purdy</h2>
	    						<h3>Director, Engineering & Delivery</h3>
	    						<p>With experience in the commercialisation of high-tech R&D, Phil is responsible for Engineering Leadership and Project Delivery within IMRNext. With technical and delivery experience across multiple domain areas including Aviation and Aerospace, Autonomous Vehicles, GIS and Remote Sensing, and Scientific Instrumentation, Phil overseas Engineering Process, Quality Assurance, R&D and Innovation streams within the team.</p>

								<p>Phil holds a B.Eng (Electrical) and M.Sc Physics (Optics and Photonics), and has successfully delivered large-scale technical projects throughout Australia, USA, Europe, The Middle East and Asia and thrives on International collaboration and projects.
</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>
	    	<section class="about-sec-3">
	    		<div class="container">
	    			<div class="row">
	    				<div class="col-md-6">
	    					<div class="team-red-outer">
	    						<h2>The team redefining <br /><span class="green-text">what’s possible</span> </h2>
	    						<p>Our team is made up of individuals from all disciplines who are the best in their class.</p>
	    						<h3>We operate as a team and collaborate to achieve the unexpected. </h3>
	    						<h3>We are agile and adaptable – we never stop moving. </h3>
	    						<h3>We are curious, creative and driven – we surprise and inspire.  </h3>
	    						<h3>We are always on the edge. </h3>
	    						<h3>We always over deliver. </h3>
	    						<p>Our culture fosters professional growth where creativity is valued, and you have the autonomy to test new ideas.  We are results driven and support professional development with a network of experienced tech professionals.</p>

								<p><b>We strongly believe that a cohesive team achieves more than the individual and we foster these relationships thought  a number of social events including team BBQ’s, movie nights, run club and more.</b></p>
	    					</div>
	    				</div>
	    				<div class="col-md-6">
	    					<div class="team-outer">
	    						<img src={about11} />
	    						
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>
	    	<section class="partner-section about-sec-4">
	    		<div class="container">
	    			<div class="row justify-content-center">
	    				<div class="col-md-12">
	    					<div class="tech-outer-left">
	    						<div class="logo-outer1 logo-outer-active">
	    							<img src={imrlogomark}/>
	    						</div>
	    						<h2 class="tech-title">We’re problem-solvers.<br /> Collaborators. Big-picture thinkers<br /> seeking to unlock new possibilities </h2>
	    						<p>If this sounds like you, Get in touch!</p>
	    						<div class="btn-contactus mt-5">
	    							<a href="#">Contact us today</a>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</section>
	    </React.Fragment>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOne);