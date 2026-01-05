/**
 * SearchBar Component
 *
 * Controlled input that allows users to search for cities.
 * Validates input  and triggers search on submit.
 *
 * @param {Function} onSearch - Function called with city upon submit
 */
import { useState } from "react";

function SearchBar({ onSearch }) {
	const [inputText, setInputText] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(inputText);
				setInputText("");
			}}>
			<input
				type="text"
				placeholder="Enter a city name...."
				value={inputText}
				onChange={(event) => {
					setInputText(event.target.value);
				}}
			/>

			<button type="submit">SEARCH</button>
		</form>
	);
}

export default SearchBar;
