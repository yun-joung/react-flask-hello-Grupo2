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
import { ConnectedFocusError } from "focus-formik-error";

const EquipoForm = ({ handleNext }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="p-5">
			<Form>
				<h2 className="mb-5" style={{ textAlign: "center" }}>
					{" "}
					Ingresar las informaciones de tu empresa{" "}
				</h2>
				<Form.Group>
					<Form.Label>
						<h5 style={{ fontWeight: "400" }}>
							1. Cuántas personas forman tu equipo?<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="tipo_membresia"
						value={store.serviceRegistrado.tipo_membresia}
						// className={touched.tipo_membresia && errors.tipo_membresia ? "error" : null}
						onChange={actions.handleChangeService}
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
					{/* <FormText className="text-muted">
                        {touched.tipo_membresia && errors.tipo_membresia ? (
                            <div className="error-message">{errors.tipo_membresia}</div>
                        ) : null}
                    </FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 style={{ fontWeight: "400" }}>
							2. ¿Cuántos años de Experiencia tienes realizando este servicio?
							<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="experiencia"
						value={store.serviceRegistrado.experiencia}
						// className={touched.experiencia && errors.experiencia ? "error" : null}
						onChange={actions.handleChangeService}
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
					{/* <FormText className="fs-6 text-muted">
                        {touched.experiencia && errors.experiencia ? (
                            <div className="error-message">{errors.experiencia}</div>
                        ) : null}
                    </FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 style={{ fontWeight: "400" }}>4. Detalla los trabajos que has realizado</h5>
					</Form.Label>
					<Form.Control
						as="textarea"
						placeholder="ej: He realizado mas de 100 sitios web a nivel mundial"
						rows={3}
						type="text"
						name="merit"
						value={store.serviceRegistrado.merit}
						// className={touched.merit && errors.merit ? "error" : null}
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="fs-6 text-muted">
                        {touched.merit && errors.merit ? (
                            <div className="error-message">{errors.merit}</div>
                        ) : null}
                    </FormText> */}
				</Form.Group>
				<Row style={{ justifyContent: "center" }}>
					<Button variant="primary" size="lg" type="submit" onClick={handleNext} className="mx-auto my-5">
						<strong>Continua</strong>
					</Button>
				</Row>
			</Form>
		</div>
	);
};

export default withRouter(EquipoForm);

EquipoForm.propTypes = {
	handleNext: PropTypes.any
};
