import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ProgressBar } from "react-bootstrap";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Formcomment = props => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
	const { id } = store.serviceRegistrado;
	const { idcompra } = props;
	console.log(id);
	const [assessment, setAssessment] = useState(0);

	useEffect(() => {
		actions.listComments(id);
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col p-0">
						<h2>Comentarios</h2>
						<header className="text-left my-3">
							<ButtomStar value={"1"} assessment={assessment} onClick={() => setAssessment(1)} />
							<ButtomStar value={"2"} assessment={assessment} onClick={() => setAssessment(2)} />
							<ButtomStar value={"3"} assessment={assessment} onClick={() => setAssessment(3)} />
							<ButtomStar value={"4"} assessment={assessment} onClick={() => setAssessment(4)} />
							<ButtomStar value={"5"} assessment={assessment} onClick={() => setAssessment(5)} />
						</header>
						<div className="comment-post">
							<InputGroup className="mb-5">
								<br />
								<FormControl
									className="formulario"
									placeholder="escribir comentario"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
									value={text_comment}
									onChange={e => setComment(e.target.value)}
								/>
								<InputGroup.Append>
									<Button
										variant="outline-primary"
										onClick={() => {
											actions.addComment(text_comment, assessment, id, idcompra);
											setComment("");
											setAssessment(0);
										}}>
										Ingresar
									</Button>{" "}
								</InputGroup.Append>
							</InputGroup>
						</div>
						<ul style={{ paddingLeft: "0px" }}>
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
											{item.id.text_comment}{" "}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

Formcomment.propTypes = {
	idcompra: PropTypes.number
};
