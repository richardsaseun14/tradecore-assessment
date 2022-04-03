import React from "react";
import { useWizard } from "../../context/WizardContext";
import Checkbox from "../Checkbox";
import Input from "../Input";

const StepCreateSub = () => {
	const { subgenre, setSubgenre } = useWizard();

	// const [isDescriptionRequired, setIsDescriptionRequired] = useState(false);
	// const [name, setName] = useState("");

	return (
		<div className="reset-sizing">
			<Input
				className="reset-sizing w-100 mb-16"
				placeholder={"Subgenre name"}
				value={subgenre.name}
				onChange={(e) => setSubgenre({ ...subgenre, name: e.target.value })}
				type="text"
			></Input>
			<Checkbox
				label="Description is required for this sub genre"
				value={subgenre.isDescriptionRequired}
				onChange={(e) =>
					setSubgenre({
						...subgenre,
						isDescriptionRequired: e.target.checked,
					})
				}
			/>
		</div>
	);
};

export default StepCreateSub;
