import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { logoBlanco, man } from "../../img/image";
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
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { useForm, useStep } from "react-hooks-helper";
import { ConnectedFocusError } from "focus-formik-error";
import EquipoForm from "../component/registerServicio/equipoForm";
import ServiceForm from "../component/registerServicio/ServiceForm";
import Confirm from "../component/registerServicio/Confirm";
import Submit from "../component/registerServicio/Submit";
import SubirProfile from "../component/registerServicio/SubirProfile";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";

const RegisterService = () => {
	const { store, actions } = useContext(Context);
	//const [formData, setForm] = useForm(defaultData);
    const [activeStep, setActiveStep] = useState(0);
    const [avatar, setAvatar] = useState("");
	const [data, setData] = useState({
		tipo_membresia: "",
		category: "",
		subcategory: "",
		tipo_cobro: "",
		valor: "",
		name_servicio: "",
		descrip_servicio: "",
		duracion: "",
		revision: "",
		proceso: "",
		experiencia: "",
		portafolio: "",
		portafolioFoto: "",
		merit: "",
		serviceRegistrado: ""
	});

	function getSteps() {
		return ["Tu equipo", "Tu servicio", "Subir profile" , "Confirm dato"];
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
	const handleChange = e => {
		e.preventDefault();
		setData[e.target.name] = e.target.value;
    };
     const handleDateChange = (date) => {
        setDate(date);
    };
    const [size, setSize] = useState("");
    const onChangeAvatar = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            console.log(reader.result)
            setAvatar(reader.result);
        }
    }
    const onChangeSizeSelect = (e) =>{
        setSize(e.target.value);
    } 

	function getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <EquipoForm data={data} setData={setData} handleNext={handleNext} handleChange={handleChange} />;
			case 1:
				return (
					<ServiceForm data={data} setData={setData} handleNext={handleNext} handleChange={handleChange} />
                );
            case 2:
				return <SubirProfile data={data}  setData={setData} handleNext={handleNext} handleChange={handleChange} onChangeAvatar={onChangeAvatar}/>;
			default:
			case 3:
				return <Confirm data={data} />;
			default:
				return "Paso 404";
		}
	}

	const userId = JSON.parse(JSON.stringify(store.user.id));
	const userName = JSON.parse(JSON.stringify(store.user.userName));
	const email = store.user.user;

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
			})
			.catch(error => console.log("Error loading message from backend", error));
	};

	useEffect(() => {
		actions.getToken();
	}, []);
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
					<>{getStepContent(activeStep)}</>
				</div>
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
                {JSON.stringify(portafolioFoto)}
                {JSON.stringify(merit)} */}

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
