import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import CustomProgressBar from "./CustomProgressBar.jsx";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import StarRating from "./StarRating.jsx";

export const Comments = () => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
	const getPromedio = comments => {
		let total = 0;
		comments.map(item => (total += item.evaluacion));

		return Math.round(total / comments.length);
	};
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
					<div className="rating-block">
						<h5 style={{ textAlign: "center" }}>Calificación Promedio de usuarios</h5>
						<h1 className="bold padding-bottom-7">
							{getPromedio(store.comments)} <small>/ 5</small>
						</h1>
					</div>
				</div>
				{/* Cuadro de comentario */}
				<div className="row">
					<div className="col-sm-7">
						<hr />
						<div className="review-block">
							<div className="row">
								<div className="col-sm-3"></div>
								<div className="col-sm-9"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
