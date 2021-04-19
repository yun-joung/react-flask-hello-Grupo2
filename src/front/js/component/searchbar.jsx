import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const SearchBar = props => {
	const { store, actions } = useContext(Context);

	const handledChange = e => {
		e.preventDefault();
		let { search } = e.target;
		actions.searchInfo(search.value);
	};

	return (
		<>
			<div
				className="dropdown-menu dropdown-primary Buscar sb float-right mt-2 d-none d-lg-block d-xl-block d-flex"
				id="your-custom-id"
				style={{ width: "400px" }}
				onSubmit={e => handledChange(e)}>
				<input
					className="form-control search"
					type="search"
					placeholder="Buscar"
					name="search"
					aria-label="Search"
					style={{ width: "300px" }}
				/>
				<button
					className="btn p-0 dropdown-toggle float-right"
					type="submit"
					id="dropdownMenu1-1"
					data-toggle="dropdown">
					<i className="fas fa-search pr-3" />
				</button>
			</div>
			<div>
				{store.searchInfo.map(item => {
					return (
						<Link key={item.id} to={"/servicio/category" + id} className="dropdown-item mdb-dropdownLink-1">
							{item.nombre - servicio}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default SearchBar;

// <Button
// 							variant="btn"
// 							className="d-none float-right d-sm-block d-md-block d-lg-none h4 p-0"
// 							onChange={event => props.handledChange(event)}>
// 							<i className="fas fa-search pr-3" />
// 						</Button>
// 						<Button
// 							variant="btn"
// 							className="float-right d-block d-sm-none h4 p-0"
// 							onChange={event => props.handledChange(event)}>
// 							<i className="fas fa-search pr-3" />
// 						</Button>
