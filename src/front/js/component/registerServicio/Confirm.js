import React, { useContext } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
import { Container, Button, Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

const Confirm = ({ handleBack, handleSubmit }) => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row className="p-5">
				<h3>Dato de Equipo</h3>
				<br />
				<ListGroup className="w-100">
					<ListGroup.Item>1. Tamaño de tu equipo: {store.serviceRegistrado.tipo_membresia}</ListGroup.Item>
					<ListGroup.Item>2. Años de experiencia: {store.serviceRegistrado.experiencia}</ListGroup.Item>
					<ListGroup.Item>3. Detalla los trabajos:{store.serviceRegistrado.merit} </ListGroup.Item>
				</ListGroup>
			</Row>
			<Row className="p-5">
				<h3>Dato de Servicio</h3>
				<br />
				<ListGroup className="w-100">
					<ListGroup.Item>1. Categoria de tu servicio:{store.serviceRegistrado.category}</ListGroup.Item>
					<ListGroup.Item>
						2. Subategoria de tu servicio: {store.serviceRegistrado.subcategory}
					</ListGroup.Item>
					<ListGroup.Item>
						3. Costo del servicio: {store.serviceRegistrado.valor}/ por {store.serviceRegistrado.tipo_cobro}
					</ListGroup.Item>
					<ListGroup.Item>4. Nombre del Servicio: {store.serviceRegistrado.name_servicio}</ListGroup.Item>
					<ListGroup.Item>
						5. Descripción del servicio:{store.serviceRegistrado.descrip_servicio}
					</ListGroup.Item>
					<ListGroup.Item>
						6. Plazo estimado (meses) para ejecutar el proyecto: {store.serviceRegistrado.duracion}
					</ListGroup.Item>
					<ListGroup.Item>
						7. Numero de correcciones permitida:{store.serviceRegistrado.revision}
					</ListGroup.Item>
					<ListGroup.Item>
						8. Profile foto de servicio:{store.serviceRegistrado.portafolioFoto}{" "}
					</ListGroup.Item>
					<ListGroup.Item>9. Portafolio: {store.serviceRegistrado.portafolio}</ListGroup.Item>
				</ListGroup>
			</Row>

			<Row style={{ justifyContent: "center" }}>
				<Button variant="primary" size="lg" type="submit" onClick={handleBack} className=" mr-2 my-5">
					<strong>Volver</strong>
				</Button>
				<Button variant="primary" size="lg" type="submit" onClick={handleSubmit} className=" my-5">
					<strong>Registra tu servicio</strong>
				</Button>
			</Row>
		</Container>
	);
};

export default Confirm;

Confirm.propTypes = {
	handleBack: PropTypes.any,
	handleSubmit: PropTypes.any
};
