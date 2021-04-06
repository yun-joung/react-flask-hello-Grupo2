import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Row, Col, Container, Card, Button, Accordion } from "react-bootstrap";
import { CategoryBox } from "../component/categoryBox.jsx";
import { MyFilter } from "../component/myFilter.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ServicioCategory = props => {
	const { store, actions } = React.useContext(Context);
	// const category = props.match.params;

	// useEffect(() => {
	// 	actions.getServiceByCategory(category);
	// }, []);

	return (
		<Container>
			<div>
				<Row>
					<Col className="mt-5">
						<h4>{props.category}</h4>
					</Col>
				</Row>
				<Row>
					{/* <Col md={3}>
						<MyFilter />
					</Col> */}
					<Col>
						<CategoryBox />
						<div className="transBox" />
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default withRouter(ServicioCategory);

ServicioCategory.propTypes = {
	match: PropTypes.objecto,
	category: PropTypes.string
};
