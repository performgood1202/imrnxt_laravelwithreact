import React, { useEffect } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import "./style.scss";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});


const Home = (props) => {
	const { setMenuhide, setmenuFix, setHideFooter, setbodyOverflow } = props
  	let mainProps = {
  		hideLoader: false,
  		setMenuhide,
  		setmenuFix,
  		setHideFooter, setbodyOverflow
  	}

  	useEffect(() => {
		setHideFooter(true)
  	})

  	return (
	    <div className="view-container home-view">
	      	<MainView {...mainProps} />
	    </div>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);