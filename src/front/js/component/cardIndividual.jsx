import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardIndividual = props => {
	const { store, actions } = useContext(Context);
	// const { id } = 4;

	// useEffect(() => {
	// 	actions.getServiceInfoById(id);
	// }, []);

	return (
		<div>
			<Card style={{ width: "14rem" }}>
				<Button
					variant="btn"
					className="favorito"
					onClick={() =>
						actions.addUserFavorites({
							id_user: store.user.id,
							id_servicio_registrado: 1,
							name_servicio: "crea tu mobil-app"
						})
					}>
					<i className="far fa-heart" />
				</Button>
				<Link to="/category/individual">
					<img
						src={props.img}
						className="card-img-top caimg"
						alt="image"
						onClick={() => actions.getServiceInfoById(id)}
					/>
				</Link>
				<Card.Body className="text-dark">
					<Card.Text style={{ marginBottom: "3px" }}>{props.name_servicio}</Card.Text>
					<Card.Title style={{ marginBottom: "3px" }}>
						{props.valor} / {props.tipoCobro}
					</Card.Title>
					<Card.Text className="d-inline" style={{ marginBottom: "3px", fontSize: "14px", color: "#606060" }}>
						<i className="fas fa-star" />
						{props.punta} / {props.trabajo} trabajo
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

CardIndividual.propTypes = {
	img: PropTypes.string,
	name_servicio: PropTypes.string,
	valor: PropTypes.string,
	punta: PropTypes.string,
	valor: PropTypes.string,
	trabajo: PropTypes.string,
	tipoCobro: PropTypes.string,
	match: PropTypes.object,
	id: PropTypes.number
};
