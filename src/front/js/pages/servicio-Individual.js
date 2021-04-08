import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import { Individuallnfo } from "../component/individualInfo.jsx";
import { IndividualCard } from "../component/IndividualCard.jsx";
import { Comments } from "../component/Mycomments.jsx";
import { Formcomment } from "../component/formComment.jsx";
import CustomProgressBar from "../component/CustomProgressBar.jsx";
import Portafolio from "../component/Portafolio.jsx";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Servicioindividual = props => {
	const { store, actions } = useContext(Context);
	const item = store.serviceInfoById;
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
				<Row mb={5}>
					<Col md={4}>
						<CustomProgressBar comments={store.comments} />
					</Col>
					<Col md={8}>
						<Comments />
					</Col>
				</Row>
				<Row>
					<Col mt={5}>
						<Formcomment comments={store.comments} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default withRouter(Servicioindividual);

Servicioindividual.propTypes = {
	match: PropTypes.objecto,
	id: PropTypes.string
};
