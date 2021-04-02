import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
import { withRouter } from "react-router-dom";
import { Container, Button, Form, Jumbotron, FormControl, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const RegisterService = () => {
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
		// if (!tipo_membresia.trim()) {
		// 	setError("ingresar tipo_membresia");
		// 	return;
		// }
		// if (!category.trim()) {
		// 	setError("ingresar category de servicio");
		// 	return;
		// }
		// if (!subcategory.trim()) {
		// 	setError("ingresar subcategory de servicio");
		// 	return;
		// }
		// if (!tipo_cobro.trim()) {
		// 	setError("ingresar tipo de cobro de servicio");
		// 	return;
		// }
		// if (!valor.trim()) {
		// 	setError("ingresar valor de servicio");
		// 	return;
		// }
		// if (!name_servicio.trim()) {
		// 	setError("ingresar nombre de servicio");
		// 	return;
		// }
		// if (!descrip_servicio.trim()) {
		// 	setError("ingresar descripción de servicio");
		// 	return;
		// }
		// if (!revision.trim()) {
		// 	setError("ingresar numero de corectiones");
		// 	return;
		// }
		// if (!experiencia.trim()) {
		// 	setError("ingresar el tiempo llevas trabajando en esta área");
		// 	return;
		// } else {
		console.log("ENVIAR FORM");
		// actions.addServicio({
		// 	//props.id_user,
		// 	tipo_membresia: tipo_membresia,
		// 	category: category,
		// 	subcategory: subcategory,
		// 	tipo_cobro: tipo_cobro,
		// 	valor: valor,
		// 	name_servicio: name_servicio,
		// 	descrip_servicio: descrip_servicio,
		// 	duracion: duracion,
		// 	revision: revision,
		// 	proceso: proceso,
		// 	experiencia: experiencia,
		// 	portafolio: portafolio,
		// 	merit: merit
		// });
		console.log("pasando todas validacion");
		//setError(null);
		//}
	};

	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(https://3000-blush-goat-luq9mq5y.ws-us03.gitpod.io/backGround.png)`
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
					<Form onSubmit={e => handleSubmit(evento)}>
						{error && <div className="alert alert-danger">{error}</div>}
						<Form.Group>
							<Form.Label>
								<h5>
									Numero de tu Equipo<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_membresia"
								onChange={e => setTipo_membresia(e.target.value)}
								//isInvalid={!!errors.tipo_membresia}
								style={{
									backgroundColor: "lightgray",
									marginBottom: "10px"
								}}>
								<option defaultValue>Seleccionar su tipo_membresia</option>
								<option>Freelancer</option>
								<option>Equipo(1-3personas)</option>
								<option>Equipo(4-6personas)</option>
								<option>Equipo(más que 7personas)</option>
							</Form.Control>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									Categoria de tu servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="category"
								onChange={e => setCategory(e.target.value)}
								//isInvalid={!!errors.category}
								style={{
									backgroundColor: "lightgray",
									marginBottom: "10px"
								}}>
								<option defaultValue>Seleccionar categoría de servicio</option>
								<option>Desarrollar IT</option>
								<option>Diseño</option>
								<option>Marketing</option>
								<option>Contabilida</option>
								<option>Ley/Derecho</option>
								<option>Otros</option>
							</Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Control
								as="select"
								name="subcategory"
								onChange={e => setSubcategory(e.target.value)}
								//isInvalid={!!errors.subcategory}
								style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
								<option defaultValue>Seleccionar subcategoría de servicio</option>
								<option>E-commerce develop</option>
								<option>Mobile develop</option>
								<option>Softwear develop</option>
								<option>Game develop</option>
								<option>Wordpress/Shopfy</option>
								<option>Otros</option>
							</Form.Control>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									El valor de tu servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_cobro"
								onChange={e => setTipo_cobro(e.target.value)}
								//isInvalid={!!errors.tipo_cobro}
								style={{ backgroundColor: "lightgray", marginBottom: "10px" }}>
								<option defaultValue>Seleccionar el tipo de cobro entre por hora y por proyecto</option>
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
									Titulo de tu servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								type="text"
								placeholder="ej: ¡Crea tu propia página!"
								rows={2}
								name="name_servicio"
								onChange={e => setName_servicio(e.target.value)}
								//isInvalid={!!errors.name_servicio}
							/>
							<p className="fs-6  text-muted ">Máximo 10 palabras</p>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									Describe sobre tu servicio<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: mi servicio es ..."
								rows={3}
								type="text"
								name="descrip_servicio"
								onChange={e => setDescrip_servicio(e.target.value)}
								//isInvalid={!!errors.descrip_servicio}
							/>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>Plazo estimado (meses) para exjecutar el projecto</h5>
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
									Numero de corectiones permitidas a tu cliente previo a entregable final
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

						<Form.Group>
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
						<br />

						<Form.Group>
							<Form.Label>
								<h5>
									Tiempo llevas trabajando en esta área
									<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_membresia"
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
								<option>Más que 15 años</option>
							</Form.Control>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>Portafolio que quisieras mostrar a tus potenciales clientes</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: www.virtualex.cl"
								rows={2}
								type="text"
								name="portafolio"
								onChange={e => setPortafolio(e.target.value)}
								//isInvalid={!!errors.portafolio}
							/>
						</Form.Group>
						<br />

						<Form.Group>
							<Form.Label>
								<h5>Merit de mi servicio</h5>
							</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="ej: He realizado mas de 100 sitios web a nivel mundial"
								rows={3}
								type="text"
								name="merit"
								onChange={e => setMerit(e.target.value)}
								//isInvalid={!!errors.merit}
							/>
						</Form.Group>
						<Row style={{ justifyContent: "center" }}>
							<Link to="/home">
								<Button
									variant="primary"
									size="lg"
									type="submit"
									style={{ marginBottom: "40px", marginTop: "40px" }}>
									<strong>Registra tu servicio</strong>
								</Button>
							</Link>
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
	id_user: PropTypes.number
};
