import React, { useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Row, Col, Container, Card, Button, Accordion } from "react-bootstrap";
import { CategoryBox } from "../component/categoryBox.jsx";
import { MyFilterAdmin } from "../component/myFilter_Admin.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import UserUpdate from "../component/UserUpdate.jsx";

const Admin = props => {
	const { store, actions } = React.useContext(Context);

	if (!!store.user.tipo_user === "admin") {
		props.history.push("/login-admin");
	}
	useEffect(() => {
		actions.getToken();
	}, []);

	return (
		<div className="backGray">
			<Container>
				<Row>
					<Col md={3} className="mt-5">
						<MyFilterAdmin />
					</Col>
					<Col md={9} className="mt-5">
						<UserUpdate userName={store.user.userName} email={store.user.user} />
					</Col>
				</Row>
				<div className="transBox" />
			</Container>
		</div>
	);
};

export default withRouter(Admin);

Admin.propTypes = {
	history: PropTypes.object
};
