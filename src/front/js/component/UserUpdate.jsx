import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormControl, Row, Col, ButtonGroup, ToggleButton, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const UserUpdate = props => {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [typeUser, setTypeuser] = useState("");
	const [userName, setUsername] = useState("");

	return (
		<>
			<h2>
				<i className="fas fa-user-circle"></i> Mis Datos
			</h2>
			<Jumbotron className="whiteBox shadow-lg p-3 pt-5 pr-5 pl-5">
				<Form>
					<Form.Group as={Row} controlId="formHorizontaluserName">
						<Col sm={1}></Col>
						<Form.Label column sm={3}>
							<h6>Nombre de usuario</h6>
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="text"
								value={userName}
								placeholder={props.userName}
								onChange={e => setUsername(e.target.value)}></Form.Control>
						</Col>
						<Col sm={1}></Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalemail">
						<Col sm={1}></Col>
						<Form.Label column sm={3}>
							<h6>Correo electrónico</h6>
						</Form.Label>
						<Col sm={6}>
							<Form.Control
								type="email"
								value={email}
								placeholder={props.email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Col>
						<Col sm={1}></Col>
					</Form.Group>
					<Row style={{ justifyContent: "center" }}>
						<Button
							variant="primary"
							size="lg"
							type="submit"
							style={{ marginBottom: "40px", width: "300px" }}
							onClick={e => handlerClick(e)}>
							<strong>Editar mis datos</strong>
						</Button>
					</Row>
				</Form>
			</Jumbotron>
		</>
	);
};

export default withRouter(UserUpdate);

UserUpdate.propTypes = {
	userName: PropTypes.string,
	email: PropTypes.string,
	history: PropTypes.object
};
