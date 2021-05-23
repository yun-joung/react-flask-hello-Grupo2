import React, { useContext } from "react";
import "../../../styles/home.scss";
import "../../../styles/index.scss";
import { Container, Button, Row, Col, ListGroup, Form } from "react-bootstrap";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

const SubirProfile = ({ data, setData, handleNext, handleBack }) => {
	const { store, actions } = useContext(Context);
	const { portafolioFoto } = data;

	return (
		<div className="p-5">
			<h2 className="mb-5" style={{ textAlign: "center" }}>
				{" "}
				Profile foto de tu servicio{" "}
			</h2>
			<Form>
				<img
					src={avatar || "../placeholder.png"}
					style={{
						width: "100%",
						height: "auto",
						maxWidth: "300px",
						marginBottom: "10px",
						borderRadius: "10px"
					}}
				/>
				<div>
					<Form.Group>
						<Form.File
							id="file"
							name="portafolioFoto"
							type="file"
							onChange={actions.handleChangeServicefile}
						/>
					</Form.Group>
					<Row style={{ justifyContent: "center" }}>
						<Button variant="primary" size="lg" type="submit" onClick={handleBack} className=" mr-2 my-5">
							<strong>Volver</strong>
						</Button>
						<Button variant="primary" size="lg" type="submit" onClick={handleNext} className="my-5">
							<strong>Continua</strong>
						</Button>
					</Row>
				</div>
			</Form>
		</div>
	);
};

export default SubirProfile;

SubirProfile.propTypes = {
	handleBack: PropTypes.any,
	handleNext: PropTypes.any,
	data: PropTypes.any,
	setData: PropTypes.any
};
