import React, { useState, useEffect } from "react"

import axios from "axios"
import { Countries } from "./components/Countries"

const wsURL = "https://restcountries.com/v3.1"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [countries, setCountries] = useState([])

  const searchChangeHandler = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredCountries = () => {
    const searchRegExp = new RegExp(`${searchValue}`, "i")
    return countries.filter((country) => country.name.common.match(searchRegExp))
  }

  useEffect(() => {
    axios.get(`${wsURL}/all`).then((response) => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div className="App">
      <form>
        Find countries:{" "}
        <input
          type="text"
          placeholder="Search for a country"
          value={searchValue}
          onChange={searchChangeHandler}
        />
      </form>
      <section>
        <Countries countries={filteredCountries()} />
      </section>
    </div>
  )
}

export default App
