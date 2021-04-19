import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IconBox = () => {
	return (
		<Jumbotron className="whiteBox shadow-lg p-3 mb-5 align-item-center">
			<Row className="row-cols-2 row-cols-sm-2 row-cols-md-5 align-item-center px-5">
				<Col className="text-center p-3 text-muted">
					<Link to="/servicio/Desarrollo_It">
						<i className="fas fa-tv icon" />
						<br />
						<p className="text-muted">Desarollar/IT</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Diseño">
						<i className="fas fa-edit icon" />
						<br />
						<p className="text-muted">Diseño</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Marketing">
						<i className="fas fa-chart-line icon" />
						<br />
						<p className="text-muted">Marketing</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Contabilidad">
						<i className="fas fa-donate icon" />
						<br />
						<p className="text-muted">Contabilidad</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Ley">
						<i className="fas fa-balance-scale icon" />
						<br />
						<p className="text-muted">Ley/Derecho</p>
					</Link>
				</Col>
			</Row>
		</Jumbotron>
	);
};
