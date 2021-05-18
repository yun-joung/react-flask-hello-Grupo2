import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { serviceDiseno, serviceMarketing, serviceIt } from "../../img/image.js";
import { Button, Table } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

const CompraListUser = props => {
	const { store, actions } = React.useContext(Context);
	const { id, idservicio } = props;

	return (
		<>
			<Link to={"/MiCompra/id/" + id + "/servicio/" + idservicio}>
				<Table>
					<thead>
						<tr>
							<th>Nro</th>
							<th>Nombre Servicio</th>
							<th>Fecha Compra</th>
							<th>Valor Servicio</th>
						</tr>
					</thead>
					<tbody onClick={() => actions.getBuyServiceByIdUser(props.id)}>
						<tr>
							<td>{props.id}</td>
							<td>{props.name_servicio}</td>
							<td>{props.fecha_inicio}</td>
							<td>{props.total_valor_servicio}</td>
						</tr>
					</tbody>
				</Table>
				<br />
			</Link>
		</>
	);
};

export default withRouter(CompraListUser);

CompraListUser.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	name_servicio: PropTypes.string,
	fecha_inicio: PropTypes.date,
	total_valor_servicio: PropTypes.number,
	idservicio: PropTypes.number
};
