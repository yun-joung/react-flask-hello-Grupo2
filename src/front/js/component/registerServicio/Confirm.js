import React, { useContext, useState, useEffect } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
import { Container, Button, Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Confirm = ({ handleBack, handleReset }) => {
	const { store, actions } = useContext(Context);
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

	const userId = store.user.id;
	const userName = store.user.userName;
	const email = store.user.user;
	const handleSubmit = () => {
		let formData = new FormData();
		formData.append("id_user", userId);
		formData.append("userName", userName);
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
				data("");
			})
			.catch(error => console.log("Error loading message from backend", error));
	};

	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<div>
			<Row className="p-4">
				<h3>Dato de Equipo</h3>
				<br />
				<ListGroup className="w-100">
					<ListGroup.Item>
						<b>1. Tipo de tu equipo:</b> {store.serviceRegistrado.tipo_membresia}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>2. Rut:</b> {store.serviceRegistrado.rut}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>3. Tamaño de tu equipo:</b> {store.serviceRegistrado.tipo_tamano}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>4. Años de experiencia:</b> {store.serviceRegistrado.experiencia}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>5. Profile Foto:</b> obligatorio
					</ListGroup.Item>
				</ListGroup>
			</Row>
			<Row className="p-4">
				<h3>Dato de Servicio</h3>
				<br />
				<ListGroup className="w-100">
					<ListGroup.Item>
						<b>1-1. Categoria de tu servicio:</b> {store.serviceRegistrado.category}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>1-2. Subategoria de tu servicio:</b> {store.serviceRegistrado.subcategory}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>2. Costo del servicio:</b> {store.serviceRegistrado.valor}/ por &nbsp;
						{store.serviceRegistrado.tipo_cobro}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>3. Nombre del Servicio:</b> {store.serviceRegistrado.name_servicio}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>4. Descripción del servicio:</b> {store.serviceRegistrado.descrip_servicio}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>5. Plazo estimado (meses) para ejecutar el proyecto:</b> {store.serviceRegistrado.duracion}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>6. Numero de correcciones permitida:</b> {store.serviceRegistrado.revision}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>7. Portafolio:</b> {store.serviceRegistrado.portafolio}
					</ListGroup.Item>
					<ListGroup.Item>
						<b>8. Profile foto de servicio</b> obligatorio
					</ListGroup.Item>
				</ListGroup>
			</Row>
			<Row style={{ justifyContent: "center" }}>
				{registrado !== false ? (
					<>
						<Link to="/home">
							<Button
								variant="primary"
								size="lg"
								type="submit"
								onClick={handleReset}
								className=" mr-2 my-5">
								<strong>Volver a home</strong>
							</Button>
						</Link>
						<Button variant="primary" size="lg" type="submit" onClick={handleReset} className=" mr-2 my-5">
							<strong>Registra otro servicio</strong>
						</Button>
					</>
				) : (
					<>
						<Button variant="primary" size="lg" type="submit" onClick={handleBack} className=" mr-2 my-5">
							<strong>Volver</strong>
						</Button>
						<Button variant="primary" size="lg" type="submit" onClick={handleSubmit} className=" my-5">
							<strong>Registra tu servicio</strong>
						</Button>
					</>
				)}
			</Row>
		</div>
	);
};

export default Confirm;

Confirm.propTypes = {
	handleBack: PropTypes.any,
	handleSubmit: PropTypes.any,
	handleReset: PropTypes.any
};
