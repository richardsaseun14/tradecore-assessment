import React from "react";
import WizardHeaderItem from "./WizardHeaderItem";
import styles from "./WizardHeader.module.scss";
import classNames from "classnames";

const WizardHeader = ({ currentStep, isAdd }) => {
	const classes = classNames(
		styles.WizardHeader,
		"d-flex",
		"align-item-center",
		"justify-content-between"
	);
	return (
		<ul className={classes}>
			<li>
				<WizardHeaderItem step="1" title="Genre" />
			</li>
			<li>
				<WizardHeaderItem step="2" title="Subgenre" />
			</li>
			{currentStep < 3 ? (
				<li>
					<WizardHeaderItem step="..." title="" />
				</li>
			) : isAdd ? (
				<>
					<li>
						<WizardHeaderItem step="3" title="Add Subgenre" />
					</li>
					<li>
						<WizardHeaderItem step="4" title="Information" />
					</li>
				</>
			) : (
				<li>
					<WizardHeaderItem step="3" title="Information" />
				</li>
			)}
		</ul>
	);
};

export default WizardHeader;
