import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import {
	Container,
	Button,
	Form,
	Jumbotron,
	FormControl,
	Row,
	Col,
	ButtonGroup,
	ToggleButton,
	FormText
} from "react-bootstrap";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import UploadButtons from "../component/uploadBut";
import { ConnectedFocusError } from "focus-formik-error";

const validationSchema = yup.object().shape({
	tipo_membresia: yup.string().required("* Tamaño del equipo es obligatorio"),
	category: yup.string().required("* Categoria del servicio es obligatorio"),
	subcategory: yup
		.string()
		.min(3, "Minimo 3 caracteres")
		.max(50, "Máximo 50 caracteres")
		.required("* Subcategoria de tu servici es obligatorio"),
	tipo_cobro: yup.string().required("* Tipo del cobro es obligatorio"),
	valor: yup.number("Ingresar solamente numero sin , . icon").required("* Valor del servicio es obligatorio"),
	name_servicio: yup
		.string()
		.min(3, "Minimo 3 caracteres")
		.max(50, "Máximo 50 caracteres")
		.required("* Nombre del servicio es obligatorio"),
	descrip_servicio: yup
		.string()
		.max(250, "Máximo 250 caracteres")
		.required("* Descripción del servicio es obligatorio"),
	duracion: yup.string().max(30, "Máximo 30 caracteres"),
	revision: yup
		.string()
		.max(30, "Máximo 30 caracteres")
		.required("* Numero de correcciones es obligatorio"),
	experiencia: yup.string().required("* Experiencia es obligatorio"),
	portafolio: yup.string().max(250, "Máximo 250 caracteres"),
	portafolioFoto: yup.string().required("* Por favor, subir Profil imagen del servicio"),
	merit: yup.string().max(250, "Máximo 250 caracteres")
});

const RegisterService = props => {
	const { store, actions } = useContext(Context);
	const [registrado, setRegistrado] = useState(false);
	const [error, setError] = useState(false);
	const [state, setState] = useState({
		tipo_membresia: null,
		category: null,
		subcategory: null,
		tipo_cobro: null,
		valor: null,
		name_servicio: null,
		descrip_servicio: null,
		duracion: null,
		revision: null,
		proceso: null,
		experiencia: null,
		portafolio: null,
		portafolioFoto: null,
		merit: null,
		serviceRegistrado: null
	});

	const userId = JSON.parse(JSON.stringify(store.user.id));
	const userName = JSON.parse(JSON.stringify(store.user.userName));
	const email = JSON.parse(JSON.stringify(store.user.user));

	const handleSubmit = values => {
		let formData = new FormData();
		formData.append("id_user", userId);
		formData.append("userName", userName);
		formData.append("email", email);
		formData.append("tipo_membresia", values.tipo_membresia);
		formData.append("category", values.category);
		formData.append("subcategory", values.subcategory);
		formData.append("tipo_cobro", values.tipo_cobro);
		formData.append("valor", values.valor);
		formData.append("name_servicio", values.name_servicio);
		formData.append("descrip_servicio", values.descrip_servicio);
		formData.append("duracion", values.duracion);
		formData.append("revision", values.revision);
		formData.append("proceso", values.proceso);
		formData.append("experiencia", values.experiencia);
		formData.append("portafolio", values.portafolio);
		formData.append("merit", values.merit);
		formData.append("portafolioFoto", values.portafolioFoto);

		addServicio(formData);
		setRegistrado(true);
	};

	const addServicio = form => {
		fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
			method: "POST",
			body: form,
			headers: {
				Authorization: `Bearer ${store.user.token}`
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("--servicio registrado --", data);
				setState({
					...state,
					serviceRegistrado: data
				});
				if (data.error === "Missing Authorization Header") {
					sweetAlert("¡Error!", "Missing Authorization Header", "error");
				} else {
					sweetAlert("¡Excelente!", "El servicio ha sido registrado correctamente", "success");
				}
			})
			.catch(error => console.log("Error loading message from backend", error));
	};

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
					</Row>
					<Row>
						<Col>
							<div className="transBox" />
							<h1 className="text-white mt-3">Registra tu servicio</h1>
							<p className="text-white mt-3">
								¡Gracias por tu interés en Cotec!
								<br />
								Conectaremos millones de personas y empresas contigo
								<br />
								Para comenzar, todo lo que necesitas hacer es registrar tu servicio
							</p>
						</Col>
					</Row>
				</div>
				<Jumbotron className="whiteBox shadow-lg p-3 pt-5 pr-5 pl-5">
					<Formik
						initialValues={{
							tipo_membresia: "",
							category: "",
							subcategory: "",
							tipo_cobro: "",
							valor: "",
							name_servicio: "",
							descrip_servicio: "",
							duracion: "",
							revision: "",
							proceso: "",
							experiencia: "",
							portafolio: "",
							portafolioFoto: "",
							merit: ""
						}}
						validationSchema={validationSchema}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							console.log(values);
							handleSubmit(values);
							setSubmitting(true);
							resetForm();
							setSubmitting(false);
						}}>
						{({ values, errors, touched, handleSubmit, handleChange, isSubmitting, setFieldValue }) => (
							<Form>
								<ConnectedFocusError />
								<Form.Group>
									<Form.Label>
										<h5>
											1. Cuántas personas forman tu equipo?<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="tipo_membresia"
										value={values.tipo_membresia}
										className={touched.tipo_membresia && errors.tipo_membresia ? "error" : null}
										onChange={handleChange}
										style={{
											backgroundColor: "lightgray",
											marginBottom: "10px"
										}}>
										<option default>Seleccionar el tipo de membresia</option>
										<option>Freelancer (solo yo)</option>
										<option>Equipo (2-3personas)</option>
										<option>Equipo (4-6personas)</option>
										<option>Equipo (más de 7personas)</option>
									</Form.Control>
									<FormText className="text-muted">
										{touched.tipo_membresia && errors.tipo_membresia ? (
											<div className="error-message">{errors.tipo_membresia}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />

								<Form.Group>
									<Form.Label>
										<h5>
											2. A qué Categoría pertenece tu servicio? / Adicional, escribe una
											subcategoría<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="category"
										value={values.category}
										className={touched.category && errors.category ? "error" : null}
										onChange={handleChange}
										style={{
											backgroundColor: "lightgray",
											marginBottom: "10px"
										}}>
										<option default>Seleccionar categoría de servicio</option>
										<option>Desarrollo_It</option>
										<option>Diseño</option>
										<option>Marketing</option>
										<option>Contabilidad</option>
										<option>Ley</option>
										<option>Otros</option>
									</Form.Control>
									<FormText className="text-muted">
										{touched.category && errors.category ? (
											<div className="error-message">{errors.category}</div>
										) : null}
									</FormText>
								</Form.Group>

								<Form.Group>
									<Form.Control
										as="textarea"
										type="text"
										placeholder="Subcategory ej: E-commerce develop, Mobile develop, Wordpress/Shopify..."
										name="subcategory"
										value={values.subcategory}
										className={touched.subcategory && errors.subcategory ? "error" : null}
										onChange={handleChange}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}
									/>
									<FormText className="text-muted">
										{touched.subcategory && errors.subcategory ? (
											<div className="error-message">{errors.subcategory}</div>
										) : null}
									</FormText>
								</Form.Group>

								<br />

								<Form.Group>
									<Form.Label>
										<h5>
											3. ¿Cuánto cuesta tu servicio?<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="tipo_cobro"
										value={values.tipo_cobro}
										className={touched.tipo_cobro && errors.tipo_cobro ? "error" : null}
										onChange={handleChange}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
										<option default>
											Seleccionar si el tipo de cobro es Por hora o Por proyecto
										</option>
										<option>Hora</option>
										<option>Proyecto</option>
									</Form.Control>
									<FormText className="text-muted">
										{touched.tipo_cobro && errors.tipo_cobro ? (
											<div className="error-message">{errors.tipo_cobro}</div>
										) : null}
									</FormText>
								</Form.Group>

								<Form.Group>
									<Form.Control
										as="textarea"
										type="text"
										placeholder="Ingresa el valor del servicio, ej: 100000"
										name="valor"
										value={values.valor}
										className={touched.valor && errors.valor ? "error" : null}
										onChange={handleChange}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}
									/>
									<FormText className="text-muted">
										{touched.tipo_cobro && errors.tipo_cobro ? (
											<div className="error-message">{errors.valor}</div>
										) : null}
									</FormText>
									<p className="fs-6  text-muted ">
										* La tarifa del servicio de Cotec es del 5% del valor del trabajo realizado
										<br />* Ingresar solamente numero sin , .
									</p>
								</Form.Group>
								<br />

								<Form.Group>
									<Form.Label>
										<h5>
											4. ¿Qué Nombre identifica tu Servicio?
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										type="text"
										placeholder="ej: ¡Crea tu propia página!"
										rows={2}
										name="name_servicio"
										value={values.name_servicio}
										className={touched.name_servicio && errors.name_servicio ? "error" : null}
										onChange={handleChange}
									/>
									<FormText className="text-muted">
										{touched.name_servicio && errors.name_servicio ? (
											<div className="error-message">{errors.name_servicio}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />

								<Form.Group>
									<Form.Label>
										<h5>
											5. Describe las características de tu servicio
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: mi servicio es ..."
										rows={3}
										type="text"
										name="descrip_servicio"
										className={touched.descrip_servicio && errors.descrip_servicio ? "error" : null}
										value={values.descrip_servicio}
										onChange={handleChange}
									/>
									<FormText className="fs-6 text-muted">
										{touched.descrip_servicio && errors.descrip_servicio ? (
											<div className="error-message">{errors.descrip_servicio}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />

								<Form.Group>
									<Form.Label>
										<h5>6. Plazo estimado para ejecutar el proyecto</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: 1mes, 15 dias o dependiendo el proyecto"
										rows={2}
										type="text"
										name="duracion"
										value={values.duracion}
										className={touched.duracion && errors.duracion ? "error" : null}
										onChange={handleChange}
									/>
									<FormText className="fs-6 text-muted">
										{touched.duracion && errors.duracion ? (
											<div className="error-message">{errors.duracion}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />
								<Form.Group>
									<Form.Label>
										<h5>
											7. Numero de correcciones permitidas a tu cliente previo a entregable final
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: 1 vez o más"
										rows={2}
										type="text"
										name="revision"
										value={values.revision}
										className={touched.revision && errors.revision ? "error" : null}
										onChange={handleChange}
									/>
									<FormText className="fs-6 text-muted">
										{touched.revision && errors.revision ? (
											<div className="error-message">{errors.revision}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />
								<Form.Group>
									<Form.Label>
										<h5>
											8. incluye la imagen de tu servicio <span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.File
										id="file"
										name="portafolioFoto"
										type="file"
										className={touched.portafolioFoto && errors.portafolioFoto ? "error" : null}
										onChange={event => {
											setFieldValue("portafolioFoto", event.target.files[0]);
										}}
									/>
								</Form.Group>
								<br />
								<Form.Group>
									<Form.Label>
										<h5>9. Portafolio que quisieras mostrar a tus potenciales clientes</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: www.virtualex.cl"
										rows={2}
										type="text"
										name="portafolio"
										value={values.portafolio}
										className={touched.portafolio && errors.portafolio ? "error" : null}
										onChange={handleChange}
									/>
									<FormText className="fs-6 text-muted">
										{touched.portafolio && errors.portafolio ? (
											<div className="error-message">{errors.portafolio}</div>
										) : null}
									</FormText>
								</Form.Group>
								<Form.Group>
									<Form.Label>
										<h5>
											10. ¿Cuántos años de Experiencia tienes realizando este servicio?
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="experiencia"
										value={values.experiencia}
										className={touched.experiencia && errors.experiencia ? "error" : null}
										onChange={handleChange}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
										<option default>Seleccionar rango de años</option>
										<option>1 año</option>
										<option>2 años</option>
										<option>3 años</option>
										<option>4 años</option>
										<option>5-10 años</option>
										<option>10-15 años</option>
										<option>Más de 15 años</option>
									</Form.Control>
									<FormText className="fs-6 text-muted">
										{touched.experiencia && errors.experiencia ? (
											<div className="error-message">{errors.experiencia}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />
								<Form.Group>
									<Form.Label>
										<h5>11. Detalla los trabajos que has realizado</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: He realizado mas de 100 sitios web a nivel mundial"
										rows={3}
										type="text"
										name="merit"
										value={values.merit}
										className={touched.merit && errors.merit ? "error" : null}
										onChange={handleChange}
									/>
									<FormText className="fs-6 text-muted">
										{touched.merit && errors.merit ? (
											<div className="error-message">{errors.merit}</div>
										) : null}
									</FormText>
								</Form.Group>

								<br />
								<Row style={{ justifyContent: "center" }}>
									{registrado !== false ? (
										<ButtonGroup className="mb-2">
											<Link to="/home">
												<Button
													variant="primary"
													size="lg"
													style={{ marginBottom: "40px", marginTop: "40px" }}>
													<strong>volver a home</strong>
												</Button>
											</Link>
											<Button
												variant="outline-primary"
												size="lg"
												href="#frist"
												style={{ marginBottom: "40px", marginTop: "40px" }}
												onClick={() => setRegistrado(false)}>
												<strong>Registrar otro servicio</strong>
											</Button>
										</ButtonGroup>
									) : (
										<Button
											variant="primary"
											size="lg"
											type="submit"
											onClick={handleSubmit}
											style={{ marginBottom: "40px", marginTop: "40px" }}>
											<strong>Registra tu servicio</strong>
										</Button>
									)}
									{JSON.stringify(store.user.user)}
									{/* // {JSON.stringify(tipo_membresia)}
									// {JSON.stringify(category)}
									// {JSON.stringify(subcategory)}
									// {JSON.stringify(tipo_cobro)}
									// {JSON.stringify(valor)}
									// {JSON.stringify(name_servicio)}
									// {JSON.stringify(descrip_servicio)}
									// {JSON.stringify(experiencia)}
									// {JSON.stringify(portafolio)}
									// {JSON.stringify(portafolioFoto)}
									// {JSON.stringify(merit)} */}
								</Row>
							</Form>
						)}
					</Formik>
				</Jumbotron>
				<div className="transBox" />
				<div className="transBox" />
				<div className="transBox" />
			</Container>
			<Footer />
		</div>
	);
};

export default withRouter(RegisterService);

RegisterService.propTypes = {
	id_user: PropTypes.number,
	history: PropTypes.object
};
