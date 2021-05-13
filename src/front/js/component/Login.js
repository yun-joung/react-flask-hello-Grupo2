import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavDropdown, Dropdown, Row } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import PropTypes from "prop-types";
// import useUserSession from "./userSession";

// const responseGoogle = (response) => {
//   console.log(response);
// }

function MyVerticallyCenteredModal(props) {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

	const handleSubmit = e => {
		e.preventDefault();
		actions.setLogin({
			email: email,
			password: password
		});
	};
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton style={{ paddingRight: "40px", paddingLeft: "40px" }}>
				<Modal.Title id="contained-modal-title-vcenter">Inicia Sesión</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{store.user.isLogin ? (
					<div className="text-center mt-3 mb-5">
						{/* <span>User: {JSON.stringify(store.user)}</span> */}
						La sesión ha sido iniciada
						<Row style={{ justifyContent: "center" }}>
							<Link to="/home">
								<Button
									variant="primary"
									size="lg"
									type="submit"
									style={{ marginBottom: "40px", marginTop: "40px" }}>
									<strong>Volver a home</strong>
								</Button>
							</Link>
						</Row>
					</div>
				) : (
					<Form style={{ paddingRight: "30px", paddingLeft: "20px", marginTop: "50px" }}>
						<Form.Group controlId="formBasicEmail">
							{/* <Form.Label>Email address</Form.Label> */}
							<Form.Control
								type="email"
								placeholder="Ingresa tu correo electrónico"
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							{/* <Form.Label>Password</Form.Label> */}
							<Form.Control
								type="password"
								placeholder="Ingresa tu contraseña"
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="primary"
							size="lg"
							type="submit"
							block
							style={{ marginTop: "70px" }}
							onClick={e => {
								handleSubmit(e);
							}}>
							Ingresar
						</Button>
						<Form.Text
							className="text-muted"
							style={{ textAlign: "center", marginTop: "20px", marginBottom: "60px" }}>
							¿Olvidaste tu contraseña?
							<Link to="/passwordrecovery">
								<p> Recuperala aquí </p>
							</Link>
						</Form.Text>

						{/* <hr/>

                        <GoogleLogin
                        clientId=""
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
					</Form>
				)}
			</Modal.Body>
		</Modal>
	);
}

export function LoginModal(props) {
	const [modalShow, setModalShow] = React.useState(false);
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [width, setWidth] = React.useState(window.innerWidth);

	useEffect(() => {
		actions.showUserFavorites();
	}, []);

	return (
		<>
			{store.user.isLogin ? (
				<>
					<NavDropdown
						//{ width > 590 ? title="Mi cuenta" : title=<i class="far fa-user-circle"></i>}
						title="Mi cuenta"
						id="basic-nav-dropdown"
						className="float-right px-0"
						style={{ paddingRight: "0px" }}>
						<NavDropdown.Item as={Link} to="/MiDato">
							Mis datos
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/MiCompra">
							Mis Compras
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/registerservice">
							Registrar servicio
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							onClick={() => {
								actions.cerrarSesion(history);
								actions.getToken();
								setModalShow(false);
							}}>
							Salir
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Mi favoritos" id="basic-nav-dropdown" className="float-right mr-2">
						{/* <NavDropdown.Item href="#action/3.1" style={{ width: "250px", paddingRight: "0px" }}>
							{JSON.stringify(store.favoritos.id)}
						</NavDropdown.Item> */}
						{store.favoritos.length === 0 ? (
							<NavDropdown.Item style={{ width: "250px" }}> No hay favorito</NavDropdown.Item>
						) : (
							" "
						)}
						{store.favoritos.map((item, index) => {
							return (
								<NavDropdown.Item
									as={Link}
									to={"/servicio/category/" + item.id_servicio_registrados}
									style={{ width: "250px" }}
									key={index}>
									{item.name_servicio}
									<Button
										variant="light"
										className="float-right"
										onClick={() => actions.eliminaFavorito(item.id)}>
										<i className="fas fa-trash-alt float-right" />
									</Button>
								</NavDropdown.Item>
							);
						})}
					</NavDropdown>
				</>
			) : (
				<>
					<Link to="/register">
						<button className="btn btn-primary float-right" style={{ borderRadius: "1.75rem" }}>
							&nbsp;&nbsp;&nbsp;Registrate&nbsp;&nbsp;&nbsp;
						</button>
					</Link>
					<Button
						variant="outline-primary "
						className="no-outline float-right mr-2"
						style={{ borderRadius: "1.75rem" }}
						onClick={() => setModalShow(true)}>
						Ingresa
					</Button>
					<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
				</>
			)}
		</>
	);
}

export function LoginModalA() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<Button variant="outline-light " className="no-outline float-right mt-5" onClick={() => setModalShow(true)}>
				Ingresa
			</Button>
			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}

LoginModal.propTypes = {
	user: PropTypes.object,
	name_servicio: PropTypes.string,
	id_user: PropTypes.number,
	id: PropTypes.number,
	favorito: PropTypes.object
};

Modal.propTypes = {
	onHide: PropTypes.func,
	show: PropTypes.bool
};
