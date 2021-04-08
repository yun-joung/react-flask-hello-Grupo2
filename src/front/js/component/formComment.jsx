import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ProgressBar } from "react-bootstrap";
import ButtomStar from "./ButtomStar.jsx";
import ButtomStar2 from "./ButtomStar2.jsx";
import { Form, Button } from "react-bootstrap";

export const Formcomment = () => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
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
											<ButtomStar onClick={() => setAssessment(1)} />
											<ButtomStar onClick={() => setAssessment(2)} />
											<ButtomStar onClick={() => setAssessment(3)} />
											<ButtomStar onClick={() => setAssessment(4)} />
											<ButtomStar onClick={() => setAssessment(5)} />
										</header>
										<div className="comment-post">
											<Form>
												<Form.Group controlId="formBasicEmail">
													<Form.Label>Comentario</Form.Label>
													<Form.Control
														className="formulario"
														type="text"
														placeholder="Escribe el comentario"
														value={text_comment}
														onChange={e => setComment(e.target.value)}
													/>
												</Form.Group>
												<Button
													variant="info"
													onClick={() => {
														actions.addComment(text_comment, assessment);
													}}>
													Ingresar
												</Button>{" "}
											</Form>
										</div>
										<ul>
											{store.comments
												.filter(item => {
													return item;
												})
												.map((item, index) => {
													return (
														<li key={index} style={{ listStyleType: "none" }}>
															{item.text_comment}{" "}
														</li>
													);
												})}
										</ul>
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
