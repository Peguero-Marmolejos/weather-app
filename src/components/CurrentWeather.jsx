// PROPS: weather data from App
// Displays: city, temp, description, icon
function CurrentWeather({ weather }) {
	const city = weather.name;
	const temperature = weather.main.temp;
	const description = weather.weather[0].description;
	const icon = weather.weather[0].icon;

	return (
		<div className="card shadow rounded p-4 text-center m-auto w-max">
			<h1 className="text-center text-primary">{city}</h1>
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
