import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const CardCategory = props => {
	return (
		<div>
			<Card className="bg-dark text-white categoryContainer mt-3" style={{ border: "none" }}>
				<Card.Img
					variant="top"
					height="250px"
					src={props.img}
					alt="Card image"
					className="categoryimage"
					style={{ border: "none", objectFit: "cover" }}
				/>
				<div className="overlay">
					<div className="overlayTextTitle ">
						{props.title}
						<br />
					</div>
					<br />
					<div className="overlayText">{props.valor}</div>
				</div>
			</Card>

			{/* <div class="container">
                <img src="img_avatar.png" alt="Avatar" class="image">
                <div class="overlay">
                    <div class="text">Hello World</div>
                </div>
            </div> */}
			{/* <Card className="g-2 mt-2">
				<Card.Img variant="top" src={props.img} />
				<Card.Body>
					<h5>{props.title}</h5>
					<Card.Text>{props.valor}</Card.Text>
					<Button variant="primary">Más info</Button>
				</Card.Body>
			</Card> */}
		</div>
	);
};

CardCategory.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	valor: PropTypes.string
};
