// PROPS: onSearch function from App
// Has input field and button
// When clicked, calls onSearch(cityName)
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
