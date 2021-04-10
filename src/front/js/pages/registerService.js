import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, Jumbotron, FormControl, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const RegisterService = props => {
	const { store, actions } = useContext(Context);

	const [tipo_membresia, setTipo_membresia] = useState("");
	const [category, setCategory] = useState("");
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

	const handleSubmit = e => {
		e.preventDefault();
		if (!tipo_membresia.trim()) {
			setError("1. ingresar tipo_membresia");
			return;
		}
		if (!category.trim()) {
			setError("2. ingresar category de servicio");
			return;
		}
		if (!subcategory.trim()) {
			setError("2. ingresar subcategory de servicio");
			return;
		}
		if (!tipo_cobro.trim()) {
			setError("3. ingresar tipo de cobro de servicio");
			return;
		}
		if (!valor.trim()) {
			setError("3. ingresar valor de servicio");
			return;
		}
		if (!name_servicio.trim()) {
			setError("4. ingresar nombre de servicio");
			return;
		}
		if (!descrip_servicio.trim()) {
			setError("5. ingresar descripción de servicio");
			return;
		}
		if (!revision.trim()) {
			setError("7. ingresar numero de corectiones");
			return;
		}
		if (!experiencia.trim()) {
			setError("8. ingresar el tiempo llevas trabajando en esta área");
			return;
		} else {
			const usuario = JSON.parse(JSON.stringify(store.user.id));
			const userName = JSON.parse(JSON.stringify(store.user.userName));
			actions.addServicio({
				id_user: usuario,
				userName: userName,
				tipo_membresia: tipo_membresia,
				category: category,
				subcategory: subcategory,
				tipo_cobro: tipo_cobro,
				valor: valor,
				name_servicio: name_servicio,
				descrip_servicio: descrip_servicio,
				duracion: duracion,
				revision: revision,
				proceso: proceso,
				experiencia: experiencia,
				portafolio: portafolio,
				merit: merit
			});
			console.log("pasando todas validacion");
			props.history.push("/home");
			setError(null);
		}
	};
	useEffect(() => {
		actions.getToken();
	}, []);
	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(https://3000-lavender-guppy-at3airkn.ws-us03.gitpod.io/backGround.png)`
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
								¡Gracias por tu interes en Cotec!
								<br />
								Conectaremos millones de personas y empresas contigo
								<br />
								Para comenzar, todo lo que necesitas hacer es registrar tu servicio
							</p>
						</Col>
					</Row>
				</div>
				<Jumbotron className="whiteBox shadow-lg p-3 pt-5 pr-5 pl-5">
					<Form>
						{error && <div className="alert alert-danger">{error}</div>}
						<Form.Group>
							<Form.Label>
								<h5>
									1. Tamaño de tu equipo<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								value={tipo_membresia}
								onChange={e => setTipo_membresia(e.target.value)}
								//isInvalid={!!errors.tipo_membresia}
								style={{
									backgroundColor: "lightgray",
									marginBottom: "10px"
								}}>
								<option defaultValue>Seleccionar el tipo de membresia</option>
								<option>Freelancer (solo yo)</option>
								<option>Equipo (2-3personas)</option>
								<option>Equipo (4-6personas)</option>
								<option>Equipo (más de 7personas)</option>
							</Form.Control>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									2. Categoria de tu servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="category"
								value={category}
								onChange={e => setCategory(e.target.value)}
								//isInvalid={!!errors.category}
								style={{
									backgroundColor: "lightgray",
									marginBottom: "10px"
								}}>
								<option defaultValue>Seleccionar categoría de servicio</option>
								<option>Desarrollo_It</option>
								<option>Diseño</option>
								<option>Marketing</option>
								<option>Contabilidad</option>
								<option>Leyes/Abogados</option>
								<option>Otros</option>
							</Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Control
								as="textarea"
								type="text"
								placeholder="Subcategory ej: E-commerce develop, Mobile develop, Wordpress/Shopify..."
								name="subcategory"
								value={subcategory}
								onChange={e => setSubcategory(e.target.value)}
								//isInvalid={!!errors.valor}
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
								value={tipo_cobro}
								onChange={e => setTipo_cobro(e.target.value)}
								//isInvalid={!!errors.tipo_cobro}
								style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
								<option defaultValue>Seleccionar si el tipo de cobro es Por hora o Por proyecto</option>
								<option>Hora</option>
								<option>Proyecto</option>
							</Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Control
								as="textarea"
								type="text"
								placeholder="Ingresa el valor del servicio"
								name="valor"
								value={valor}
								onChange={e => setValor(e.target.value)}
								//isInvalid={!!errors.valor}
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
								placeholder="ej: ¡Crea tu propia página!"
								rows={2}
								name="name_servicio"
								value={name_servicio}
								onChange={e => setName_servicio(e.target.value)}
								//isInvalid={!!errors.name_servicio}
							/>
							<p className="fs-6  text-muted ">Máximo 10 palabras</p>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									5. Descripción del servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: mi servicio es ..."
								rows={3}
								type="text"
								name="descrip_servicio"
								value={descrip_servicio}
								onChange={e => setDescrip_servicio(e.target.value)}
								//isInvalid={!!errors.descrip_servicio}
							/>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>6. Plazo estimado (meses) para ejecutar el proyecto</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: 1mes, 15 dias o dependiendo el proyecto"
								rows={2}
								type="text"
								name="duracion"
								onChange={e => setDuracion(e.target.value)}
								//isInvalid={!!errors.duracion}
							/>
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
								onChange={e => setRevision(e.target.value)}
								//isInvalid={!!errors.revision}
							/>
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
									8. Años de experiencia en esta área
									<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_membresia"
								value={experiencia}
								onChange={e => setExperiencia(e.target.value)}
								//isInvalid={!!errors.experiencia}
								style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
								<option defaultValue>Seleccionar rango de años</option>
								<option>1 año</option>
								<option>2 años</option>
								<option>3 años</option>
								<option>4 años</option>
								<option>5-10 años</option>
								<option>10-15 años</option>
								<option>Más de 15 años</option>
							</Form.Control>
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
								value={portafolio}
								onChange={e => setPortafolio(e.target.value)}
								//isInvalid={!!errors.portafolio}
							/>
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
								value={merit}
								onChange={e => setMerit(e.target.value)}
								//isInvalid={!!errors.merit}
							/>
						</Form.Group>
						{error && <div className="alert alert-danger">{error}</div>}
						<Row style={{ justifyContent: "center" }}>
							<Button
								variant="primary"
								size="lg"
								type="submit"
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
