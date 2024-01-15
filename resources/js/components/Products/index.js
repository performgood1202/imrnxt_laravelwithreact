import React, { useEffect } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});


const Products = (props) => {
	const { setMenuhide, setmenuFix, setHideFooter,setbodyOverflow } = props
  	let mainProps = {
  		setMenuhide,
		setmenuFix,
		setHideFooter,setbodyOverflow
  	}

	useEffect(() => {
  		setMenuhide(false)
		setmenuFix(true)
		setHideFooter(false)

	}, []);

  	return (
	    <div className="view-container home-view">
	      	<MainView {...mainProps} />
	    </div>
  	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);