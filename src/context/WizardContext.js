import React, { createContext, useContext, useState } from "react";

const WizardContext = createContext();

export const useWizard = () => {
	const value = useContext(WizardContext);
	return value;
};

export const WizardProvider = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(1);
	const [add, setAdd] = useState(false);
	const [genre, setGenre] = useState({});
	const [subgenre, setSubgenre] = useState({
		name: "",
		id: null,
		isDescriptionRequired: false,
	});
	const [book, setBook] = useState({
		title: "",
		author: "",
		isbn: "",
		publisher: "",
		datePublished: "",
		pagesNumber: "",
		format: "",
		edition: "",
		language: "",
		desc: "",
	});
	return (
		<WizardContext.Provider
			value={{
				currentStep,
				setCurrentStep,
				add,
				setAdd,
				genre,
				setGenre,
				subgenre,
				setSubgenre,
				book,
				setBook,
			}}
		>
			{children}
		</WizardContext.Provider>
	);
};
