/**
 * Forecast component
 *
 * Displays a 5-day forecast, using the 12:00:00 forecast for each day, using fetched data from an API call
 *
 * @param {Array} forecast - Array of forecast objects filtered for noon times from OpenWeather API
 */

function Forecast({ forecast }) {
	return (
		<div className="weather-card d-flex flex-wrap justify-content-center p-3 gap-3">
			{forecast.map((day) => {
				const date = new Date(day.dt_txt.slice(0, 10));
				const formattedDate = date.toLocaleDateString("en-US", {
					month: "long",
					day: "numeric",
					year: "numeric",
				});
				return (
					<div
						key={day.dt}
						className="forecast-card d-flex flex-column p-3 rounded shadow gap-3 ">
						<h2>{formattedDate}</h2>
						<div className="d-flex flex-column weather-card p-3 rounded shadow gap-3">
							<h3 className="temp-display">{day.main.temp}°F</h3>
							<h3 className="temp-display">
								Feels Like {day.main.feels_like}°F
							</h3>
							<img
								className="icon-display"
								src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
								alt={day.weather[0].description}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default Forecast;
