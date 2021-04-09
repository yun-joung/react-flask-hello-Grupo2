import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { CardCategory } from "./cardCategory.jsx";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Row, Col, Container } from "react-bootstrap";
import { CardIndividual } from "./cardIndividual.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const CategoryBox = props => {
	const { store, actions } = useContext(Context);
	const { category } = useParams();

	useEffect(() => {
		actions.getServiceByCategory(category);
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col className="mt-5 mb-3">
						<h4>{category}</h4>
					</Col>
				</Row>
				<Row className="row-cols-sm-1 row-cols-md-4  row-cols-lg-4 align-items-center">
					<span>{JSON.stringify(store.serviceByCategory)}</span>
					{store.serviceByCategory.map(item => {
						return (
							<Col className="mb-4" key={item.id}>
								<CardIndividual
									category={item.category}
									id={item.id}
									img={serviceIt}
									name_servicio={item.name_servicio}
									valor={item.valor}
									tipo_cobro={item.tipo_cobro}
									// punta="4.5"
									// trabajo="50"
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

CategoryBox.propTypes = {
	category: PropTypes.string
};
