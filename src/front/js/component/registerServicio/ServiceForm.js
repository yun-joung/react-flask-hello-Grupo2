import React, { useContext, useState, useEffect } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
import { logoBlanco, man } from "../../../img/image";
import { withRouter, Link } from "react-router-dom";
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
import { Footer } from "../../component/footer";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import UploadButtons from "../../component/uploadBut";
import { ConnectedFocusError } from "focus-formik-error";
import NumberFormat from "react-number-format";

const validationSchema = yup.object().shape({
	category: yup.string().required("* Categoria del servicio es obligatorio"),
	subcategory: yup
		.string()
		.min(3, "Minimo 3 caracteres")
		.max(50, "Máximo 50 caracteres")
		.required("* Subcategoria de tu servici es obligatorio"),
	tipo_cobro: yup.string().required("* Tipo del cobro es obligatorio"),
	valor: yup.string().required("* Valor del servicio es obligatorio"),
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
	portafolioFoto: yup.string().required("* Por favor, subir Profil imagen del servicio"),
	portafolio: yup.string().max(250, "Máximo 250 caracteres")
});

const ServiceForm = props => {
	return (
		<div className="p-5">
			<Formik
				initialValues={{
					category: "",
					subcategory: "",
					tipo_cobro: "",
					valor: "",
					name_servicio: "",
					descrip_servicio: "",
					duracion: "",
					revision: "",
					proceso: "",
					portafolioFoto: "",
					portafolio: ""
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
						<h2 className="mb-5" style={{ textAlign: "center" }}>
							{" "}
							Ingresar las informaciones de tu Servicio{" "}
						</h2>
						<Form.Group>
							<Form.Label>
								<h5 style={{ fontWeight: "400" }}>
									1. ¿A qué Categoría y subcategoría pertenece tu servicio?{" "}
									<span style={{ color: "red" }}>*</span>
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
								<h5 style={{ fontWeight: "400" }}>
									2. ¿Cuánto cuesta tu servicio?<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_cobro"
								value={values.tipo_cobro}
								className={touched.tipo_cobro && errors.tipo_cobro ? "error" : null}
								onChange={handleChange}
								style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
								<option default>Seleccionar si el tipo de cobro es Por hora o Por proyecto</option>
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
							<NumberFormat
								thousandSeparator={"."}
								decimalSeparator={","}
								prefix={"$"}
								placeholder="Ingresa el valor del servicio, ej: 100000"
								name="valor"
								value={values.valor}
								className={touched.valor && errors.valor ? "error NumberFormatB" : "NumberFormat"}
								onChange={handleChange}
							/>
							<FormText className="text-muted">
								{touched.tipo_cobro && errors.tipo_cobro ? (
									<div className="error-message">{errors.valor}</div>
								) : null}
							</FormText>
							<p className="fs-6  text-muted ">
								* La tarifa del servicio de Cotec es del 5% del valor del trabajo realizado
							</p>
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label>
								<h5 style={{ fontWeight: "400" }}>
									3. ¿Qué Nombre identifica tu Servicio?
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
								<h5 style={{ fontWeight: "400" }}>
									4. Describe las características de tu servicio
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
								<h5 style={{ fontWeight: "400" }}>5. Plazo estimado para ejecutar el proyecto</h5>
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
								<h5 style={{ fontWeight: "400" }}>
									6. Numero de correcciones permitidas a tu cliente previo a entregable final
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
								<h5 style={{ fontWeight: "400" }}>
									7. incluye la imagen de tu servicio <span style={{ color: "red" }}>*</span>
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
								<h5 style={{ fontWeight: "400" }}>
									8. Portafolio que quisieras mostrar a tus potenciales clientes
								</h5>
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
						<br />
						<Row>
							<Button
								variant="primary"
								size="lg"
								type="submit"
								onClick={handleSubmit}
								className="mx-auto my-5">
								<strong>Continua</strong>
							</Button>
						</Row>
					</Form>
				)}
			</Formik>
			<div className="transBox" />
			<div className="transBox" />
			<div className="transBox" />
		</div>
	);
};

export default withRouter(ServiceForm);

ServiceForm.propTypes = {};
