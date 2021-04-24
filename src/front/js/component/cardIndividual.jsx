import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardIndividual = props => {
	const { store, actions } = useContext(Context);
	const { id } = props;

	const handleSubmit = e => {
		e.preventDefault();
		actions.addUserFavorites({
			id_user: JSON.parse(JSON.stringify(store.user.id)),
			id_servicio_registrados: props.id,
			name_servicio: props.name_servicio
		});
		console.log("Agregardo el favorito");
	};

	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<div>
			<Card md={3} className="card">
				<Button variant="btn" className="favorito" onClick={e => handleSubmit(e)}>
					<i className="far fa-heart" />
				</Button>
				<Link to={"/servicio/category/" + id}>
					<img
						src={props.img}
						className="card-img-top caimg"
						alt="image"
						onClick={() => actions.getServiceInfoById(id)}
					/>
				</Link>
				<Card.Body className="text-dark">
					<Card.Text className="textOverFlow" style={{ marginBottom: "3px" }}>
						{props.name_servicio}
					</Card.Text>
					<Card.Text style={{ marginBottom: "3px" }}>
						<strong style={{ fontSize: "22px" }}>{props.valor}</strong>{" "}
						<span style={{ color: "gray" }}>/{props.tipo_cobro}</span>
					</Card.Text>
					<Card.Text className="d-inline" style={{ marginBottom: "3px", fontSize: "14px", color: "#606060" }}>
						<i className="fas fa-star warning" style={{ color: "#f3cb00" }} />
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
	punta: PropTypes.number,
	valor: PropTypes.number,
	trabajo: PropTypes.string,
	tipo_cobro: PropTypes.string,
	match: PropTypes.object,
	id: PropTypes.number
};
