import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { companyImage } from "../../img/image";
import { Button, Form, Jumbotron, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../component/footer";
import Aos from "aos";
import "aos/dist/aos.css";

export const ServiceEmpresa = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<>
			<header>
				<img
					src={companyImage}
					className="img-fluid company-image w-100 m-0"
					alt="company image"
					style={{ opacity: "0.5" }}
				/>
				<p className="company-text-h">¿Necesita un servicio exclusivo para empresa?</p>
				<p className="company-text">cotec tiene el servicio exclusivo para tu</p>
				<Container className="contect">
					<Jumbotron className="whiteBox shadow-lg p-5 mb-5 align-item-center" data-aos="fade-up">
						<Form>
							<Form.Row>
								<h1 className="mt-2 mb-5 mx-auto">Solicitar Servicio</h1>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} md={6} controlId="formGridPassword">
									<Form.Label>Nombre de empresa</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
								<Form.Group as={Col} md={6} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" />
								</Form.Group>
							</Form.Row>
							<Form.Group controlId="formGridAddress1">
								<Form.Label>Pagina web de empresa</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group controlId="formGridAddress2">
								<Form.Label>Mensaje</Form.Label>
								<Form.Control as="textarea" type="text" rows={4} name="name_servicio" />
							</Form.Group>
							<Button variant="primary" type="submit" block className="my-5">
								Enviar solicitud
							</Button>
						</Form>
					</Jumbotron>
				</Container>
			</header>
			<body>
				<div className="transBox" style={{ height: "600px" }} />
			</body>
		</>
	);
};
