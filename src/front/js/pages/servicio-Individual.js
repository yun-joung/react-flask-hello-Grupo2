import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import { Individuallnfo } from "../component/individualInfo.jsx";
import { IndividualCard } from "../component/IndividualCard.jsx";
import { Comments } from "../component/Mycomments.jsx";
import { Formcomment } from "../component/formComment.jsx";
import Portafolio from "../component/Portafolio.jsx";
import PropTypes from "prop-types";

export const Servicioindividual = props => {
	const { store, actions } = useContext(Context);
	const item = store.serviceInfoById;
	// const name_servicio = JSON.parse(JSON.stringify(store.serviceInfoById.));
	const { id } = props.match.params;

	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col className="my-5">
						<p>
							{item.category} <i className="fas fa-chevron-right" /> {item.name_servicio}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<Portafolio />
					</Col>
					<Col md={4}>
						<Individuallnfo
							name_servicio={item.name_servicio}
							valor={item.valor}
							tipo_cobro={item.tipo_cobro}
							subcategory={item.subcategory}
							duracion={item.duracion}
							revision={item.revision}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<IndividualCard
							descrip_servicio={item.descrip_servicio}
							portafolio={item.portafolio}
							merit={item.merit}
							userName={item.userName}
							experiencia={item.experiencia}
							tipo_membresia={item.tipo_membresia}
						/>
					</Col>
				</Row>
				<div className="transBox" />
				<Row>
					<Col>
						<h3 id="Theird">Opiniones sobre ABC</h3>
					</Col>
				</Row>
				<div className="transBox" />
				<Formcomment />
				<Comments />
			</Container>
		</>
	);
};

Servicioindividual.propTypes = {
	match: PropTypes.objecto,
	id: PropTypes.string
};
