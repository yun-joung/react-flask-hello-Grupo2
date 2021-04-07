import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";

export const GraciasCompra = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<Container>
				<h1 className="display-4">Gracis por su compra</h1>
				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" role="button">
						Back home
					</span>
				</Link>
			</Container>
		</div>
	);
};

GraciasCompra.propTypes = {
	match: PropTypes.object
};
