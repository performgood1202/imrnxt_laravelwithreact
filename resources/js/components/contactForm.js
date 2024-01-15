import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Modal, Button, Form } from 'react-bootstrap';

import axios from 'axios';
// import rolling from '../../assets/img/Rolling.gif';
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

import "bootstrap/dist/css/bootstrap.css";

const ContactForm = () => {

	const contactRef = useRef();
	const rollingimg = useRef();
	const successmsgref = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [fdisplay, setFdisplay] = useState("none");
  const [errors, setErrors] = useState({});
  const [btnDisable, setBtnDisable] = useState(false);

  const handleSubmit = (e) => {        
      e.preventDefault();
      const form = e.target;
       // debugger
      // const formData = serialize(form);
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('message', message);
      
      // console.log(formData);
      // debugger
      // this.setState({ loading: true });

      submit(formData);        
  }

  const submit = (formData) => {
  		setBtnDisable(true);
  		rollingimg.current.style.display = "block";
      axios.post('/api/send/email', formData
      ).then(res=>
	      {
	      	// console.log(res)
	      	// debugger
	      	setFdisplay('block')
	      	rollingimg.current.style.display = "none";
			    setFirstName('')
			    setLastName('')
			    setEmail('')
			    setMessage('')
			    setErrors({})
			    setBtnDisable(false);
			    setTimeout(function() {
			    	setFdisplay('none')
			    }, 4000);

		    }
	    )
	    .catch(function (error) {
	    	// console.log(error)
		    if (error.response) {
		      // Request made and server responded
		      setErrors(error.response.data.errors)
		      rollingimg.current.style.display = "none";
		      setBtnDisable(false);
		      // console.log(error.response.data);
		      // console.log(errors);
		      // debugger
		    }
		    // debugger
		  });
        
  }

  const serialize = (form) => {
      var obj = {};
      let formData = new FormData();
      
      var elements = form.querySelectorAll( "input, textarea" );
      for( var i = 0; i < elements.length; ++i ) {
          var element = elements[i];
          var name = element.name;
          var value = element.value;

          if( name ) {
              formData.append(name,value);
          }
      }
      
      return formData;
  }

  useEffect(() => {

  	rollingimg.current.style.display = "none";

  }, [])

  return (
  	<>
  	<div class="alert alert-success" style={{display: fdisplay}} role="alert">
		  Message Send Successfully!
		</div>

    <Form ref={contactRef} onSubmit={handleSubmit} >
      <div className="form-outer">
			<div class="row">
				<div class="col-md-6">
					<input 
						type="text" 
						placeholder="First Name" 
						value={firstName} 
						onChange={(e) => setFirstName(e.target.value)} 
					/>
					<>
					{errors && 'firstName' in errors && (
            <div className="error-feedback">{errors.firstName}</div>
          )}
          </>
				</div>
				<div class="col-md-6">
					<input 
						type="text" 
						placeholder="Last Name" 
						value={lastName} 
						onChange={(e) => setLastName(e.target.value)} 
					/>
					<>
					{errors && 'lastName' in errors && (
            <div className="error-feedback">{errors.lastName}</div>
          )}
          </>
				</div>
				<div class="col-md-12">
					<input 
						type="text" 
						placeholder="Email Address" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
					/>
					<>
					{errors && 'email' in errors && (
            <div className="error-feedback">{errors.email}</div>
          )}
          </>
				</div>
				<div class="col-md-12">
					<textarea 
						placeholder="Message" 
						value={message} 
						onChange={(e) => setMessage(e.target.value)}
					/>
					<>
					{errors && 'message' in errors && (
            <div className="error-feedback">{errors.message}</div>
          )}
          </>
				</div>
			</div>

			<div class="btn-subscribe">
				<Button variant="primary" type="submit" disabled={btnDisable}>
			    <img ref={rollingimg} src="/images/Rolling.svg" className="" />Send Message
			  </Button>
			</div>
		</div>
    </Form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);