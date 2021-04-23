import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, FormControl, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import * as yup from "yup";
import swal from "sweetalert";

const Register = props => {
	const { store, actions } = useContext(Context);
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [typeUser, setTypeuser] = useState("");
	const [userName, setUsername] = useState("");

	const ER_Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const ER_PassWord = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
	const Inputvalues = {
		email: yup
			.string()
			.required("* El email es obligatorio")
			.matches(ER_Email, "* Formato de email inválido"),
		password: yup
			.string()
			.min(8, "*  Al menos 8 carácteres. Una mezcla de letras mayúsculas, minúsculas y numero.")
			.required("*  La contraseña es obligatorio")
			.matches(ER_PassWord, "*  Formato de contraseña no válido"),
		confirmPassword: yup.string().when("password", {
			is: val => (val && val.length > 0 ? true : false),
			then: yup.string().oneOf([yup.ref("password")], "Ambas contraseñas deben ser iguales")
		}),
		userName: yup
			.string()
			.min(2, "Minimo 2 caracteres")
			.max(100, "Máximo 100 caracteres")
			.required("* El nombre de usuario obligatorio")
	};

	const validationSchema = yup.object().shape(Inputvalues);

	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<Formik
			initialValues={{ email: "", password: "", confirmPassword: "", tipo_user: "", userName: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				actions.setRegister(values);
				setSubmitting(true);
				resetForm();
				setSubmitting(false);
				setTimeout;
			}}>
			{({
				values,
				errors,
				touched,
				handleBlur,
				handlerClick,
				isSubmitting,
				isValid,
				handleChange,
				handleSubmit
			}) => (
				<div
					className="background"
					style={{
						backgroundImage: `url(https://3000-apricot-egret-pn15p368.ws-us03.gitpod.io/backGround.png)`
					}}>
					<Container>
						<div>
							<Row>
								<Link to="/">
									<Col xs={4}>
										<img
											src={logoBlanco}
											width="110"
											height="33"
											className="d-inline-block align-top mt-5"
											alt="cotec"
										/>
									</Col>
								</Link>
							</Row>
							<Row>
								<Col md={2} />
								<Col md={7}>
									<div className="transBox" />
									<h2 className="text-white mt-3">Obtenga su cuenta gratis</h2>
								</Col>
							</Row>
							<div
								className="container iconBox shadow-lg p-3 pt-5"
								style={{
									height: "100%",
									backgroundColor: "white",
									borderRadius: "10px",
									width: "730px"
								}}>
								{store.user.isLogin ? (
									<Container>
										<Row>
											<Col className="text-center mt-3 mb-5">
												{/* <span>User: {JSON.stringify(store.user)}</span> */}
												La sesión ya se encuentra iniciada
											</Col>
										</Row>
										<Row style={{ justifyContent: "center" }}>
											<Link to="/home">
												<Button
													variant="primary"
													size="lg"
													type="button"
													style={{ marginBottom: "40px", marginTop: "40px" }}
													href="/home">
													<strong>Volver a home</strong>
												</Button>
											</Link>
										</Row>
									</Container>
								) : (
									<Form noValidate onSubmit={handleSubmit} className="justify-contents-center">
										<Form.Group as={Row} controlId="validationFormik01">
											<Col sm={1}></Col>
											<Form.Label as={Col} sm={3}>
												<h6>Nombre de usuario</h6>
											</Form.Label>
											<Col sm={6}>
												<Form.Control
													type="text"
													name="userName"
													value={values.userName}
													onChange={handleChange}
													isInvalid={!!errors.userName}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.userName}
												</Form.Control.Feedback>
											</Col>
											<Col sm={1}></Col>
										</Form.Group>

										<Form.Group as={Row} controlId="validationFormik02">
											<Col sm={1}></Col>
											<Form.Label as={Col} sm={3}>
												<h6>Correo electrónico</h6>
											</Form.Label>
											<Col sm={6}>
												<Form.Control
													type="email"
													name="email"
													value={values.email}
													onChange={handleChange}
													isInvalid={!!errors.email}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.email}
												</Form.Control.Feedback>
											</Col>
											<Col sm={1}></Col>
										</Form.Group>

										<Form.Group as={Row} controlId="formHorizontalpassword">
											<Col sm={1}></Col>
											<Form.Label as={Col} sm={3}>
												<h6>Contraseña</h6>
											</Form.Label>
											<Col sm={6}>
												<Form.Control
													type="password"
													name="password"
													value={values.password}
													onChange={handleChange}
													isInvalid={!!errors.password}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.password}
												</Form.Control.Feedback>
											</Col>
											<Col sm={1}></Col>
										</Form.Group>
										<Form.Group as={Row} className="pb-3" controlId="formHorizontalconfirmPassword">
											<Col sm={1}></Col>
											<Form.Label as={Col} sm={3}>
												<h6>Confirmar contraseña</h6>
											</Form.Label>
											<Col sm={6}>
												<Form.Control
													type="password"
													name="confirmPassword"
													onChange={handleChange}
													isInvalid={!!errors.confirmPassword}
												/>
												<Form.Control.Feedback type="invalid">
													{errors.confirmPassword}
												</Form.Control.Feedback>
											</Col>
											<Col sm={1}></Col>
										</Form.Group>
										<div className="row" style={{ justifyContent: "center" }}>
											<div role="group" aria-labelledby="my-radio-group" id="my-radio-group">
												<label>
													<Field type="radio" name="tipo_user" value="seller" />
													<span>Quiero ofrecer mis servicios</span>
												</label>{" "}
												<label>
													<Field type="radio" name="tipo_user" value="buyer" />
													<span>Quiero contratar servicios</span>
												</label>
												<div style={{ color: "white" }}>Tipo de user: {values.tipo_user}</div>
											</div>
										</div>
										<Row style={{ justifyContent: "center" }}>
											<Button
												variant="primary"
												size="lg"
												type="submit"
												style={{ marginBottom: "40px", width: "300px" }}>
												<strong>Crear cuenta</strong>
											</Button>
										</Row>
									</Form>
								)}
							</div>
						</div>
					</Container>
				</div>
			)}
		</Formik>
	);
};

export default withRouter(Register);

Register.propTypes = {
	history: PropTypes.object
};
