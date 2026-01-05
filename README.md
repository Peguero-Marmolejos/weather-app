# Weather App

## Description

React weather app that allows users to search through the OpenWeathermap API to retrieve current weather of a known city, as well as display the next 5 day forecast.

## Features

- 5 day- forecast
- error handling for empty inputs and unknown city names

## Technologies Used

- Vite
- React
- OpenWeather API
- Bootstrap
- Javascript

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/Peguero-Marmolejos/weather-app.git
```

2. Navigate to project directory:

```bash
   cd weather-app
```

3. Install dependencies:

```bash
   npm install
```

4. Get a free API key from [OpenWeather](https://openweathermap.org/api)

5. Create a `.env` file in the root directory

6. Add your API key to `.env`:

```
   VITE_API_KEY=your_api_key_here
```

7. Start the development server:

```bash
   npm run dev
```

8. Open your browser to http://localhost:5173

## Usage

1. Enter a city name
2. Click 'Search' or press 'Enter' on your keyboard
3. View current weather and 5-day forecast
4. Search another city to update the forecast and current weather information

## Screenshots

_SCREEN SHOTS WILL BE ADDED AFTER DEPLOYMENT_

## Future Improvements

- Temperature Unit Toggle between Farenheight, Celcius, and Kelvin
- Search History/ Recent Cities
- Hourly forecast
- Auto-detect user's location
- More detailed metrics including: humidity, wind speeds, etc.
- Weather warnings/alerts
