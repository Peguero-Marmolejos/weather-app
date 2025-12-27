// PROPS: forecast data from App
// Maps through forecast array
// Shows cards for each day
function Forecast({ forecast }) {
	return (
		<div className="d-flex bg-dark text-white p-3 gap-3">
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
						className="d-flex flex-column bg-secondary text-white p-3 rounded shadow gap-3">
						<h2>{formattedDate}</h2>
						<div className="d-flex flex-column bg-dark text-white p-3 rounded shadow gap-3">
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
