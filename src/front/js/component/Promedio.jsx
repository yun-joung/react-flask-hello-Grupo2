import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import CustomProgressBar from "./CustomProgressBar.jsx";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import StarRating from "./StarRating.jsx";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Promedio = props => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
	const { id } = useParams;

	const getPromedio = comments => {
		let total = 0;
		store.comments.map(item => (total += item.evaluacion));

		return Math.round(total / comments.length);
	};

	useEffect(() => {
		actions.listComments(id);
	}, []);

	// const getTotales = comments => {
	//  let total1 = 0;
	//  let total2 = 0;
	//  let total3 = 0;
	//  let total4 = 0;
	//  let total5 = 0;
	//  comments.map(item => {
	//      if (item.count === 1) total1++;
	//      if (item.count === 2) total2++;
	//      if (item.count === 3) total3++;
	//      if (item.count === 4) total4++;
	//      if (item.count === 5) total5++;
	//  });
	//  return { total5, total4, total3, total2, total1 };
	// };
	return (
		<div className="container">
			<div className="row">
				<div>
					<div className="rating-block d-flex ">
						<div>
							<h1
								className="display-1 float-left"
								style={{ textAlign: "center", marginTop: "-20px", marginBottom: "-10px" }}>
								{getPromedio(store.comments)}
							</h1>
						</div>
						<div className="float-right mt-5">
							<h4>/5</h4>
						</div>
					</div>
					{store.comments.length === 0 ? (
						<p>No hay evaluación </p>
					) : (
						<p>Promedio entre {store.comments.length} opiniones</p>
					)}
				</div>
				{/* Cuadro de comentario */}
			</div>
		</div>
	);
};

Promedio.propTypes = {
	id: PropTypes.number,
	match: PropTypes.object
};
