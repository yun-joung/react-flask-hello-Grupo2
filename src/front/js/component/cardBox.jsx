import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { CardCategory } from "./cardCategory.jsx";
import { serviceDiseno, serviceMarketing, serviceIt, serviceApp } from "../../img/image.js";
import { Jumbotron, Row, Col, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";

export const CardBox = props => {
	React.useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
	return (
		<>
			<Jumbotron className="whiteBox p-3 " data-aos="slide-up" style={{ marginBottom: "0px" }}>
				<Container>
					<h2 className="pt-3 text-center">{props.title}</h2>
					<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4  scroll mb-5">
						<Col md={3}>
							<CardCategory img={serviceApp} title="Mobile App" valor="desde 2.000.000" />
						</Col>
						<Col md={3}>
							<CardCategory
								img={serviceIt}
								title="Diseno"
								valor="desde &nbsp;&nbsp;&nbsp;50.000&nbsp;&nbsp;"
							/>
						</Col>
						<Col md={3}>
							<CardCategory
								img={serviceMarketing}
								title="Marketing"
								valor="desde &nbsp;&nbsp;50.000&nbsp;&nbsp;"
							/>
						</Col>
						<Col md={3}>
							<CardCategory img={serviceDiseno} title="Desarollo/IT" valor="desde &nbsp;300.000" />
						</Col>
					</Row>
					<Row>
						<Button variant="success" className="p-2 px-5 mb-5 mt-2 item-align-center mx-auto">
							{" "}
							Var Más Servicios
						</Button>
					</Row>
				</Container>
			</Jumbotron>
		</>
	);
};

CardBox.propTypes = {
	title: PropTypes.string
};
