import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

/**
 * App Component
 *
 * Main application component that manages weather data fetching and display.
 * Handles search input, loading states, error handling, and coordinates between weather components
 */

function App() {
	const apikey = import.meta.env.VITE_API_KEY;

	const [city, setCity] = useState(null);
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState([]);
	const [loadingState, setLoadingState] = useState(false);
	const [errorState, setErrorState] = useState("");

	const clearError = () => setErrorState("");

	const handleSearch = (city) => {
		//Error Handling for empty string
		if (!city.trim()) {
			setErrorState(
				"We need SOMETHING! Please try entering a city name again ;)"
			);
			return;
		}
		clearError();
		//Set loading state to true before updating city, to avoid race conditions
		setLoadingState(true);
		setCity(city);
	};

	//Function that fetches both current weather data and forecast data in parallel
	const fetchWeatherData = (city) => {
		const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
		const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`;

		const currentPromise = fetch(weatherURL).then((res) => res.json());
		const forecastPromise = fetch(forecastURL).then((res) => res.json());

		Promise.all([currentPromise, forecastPromise])
			.then(([currentData, forecastData]) => {
				//Error handling for an unknown city or a city not found in the API
				if (currentData.cod === "404" || forecastData.cod === "404") {
					setErrorState("HUH? Never heard of it. Try again!");
					setLoadingState(false);
					return;
				}
				clearError();
				setWeatherData(currentData);
				//Filtering through noon forecast to display one forecast per day
				setForecastData(
					forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"))
				);
				setLoadingState(false);
			})
			.catch(() => {
				setErrorState(
					"Failed to fetch weather data. Please Check your connection."
				);
				setLoadingState(false);
			});
	};

	useEffect(() => {
		if (city) {
			fetchWeatherData(city);
		}
	}, [city]);

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			{loadingState && <LoadingSpinner />}
			{errorState && <ErrorMessage error={errorState} onDismiss={clearError} />}
			{weatherData && <CurrentWeather weather={weatherData} />}
			{forecastData && <Forecast forecast={forecastData} />}
		</>
	);
}

export default App;
