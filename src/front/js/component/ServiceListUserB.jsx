import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import ServiceListUser from "./ServiceListUser.jsx";
import { withRouter, Link } from "react-router-dom";

const ServiceListUserB = props => {
	const { store, actions } = React.useContext(Context);
	const item = store.serviceByIdUser;

	useEffect(() => {
		actions.getServiceByIdUser();
	}, []);

	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-5 pr-5 pl-5">
				{/* <p>{JSON.stringify(store.serviceByIdUser)}</p> */}
				<h5>Lista de servicios registrados</h5>
				{store.serviceByIdUser.map(item => {
					return <ServiceListUser key={item.id} name_servicio={item.name_servicio} id={item.id} />;
				})}
				{item.length === 0 ? (
					<li style={{ listStylePosition: "outside" }}>No hay servicios registrados</li>
				) : (
					""
				)}
			</Jumbotron>
		</>
	);
};

export default withRouter(ServiceListUserB);
