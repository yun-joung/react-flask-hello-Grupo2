import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, Navbar, Nav, Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

const Searchbar = props => {
    const { store, actions } = useContext(Context);
    const [input, setInput] = useState('')
    const [keyword, SetKeyword] = useState('')
    const [serch, setSerch] = useState();
    const [serchList, setSerchList] = useState();

    const serchData = async (input) => {
        const filteredSerchData = serviceInfoDefault.filter(serviceInfo => {
            return serviceInfo.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setSerch(filteredSerchData);
    }

    return (
        <>
            <Form inline className="Buscar sb d-flex float-right mt-2 hidden-sm">
                <FormControl type="text" placeholder="Buscar" className="mr-sm-4 search" />
                <Button variant="btn" value={keyword} onChange={(e) => setKeyword(e.target.value)}>
                    <i className="fas fa-search pr-3" />
                </Button>
            </Form>
        </>
    );
}