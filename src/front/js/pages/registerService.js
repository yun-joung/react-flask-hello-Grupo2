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
import EquipoForm from "../component/registerServicio/equipoForm";
import ServiceForm from "../component/registerServicio/ServiceForm";
import Confirm from "../component/registerServicio/Confirm";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";

const RegisterService = () => {
	const { store, actions } = useContext(Context);
	const [activeStep, setActiveStep] = useState(0);

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

	function getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <EquipoForm handleNext={handleNext} />;
			case 1:
				return <ServiceForm handleNext={handleNext} handleBack={handleBack} />;
			case 2:
				return <Confirm handleBack={handleBack} handleReset={handleReset} />;
			default:
				return "Paso 404";
		}
	}

	return (
		<div
			className="backgrounds"
			style={{
				backgroundImage: `url(${store.url}/backGrounds.png)`
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
