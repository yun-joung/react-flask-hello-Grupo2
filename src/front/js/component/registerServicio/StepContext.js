import React, { useState } from "react";
import RegisterServiceForm from "./RegisterServiceForm";

export const multiStepContext = React.createContext();

const StepContext = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [userData, setUserData] = useState([]);
	const [finalData, setFinalData] = useState([]);
	return (
		<div>
			<multiStepContext.Provider value={{ activeStep, setStep, userData, setUserData, finalData, setFinalData }}>
				<RegisterServiceForm />
			</multiStepContext.Provider>
		</div>
	);
};
