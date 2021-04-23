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
	//const [error, setError] = React.useState(null);

	// const [tipo_membresia, setTipo_membresia] = useState("");
	// const [category, setCategory] = useState("");
	// const [subcategory, setSubcategory] = useState("");
	// const [tipo_cobro, setTipo_cobro] = useState("");
	// const [valor, setValor] = useState("");
	// const [name_servicio, setName_servicio] = useState("");
	// const [descrip_servicio, setDescrip_servicio] = useState("");
	// const [duracion, setDuracion] = useState("");
	// const [revision, setRevision] = useState("");
	// const [proceso, setProceso] = useState("");
	// const [experiencia, setExperiencia] = useState("");
	// const [portafolio, setPortafolio] = useState("");
	// const [merit, setMerit] = useState("");

	const handleChange = e => {
		let datas = state;
		datas[event.target.name] = event.target.value;
		setState({ ...datas });
	};

	const handleChangeFile = e => {
		let datas = state;
		datas[event.target.name] = event.target.files[0];
		setState({ ...datas });
	};

	const userId = JSON.parse(JSON.stringify(store.user.id));
	const userName = JSON.parse(JSON.stringify(store.user.userName));

	const handleSubmit = e => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("id_user", userId);
		formData.append("userName", userName);
		formData.append("tipo_membresia", state.tipo_membresia);
		formData.append("category", state.category);
		formData.append("subcategory", state.subcategory);
		formData.append("tipo_cobro", state.tipo_cobro);
		formData.append("valor", state.valor);
		formData.append("name_servicio", state.name_servicio);
		formData.append("descrip_servicio", state.descrip_servicio);
		formData.append("duracion", state.duracion);
		formData.append("revision", state.revision);
		formData.append("proceso", state.proceso);
		formData.append("experiencia", state.experiencia);
		formData.append("portafolio", state.portafolio);
		formData.append("merit", state.merit);
		formData.append("portafolioFoto", state.portafolioFoto);

		addServicio(formData);
	};

	const addServicio = form => {
		fetch(process.env.BACKEND_URL + "/api/servicio-registrados", {
			method: "POST",
			body: form
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("--servicio registrado --", data);
				setState({
					...state,
					serviceRegistrado: data
				});
				sweetAlert("¡Excelente!", "El servicio ha sido registrado correctamente", "success");
			})
			.catch(error => console.log("Error loading message from backend", error));
		sweetAlert("¡Error!", "Faltan datos por registrar el servicio", "Error");
	};
	//props.history.push("/home");

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
								¡Gracias por tu interes en Cotec!
								<br />
								Nuestra misión es conectar millones de personas con empresas
								<br />
								Para comenzar, todo lo que necesitas hacer es registrar tu servicio
							</p>
						</Col>
					</Row>
				</div>
				<Jumbotron className="whiteBox shadow-lg p-3 pt-5 pr-5 pl-5">
					<Form onSubmit={handleSubmit}>
						{/* {error && <div className="alert alert-danger">{error}</div>} */}
						<Form.Group>
							<Form.Label>
								<h5>
									1. Tamaño de tu equipo<span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<Form.Control
								as="select"
								name="tipo_membresia"
								id="tipo_membresia"
								onChange={e => handleChange(e)}
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
								id="category"
								onChange={e => handleChange(e)}
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
								<option>Ley</option>
								<option>Otros</option>
							</Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Control
								as="textarea"
								type="text"
								placeholder="Subcategory ej: E-commerce develop, Mobile develop, Wordpress/Shopify..."
								name="subcategory"
								id="subcategory"
								onChange={e => handleChange(e)}
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
								id="tipo_cobro"
								onChange={e => handleChange(e)}
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
								id="valor"
								placeholder="Ingresa el valor del servicio"
								name="valor"
								onChange={e => handleChange(e)}
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
								id="name_servicio"
								placeholder="ej: ¡Crea tu propia página!"
								rows={2}
								name="name_servicio"
								onChange={e => handleChange(e)}
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
								id="descrip_servicio"
								name="descrip_servicio"
								onChange={e => handleChange(e)}
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
								id="duracion"
								onChange={e => handleChange(e)}
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
								id="revision"
								onChange={e => handleChange(e)}
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
								id="tipo_membresia"
								onChange={e => handleChange(e)}
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
								id="portafolio"
								onChange={e => handleChange(e)}
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
								id="merit"
								onChange={e => handleChange(e)}
								//isInvalid={!!errors.merit}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>
								<h5>
									11. Profile foto de tu servicio <span style={{ color: "red" }}>*</span>
								</h5>
							</Form.Label>
							<input
								id="portafolioFoto"
								name="portafolioFoto"
								type="file"
								className="form-control"
								onChange={e => handleChangeFile(e)}
							/>
						</Form.Group>
						{/*
						{error && <div className="alert alert-danger">{error}</div>} */}
						<Row style={{ justifyContent: "center" }}>
							<Button
								variant="primary"
								size="lg"
								type="submit"
								style={{ marginBottom: "40px", marginTop: "40px" }}>
								<strong>Registra tu servicio</strong>
							</Button>

							{JSON.stringify(store.user.id)}

							{/* <img
								src={
									"https://3001-apricot-egret-pn15p368.ws-us03.gitpod.io/upload/servicio/" +
									(!!state.serviceRegistrado &&
										state.serviceRegistrado.servicio_registrados.portafolioFoto)
								}
							/> */}

							<p>{!!state.tipo_membresia && state.tipo_membresia}</p>
							<p>{!!state.category && state.category}</p>
							<p>{!!state.subcategory && state.subcategory}</p>
							<p>{!!state.tipo_cobro && state.tipo_cobro}</p>
							<p>{!!state.valor && state.valor}</p>
							<p>{!!state.name_servicio && state.name_servicio}</p>
							<p>{!!state.descrip_servicio && state.descrip_servicio}</p>
							<p>{!!state.experiencia && state.experiencia}</p>
							<p>{!!state.portafolio && state.portafolio}</p>
							<p>{!!state.portafolioFoto && state.portafolioFoto}</p>
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
