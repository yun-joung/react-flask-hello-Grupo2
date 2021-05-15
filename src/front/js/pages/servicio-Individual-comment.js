import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import Individuallnfo from "../component/individualInfo.jsx";
import { IndividualCard } from "../component/IndividualCard.jsx";
import { Promedio } from "../component/Promedio.jsx";
import { Formcomment } from "../component/formComment.jsx";
import { MyListComments } from "../component/MyListComments.jsx";
import CustomProgressBar from "../component/CustomProgressBar.jsx";
import Portafolio from "../component/Portafolio.jsx";
import PropTypes from "prop-types";
import { Link, withRouter, useParams } from "react-router-dom";

const ServicioindividualComments = props => {
	const { store, actions } = useContext(Context);
	const item = store.serviceRegistrado;
	const { idcompra, id } = props.match.params;

	useEffect(() => {
		console.log(idcompra);
		actions.getBuyServiceByIdUser(id);
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col className="my-5">
						<p>
							<Link to={`/MiCompra/${idcompra}` + `${item.category}`}>{item.category}</Link>{" "}
							<i className="fas fa-chevron-right" /> {item.name_servicio}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<Portafolio />
					</Col>
					<Col md={4}>
						<Individuallnfo
							id={item.id}
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
						<h3 id="Theird">Opiniones sobre {item.userName}</h3>
					</Col>
				</Row>
				<div className="transBox" />
				<Row mb={5}>
					<Col md={4}>
						<CustomProgressBar comments={store.comments} />
					</Col>
					<Col md={8}>
						<Promedio />
					</Col>
				</Row>
				<Row>
					<Col mt={5}>
						<Formcomment comments={store.comments} idcompra={id} />
						<MyListComments />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default withRouter(ServicioindividualComments);
ServicioindividualComments.propTypes = {
	match: PropTypes.object,
	id: PropTypes.string,
	name_servicio: PropTypes.string
};
