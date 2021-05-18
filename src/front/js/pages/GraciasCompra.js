import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
//import CompraListUser from "../component/CompraListUser";

export const GraciasCompra = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// useEffect(() => {
	// 	actions.getBuyServiceByIdUser();
	// }, []);

	return (
		<div className="jumbotron">
			<Container>
				<h1 className="display-4">Gracias por su compra</h1>
				<hr className="my-4" />
				{/* <CompraListUser
					key={item.id_user_compra}
					name_servicio={item.name_servicio}
					id={item.id_user_compra}
					fecha_inicio={item.fecha_inicio}
					total_valor_servicio={item.total_valor_servicio}
				/> */}

				<Link to="MiCompra">
					<span className="btn btn-primary btn-lg" role="button">
						Ir a Mis Compras
					</span>
				</Link>
			</Container>
		</div>
	);
};

GraciasCompra.propTypes = {
	match: PropTypes.object
};
