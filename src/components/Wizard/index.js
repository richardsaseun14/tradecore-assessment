import React, { useState } from "react";
import styles from "./Wizard.module.scss";
import WizardFooter from "./WizardFooter";
import WizardHeader from "./WizardHeader";

// const step1 = () => {
// 	return { title: "Genre", content: <p>Step 1</p> };
// };
// const step2 = () => {
// 	return { title: "Subgenre", content: <p>Step 1</p> };
// };

export const Wizard = ({ style }) => {
	const [currentStep, setCurrentStep] = useState(1);
	const [add, setAdd] = useState(false);

	const renderStep = (values) => {
		switch (true) {
			case currentStep === 1:
				return <p>Genre</p>;
			case currentStep === 2:
				return (
					<>
						<p>SubGenre</p>
						<button
							onClick={() => {
								setAdd(true);
								next();
							}}
						>
							Add new
						</button>
					</>
				);
			case currentStep === 3:
				return <p>Add New Subgenre</p>;
			case currentStep === 4:
				return <p>Book Information</p>;
			case currentStep === -1:
				return <p>Success</p>;
			default:
				console.log("wizard form");
		}
	};

	// const steps = [step1.content, step2.content];
	// const Content = steps[currentStep];
	const prev = () => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const next = () => {
		if (currentStep < 5) {
			setCurrentStep((prev) => prev + 1);
		}
	};
	return (
		<div className={styles.Wizard} style={style}>
			<p className="mb-16">Add Book - New Book</p>
			<WizardHeader />
			{renderStep()}
			<WizardFooter prev={prev} next={next} />
		</div>
	);
};
