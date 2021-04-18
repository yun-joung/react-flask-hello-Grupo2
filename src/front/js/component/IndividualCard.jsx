import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Button, Card, Nav, Col, Media, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { personB } from "../../img/image";

export const IndividualCard = props => {
	return (
		<>
			<Card>
				<Card.Header>
					<Navbar sticky="top">
						<Nav variant="tabs" defaultActiveKey="#first" sticky="top" className="sticky-top">
							<Nav.Item>
								<Nav.Link href="#First">Servicio</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#Second">Sobre el vendedor</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#Theird">Comentario</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar>
				</Card.Header>
				<Card.Body>
					<Card.Title className="mt-4" id="First">
						Nuestro servicio
					</Card.Title>{" "}
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
					<Card.Text>{props.merit}</Card.Text>
					<Card.Title className="mt-4" id="Second">
						{" "}
						Sobre el vendedor
					</Card.Title>
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
					<Button variant="outline-primary" size="lg" block>
						Comprar el servicio
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

IndividualCard.propTypes = {
	descrip_servicio: PropTypes.string,
	portafolio: PropTypes.string,
	merit: PropTypes.string,
	userName: PropTypes.string,
	experiencia: PropTypes.string,
	tipo_membresia: PropTypes.string,
	evaluacion: PropTypes.string
};
