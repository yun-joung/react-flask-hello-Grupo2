import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Jumbotron, Button, ProgressBar } from "react-bootstrap";
import Individuallnfo from "../component/individualInfo.jsx";
import { IndividualCard } from "../component/IndividualCard.jsx";
import { Promedio } from "../component/Promedio.jsx";
import { Formcomment } from "../component/formComment.jsx";
import { MyListComments } from "../component/MyListComments.jsx";
import CustomProgressBar from "../component/CustomProgressBar.jsx";
import Portafolio from "../component/Portafolio.jsx";
import PropTypes from "prop-types";
import { Link, withRouter, useParams } from "react-router-dom";
import ButtomStar from "../component/ButtomStar.jsx";
import ButtomStar2 from "../component/ButtomStar2.jsx";
import StarRating from "../component/StarRating.jsx";

const Servicioindividual = props => {
	const { store, actions } = useContext(Context);
	const [text_comment, setComment] = useState(null);
	const { total1, total2, total3, total4, total5 } = actions.getTotales(store.comments);
	const item = store.serviceRegistrado;
	const { id } = props.match.params;

	useEffect(() => {
		actions.listComments(id);
	}, []);

	useEffect(() => {
		actions.getServiceInfoById(id);
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col className="my-5">
						<p>
							<Link to={"/servicio/" + `${item.category}`}>{item.category}</Link>{" "}
							<i className="fas fa-chevron-right" /> {item.name_servicio}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<Portafolio img={process.env.BACKEND_URL + "/upload/servicio/" + item.portafolioFoto} />
					</Col>
					<Col md={4}>
						<Individuallnfo
							id={item.id}
							name_servicio={item.name_servicio}
							valor={item.valor}
							tipo_cobro={item.tipo_cobro}
							subcategory={item.subcategory}
							duracion={item.duracion}
							revision={item.revision}
							email={item.email_oferente}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<IndividualCard
							descrip_servicio={item.descrip_servicio}
							portafolio={item.portafolio}
							merit={item.merit}
							userName={item.userName}
							experiencia={item.experiencia}
							tipo_membresia={item.tipo_membresia}
						/>
					</Col>
				</Row>
				<div className="transBox" />
				<Row>
					<Col>
						<h3 id="Theird">Opiniones sobre {item.userName}</h3>
					</Col>
				</Row>
				<div className="transBox" />
				<Row mb={5}>
					<Col md={3}>
						<Promedio />
					</Col>
					<Col md={5} style={{ marginLeft: "35px" }}>
						{/* <CustomProgressBar/> */}
						<div>
							<div className="pull-left">
								<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
									<div style={{ height: "9px", margin: "{5px 0}" }}>
										<span
											className="fas fa-star"
											style={{ position: "relative", left: "-20px" }}></span>
									</div>
								</div>
								<div className="pull-left" style={{ width: "180px" }}>
									<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
										<ProgressBar
											now={(total5 * 100) / store.comments.length}
											style={{ width: "100%" }}
										/>
									</div>
								</div>
								<div
									className="pull-right"
									style={{ marginLeft: "-35px", marginTop: "-20px", fontFamily: "Catamaran" }}>
									5
								</div>
							</div>

							<div className="pull-left">
								<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
									<div style={{ height: "9px", margin: "{5px 0}" }}>
										<span
											className="fas fa-star"
											style={{ position: "relative", left: "-20px" }}></span>
									</div>
								</div>
								<div className="pull-left" style={{ width: "180px" }}>
									<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
										<ProgressBar
											now={(total4 * 100) / store.comments.length}
											style={{ width: "100%" }}
										/>
									</div>
								</div>
								<div
									className="pull-right"
									style={{ marginLeft: "-35px", marginTop: "-20px", fontFamily: "Catamaran" }}>
									4
								</div>
							</div>

							<div className="pull-left">
								<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
									<div style={{ height: "9px", margin: "{5px 0}" }}>
										<span
											className="fas fa-star"
											style={{ position: "relative", left: "-20px" }}></span>
									</div>
								</div>
								<div className="pull-left" style={{ width: "180px" }}>
									<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
										<ProgressBar
											now={(total3 * 100) / store.comments.length}
											style={{ width: "100%" }}
										/>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
									3
								</div>
							</div>

							<div className="pull-left">
								<div className="pull-left" style={{ width: "35px", lineHeight: "1" }}>
									<div style={{ height: "9px", margin: "{5px 0}" }}>
										<span
											className="fas fa-star"
											style={{ position: "relative", left: "-20px" }}></span>
									</div>
								</div>
								<div className="pull-left" style={{ width: "180px" }}>
									<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
										<ProgressBar
											now={(total2 * 100) / store.comments.length}
											style={{ width: "100%" }}
										/>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
									2
								</div>
							</div>

							<div className="pull-left">
								<div className="pull-left" style={{ width: "35px", lineHeight: "1.5" }}>
									<div style={{ height: "9px", margin: "{5px 0}" }}>
										<span
											className="fas fa-star"
											style={{ position: "relative", left: "-20px" }}></span>
									</div>
								</div>
								<div className="pull-left" style={{ width: "180px" }}>
									<div className="progress" style={{ height: "9px", margin: "{8px 0}" }}>
										<ProgressBar
											now={(total1 * 100) / store.comments.length}
											style={{ width: "100%" }}
										/>
										<span className="sr-only">80% Complete (danger)</span>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: "-35px", marginTop: "-20px" }}>
									1
								</div>
							</div>
						</div>
					</Col>
					{/* <Col md={5} style={{ marginLeft: "35px" }}>
                        <CustomProgressBar comments={store.comments} />
                        
					</Col> */}
				</Row>
				<hr />
				<Row>
					<Col mt={5}>
						<ul>
							{store.comments
								.filter(item => {
									return item;
								})
								.map((item, index) => {
									return (
										<li key={index} style={{ listStyleType: "none", marginLeft: "-35px" }}>
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
					</Col>
				</Row>
				<div className="transBox" />
			</Container>
		</>
	);
};

export default withRouter(Servicioindividual);
Servicioindividual.propTypes = {
	match: PropTypes.object,
	id: PropTypes.string
};
