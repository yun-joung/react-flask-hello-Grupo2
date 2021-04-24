import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	button: {
		marginRight: theme.spacing(2)
	},
	completed: {
		display: "inline-block"
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));

function getSteps() {
	return ["Perfil", "Tu equipo", "Tu servicio"];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return "Paso 1: Subir Una foto de perfil";
		case 1:
			return "Paso 2: Habla sobre tu equipo";
		case 2:
			return "Paso 3: Habla sobre tu servicio";
		default:
			return "Paso desconocido";
	}
}

export default function HorizontalNonLinearStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});
	const steps = getSteps();

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStep = step => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<div className={classes.root}>
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepButton onClick={handleStep(index)} completed={completed[index]}>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>


			<div>
				{allStepsCompleted() ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
						</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
								Atrás
							</Button>
							<Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
								Próxima
							</Button>
							{activeStep !== steps.length &&
								(completed[activeStep] ? (
									<Typography variant="caption" className={classes.completed}>
										Paso {activeStep + 1} Ya completado
									</Typography>
								) : (
									<Button variant="contained" color="primary" onClick={handleComplete}>
										{completedSteps() === totalSteps() - 1 ? "Terminar" : "Paso completo"}
									</Button>
								))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
