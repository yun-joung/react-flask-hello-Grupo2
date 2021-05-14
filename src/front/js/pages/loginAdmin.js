import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Button, Form, Jumbotron } from "react-bootstrap";
import { MyFilterAdmin } from "../component/myFilter_Admin.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
	email: yup.string().required("* El email es obligatorio"),
	password: yup
		.string()
		.min(8, "*  Al menos 8 carácteres. Una mezcla de letras mayúsculas, minúsculas y numero.")
		.required("*  La contraseña es obligatorio")
});

const LoginAdmin = props => {
	const { store, actions } = React.useContext(Context);
	if (store.user.isLogin === true) {
		props.history.push("/admin");
	}

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				actions.setAdminLogin(values);
				setSubmitting(true);
				resetForm();
				setSubmitting(false);
				setTimeout;
			}}>
			{({ values, errors, handlerClick, isInvalid, handleChange, handleSubmit, history }) => (
				<div className="backGrayB">
					<Container>
						<Row>
							<Col>
								<div className="transBox" />
								<h1 className="text-white mt-3 textShadow mx-auto" style={{ maxWidth: "700px" }}>
									Login de Administración
								</h1>
							</Col>
						</Row>
						<Jumbotron className="whiteBox shadow-lg p-5 mx-auto" style={{ maxWidth: "700px" }}>
							<Form noValidate onSubmit={handleSubmit}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										name="email"
										value={values.email}
										onChange={handleChange}
										isInvalid={!!errors.email}
									/>
									<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										name="password"
										value={values.password}
										onChange={handleChange}
										isInvalid={!!errors.password}
									/>
									<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
								</Form.Group>
								<Button variant="primary" size="lg" type="submit" block style={{ marginTop: "70px" }}>
									Ingresar
								</Button>
							</Form>
						</Jumbotron>
						<div className="transBox" />
					</Container>
				</div>
			)}
		</Formik>
	);
};

export default withRouter(LoginAdmin);

LoginAdmin.propTypes = {
	history: PropTypes.object
};
