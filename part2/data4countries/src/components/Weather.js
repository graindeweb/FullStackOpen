import React, { useEffect, useState } from "react"
import axios from "axios"

const wsWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q="

export const Weather = ({ capital }) => {
  const [weatherInfos, setWeatherInfos] = useState(null)
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    axios
      .get(`${wsWeatherURL}${capital}&units=metric&appid=${apiKey}`)
      .then((response) => setWeatherInfos(response.data))
  }, [])

  return (
    <div>
      <h3>Weather Infos in {capital}</h3>
      {weatherInfos === null ? (
        <p>loading...</p>
      ) : (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${weatherInfos.weather[0].icon}@2x.png`}
            alt={weatherInfos.weather[0].description}
          />
          <div>Temperature: {weatherInfos.main.temp}°C</div>
          <div>Wind: {weatherInfos.wind.speed}m/s</div>
        </>
      )}
    </div>
  )
}
