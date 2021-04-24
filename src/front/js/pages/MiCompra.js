import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Row, Col, Container, Card, Button, Accordion } from "react-bootstrap";
import { CategoryBox } from "../component/categoryBox.jsx";
import { MyFilter } from "../component/myFilter.jsx";
import { CardIndividual } from "../component/cardIndividual.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Formcomment } from "../component/formComment.jsx";
// import ServiceListUserB from "../component/ServiceListUserCompra.jsx";
import ServiceListUserCompra from "../component/ServiceListUserCompra.jsx";
import { useParams } from "react-router-dom";
import { CardMiCompra } from "../component/cardMiCompra.jsx";

const MiCompra = props => {
	const { store, actions } = useContext(Context);
	const { category } = useParams();

	return (
		<div className="backGray">
			<Container>
				<Row>
					<Col md={3} className="mt-5">
						<MyFilter />
					</Col>
					<Col md={9} className="mt-5">
						<h2>
							<i className="fas fa-briefcase"></i> Mis Servicios Comprados
						</h2>
						<ServiceListUserCompra />
					</Col>
				</Row>
			</Container>
		</div>
		// <div className="backGray">
		// 	<Container>
		// 		<Row>
		// 			<Col md={3} className="mt-5">
		// 				<MyFilter />
		// 			</Col>
		// 			<Col md={9} className="mt-5">
		// 				<h2>
		// 					<i className="fas fa-briefcase"></i> Mis Servicios Comprados
		// 				</h2>
		// 				<Container>
		// 					<Row>
		// 						<Col md={4}>
		// 							<h4>{category}</h4>
		// 						</Col>
		// 					</Row>
		// 					<Row className="row-cols-sm-1 row-cols-md-4  row-cols-lg-4 align-items-center">
		// 						{store.BuyServiceByIdUser.map(item => {
		// 							return (
		// 								<Col md={3} key={item.id}>
		// 									<CardMiCompra
		// 										category={item.category}
		// 										id={item.id}
		// 										img={serviceIt}
		// 										name_servicio={item.name_servicio}
		// 										valor={item.valor}
		// 										tipo_cobro={item.tipo_cobro}
		// 										idcompra={item.id}
		// 									/>
		// 								</Col>
		// 							);
		// 						})}

		// 						<Col md={8}>
		// 							<Formcomment comments={store.comments} />
		// 						</Col>
		// 					</Row>
		// 				</Container>
		// 			</Col>
		// 		</Row>
		// 	</Container>
		// </div>
	);
};

export default withRouter(MiCompra);

MiCompra.propTypes = {
	category: PropTypes.string
};
