import React, { useContext, useState, useEffect } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
import { logoBlanco } from "../../../img/image";
import { withRouter, Link } from "react-router-dom";
import { Footer } from "../../component/footer";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { ConnectedFocusError } from "focus-formik-error";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { Container, Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import EquipoForm from "./equipoForm";
import ServiceForm from "./ServiceForm";

const RegisterServiceForm = props => {
	const { store, actions } = useContext(Context);
	const [activeStep, setActiveStep] = useState(0);
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
	const [portafolioFoto, setPortafolioFoto] = useState("");
	const [merit, setMerit] = useState("");

	const [data, setData] = useState({
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
		merit: null
	});

	function getSteps() {
		return ["Tu equipo", "Tu servicio", "Confirm dato"];
	}

	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(preActiveStep => preActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleChange = input => e => {
		setState({ [input]: e.target.value });
	};

	const handleSubmit = values => {
		let formData = new FormData();
		formData.append("id_user", userId);
		formData.append("userName", userName);
		formData.append("email_oferente", email);
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

		addServicio(formData);
		setRegistrado(true);
	};
	//app
	function getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <EquipoForm handleNext={handleNext} handleChange={handleChange} values={values} />;
			case 1:
				return <ServiceForm />;
			case 2:
				return "Paso 3_ Confirm dato";
			default:
				return "Paso 404";
		}
	}
	const values = {
		tipo_membresia,
		category,
		subcategory,
		tipo_cobro,
		valor,
		name_servicio,
		descrip_servicio,
		duracion,
		revision,
		proceso,
		experiencia,
		portafolio,
		portafolioFoto,
		merit
	};

	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(${store.url}/backGround.png)`
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
				<div className="whiteBox shadow-lg">
					<Stepper className="whiteBox mt-3" activeStep={activeStep} alternativeLabel>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<>
						{activeStep === steps.length ? (
							"Registra tu servicio"
						) : (
							<>
								<Typography>{getStepContent(activeStep)}</Typography>
								<div className="mx-auto">
									<Button disabled={activeStep === 0} onClick={handleBack}>
										Volver
									</Button>
									<Button variant="contained" onClick={handleNext}>
										{activeStep === steps.length - 1 ? "Registra tu servicio" : "Continua"}
									</Button>
								</div>
							</>
						)}
					</>
				</div>
			</Container>
		</div>
	);
};

//export default withRouter(RegisterServiceForm);
