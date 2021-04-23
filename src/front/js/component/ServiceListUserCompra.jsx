import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import CompraListUser from "./CompraListUser.jsx";
import { withRouter, Link } from "react-router-dom";

const ServiceListUserCompra = props => {
	const { store, actions } = React.useContext(Context);
	const item = store.BuyServiceByIdUser;
	const { id } = JSON.parse(JSON.stringify(store.user.id));

	useEffect(() => {
		actions.getBuyServiceByIdUser(id);
	}, []);

	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-5 pr-5 pl-5">
				{/* <p>{JSON.stringify(store.serviceByIdUser)}</p> */}
				<h5>Lista de servicios comprados</h5>
				{store.BuyServiceByIdUser.map(item => {
					return (
						<CompraListUser
							key={item.id_user_compra}
							name_servicio={item.name_servicio}
							id={item.id_user_compra}
							fecha_inicio={props.fecha_inicio}
							total_valor_servicio={props.total_valor_servicio}
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

ServiceListUserCompra.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	name_servicio: PropTypes.string,
	fecha_inicio: PropTypes.date,
	total_valor_servicio: PropTypes.number
};
