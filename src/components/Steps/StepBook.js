import React from "react";
import Input from "../Input";
import { useWizard } from "../../context/WizardContext";
import styles from "./Steps.module.scss";
import Textarea from "../Textarea";
import InputSelect from "../InputSelect";

const AUTHORS = [
	"William Shakespeare",
	"Agatha Christie",
	"Harold Robbins",
	"Danielle Steel",
	"Enid Blyton",
	"Sidney Sheldon",
	"Eiichiro Oda",
	"J. K. Rowling",
	"Dr. Seuss",
];
const PUBLISHERS = [
	"BOA Editions",
	"Entangled Publishing",
	"Schocken",
	"Simon & Schuster",
	"Harvest House Publishers",
	"Aria Publishing",
	"Mysterious Press",
	"Quirk Books",
	"Two Dollar Radio",
];
const FORMATS = ["PDF", "Epub", "Hard Copy"];
const LANGUAGES = [
	"English",
	"French",
	"Chinese",
	"Spanish",
	"Yoruba",
	"Dutch",
	"German",
];

const StepBook = () => {
	const { book, setBook, subgenre } = useWizard();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<div className={styles.StepBook}>
			<form onSubmit={handleSubmit}>
				<Input
					className="w-100"
					placeholder="Book title"
					label="Book title"
					required
					value={book.title}
					onChange={(e) => setBook({ ...book, title: e.target.value })}
				></Input>
				<InputSelect
					className="w-100"
					label="Author"
					items={AUTHORS}
					name="author"
					value={book.author}
					onChange={(e) => setBook({ ...book, author: e.target.value })}
				></InputSelect>
				<Input
					className="w-100"
					placeholder="ISBN"
					type="number"
					label="ISBN"
					value={book.isbn}
					onChange={(e) => setBook({ ...book, isbn: e.target.value })}
				></Input>
				<InputSelect
					className="w-100"
					label="Publisher"
					name="publisher"
					items={PUBLISHERS}
					value={book.publisher}
					onChange={(e) => setBook({ ...book, publisher: e.target.value })}
				></InputSelect>
				<Input
					placeholder="DD/MM/YYYY "
					type="date"
					label="Date published"
					value={book.datePublished}
					onChange={(e) => setBook({ ...book, datePublished: e.target.value })}
				></Input>
				<div>
					<Input
						placeholder="Number of pages "
						type="number"
						label="Number of pages"
						value={book.pagesNumber}
						onChange={(e) => setBook({ ...book, pagesNumber: e.target.value })}
					></Input>
				</div>
				<div>
					<InputSelect
						label="Format"
						name="format"
						items={FORMATS}
						value={book.format}
						onChange={(e) => setBook({ ...book, format: e.target.value })}
					></InputSelect>
				</div>
				<div className="d-flex">
					<Input
						className="mr-2"
						placeholder="Edition "
						type="text"
						label="Edition"
						value={book.edition}
						onChange={(e) => setBook({ ...book, edition: e.target.value })}
					></Input>
					<InputSelect
						label="Edition Language"
						name="language"
						items={LANGUAGES}
						value={book.language}
						onChange={(e) => setBook({ ...book, language: e.target.value })}
					></InputSelect>
				</div>
				{/* conditional description */}
				{subgenre.isDescriptionRequired ? (
					<div>
						<Textarea
							className="w-100"
							label="Description"
							placeholder="Type the description..."
							value={book.desc}
							onChange={(e) => setBook({ ...book, desc: e.target.value })}
						></Textarea>
					</div>
				) : null}
			</form>
		</div>
	);
};

export default StepBook;
