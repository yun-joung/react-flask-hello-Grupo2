import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Col, Container, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

// const Searchbar = props => {
//     const { store, actions } = useContext(Context);
//     const [input, setInput] = useState('')
//     const [keyword, SetKeyword] = useState('')
//     const [serch, setSerch] = useState();
//     const [serchList, setSerchList] = useState();

//     const serchData = async (input) => {
//         const filteredSerchData = serviceInfoDefault.filter(serviceInfo => {
//             return serviceInfo.name.toLowerCase().includes(input.toLowerCase())
//         })
//         setInput(input);
//         setSerch(filteredSerchData);
//     }

//     return (
//         <>
//             <Form inline className="Buscar sb d-flex float-right mt-2 hidden-sm">
//                 <FormControl type="text" placeholder="Buscar" className="mr-sm-4 search" />
//                 <Button variant="btn" value={keyword} onChange={(e) => setKeyword(e.target.value)}>
//                     <i className="fas fa-search pr-3" />
//                 </Button>
//             </Form>
//         </>
//     );
// }
const SearchBar = props => {
	const { store, actions } = useContext(Context);
	const { id } = props;
	const item = store.searchInfo;

	const handledChange = e => {
		e.preventDefault();
		let { search } = e.target;
		actions.searchInfo(search.value);
		if (store.searchInfo.length === 0) {
			return (
				<ListGroup className="searchDopdown mt-3 " style={{ marginLeft: "30px" }}>
					<ListGroup.Item action>No hay servicio correspondiente</ListGroup.Item>
				</ListGroup>
			);
		}
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
				{/* {store.searchInfo.length === 0 && (
						<ListGroup.Item action>No hay servicio correspondiente</ListGroup.Item>
					)} */}
				{store.searchInfo.map(item => {
					return (
						<ListGroup.Item key={item.id} href={"/servicio/category/" + item.id} action>
							{item.name_servicio}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</>
	);
};

export default SearchBar;

SearchBar.propTypes = {
	id: PropTypes.number
};
