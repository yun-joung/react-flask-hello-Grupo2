import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ProgressBar } from "react-bootstrap";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Formcomment = () => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
	const { id } = store.serviceRegistrado;
	console.log(id);
	const [assessment, setAssessment] = useState(0);
	// const [color, setColor] = useState();
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col mt-5">
						<section className="comment-list">
							<article className="row">
								<div className="panel panel-default arrow left">
									<div className="panel-body">
										<header className="text-left">
											<Form.Label>Agrega tu evaluación y comentario</Form.Label>
											<br />
											<ButtomStar
												value={"1"}
												assessment={assessment}
												onClick={() => setAssessment(1)}
											/>
											<ButtomStar
												value={"2"}
												assessment={assessment}
												onClick={() => setAssessment(2)}
											/>
											<ButtomStar
												value={"3"}
												assessment={assessment}
												onClick={() => setAssessment(3)}
											/>
											<ButtomStar
												value={"4"}
												assessment={assessment}
												onClick={() => setAssessment(4)}
											/>
											<ButtomStar
												value={"5"}
												assessment={assessment}
												onClick={() => setAssessment(5)}
											/>
										</header>
										<hr />
										<div className="comment-post">
											<Form>
												<Form.Group controlId="formBasicEmail">
													<Form.Control
														className="formulario"
														type="text"
														placeholder="Escribe el comentario"
														value={text_comment}
														onChange={e => setComment(e.target.value)}
													/>
												</Form.Group>
												<hr />
												<Button
													variant="info"
													onClick={() => {
														actions.addComment(text_comment, assessment, id);
													}}>
													Ingresar
												</Button>{" "}
											</Form>
										</div>
										<hr />
									</div>
								</div>
							</article>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
