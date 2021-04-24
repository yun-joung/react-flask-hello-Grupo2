import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import { personB } from "../../img/image.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Individuallnfo = props => {
	const { store, actions } = useContext(Context);
	const { id } = props;
	const handleSubmit = e => {
		e.preventDefault();
		actions.addUserFavorites({
			id_user: JSON.parse(JSON.stringify(store.user.id)),
			id_servicio_registrados: props.id,
			name_servicio: props.name_servicio
		});
		console.log("Agregado el favorito");
	};
	console.log(props);
	const handleBuy = e => {
		e.preventDefault();
		const usuario = JSON.parse(JSON.stringify(store.user.id));
		actions.buyService({
			id_user_compra: usuario,
			id_servicio_registrados: props.id,
			cantidad_servicio: 1,
			total_valor_servicio: props.valor,
			name_servicio: props.name_servicio,
			email: props.email
		});
		props.history.push("/compra");
	};
	return (
		<>
			<h2>{props.name_servicio}</h2>
			<Jumbotron className="whiteBox border-top pt-3 p-0 position-static">
				<Row className="d-inline-block d-flex">
					<Col sm={8} style={{ width: "180px" }}>
						<span className="d-flex">
							<h2>${props.valor}</h2>
							<p className="mt-2">/{props.tipo_cobro}</p>
						</span>
					</Col>
					<Col sm={4} style={{ width: "180px" }}>
						<Button variant="outline-dark" className="float-right " onClick={e => handleSubmit(e)}>
							<i className="far fa-heart" />
						</Button>
					</Col>
				</Row>
				<div>
					<p>{props.subcategory}</p>
				</div>

				<Row className="d-inline-block d-flex">
					<Col style={{ width: "180px" }}>
						<p className="float-left text-dark">
							<i className="far fa-clock h3 mr-1" /> Plazo estimado: {props.duracion}
							<br />
							<i className="fas fa-retweet " style={{ fontSize: "1.75rem" }} /> Revision: {props.revision}
						</p>
					</Col>
					{/* <Col sm={6} style={{ width: "180px" }}>
						<p className="float-right text-dark">
							<i className="far fa-star h3" /> 4.8/5 (10)
                            <br />
                            <i className="far fa-handshake h3" /> 10 trabajos
							
						</p>
					</Col> */}
				</Row>
				<p>
					<Link to="/compra">
						<Button
							variant="primary"
							size="lg"
							block
							onClick={e => {
								handleBuy(e);
							}}>
							{/* {JSON.stringify(props.email)} */}
							Comprar Servicio
						</Button>
					</Link>
				</p>
			</Jumbotron>
		</>
	);
};

export default withRouter(Individuallnfo);

Individuallnfo.propTypes = {
	name_servicio: PropTypes.string,
	valor: PropTypes.number,
	tipo_cobro: PropTypes.string,
	subcategory: PropTypes.string,
	duracion: PropTypes.string,
	revision: PropTypes.string,
	id: PropTypes.number,
	history: PropTypes.object,
	email: PropTypes.string
};
