import React, { useContext, useState, useEffect } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
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
import NumberFormat from "react-number-format";

const ServiceForm = ({ handleNext, handleBack }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-5">
			<Form>
				<h2 className="mb-5" style={{ textAlign: "center" }}>
					{" "}
					Ingresar las informaciones de tu Servicio{" "}
				</h2>
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
							1. ¿A qué Categoría y subcategoría pertenece tu servicio?{" "}
							<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="category"
						value={store.serviceRegistrado.category}
						// className={touched.category && errors.category ? "error" : null}
						onChange={actions.handleChangeService}
						style={{
							backgroundColor: "#F2F2F2",
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
					{/* <FormText className="text-muted">
								{touched.category && errors.category ? (
									<div className="error-message">{errors.category}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<Form.Group>
					<Form.Control
						as="textarea"
						type="text"
						placeholder="ej: E-commerce develop, Mobile develop, Wordpress/Shopify..."
						name="subcategory"
						value={store.serviceRegistrado.subcategory}
						// className={touched.subcategory && errors.subcategory ? "error" : null}
						onChange={actions.handleChangeService}
						style={{ backgroundColor: "#F2F2F2", marginBottom: "10px" }}
					/>
					{/* <FormText className="text-muted">
								{touched.subcategory && errors.subcategory ? (
									<div className="error-message">{errors.subcategory}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
							2. ¿Cuánto cuesta tu servicio?<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="tipo_cobro"
						value={store.serviceRegistrado.tipo_cobro}
						// className={touched.tipo_cobro && errors.tipo_cobro ? "error" : null}
						onChange={actions.handleChangeService}
						style={{ backgroundColor: "#F2F2F2", marginBottom: "10px" }}>
						<option default>Seleccionar si el tipo de cobro es Por hora o Por proyecto</option>
						<option>Hora</option>
						<option>Proyecto</option>
					</Form.Control>
					{/* <FormText className="text-muted">
								{touched.tipo_cobro && errors.tipo_cobro ? (
									<div className="error-message">{errors.tipo_cobro}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<Form.Group>
					<NumberFormat
						thousandSeparator={"."}
						decimalSeparator={","}
						prefix={"$"}
						placeholder="ej: 100.000"
						name="valor"
						value={store.serviceRegistrado.valor}
						className="NumberFormat"
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="text-muted">
								{touched.tipo_cobro && errors.tipo_cobro ? (
									<div className="error-message">{errors.valor}</div>
								) : null}
							</FormText> */}
					<p className="fs-6  text-muted ">
						* La tarifa del servicio de Cotec es del 5% del valor del trabajo realizado
					</p>
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
							3. ¿Qué Nombre identifica tu Servicio?
							<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="textarea"
						type="text"
						placeholder="ej: ¡Crea tu propia página!"
						rows={1}
						name="name_servicio"
						value={store.serviceRegistrado.name_servicio}
						// className={touched.name_servicio && errors.name_servicio ? "error" : null}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="text-muted">
								{touched.name_servicio && errors.name_servicio ? (
									<div className="error-message">{errors.name_servicio}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
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
						// className={touched.descrip_servicio && errors.descrip_servicio ? "error" : null}
						value={store.serviceRegistrado.descrip_servicio}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="fs-6 text-muted">
								{touched.descrip_servicio && errors.descrip_servicio ? (
									<div className="error-message">{errors.descrip_servicio}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">5. Plazo estimado para ejecutar el proyecto</h5>
					</Form.Label>
					<Form.Control
						as="textarea"
						placeholder="ej: 1mes, 15 dias o dependiendo el proyecto"
						rows={2}
						type="text"
						name="duracion"
						value={store.serviceRegistrado.duracion}
						// className={touched.duracion && errors.duracion ? "error" : null}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="fs-6 text-muted">
								{touched.duracion && errors.duracion ? (
									<div className="error-message">{errors.duracion}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
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
						value={store.serviceRegistrado.revision}
						// className={touched.revision && errors.revision ? "error" : null}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="fs-6 text-muted">
								{touched.revision && errors.revision ? (
									<div className="error-message">{errors.revision}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">7. Portafolio que quisieras mostrar a tus potenciales clientes</h5>
					</Form.Label>
					<Form.Control
						as="textarea"
						placeholder="ej: www.virtualex.cl"
						rows={2}
						type="text"
						name="portafolio"
						value={store.serviceRegistrado.portafolio}
						// className={touched.portafolio && errors.portafolio ? "error" : null}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="fs-6 text-muted">
								{touched.portafolio && errors.portafolio ? (
									<div className="error-message">{errors.portafolio}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
							8. Profile foto de tu servicio <span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.File
						id="portafolioFoto"
						name="portafolioFoto"
						type="file"
						onChange={actions.handleChangeServicefile}
					/>
				</Form.Group>
				<br />
				<Row style={{ justifyContent: "center" }}>
					<Button variant="primary" size="lg" type="submit" onClick={handleBack} className=" mr-2 my-5">
						<strong>Volver</strong>
					</Button>
					<Button variant="primary" size="lg" type="submit" onClick={handleNext} className="my-5">
						<strong>Continua</strong>
					</Button>
				</Row>
			</Form>
			<div className="transBox" />
			<div className="transBox" />
			<div className="transBox" />
		</div>
	);
};

export default ServiceForm;

ServiceForm.propTypes = {
	handleBack: PropTypes.any,
	handleNext: PropTypes.any
};
