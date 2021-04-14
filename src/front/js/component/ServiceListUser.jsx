import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

const ServiceListUser = props => {
	const { store, actions } = React.useContext(Context);
	const { id } = props;

	return (
		<>
			<Link to={"/MiServicio/id/" + id}>
				<Button
					variant="outline-primary"
					block
					className="text-left"
					onClick={() => actions.getServiceInfoById(props.id)}>
					{props.id}.&nbsp;{props.name_servicio}
					<Button variant="light" className="float-right " onClick={() => actions.eliminaServicio(id)}>
						<i className="fas fa-trash-alt"></i>
					</Button>
					<Link to={"/MiServicio/id/" + id}>
						<Button variant="light" className="float-right  mr-2 ">
							<i className="fas fa-edit"></i>
						</Button>
					</Link>
				</Button>
				<br />
			</Link>
		</>
	);
};

export default withRouter(ServiceListUser);

ServiceListUser.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	name_servicio: PropTypes.string
};
