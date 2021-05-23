import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Button, Card, Nav, Col, Media, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { personB } from "../../img/image";
import { Link, withRouter, useParams } from "react-router-dom";

const IndividualCard = props => {
	const { store, actions } = useContext(Context);
	const item = store.serviceRegistrado;
	const { id } = useParams();
	const handleBuy = e => {
		e.preventDefault();
		const usuario = JSON.parse(JSON.stringify(store.user.id));
		actions.buyService({
			id_user_compra: usuario,
			id_servicio_registrados: id,
			cantidad_servicio: 1,
			total_valor_servicio: item.valor,
			name_servicio: item.name_servicio,
			email: item.email
		});
	};
	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<>
			<Navbar sticky="top" style={{ padding: "0" }} className="w-100 NabTab ">
				<Nav fill variant="tabs" defaultActiveKey="#first" sticky="top" style={{ flexBasis: "none" }}>
					<Nav.Item>
						<Nav.Link href="#First" className="px-5">
							<b>Servicio</b>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#Second" className="px-5">
							<b>Sobre el vendedor</b>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#Theird" className="px-5">
							<b>Comentario</b>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			<Card id="First">
				{/* <Card.Header>
				</Card.Header> */}
				<Card.Body>
					<Card.Title className="mt-4">Nuestro servicio</Card.Title>{" "}
					<Card.Text>{props.descrip_servicio}</Card.Text>
					{/* <Card.Title className="mt-4">Proceso de trabajo</Card.Title>
					<Card.Text>
						¿Estás buscando a alguien para crear el diseño de sitios web de wix o la tienda en línea de wix?
						¡Entonces, ha venido al lugar correcto! Crearé un sitio web profesional de wix o un sitio web de
						comercio electrónico de wix de cada nicho de acuerdo con sus requisitos.
					</Card.Text> */}
					<Card.Title className="mt-4">Portafolio</Card.Title>
					<Card.Text>{props.portafolio}</Card.Text>
					<Card.Title className="mt-4">¿Por qué deberías contratarme?</Card.Title>
					<Card.Text id="Second">{props.merit}</Card.Text>
					<Card.Title className="mt-4"> Sobre el vendedor</Card.Title>
					<Media className="border p-2 bg-light rounded mb-3">
						<img
							src={personB}
							width="100"
							height="100"
							className="d-inline-block align-top img-thumbnail d-flex"
							alt="person_Image"
							style={{ borderRadius: "50%" }}
						/>
						<Media.Body className="ml-3 ">
							<p className="font-weight-bold">{props.userName}</p>
							<p className="mb-2">{props.experiencia}</p>
							<p className="mb-2">Clasificación de membresía: {props.tipo_membresia}</p>
							{/* <p>
								{" "}
								<i className="fas fa-map-marker-alt" />
								&nbsp;Santiago
							</p> */}
							<p>
								<i className="far fa-star h3" /> calificación {props.evaluacion}/5 (10 Comentario)
							</p>
						</Media.Body>
					</Media>
					{store.user.isLogin ? (
						<Link to="/compra">
							<Button
								variant="outline-primary"
								size="lg"
								onClick={e => {
									handleBuy(e);
								}}
								block>
								Comprar el servicio
							</Button>
						</Link>
					) : (
						<Link to="/register">
							<Button
								variant="outline-primary"
								size="lg"
								onClick={e => {
									handleBuy(e);
								}}
								block>
								Comprar el servicio
							</Button>
						</Link>
					)}
				</Card.Body>
			</Card>
		</>
	);
};
export default withRouter(IndividualCard);

IndividualCard.propTypes = {
	descrip_servicio: PropTypes.string,
	portafolio: PropTypes.string,
	merit: PropTypes.string,
	userName: PropTypes.string,
	experiencia: PropTypes.string,
	tipo_membresia: PropTypes.string,
	evaluacion: PropTypes.string,
	history: PropTypes.object,
	id: PropTypes.number
};
