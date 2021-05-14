import React from "react";
import { useState } from "react";
import { Carousel, Container, Media } from "react-bootstrap";
import { personB, personA, personC } from "../../img/image";

const CarouselReviews = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className="jumbotron mb-0">
			<Container>
				<h3 className="text-center mt-5">Comentario de los clientes </h3>
				<Carousel activeIndex={index} onSelect={handleSelect} className="shdow">
					<Carousel.Item className="text-center my-5 ">
						<img
							src={personA}
							width="100"
							height="100"
							className="align-top img-thumbnail"
							alt="person_Image"
							style={{ borderRadius: "50%" }}
						/>
						<h5 className="font-weight-bold">Felipe Morales - Arquitectura TI</h5>
						<p>
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="far fa-star h4" /> calificación 4/5
						</p>
						<p>
							Excelente trabajo, muy buen servicio y la aplicación muy expedita para comunicarme con el
							desarrollador.
							<br />
							Esperamos poder volver a trabajar con él en el futuro.
						</p>
					</Carousel.Item>
					<Carousel.Item className="text-center my-5 ">
						<img
							src={personB}
							width="100"
							height="100"
							className="align-top img-thumbnail"
							alt="person_Image"
							style={{ borderRadius: "50%" }}
						/>
						<h5 className="font-weight-bold">Marcia Canales - Desarrollador Full Stack</h5>
						<p>
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							calificación 5/5
						</p>
						<p>
							Excelente trabajo, muy buen servicio y la aplicación muy expedita para comunicarme con el
							desarrollador y con los clientes.
							<br /> Se adecuó anuestros requerimientos y especificaciones!!
							<br />
							Esperamos poder volver a trabajar con él en el futuro.
						</p>
					</Carousel.Item>
					<Carousel.Item className="text-center my-5 ">
						<img
							src={personC}
							width="100"
							height="100"
							className="align-top img-thumbnail"
							alt="person_Image"
							style={{ borderRadius: "50%" }}
						/>
						<h5 className="font-weight-bold">Federico Ruiz-Tagle - Diseño de logos</h5>
						<p>
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="fas fa-star" style={{ fontSize: "23px" }} />
							<i className="far fa-star h4" /> calificación 4/5
						</p>
						<p>
							Muy buen servicio, muy buen diseñador, esperamos poder volver a trabajar con él en el
							futuro,
							<br /> Se adecuó anuestros requerimientos y especificaciones!!
						</p>
					</Carousel.Item>
				</Carousel>
				<div className="transBox" />
			</Container>
		</div>
	);
};
export default CarouselReviews;
