import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
//import { DesarrollarIT } from "../../img/image.js";
import { homeSlideA, homeSlideB, homeSlideC } from "../../img/image.js";
import { Carousel, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const MyCarousel = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100 " src={homeSlideA} alt="Second slide" />
				<Carousel.Caption className="texto">
					<h2 className="display-3 d-none d-xl-block ">Contamos con los mejores profesionales</h2>
					<h2 className="display-4 d-none d-lg-block d-xl-none ">Contamos con los mejores profesionales</h2>
					<h2 className="d-none d-md-block d-lg-none">Contamos con los mejores profesionales</h2>
					<h5 className="d-none d-sm-block d-md-none">Contamos con los mejores profesionales</h5>
					<h5 className="d-block d-sm-none">Contamos con los mejores profesionales</h5>
					<h5 className="d-none d-md-block d-lg-block d-xl-block">
						Contrata en línea a los mejores freelancers para cualquier trabajo
					</h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100 " src={homeSlideB} alt="Second slide" />
				<Carousel.Caption className="texto">
					<h2 className="display-3 d-none d-xl-block ">Convierte tus ideas en realidad</h2>
					<h2 className="display-4 d-none d-lg-block d-xl-none ">Convierte tus ideas en realidad</h2>
					<h2 className="d-none d-md-block d-lg-none">Convierte tus ideas en realidad</h2>
					<h5 className="d-none d-sm-block d-md-none">Convierte tus ideas en realidad</h5>
					<h5 className="d-block d-sm-none">Convierte tus ideas en realidad</h5>
					<h5 className="d-none d-md-block d-lg-block d-xl-block">
						Más de 300 millones de servicios realizados exitosamente y con garantía de calidad
					</h5>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={homeSlideC} alt="Third slide" />
				<Carousel.Caption className="texto">
					<h2 className="display-3 d-none d-xl-block ">Las mejores tarifas del mercado</h2>
					<h2 className="display-4 d-none d-lg-block d-xl-none ">Las mejores tarifas del mercado</h2>
					<h2 className="d-none d-md-block d-lg-none">Las mejores tarifas del mercado</h2>
					<h5 className="d-none d-sm-block d-md-none">Las mejores tarifas del mercado</h5>
					<h5 className="d-block d-sm-none">Las mejores tarifas del mercado</h5>
					<h5 className="d-none d-md-block d-lg-block d-xl-block">
						Paga un precio justo por lo que necesitas, sin pagar de más
					</h5>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
export default MyCarousel;
