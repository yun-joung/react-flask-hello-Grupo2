import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import ServiceListUser from "./ServiceListUser.jsx";
import { withRouter, Link } from "react-router-dom";

const ServiceListUserCompra = props => {
	const { store, actions } = React.useContext(Context);
	const item = store.BuyServiceByIdUser;

	useEffect(() => {
		actions.getBuyServiceByIdUser();
	}, []);

	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-5 pr-5 pl-5">
				{/* <p>{JSON.stringify(store.serviceByIdUser)}</p> */}
				<h5>Lista de servicios comprados</h5>
				{store.BuyServiceByIdUser.map(item => {
					return (
						<ServiceListUserCompra
							key={item.id_user_compra}
							// name_servicio={item.name_servicio}
							id={item.id_user_compra}
						/>
					);
				})}
				{item.length === 0 ? (
					<li style={{ listStylePosition: "outside" }}>Tu no tienes servicios comprados</li>
				) : (
					""
				)}
			</Jumbotron>
		</>
	);
};

export default withRouter(ServiceListUserCompra);
