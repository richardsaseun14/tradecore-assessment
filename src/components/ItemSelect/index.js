import classNames from "classnames";
import React from "react";
import styles from "./ItemSelect.module.scss";

const ItemSelect = ({ title, id, onToggle, selected }) => {
	const classes = classNames(styles.Select, selected ? styles.Selected : null);
	return (
		<div className={classes} onClick={() => onToggle(id)}>
			{title}
		</div>
	);
};

export default ItemSelect;
