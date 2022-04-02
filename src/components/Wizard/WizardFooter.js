import React, { useMemo } from "react";
import Button from "../Button";
import { useWizard } from "../../context/WizardContext";

const WizardFooter = ({ prev, next }) => {
	const { currentStep, genre, subgenre, add } = useWizard();

	const isPrevDisabled = () => {
		switch (true) {
			case currentStep === 1:
				return true;
			case currentStep === 2:
				return false;
			case currentStep === 3:
				return false;
			case currentStep === 4:
				return false;
			default:
				return true;
		}
	};

	const isNextDisabled = () => {
		switch (true) {
			case currentStep === 1 && !!genre.id:
				return false;
			case currentStep === 2 && !!subgenre.id:
				return false;
			case currentStep === 2 && add:
				return false;
			case currentStep === 3 && !!subgenre.name && !!subgenre.id:
				return false;
			default:
				return true;
		}
	};

	return (
		<div className="d-flex align-items-center justify-content-end">
			<Button
				className="mr-2"
				outlined
				onClick={prev}
				label="Back"
				disabled={isPrevDisabled()}
			/>
			<Button onClick={next} label="Next" disabled={isNextDisabled()} />
		</div>
	);
};

export default WizardFooter;
