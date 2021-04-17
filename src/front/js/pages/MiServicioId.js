import React, { useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Row, Col, Container, Card, Button, Accordion } from "react-bootstrap";
import { CategoryBox } from "../component/categoryBox.jsx";
import { MyFilter } from "../component/myFilter.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ServicioUpdate from "../component/ServicioUpdate.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MiServicio = props => {
	const { store, actions } = React.useContext(Context);
	const item = store.serviceRegistrado;
	const id = useParams;

	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<div className="backGray">
			<Container>
				<Row>
					<Col md={3} className="mt-5">
						<MyFilter />
					</Col>
					<Col md={9} className="mt-5">
						<ServicioUpdate
							id={item.id}
							tipo_membresia={item.tipo_membresia}
							subcategory={item.subcategory}
							tipo_cobro={item.tipo_cobro}
							valor={item.valor}
							name_servicio={item.name_servicio}
							descrip_servicio={item.descrip_servicio}
							duracion={item.duracion}
							revision={item.revision}
							proceso={item.proceso}
							experiencia={item.experiencia}
							portafolio={item.portafolio}
							merit={item.merit}
						/>
					</Col>
				</Row>
				<div className="transBox" />
			</Container>
		</div>
	);
};

export default withRouter(MiServicio);

MiServicio.propTypes = {
	match: PropTypes.objecto,
	category: PropTypes.string
};
