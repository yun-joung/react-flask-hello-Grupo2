import React, { useContext, useEffect } from "react";
import "../../styles/index.scss";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormControl, Navbar, Nav, Col, Container } from "react-bootstrap";
import { logoAzul } from "../../img/image";
import { LoginModal } from "./Login";
import PropTypes from "prop-types";
import SearchBar from "./searchbar.jsx";
import { Context } from "../store/appContext";

const MyNavbar = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getToken();
	}, []);

	if (
		props.location.pathname === "/" ||
		props.location.pathname === "/register" ||
		props.location.pathname === "/registerservice"
	) {
		return " ";
	} else {
		return (
			<>
				<nav className="navbar navbar-light my-3">
					<Container>
						<Col sm={3} md={3} lg={3} xl={4}>
							<Link to="/home">
								<img
									src={logoAzul}
									width="110"
									height="33"
									className="d-inline-block align-top mt-2"
									alt="cotec logo"
								/>
							</Link>
						</Col>
						<Col sm={3} md={4} lg={5} xl={5}>
							<SearchBar />
						</Col>
						<Col sm={6} md={5} lg={4} xl={3} className="px-0">
							<div>
								<LoginModal user={store.user} />
							</div>
						</Col>
					</Container>
				</nav>
				<Navbar className="shadow" bg="light" expand="lg" style={{ borderBottom: "1px solid #A7A7A8 " }}>
					<Container>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="navbar-nav justify-content-between w-100">
								{/* <Nav.Link as={Link} to="/home" >Home</Nav.Link> */}
								<Nav.Link href="/servicio/Desarrollo_It" className="h5 text-dark ">
									Desarrolloar/IT
								</Nav.Link>
								<Nav.Link href="/servicio/Diseño" className="h5 text-dark ">
									Diseño
								</Nav.Link>
								<Nav.Link href="/servicio/Contabilidad" className="h5 text-dark ">
									Contabilidad
								</Nav.Link>
								<Nav.Link href="/servicio/Marketing" className="h5 text-dark ">
									Marketing
								</Nav.Link>
								<Nav.Link href="/servicio/Ley" className="h5 text-dark ">
									Ley/Derecho
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
};
export default withRouter(MyNavbar);

MyNavbar.propTypes = {
	location: PropTypes.object
};
