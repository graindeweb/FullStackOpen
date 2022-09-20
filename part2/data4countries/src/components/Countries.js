import React, { useEffect, useState } from "react"

import { Weather } from "./Weather"

const Country = ({ country }) => {
  return (
    <section>
      <h2>{country.name.common}</h2>
      <p>
        Capital {country.capital[0]} <br />
        Area {country.area}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: 150 }} />
      <aside>
        <Weather capital={country.capital} />
      </aside>
    </section>
  )
}

export const Countries = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null)

  const showCountryHandler = (i) => {
    setCurrentCountry(i)
  }

  useEffect(() => {
    setCurrentCountry(null)
  }, [countries])

  if (countries.length === 0) {
    return <p>No matching countries!</p>
  } else if (countries.length > 10) {
    return <p>Too many matches ({countries.length} results), specify another filter</p>
  }

  return (
    <>
      {countries.length > 1 && (
        <ul>
          {countries.map((country, i) => (
            <li key={country.cca2}>
              {country.name.common} <button onClick={(e) => showCountryHandler(i)}>show</button>
            </li>
          ))}
        </ul>
      )}

      {(countries.length === 1 || currentCountry !== null) && (
        <Country country={countries[currentCountry || 0]} />
      )}
    </>
  )
}
