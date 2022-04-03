import React, { createContext, useContext, useState } from "react";
const BOOK = {
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
};

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
	const [book, setBook] = useState(BOOK);
	const resetWizard = () => {
		setCurrentStep(1);
		setAdd(false);
		setGenre({});
		setSubgenre({ name: "", id: null, isDescriptionRequired: false });
		setBook(BOOK);
	};

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
				resetWizard,
			}}
		>
			{children}
		</WizardContext.Provider>
	);
};
