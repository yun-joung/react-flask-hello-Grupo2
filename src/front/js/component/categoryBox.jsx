import React, { useContext, useEffect, useParams } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { CardCategory } from "./cardCategory.jsx";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Row, Col, Container } from "react-bootstrap";
import { CardIndividual } from "./cardIndividual.jsx";
import { Context } from "../store/appContext";

export const CategoryBox = props => {
	const { store, actions } = useContext(Context);
	const item = store.serviceInfo;

	return (
		<>
			<Container>
				<Row className="row-cols-sm-2 row-cols-md-3  row-cols-lg-3 align-items-center">
					<Col className="mb-4">
						<CardIndividual
							img={serviceIt}
							title="Crearé un sitio web"
							valor="50.000/hora"
							punta="4.5"
							trabajo="50"
						/>
					</Col>
					{item.map(() => {
						return (
							<Col className="mb-4" key={item.id}>
								<CardIndividual
									id={item.id}
									img={serviceIt}
									name_servicio={item.name_servicio}
									valor={item.valor}
									tipo_cobro={item.tipo_cobro}
									punta="4.5"
									trabajo="50"
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

// LoginModal.propTypes = {
// 	match: PropTypes.object
// };
