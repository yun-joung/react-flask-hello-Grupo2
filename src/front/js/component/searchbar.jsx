import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Col, Container, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const SearchBar = props => {
	const { store, actions } = useContext(Context);
	const { id } = props;
	const item = store.searchInfo;

	const handledChange = e => {
		e.preventDefault();
		let { search } = e.target;
		actions.searchInfo(search.value);
		// {
		// 	store.searchInfo.length === 0 && (
		// 		<ListGroup className="searchDopdown mt-3 " style={{ marginLeft: "30px" }}>
		// 			<ListGroup.Item action>No hay servicio correspondiente</ListGroup.Item>
		// 		</ListGroup>
		// 	);
		// }
	};

	return (
		<>
			<Form
				onSubmit={e => handledChange(e)}
				inline
				className="Buscar sb float-left mt-2 d-none d-lg-block d-xl-block">
				<FormControl
					type="search"
					placeholder="Buscar"
					className="search"
					name="search"
					style={{ width: "300px" }}
				/>
				<Button variant="btn" className="p-0" type="submit">
					<i className="fas fa-search pr-3" />
				</Button>
			</Form>
			<ListGroup
				className="searchDopdown mt-3 float-right d-none d-lg-block d-xl-block "
				style={{ marginLeft: "30px" }}>
				{!!store.searchInfo && store.searchInfo.length === 0 ? (
					<ListGroup className="searchDopdown mt-3 " style={{ marginLeft: "30px" }}>
						<ListGroup.Item action>No hay servicio correspondiente</ListGroup.Item>
					</ListGroup>
				) : (
					!!store.searchInfo &&
					store.searchInfo.map(item => {
						return (
							<ListGroup.Item key={item.id} href={"/servicio/category/" + item.id} action>
								{item.name_servicio}
							</ListGroup.Item>
						);
					})
				)}
			</ListGroup>
		</>
	);
};

export default SearchBar;

SearchBar.propTypes = {
	id: PropTypes.number
};
