import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Row, Col } from "react-bootstrap";
import { cotecBenefit1, cotecBenefit2, cotecBenefit3 } from "../../img/image";

export const ServiceBox = () => {
	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-3 mb-5 p-5">
				<h2>¿Qué es lo fabuloso de Cotec?</h2>
				<br />
				<Row>
					<Col md={4}>
						<img src={cotecBenefit1} className="cotecBenefit" />
					</Col>
					<Col md={8}>
						<h4>Lo mejor para tu presupuesto</h4>
						<p>
							Encuentra servicios de la mejor Calidad a los mejores precios. <br />
							No pagues tarifas extras una vez qeu tu trabajo haya finalizado!{" "}
						</p>
					</Col>
				</Row>
				<Row className="my-5">
					<Col md={4} className="d-block d-sm-block d-md-none">
						<img src={cotecBenefit2} className="cotecBenefit" />
					</Col>
					<Col md={8}>
						<h4>Trabajos de Excelencia en el menor tiempo, Garantizado!</h4>
						<p>
							Encuentra a los mejores profesionales freelancers, <br />
							para empezar a trabajar en tus proyectos y sólo en pocos minutos!
						</p>
					</Col>
					<Col md={4} className="d-none d-md-block d-xl-block">
						<img src={cotecBenefit2} className="cotecBenefit" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<img src={cotecBenefit3} className="cotecBenefit" />
					</Col>
					<Col md={8}>
						<h4>Alta satisfacion de Clientes!</h4>
						<p>
							{" "}
							Nuestra systema de calificación ayuda los clientes a elejir mejor freelancer o compania, no
							deja este ventaja!!
						</p>
					</Col>
				</Row>
			</Jumbotron>
		</>
	);
};
