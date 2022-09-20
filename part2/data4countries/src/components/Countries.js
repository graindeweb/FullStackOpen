import React from 'react'

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
        {Object.values(country.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: 150 }} />
    </section>
  )
}

export const Countries = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No matching countries!</p>
  } else if (countries.length > 10) {
    return <p>Too many matches ({countries.length} results), specify another filter</p>
  }

  return countries.length > 1 ? (
    <ul>
      {countries.map((country) => (
        <li>{country.name.common}</li>
      ))}
    </ul>
  ) : (
    <Country country={countries[0]} />
  )
}