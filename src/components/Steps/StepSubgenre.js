import React, { useState } from "react";
import { useWizard } from "../../context/WizardContext";
import { mockData } from "../../utils/mockData";
import ItemSelect from "../ItemSelect";
import styles from "./Steps.module.scss";

const StepSubgenre = () => {
	const { genre, subgenre, setSubgenre, add, setAdd } = useWizard();
	const addToggle = () => {
		setAdd(true);
		setSubgenre({
			name: "",
			id:
				mockData.genres[genre.id].subgenres[
					mockData.genres[genre.id].subgenres.length - 1
				].id + 1,
			isDescriptionRequired: false,
		});
	};

	const onToggle = (sub) => {
		setSubgenre(sub);
		setAdd(false);
	};

	return (
		<div className={styles.StepGenre}>
			{mockData.genres[genre.id].subgenres.map((sub, index) => (
				<ItemSelect
					key={index}
					title={sub.name}
					id={sub.id}
					selected={subgenre.id === sub.id}
					onToggle={() => onToggle(sub)}
				></ItemSelect>
			))}
			<ItemSelect title="Add New" selected={add} onToggle={addToggle} />
		</div>
	);
};

export default StepSubgenre;
