import React from "react";
import { useState } from "react";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

const Portafolio = props => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="mb-3">
			<Carousel.Item>
				<img className="d-block w-100" src={props.img} alt="First slide" />
				<Carousel.Caption>
					<p />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={serviceMarketing} alt="Second slide" />
				<Carousel.Caption>
					<p />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={serviceIt} alt="Third slide" />
				<Carousel.Caption>
					<p />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
export default Portafolio;

Portafolio.propTypes = {
	img: PropTypes.string
};
