import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iconOver1, iconOver2, iconOver3, iconOver4, iconOver5 } from "../../img/image";

export const IconBox = () => {
	return (
		<Jumbotron className="whiteBox shadow-lg p-3 mb-5 align-item-center">
			<Row className="row-cols-2 row-cols-sm-2 row-cols-md-5 align-item-center px-5">
				<Col className="text-center p-3 text-muted">
					<Link to="/servicio/Desarrollo_It">
						<img src={iconOver1} className="LandingpageIcon" />
						<br />
						<p className="text-muted">Desarollo/IT</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Diseño">
						<img src={iconOver2} className="LandingpageIcon" />
						<br />
						<p className="text-muted">Diseño</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Marketing">
						<img src={iconOver3} className="LandingpageIcon" />
						<br />
						<p className="text-muted">Marketing</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Contabilidad">
						<img src={iconOver4} className="LandingpageIcon" />
						<br />
						<p className="text-muted">Contabilidad</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Ley">
						<img src={iconOver5} className="LandingpageIcon" />
						<br />
						<p className="text-muted">Ley/Derecho</p>
					</Link>
				</Col>
			</Row>
		</Jumbotron>
	);
};
