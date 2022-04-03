import React from "react";
import { useWizard } from "../../context/WizardContext";
import { mockData } from "../../utils/mockData";
import ItemSelect from "../ItemSelect";
import styles from "./Steps.module.scss";

const StepGenre = () => {
	const { genre, setGenre } = useWizard();

	return (
		<div className={styles.StepGenre}>
			{mockData.genres.map((gen, index) => (
				<ItemSelect
					key={index}
					title={gen.name}
					id={gen.id}
					selected={genre.id === gen.id}
					onToggle={() => setGenre({ name: gen.name, id: gen.id })}
				></ItemSelect>
			))}
		</div>
	);
};

export default StepGenre;
