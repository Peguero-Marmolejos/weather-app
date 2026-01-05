/**
 * CurrentWeather component
 *
 * Displays the current weather conditions from searched city
 *
 * @param {Object} weather - Weather data object from OpenWeather API
 */

function CurrentWeather({ weather }) {
	const city = weather.name;
	const temperature = weather.main.temp;
	const description = weather.weather[0].description;
	const icon = weather.weather[0].icon;

	return (
		<div className=" weather-card p-4 text-center m-auto w-max">
			<h1 className="text-center">{city}</h1>
			<div className="d-flex justify-content-center align-items-center gap-3">
				<h3 className="temp-display">{temperature}°F</h3>
				<img
					className="icon-display"
					src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					alt={description}
				/>
			</div>
			<p className="text-center"> {description} </p>
		</div>
	);
}

export default CurrentWeather;
