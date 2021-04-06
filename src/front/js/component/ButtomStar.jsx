import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ButtomStar = props => {
	const { store, actions } = useContext(Context);

	const handleClick = e => {
		e.preventDefault();
		console.log("Se hizo click");
	};
	return (
		<button
			type="button"
			className="btn btn-default btn-grey btn-sm"
			aria-label="Left Align"
			style={{ margin: "1px", backgroundColor: "#C0C0C0" }}
			onClick={props.onClick}>
			<span className="fas fa-star" aria-hidden="true"></span>
		</button>
	);
};

ButtomStar.propTypes = {
	assessment: PropTypes.integer,
	onClick: PropTypes.func
};
export default ButtomStar;
