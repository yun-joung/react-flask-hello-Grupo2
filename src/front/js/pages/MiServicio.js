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
import ServiceListUserB from "../component/ServiceListUserB.jsx";

const MiServicio = props => {
	const { store, actions } = React.useContext(Context);

	return (
		<div className="backGray">
			<Container>
				<Row>
					<Col md={3} className="mt-5">
						<MyFilter />
					</Col>
					<Col md={9} className="mt-5">
						<h2>
							<i className="fas fa-briefcase"></i> Mis Servicios
						</h2>
						<ServiceListUserB />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default withRouter(MiServicio);

MiServicio.propTypes = {
	category: PropTypes.string
};
