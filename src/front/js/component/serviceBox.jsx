import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Row, Col } from "react-bootstrap";

export const ServiceBox = () => {
	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-3 mb-5 p-5">
				<h2>¿Qué es lo fabuloso de Cotec?</h2>
				<br />
				<Row>
					<Col md={1}>
						<i className="fas fa-wallet icon" />
					</Col>
					<Col md={11}>
						<h4>Lo mejor para tu presupuesto</h4>
						<p>
							Encuentra servicios de la mejor Calidad a los mejores precios. No pagues tarifas extras una
							vez qeu tu trabajo haya finalizado!{" "}
						</p>
					</Col>
				</Row>
				<Row className="my-3">
					<Col md={1}>
						<i className="fas fa-history icon" />
					</Col>
					<Col md={11}>
						<h4>Trabajos de Excelencia en el menor tiempo, Garantizado!</h4>
						<p>
							Encuentra a los mejores profesionales freelancers, para empezar a trabajar en tus proyectos
							y sólo en pocos minutos!
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={1}>
						<i className="far fa-credit-card icon" />
					</Col>
					<Col md={11}>
						<h4>Pagos protegidos, Trabajos garantizados. Siempre</h4>
						<p>
							Siempre sabrás el valor total de tu trabajo por adelantado. Tu pago solo se liberará una vez
							aprobado el trabajo.
						</p>
						<h4>No olvides calificar a nuestros freelancers y dejar comentarios acerca de su trabajo</h4>
					</Col>
				</Row>
			</Jumbotron>
		</>
	);
};
