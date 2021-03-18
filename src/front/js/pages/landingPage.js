import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { IconBox } from "../component/IconBox.jsx";
import { CardBox } from "../component/cardBox.jsx";
import { ServiceBox } from "../component/serviceBox.jsx";
import { Footer } from "../component/footer";
import { LoginModalA } from "../component/Login";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(http://localhost:3000/backGround.png)`
			}}>
			<Container>
				<div>
					<Row>
						<Col xs={4}>
							<img
								src={logoBlanco}
								width="110"
								height="33"
								className="d-inline-block align-top mt-5"
								alt="cotec"
							/>
						</Col>
						<Col xs={8}>
							<Button variant="secondary" className="float-right mt-5">
								Registrate
							</Button>
							<a>{LoginModalA()}</a>
						</Col>
					</Row>
					<Row>
						<Col md={7}>
							<div className="transBox" />
							<h1 className="text-white mt-3">
								Contrata en línea
								<br />a los mejores equipos!
							</h1>
							<Form inline className="Buscar sb d-flex float-left" style={{ width: "452px" }}>
								<Button variant="btn">
									<i className="fas fa-search" />
								</Button>
								<FormControl
									type="text"
									placeholder="Buscar"
									className="mr-sm-2 search"
									style={{ width: "302px" }}
								/>
							</Form>
							<Link to="/home">
								<Button
									variant="outline-light"
									className="mr-3 mt-2 px-4"
									sm={12}
									style={{ borderRadius: "1.75rem" }}>
									&nbsp;&nbsp;Buscar un freelancer&nbsp;&nbsp;
								</Button>
							</Link>
							<Button
								variant="secondary"
								className="mt-2 px-4"
								sm={12}
								style={{ borderRadius: "1.75rem" }}>
								&nbsp;&nbsp;&nbsp;&nbsp;Soy un freelancer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</Button>
						</Col>
						<Col md={5} sm={12} className="mt-5">
							<img
								src={man}
								width="450px"
								height="400px"
								className="d-inline-block align-top "
								alt="freelancer"
							/>
						</Col>
					</Row>
					<IconBox />
					<CardBox title="Categorias más buscadas" />
					<ServiceBox />
					<br />

					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="success">Success</Button>
					<Button variant="outline-primary">Primary</Button>
					<Button variant="outline-secondary">Secondary</Button>
					<Button variant="outline-success">Success</Button>
					<Button variant="light">Light</Button>
					<Button variant="outline-light">Light</Button>
					<Footer />
				</div>
			</Container>
		</div>
	);
};

export default withRouter(LandingPage);