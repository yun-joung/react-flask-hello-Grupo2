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
						<h5 className="pBold">
							1. ¿Que tipo de equipo tienes?<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="tipo_membresia"
						value={store.serviceRegistrado.tipo_membresia}
						// className={touched.tipo_membresia && errors.tipo_membresia ? "error" : null}
						onChange={actions.handleChangeService}
						style={{
							backgroundColor: "#F2F2F2",
							marginBottom: "10px"
						}}>
						<option default>Seleccionar el tipo</option>
						<option>Empresa</option>
						<option>Freelancer</option>
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
						<h5 className="pBold">
							2. ¿Tienes el numero de Rut?<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<NumberFormat
						format=" ##.###.###-#"
						mask="_"
						placeholder="Ingresa Rut"
						name="rut"
						value={store.serviceRegistrado.rut}
						className="NumberFormat"
						onChange={actions.handleChangeService}
					/>
					{/* <FormText className="text-muted">
								{touched.tipo_cobro && errors.tipo_cobro ? (
									<div className="error-message">{errors.valor}</div>
								) : null}
							</FormText> */}
					{/* <FormText className="text-muted">
								{touched.tipo_cobro && errors.tipo_cobro ? (
									<div className="error-message">{errors.tipo_cobro}</div>
								) : null}
							</FormText> */}
				</Form.Group>
				<br />
				<Form.Group>
					<Form.Label>
						<h5 className="pBold">
							3. ¿Cuántas personas tienes en tu equipo?<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="tipo_tamano"
						value={store.serviceRegistrado.tipo_tamano}
						// className={touched.tipo_membresia && errors.tipo_membresia ? "error" : null}
						onChange={actions.handleChangeService}
						style={{
							backgroundColor: "#F2F2F2",
							marginBottom: "10px"
						}}>
						<option default>Seleccionar el numero</option>
						<option>1 personas</option>
						<option>2-3personas</option>
						<option>4-6personas</option>
						<option>más de 7personas</option>
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
						<h5 className="pBold">
							4. ¿Cuántos años de Experiencia tienes realizando este servicio?
							<span style={{ color: "red" }}>*</span>
						</h5>
					</Form.Label>
					<Form.Control
						as="select"
						name="experiencia"
						value={store.serviceRegistrado.experiencia}
						// className={touched.experiencia && errors.experiencia ? "error" : null}
						onChange={actions.handleChangeService}
						style={{ backgroundColor: "#F2F2F2", marginBottom: "10px" }}>
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
						<h5>5. ¿Tienes un profile foto?</h5>
					</Form.Label>
					<Form.File id="photo" name="photo" type="file" onChange={actions.handleChangeServicefile} />
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

export default EquipoForm;

EquipoForm.propTypes = {
	handleNext: PropTypes.any
};
