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

const validationSchema = yup.object().shape({
	tipo_membresia: yup.string().required("* 1. Tamaño del equipo es obligatorio"),
	category: yup.string().required("* 2. Categoria del servicio es obligatorio"),
	subcategory: yup
		.string()
		.min(3, "Minimo 3 caracteres")
		.max(50, "Máximo 50 caracteres")
		.required("* 2. Subcategoria de tu servici es obligatorio"),
	tipo_cobro: yup.string().required("* 3. Tipo del cobro es obligatorio"),
	valor: yup.number("Ingresar solamente numero sin , . icon").required("* 3. Valor del servicio es obligatorio"),
	name_servicio: yup
		.string()
		.min(3, "Minimo 3 caracteres")
		.max(50, "Máximo 50 caracteres")
		.required("* 4. Nombre del servicio es obligatorio"),
	descrip_servicio: yup
		.string()
		.max(250, "Máximo 250 caracteres")
		.required("* 5. Descripción del servicio es obligatorio"),
	duracion: yup.string().max(30, "Máximo 30 caracteres"),
	revision: yup
		.string()
		.max(30, "Máximo 30 caracteres")
		.required("* 7. Numero de correcciones es obligatorio"),
	experiencia: yup.string().required("* 8. Experiencia es obligatorio"),
	portafolio: yup.string().max(250, "Máximo 250 caracteres"),
	merit: yup.string().max(250, "Máximo 250 caracteres")
});

const RegisterService = props => {
	const { store, actions } = useContext(Context);

	const handleSubmitapi = values => {
		if (
			values.tipo_membresia &&
			values.category &&
			values.subcategory &&
			values.tipo_cobro &&
			values.valor &&
			values.name_servicio &&
			values.descrip_servicio &&
			values.experiencia
		) {
			const usuario = JSON.parse(JSON.stringify(store.user.id));
			const userName = JSON.parse(JSON.stringify(store.user.userName));
			const email = store.user.user;
			actions.addServicio({
				id_user: usuario,
				userName: userName,
				tipo_membresia: values.tipo_membresia,
				category: values.category,
				subcategory: values.subcategory,
				tipo_cobro: values.tipo_cobro,
				valor: values.valor,
				name_servicio: values.name_servicio,
				descrip_servicio: values.descrip_servicio,
				duracion: values.duracion,
				revision: values.revision,
				proceso: values.proceso,
				experiencia: values.experiencia,
				portafolio: values.portafolio,
				merit: values.merit,
				email: email
			});
			console.log("pasando todas validacion");
			props.history.push("/home");
		} else {
			sweetAlert("Error", "Faltan datos por registrar el servicio", "error");
		}
	};
	useEffect(() => {
		actions.getToken();
	}, []);
	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(https://3000-ivory-frog-jw0g6m41.ws-us03.gitpod.io/backGround.png)`
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
								Nuestra misión es conectar millones de personas con empresas
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
							merit: ""
						}}
						validationSchema={validationSchema}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							handleSubmitapi(values);
							setSubmitting(true);
							resetForm();
							setSubmitting(false);
						}}>
						{({ values, errors, touched, handleSubmit, handleChange, isSubmitting }) => (
							<Form onSubmit={handleSubmit}>
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
										//isInvalid={!!errors.tipo_membresia}
										style={{
											backgroundColor: "lightgray",
											marginBottom: "10px"
										}}>
										<option default>Selecciona la cantidad de personas</option>
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
											subcategoría
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="category"
										value={values.category}
										className={touched.category && errors.category ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.category}
										style={{
											backgroundColor: "lightgray",
											marginBottom: "10px"
										}}>
										<option default>Selecciona la categoría de tu servicio</option>
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
										placeholder="Escribe una Subcategoría ej: E-commerce develop, Mobile develop, Wordpress/Shopify..."
										name="subcategory"
										value={values.subcategory}
										className={touched.subcategory && errors.subcategory ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.valor}
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
										//isInvalid={!!errors.tipo_cobro}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
										<option default>
											Seleccionar si el tipo de cobro es Por hora o Por proyecto
										</option>
										<option>Hora en CLP</option>
										<option>Proyecto en CLP</option>
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
										placeholder="Ingresa solo dígitos en este campo y sin puntos!"
										name="valor"
										value={values.valor}
										className={touched.valor && errors.valor ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.valor}
										style={{ backgroundColor: "lightgray", marginBottom: "10px" }}
									/>
									<FormText className="text-muted">
										{touched.tipo_cobro && errors.tipo_cobro ? (
											<div className="error-message">{errors.valor}</div>
										) : null}
									</FormText>
									<p className="fs-6  text-muted ">
										* Recuerda que la comisión que Cotec descontará, es el 5% del valor por trabajo
										terminado.
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
										placeholder="ej: Diseño de Páginas web con React"
										rows={2}
										name="name_servicio"
										value={values.name_servicio}
										className={touched.name_servicio && errors.name_servicio ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.name_servicio}
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
										placeholder="ej: Mi servicio es el mejor porque ..."
										rows={3}
										type="text"
										name="descrip_servicio"
										className={touched.descrip_servicio && errors.descrip_servicio ? "error" : null}
										value={values.descrip_servicio}
										onChange={handleChange}
										//isInvalid={!!errors.descrip_servicio}
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
										placeholder="ej: 1 mes, 15 dias o dependiendo el proyecto"
										rows={2}
										type="text"
										name="duracion"
										value={values.duracion}
										className={touched.duracion && errors.duracion ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.duracion}
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
										//isInvalid={!!errors.revision}
									/>
									<FormText className="fs-6 text-muted">
										{touched.revision && errors.revision ? (
											<div className="error-message">{errors.revision}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />
								{/* <Form.Group>
							<Form.Label>
								<h5>Metodología para ejecución </h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: Scrum, Html..."
								rows={2}
								type="text"
								name="proceso"
								onChange={e => setProceso(e.target.value)}
								//isInvalid={!!errors.proceso}
							/>
						</Form.Group>
						<br /> */}

								<Form.Group>
									<Form.Label>
										<h5>
											8. ¿Cuántos años de Experiencia tienes realizando este servicio?
											<span style={{ color: "red" }}>*</span>
										</h5>
									</Form.Label>
									<Form.Control
										as="select"
										name="experiencia"
										value={values.experiencia}
										className={touched.experiencia && errors.experiencia ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.experiencia}
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
										<h5>
											9. Déjanos un link o repositorio donde podamos conocer más de tu trabajo!
										</h5>
									</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="ej: Link Instagram, Facebook, Dirección de página web o cuenta más sobre tu trabajo"
										rows={2}
										type="text"
										name="portafolio"
										value={values.portafolio}
										className={touched.portafolio && errors.portafolio ? "error" : null}
										onChange={handleChange}
										//isInvalid={!!errors.portafolio}
									/>
									<FormText className="fs-6 text-muted">
										{touched.portafolio && errors.portafolio ? (
											<div className="error-message">{errors.portafolio}</div>
										) : null}
									</FormText>
								</Form.Group>
								<br />

								<Form.Group>
									<Form.Label>
										<h5>10. Detalla los trabajos que haz realizado</h5>
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
										//isInvalid={!!errors.merit}
									/>
									<FormText className="fs-6 text-muted">
										{touched.merit && errors.merit ? (
											<div className="error-message">{errors.merit}</div>
										) : null}
									</FormText>
								</Form.Group>
								<Row style={{ justifyContent: "center" }}>
									<Button
										variant="primary"
										size="lg"
										type="submit"
										disable={isSubmitting}
										style={{ marginBottom: "40px", marginTop: "40px" }}
										onClick={e => {
											handleSubmit(e);
										}}
										href="/home">
										<strong>Registra tu servicio</strong>
									</Button>
									{/* {JSON.stringify(store.user.id)}
							{JSON.stringify(tipo_membresia)}
							{JSON.stringify(category)}
							{JSON.stringify(subcategory)}
							{JSON.stringify(tipo_cobro)}
							{JSON.stringify(valor)}
							{JSON.stringify(name_servicio)}
							{JSON.stringify(descrip_servicio)}
							{JSON.stringify(experiencia)}
							{JSON.stringify(portafolio)}
							{JSON.stringify(merit)} */}
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
