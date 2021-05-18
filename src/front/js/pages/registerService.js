import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco } from "../../img/image";
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
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import swal from "sweetalert";
import EquipoForm from "../component/registerServicio/equipoForm";
import ServiceForm from "../component/registerServicio/ServiceForm";
import Confirm from "../component/registerServicio/Confirm";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";

const RegisterService = () => {
	const { store, actions } = useContext(Context);
	const [activeStep, setActiveStep] = useState(0);
	const [registrado, setRegistrado] = useState(false);
	const data = store.serviceRegistrado;
	const [state, setState] = useState({
		tipo_membresia: null,
		rut: null,
		tipo_tamano: null,
		experiencia: null,
		photo: null,
		category: null,
		subcategory: null,
		tipo_cobro: null,
		valor: null,
		name_servicio: null,
		descrip_servicio: null,
		duracion: null,
		revision: null,
		portafolio: null,
		portafolioFoto: null,
		serviceRegistrado: null
	});

<<<<<<< HEAD
	function getSteps() {
		return ["Tu equipo", "Tu servicio", "Confirm dato"];
	}
	const steps = getSteps();
=======
	const userId = JSON.parse(JSON.stringify(store.user.id));
	const userName = JSON.parse(JSON.stringify(store.user.userName));
	const email = JSON.parse(JSON.stringify(store.user.user));
>>>>>>> f66b0437ee68c8999db8119b876e9c32b74d34ed

	const handleNext = () => {
		setActiveStep(preActiveStep => preActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};
	const handleReset = () => {
		setActiveStep(0);
	};

	const userId = store.user.id;
	const userName = store.user.userName;
	const email = store.user.user;
	const handleSubmit = () => {
		let formData = new FormData();
		formData.append("id_user", userId);
		formData.append("userName", userName);
<<<<<<< HEAD
		formData.append("email_oferente", email);
		formData.append("tipo_membresia", data.tipo_membresia);
		formData.append("rut", data.rut);
		formData.append("tipo_tamano", data.tipo_tamano);
		formData.append("experiencia", data.experiencia);
		formData.append("photo", data.photo);
		formData.append("category", data.category);
		formData.append("subcategory", data.subcategory);
		formData.append("tipo_cobro", data.tipo_cobro);
		formData.append("valor", data.valor);
		formData.append("name_servicio", data.name_servicio);
		formData.append("descrip_servicio", data.descrip_servicio);
		formData.append("duracion", data.duracion);
		formData.append("revision", data.revision);
		formData.append("portafolio", data.portafolio);
		formData.append("portafolioFoto", data.portafolioFoto);
=======
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
>>>>>>> f66b0437ee68c8999db8119b876e9c32b74d34ed

		addServicio(formData);
		setRegistrado(true);
	};

	function getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <EquipoForm handleNext={handleNext} />;
			case 1:
				return <ServiceForm handleNext={handleNext} handleBack={handleBack} />;
			case 2:
				return (
					<Confirm
						handleBack={handleBack}
						handleSubmit={handleSubmit}
						handleReset={handleReset}
						registrado={registrado}
						setRegistrado={setRegistrado}
					/>
				);
			default:
				return "Paso 404";
		}
	}

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
				props.history.push("/home");
			})
			.catch(error => console.log("Error loading message from backend", error));
	};

	useEffect(() => {
		actions.getToken();
	}, []);
	return (
		<div
			className="backgrounds"
			style={{
<<<<<<< HEAD
				backgroundImage: `url(${store.url}/backGrounds.png)`
=======
				backgroundImage: `url(https://3000-gray-shrew-sd06ypbc.ws-us04.gitpod.io/backGround.png)`
>>>>>>> f66b0437ee68c8999db8119b876e9c32b74d34ed
			}}>
			<Container>
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
				<div className="whiteBox shadow-lg pt-3">
					<Stepper className="whiteBox mt-3" activeStep={activeStep + 1} alternativeLabel>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<>{getStepContent(activeStep)}</>
				</div>

<<<<<<< HEAD
=======
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
>>>>>>> f66b0437ee68c8999db8119b876e9c32b74d34ed
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
