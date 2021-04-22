import { Tabs, Tab } from "react-bootstrap";
import Form from "./Form";
import Register from "../pages/register.js";

const MyTab = () => {
    return (
        <>
        <div classNameName="container WhiteBackground">
            <Tabs defaultActiveKey="Register" id="uncontrolled-tab-example">
                <Tab eventKey="Register" title="Usuario">
                    <Login />
                </Tab>
                <Tab eventKey="signup" title="Administrador">
                    <Form />
                </Tab>
            </Tabs>
            </div>
        </>
    )
}

export default MyTab;