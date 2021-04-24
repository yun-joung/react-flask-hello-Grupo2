import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Container, Button, Form, Jumbotron, FormControl, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import ServiceListUserB from "./ServiceListUserB.jsx";
import { withRouter, Link, useParams } from "react-router-dom";

const ServicioUpdate = props => {
	const { store, actions } = React.useContext(Context);

	const [tipo_membresia, setTipo_membresia] = useState("");
	const [subcategory, setSubcategory] = useState("");
	const [tipo_cobro, setTipo_cobro] = useState("");
	const [valor, setValor] = useState("");
	const [name_servicio, setName_servicio] = useState("");
	const [descrip_servicio, setDescrip_servicio] = useState("");
	const [duracion, setDuracion] = useState("");
	const [revision, setRevision] = useState("");
	const [proceso, setProceso] = useState("");
	const [experiencia, setExperiencia] = useState("");
	const [portafolio, setPortafolio] = useState("");
	const [merit, setMerit] = useState("");
	const [error, setError] = React.useState(null);
	const { id } = useParams();

	const handleSubmit = async e => {
		e.preventDefault();
		actions.updateServicio(id);
		setError(null);
	};

	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<>
			<h2>Mis Servicios</h2>
			<ServiceListUserB />
			<Jumbotron className="whiteBox shadow-lg p-3 pt-5 pr-5 pl-5">
				<Form onSubmit={evento => handleSubmit(evento)}>
					{error && <div className="alert alert-danger">{error}</div>}
					<Form.Group>
						<Form.Label>
							<h5>
								1. Tamaño de tu equipo<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="select"
							name="tipo_membresia"
							defaultValue={props.tipo_membresia}
							onChange={evento => actions.handleUpdateServicio(evento)}
							style={{
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}>
							<option defaultValue>{props.tipo_membresia}</option>
							<option>Freelance(solo yo)</option>
							<option>Equipo(2-3personas)</option>
							<option>Equipo(4-6personas)</option>
							<option>Equipo(más de 7personas)</option>
						</Form.Control>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>
								2. Subcategoria de tu servicio<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							type="text"
							name="subcategory"
							defaultValue={props.subcategory}
							rows={1}
							onChange={evento => actions.handleUpdateServicio(evento)}
							style={{ backgroundColor: "lightgray", marginBottom: "10px" }}
						/>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>
								3. Costo del servicio<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="select"
							name="tipo_cobro"
							defaultValue={props.tipo_cobro}
							onChange={evento => actions.handleUpdateServicio(evento)}
							style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
							<option defaultValue>{props.tipo_cobro}</option>
							<option>Hora</option>
							<option>Proyecto</option>
						</Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Control
							as="textarea"
							type="text"
							name="valor"
							defaultValue={props.valor}
							rows={1}
							onChange={evento => actions.handleUpdateServicio(evento)}
							style={{ backgroundColor: "lightgray", marginBottom: "10px" }}
						/>
						<p className="fs-6  text-muted ">
							* La tarifa del servicio de Cotec es del 5% del valor del trabajo realizado
						</p>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>
								4. Nombre del Servicio<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							type="text"
							rows={2}
							name="name_servicio"
							defaultValue={props.name_servicio}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
						<p className="fs-6  text-muted ">Máximo 10 palabras</p>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>
								5. Descripción de tu servicio<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							type="text"
							name="descrip_servicio"
							defaultValue={props.descrip_servicio}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>6. Plazo estimado (meses) para exjecutar el projecto</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							rows={2}
							type="text"
							name="duracion"
							defaultValue={props.duracion}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>
							<h5>
								7. Numero de corectiones permitidas a tu cliente previo a entregable final
								<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							rows={2}
							type="text"
							name="revision"
							defaultValue={props.revision}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>
							<h5>
								8. Años de experiencia en esta área
								<span style={{ color: "red" }}>*</span>
							</h5>
						</Form.Label>
						<Form.Control
							as="select"
							name="tipo_membresia"
							defaultValue={props.experiencia}
							onChange={evento => actions.handleUpdateServicio(evento)}
							style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
							<option defaultValue>{props.experiencia}</option>
							<option>1año</option>
							<option>2años</option>
							<option>3años</option>
							<option>4años</option>
							<option>5-10 años</option>
							<option>10-15 años</option>
							<option>Más que 15 años</option>
						</Form.Control>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>9. Portafolio</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							rows={2}
							type="text"
							name="portafolio"
							defaultValue={props.portafolio}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
					</Form.Group>
					<br />

					<Form.Group>
						<Form.Label>
							<h5>10. Detalla los trabajos que haz realizado</h5>
						</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							type="text"
							name="merit"
							defaultValue={props.merit}
							onChange={evento => actions.handleUpdateServicio(evento)}
						/>
					</Form.Group>
					{error && <div className="alert alert-danger">{error}</div>}
					<Row style={{ justifyContent: "center" }}>
						<Button
							variant="primary"
							size="lg"
							type="submit"
							style={{ marginBottom: "40px", marginTop: "40px" }}>
							<strong>Editar tu servicio</strong>
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
			</Jumbotron>
		</>
	);
};

export default withRouter(ServicioUpdate);

ServicioUpdate.propTypes = {
	id: PropTypes.number,
	tipo_membresia: PropTypes.string,
	subcategory: PropTypes.string,
	tipo_cobro: PropTypes.string,
	valor: PropTypes.number,
	name_servicio: PropTypes.string,
	descrip_servicio: PropTypes.string,
	duracion: PropTypes.string,
	revision: PropTypes.string,
	proceso: PropTypes.string,
	experiencia: PropTypes.string,
	portafolio: PropTypes.string,
	merit: PropTypes.string
};
