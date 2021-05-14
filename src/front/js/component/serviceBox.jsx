import React, { useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Jumbotron, Row, Col } from "react-bootstrap";
import { cotecBenefit1, cotecBenefit2, cotecBenefit3 } from "../../img/image";
import Aos from "aos";
import "aos/dist/aos.css";

export const ServiceBox = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<>
			<Jumbotron className="whiteBox shadow-lg p-3 mb-5 p-5" style={{ overflow: "hidden" }}>
				<h2>¿Qué es lo fabuloso de Cotec?</h2>
				<br />
				<div>
					<Row>
						<Col md={4} data-aos="fade-right">
							<img src={cotecBenefit1} className="cotecBenefit" />
						</Col>
						<Col md={8} data-aos="fade-left">
							<h4>Lo mejor para tu presupuesto</h4>
							<p>
								Encuentra servicios de la mejor calidad a los mejores precios. <br />
								No pagues tarifas extras una vez que tu trabajo haya finalizado!{" "}
							</p>
						</Col>
					</Row>
				</div>
				<div>
					<Row className="my-5">
						<Col md={4} className="d-block d-sm-block d-md-none" data-aos="fade-left">
							<img src={cotecBenefit2} className="cotecBenefit" />
						</Col>
						<Col md={8} data-aos="fade-right">
							<h4>Trabajos de excelencia en el menor tiempo, garantizado!</h4>
							<p>
								Encuentra a los mejores profesionales freelancers, <br />
								para empezar a trabajar en tus proyectos y sólo en pocos minutos!
							</p>
						</Col>
						<Col md={4} className="d-none d-md-block d-xl-block" data-aos="fade-left">
							<img src={cotecBenefit2} className="cotecBenefit" />
						</Col>
					</Row>
				</div>
				<div>
					<Row>
						<Col md={4} data-aos="fade-right">
							<img src={cotecBenefit3} className="cotecBenefit" />
						</Col>
						<Col md={8} data-aos="fade-left">
							<h4>Alta satisfacción de clientes!</h4>
							<p>
								{" "}
								Nuestro sistema de calificación ayuda los clientes a elejir al mejor freelancer o
								compañia, no perdas esta ventaja!!
							</p>
						</Col>
					</Row>
				</div>
			</Jumbotron>
		</>
	);
};
