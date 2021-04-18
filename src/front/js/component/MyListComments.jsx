import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import CustomProgressBar from "./CustomProgressBar.jsx";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import StarRating from "./StarRating.jsx";

export const MyListComments = () => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);

	return (
		<ul>
			{store.comments
				.filter(item => {
					return item;
				})
				.map((item, index) => {
					return (
						<li key={index} style={{ listStyleType: "none" }}>
							<hr />
							<ButtomStar value={"1"} assessment={item.evaluacion} onClick={() => null} />
							<ButtomStar value={"2"} assessment={item.evaluacion} onClick={() => null} />
							<ButtomStar value={"3"} assessment={item.evaluacion} onClick={() => null} />
							<ButtomStar value={"4"} assessment={item.evaluacion} onClick={() => null} />
							<ButtomStar value={"5"} assessment={item.evaluacion} onClick={() => null} />
							<br />
							{item.text_comment}{" "}
						</li>
					);
				})}
		</ul>
	);
};
