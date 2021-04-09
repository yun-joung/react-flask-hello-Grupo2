import React from "react";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Card, Button, Accordion, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyFilter = () => {
	return (
		<>
			{/* <Nav.Link as={Link} to="/home" >Home</Nav.Link> */}
			<Nav justify variant="tabs" defaultActiveKey="/home" className="flex-column bg-light">
				<Nav.Item>
					<Nav.Link as={Link} to="/MiDato" className="flex-column text-left">
						Mis Datos
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/MiServicio" className="flex-column text-left">
						Mis Servicios
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/registerservice" className="flex-column text-left">
						Registrar nuevo servicio
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
};

{
	/* <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <i className="fas fa-chevron-right" /> Mis Datos
						</Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <i className="fas fa-chevron-right" /> Mis Servicios
						</Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            <i className="fas fa-chevron-right" /> Registrar nuevo servicio
						</Accordion.Toggle>
                    </Card.Header>
                </Card>
            </Accordion> */
}
