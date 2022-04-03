import React from "react";
import styles from "./Wizard.module.scss";
import WizardFooter from "./WizardFooter";
import WizardHeader from "./WizardHeader";
import { useWizard } from "../../context/WizardContext";
import StepGenre from "../Steps/StepGenre";
import StepSubgenre from "../Steps/StepSubgenre";
import StepCreateSub from "../Steps/StepCreateSub";
import StepBook from "../Steps/StepBook";
import Success from "../Steps/Success";

export const Wizard = ({ style }) => {
	const { add, setAdd, currentStep, setCurrentStep, setSubgenre } = useWizard();

	const renderStep = () => {
		switch (true) {
			case currentStep === 1:
				return <StepGenre></StepGenre>;
			case currentStep === 2:
				return <StepSubgenre />;
			case currentStep === 3:
				return <StepCreateSub />;
			case currentStep === 4:
				return <StepBook />;
			case currentStep === 5:
				return <Success />;
			default:
				console.log("this is the wizard form");
		}
	};

	const prev = () => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
			if (currentStep === 4 && !add) setCurrentStep(2);
		}
		if (currentStep === 3) {
			setAdd(false);
			setSubgenre({
				name: "",
				id: null,
				isDescriptionRequired: false,
			});
		}
	};

	const next = () => {
		if (currentStep < 5) {
			setCurrentStep((prev) => prev + 1);
			if (currentStep === 2 && !add) setCurrentStep(4);
		}
	};
	return (
		<div className={styles.Wizard} style={style}>
			{currentStep === 5 ? null : <p className="mb-16">Add Book - New Book</p>}
			<WizardHeader currentStep={currentStep} isAdd={add} />
			{renderStep()}
			<WizardFooter prev={prev} next={next} />
		</div>
	);
};
