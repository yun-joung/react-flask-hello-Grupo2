import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardMiCompra = props => {
	const { store, actions } = useContext(Context);
	const { id, idcompra } = props;

	const handleSubmit = e => {
		e.preventDefault();
	};

	useEffect(() => {
		actions.get_servicioCompra_id_user(id);
	}, []);

	return (
		<div>
			<Card>
				<Link to={"/MiCompra/" + idcompra + "/category/" + id}>
					<img
						src={props.img}
						className="card-img-top caimg"
						alt="image"
						onClick={() => actions.get_servicioCompra_id_user(id)}
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
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

CardMiCompra.propTypes = {
	img: PropTypes.string,
	name_servicio: PropTypes.string,
	punta: PropTypes.string,
	valor: PropTypes.number,
	trabajo: PropTypes.string,
	tipo_cobro: PropTypes.string,
	match: PropTypes.object,
	id: PropTypes.number,
	idcompra: PropTypes.number
};
