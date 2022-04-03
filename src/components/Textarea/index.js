import classNames from "classnames";
import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = ({ value, onChange, className, placeholder, label }) => {
	const classes = classNames(
		className,
		styles.Textarea,
		"reset-sizing",
		"mb-16"
	);
	return (
		<>
			{label ? (
				<>
					<label className="">{label}</label>
					<br></br>
				</>
			) : (
				""
			)}
			<textarea
				rows="4"
				cols="50"
				className={classes}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></textarea>
		</>
	);
};

export default Textarea;
