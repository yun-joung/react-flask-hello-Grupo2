import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { icon1, iconOver1, iconOver2, iconOver3, iconOver4, iconOver5 } from "../../img/image";

export const IconBox = () => {
	return (
		<Jumbotron className="whiteBox shadow-lg p-3 mb-5 align-item-center">
			<Row className="row-cols-2 row-cols-sm-2 row-cols-md-5 align-item-center px-5">
				<Col className="text-center p-3 text-muted">
					<Link to="/servicio/Desarrollo_It">
						<img
							className="LandingpageIcon"
							src="/overIcon-01.jpg"
							onMouseOver={e => (e.currentTarget.src = "/icons-01.jpg")}
							onMouseOut={e => (e.currentTarget.src = "/overIcon-01.jpg")}
						/>
						<br />
						<p className="text-muted">Desarollo/IT</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Diseño">
						<img
							className="LandingpageIcon"
							src="/overIcon-02.jpg"
							onMouseOver={e => (e.currentTarget.src = "/icons-02.jpg")}
							onMouseOut={e => (e.currentTarget.src = "/overIcon-02.jpg")}
						/>
						<br />
						<p className="text-muted">Diseño</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Marketing">
						<img
							className="LandingpageIcon"
							src="/overIcon-03.jpg"
							onMouseOver={e => (e.currentTarget.src = "/icons-03.jpg")}
							onMouseOut={e => (e.currentTarget.src = "/overIcon-03.jpg")}
						/>
						<br />
						<p className="text-muted">Marketing</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Contabilidad">
						<img
							className="LandingpageIcon"
							src="/overIcon-04.jpg"
							onMouseOver={e => (e.currentTarget.src = "/icons-04.jpg")}
							onMouseOut={e => (e.currentTarget.src = "/overIcon-04.jpg")}
						/>
						<br />
						<p className="text-muted">Contabilidad</p>
					</Link>
				</Col>
				<Col className="text-center p-3">
					<Link to="/servicio/Ley">
						<img
							className="LandingpageIcon"
							src="/overIcon-05.jpg"
							onMouseOver={e => (e.currentTarget.src = "/icons-05.jpg")}
							onMouseOut={e => (e.currentTarget.src = "/overIcon-05.jpg")}
						/>
						<br />
						<p className="text-muted">Ley/Derecho</p>
					</Link>
				</Col>
			</Row>
		</Jumbotron>
	);
};
