import React, { useState } from "react";
import {
	Container,
	Button,
	Form,
	Jumbotron,
	FormControl,
	Row,
	Col,
	FormText
} from "react-bootstrap";

const PortafolioFoto = props => {

const Form = props => {
    const [state, setState] = useState({
        portafolioFoto: null
    })
}

const handleChange = e => {
    let data = state;
    data[e.target.name] = event.target.files[0]
    setState(data);
}

    return (
    <div>
        <Form>
            <Form.Group>
                <Form.Label>
                    <h5>
                        Profile foto de tu servicio <span style={{ color: "red" }}>*</span>
                    </h5>
                </Form.Label>
                <Form.File
                    id="portafolioUpload"
                    name="portafolioFoto"
                    type="file"
                    className={touched.portafolioFoto && errors.portafolioFoto ? "error" : null}
                    onChange={event => {
                        setFieldValue("portafolioFoto", event.currentTarget.files[0]);
                    }}
                />
                {/* <Thumb file={values.portafolioFoto} /> */}
            </Form.Group>
            <Row style={{ justifyContent: "center" }}>
                <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disable={isSubmitting}
                    style={{ marginBottom: "40px", marginTop: "40px" }}
                    onClick={e => {
                        handleSubmit(e);
                    }}
                    href="/home">
                    <strong>Registra tu perfil</strong>
                </Button>
            </Row>
        </Form>
        <br />
    </div>
    )
};


export default PortafolioFoto;