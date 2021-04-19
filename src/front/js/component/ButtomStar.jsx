import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
const ButtomStar = props => {
	const { store, actions } = useContext(Context);
	return (
		<button
			type="button"
			className={`btn ${props.value <= props.assessment ? "btn-warning" : "btn-grey"} btn-sm `}
			aria-label="Left Align"
			style={{ margin: "1px" }}
			onClick={props.onClick}>
			<span className="fas fa-star" aria-hidden="true"></span>
		</button>
	);
};
ButtomStar.propTypes = {
	assessment: PropTypes.integer,
	onClick: PropTypes.function,
	value: PropTypes.string
};
export default ButtomStar;
