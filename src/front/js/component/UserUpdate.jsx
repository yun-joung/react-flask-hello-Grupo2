import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormControl, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Register = props => {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [typeUser, setTypeuser] = useState("");
	const [userName, setUsername] = useState("");

	return (



<Form>
								<Form.Group as={Row} controlId="formHorizontaluserName">
									<Col sm={1}></Col>
									<Form.Label column sm={3}>
										<h6>Nombre de usuario</h6>
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type="user"
											value={userName}
											onChange={e => setUsername(e.target.value)}
										/>
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
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
									<Col sm={1}></Col>
								</Form.Group>

								<Form.Group as={Row} controlId="formHorizontalpassword">
									<Col sm={1}></Col>
									<Form.Label column sm={3}>
										<h6>Contraseña</h6>
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type="password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
									<Col sm={1}></Col>
								</Form.Group>
								<Form.Group as={Row} className="pb-3" controlId="formHorizontalpassword2">
									<Col sm={1}></Col>
									<Form.Label column sm={3}>
										<h6>Confirmar contraseña</h6>
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type="password"
											value={password2}
											onChange={e => setPassword2(e.target.value)}
										/>
									</Col>
									<Col sm={1}></Col>
								</Form.Group>
								<div className="row" style={{ justifyContent: "center" }}>
									<ButtonGroup toggle className="mb-5">
										<ToggleButton
											type="checkbox"
											variant="outline-primary"
											checked={checked1}
											value="1"
											onChange={e => {
												setChecked1(e.currentTarget.checked);
												setTypeuser("offerer");
											}}>
											Quiero ofrecer mis servicios
										</ToggleButton>
										&nbsp;&nbsp;&nbsp;&nbsp;
										<ToggleButton
											type="checkbox"
											variant="primary"
											checked={checked2}
											value="1"
											onChange={e => {
												setChecked2(e.currentTarget.checked);
												setTypeuser("buyer");
											}}>
											Quiero contratar servicios
										</ToggleButton>
									</ButtonGroup>
								</div>
								<Row style={{ justifyContent: "center" }}>
									<Link to="/registerservice">
										<Button
											variant="primary"
											size="lg"
											type="submit"
											style={{ marginBottom: "40px", width: "300px" }}
											onClick={e => handlerClick(e)}>
											<strong>Crear cuenta</strong>
										</Button>
									</Link>
								</Row>
							</Form>

                            