import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, freelancer } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { IconBox } from "../component/IconBox.jsx";
import { PersonBox } from "../component/personBox.jsx";
import { ServiceBox } from "../component/serviceBox.jsx";
import { Footer } from "../component/footer";
import { LoginModal, LoginModalA } from "../component/Login";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import SearchBar from "../component/searchbar.jsx";

const LandingPage = props => {
	const { store, actions } = useContext(Context);

	const { id } = props.match.params;

	if (store.user.isLogin === true) {
		props.history.push("/home");
	}

	useEffect(() => {
		actions.getToken();
	}, []);
	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(https://3000-gray-shrew-sd06ypbc.ws-us04.gitpod.io/backGround.png)`
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
							<Link to="/register">
								<Button variant="light" className="float-right mt-5">
									Registrate
								</Button>
							</Link>
							<LoginModalA />
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<div className="transBox" />
							<h1 className="text-white mt-3">
								Contrata en línea
								<br />a los mejores equipos!
							</h1>
							<div>
								<SearchBar />
							</div>
							<Link to="/home">
								<Button
									variant="outline-light"
									className="mr-3 mt-2 px-4"
									sm={12}
									style={{ borderRadius: "1.75rem" }}>
									&nbsp;&nbsp;Buscar un freelancer&nbsp;&nbsp;
								</Button>
							</Link>
							<Link to="/register">
								<Button
									variant="secondary"
									className="mt-2 px-4"
									sm={12}
									style={{ borderRadius: "1.75rem" }}>
									&nbsp;&nbsp;&nbsp;&nbsp;Soy un freelancer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</Button>
							</Link>
						</Col>
						<Col md={6} sm={12} className="mb-2">
							<img
								src={freelancer}
								width="100%"
								height="auto"
								className="d-inline-block align-top "
								alt="freelancer"
							/>
						</Col>
					</Row>
					<IconBox />
					<PersonBox title="Profesionales más solicitados" />
					<ServiceBox />
					<br />
					{/* <Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="success">Success</Button>
					<Button variant="outline-primary">Primary</Button>
					<Button variant="outline-secondary">Secondary</Button>
					<Button variant="outline-success">Success</Button>
					<Button variant="light">Light</Button>
					<Button variant="outline-light">Light</Button> */}
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default withRouter(LandingPage);

LandingPage.propTypes = {
	user: PropTypes.object,
	history: PropTypes.object,
	match: PropTypes.object
};
