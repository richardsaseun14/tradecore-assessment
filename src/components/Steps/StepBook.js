import React, { useState } from "react";
import { mockData } from "../../utils/mockData";
import ItemSelect from "../ItemSelect";
import styles from "./Steps.module.scss";

const Step1 = () => {
	const handleSubmit = (event) => {
		// prevents the submit button from refreshing the page
		event.preventDefault();
		console.log(event);
	};

	return (
		<div className={styles.Step1}>
			<form onSubmit={handleSubmit}></form>
		</div>
	);
};

export default Step1;
