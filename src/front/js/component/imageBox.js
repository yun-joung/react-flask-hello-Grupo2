import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { homeImage } from "../../img/image.js";
import { Carousel, Container, Button } from "react-bootstrap";

const ImageBox = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const [widSize, setwidSize] = useState(window.innerWidth < 1200);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				const ismobile = window.innerWidth > 850;
				if (widSize !== widSize) setIsMobile(widSize);
			},
			false
		);
	}, [widSize]);

	return (
		<Carousel>
			<Carousel.Item>
				<img className="w-100 mt-5 " src={homeImage} style={{ height: "250px", objectFit: "cover" }} />
				<Carousel.Caption className="texto-image w-100">
					<h1 className="textShadow display-5 d-none d-xl-block d-xxl-block">
						¿Necesita un servicio exclusivo para empresas? <br />
					</h1>
					<h2 className="textShadow d-none d-md-block d-xl-none">
						¿Necesita un servicio exclusivo para empresas? <br />
					</h2>
					{/* <h5 className={`${widSize ? "textShadow" : "textShadow display-5"}`}> */}
					<h5 className=" d-md-none d-xxl-none">
						¿Necesita un servicio exclusivo para empresas? <br />
					</h5>
					<Link to="/service-empresa">
						<Button
							variant="light"
							className="mt-3 px-2"
							style={{ borderRadius: "1.75rem", width: "180px" }}>
							Pregunta a cotec
						</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ImageBox;
