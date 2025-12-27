// STATE:
// - city (what user searched)
// - weather data (from API)
// - loading state
// - error state

// FUNCTIONS:
// - handleSearch (when user clicks search)
// - fetchWeather (calls API)
import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
	const apikey = import.meta.env.VITE_API_KEY;

	const [city, setCity] = useState(null);
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState([]);

	const handleSearch = (city) => {
		setCity(city);
	};

	const fetchCurrentWeather = (city) => {
		const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;

		fetch(weatherURL)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData(data);
			});
	};

	const fetchForecastData = (city) => {
		const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`;
		fetch(forecastURL)
			.then((response) => response.json())
			.then((data) => {
				const noonForecast = data.list.filter((item) =>
					item.dt_txt.includes("12:00:00")
				);
				setForecastData(noonForecast);
			});
	};

	useEffect(() => {
		if (city) {
			fetchCurrentWeather(city);
			fetchForecastData(city);
		}
	}, [city]);

	console.log("Forecast Data: ", forecastData);
	return (
		<>
			<SearchBar onSearch={handleSearch} />
			{weatherData && <CurrentWeather weather={weatherData} />}
			{forecastData && <Forecast forecast={forecastData} />}
		</>
	);
}

export default App;
