import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const PersonCategory = props => {
	return (
		<div>
			<Card className="g-2 mt-2 ">
				<Card.Img variant="top" src={props.img} />
				<Card.Body>
					<Card.Title className="mb-0 textOverFlow">{props.name}</Card.Title>
					<Card.Title className="h6 textOverFlow">{props.title}</Card.Title>
					<Card.Text>{props.valor}</Card.Text>
					<Button variant="primary">Contrátame</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

PersonCategory.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	title: PropTypes.string,
	valor: PropTypes.string
};
