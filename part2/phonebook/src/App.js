import { useState, useEffect } from "react"
import { AddPersonForm } from "./components/AddPersonForm"
import { Persons } from "./components/Persons"
import { Search } from "./components/Search"

import axios from "axios"

const wsURL = "http://localhost:3001/persons"

function App() {
  const [persons, setPersons] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    axios.get(wsURL).then((response) => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (name, phone) => {
    if (persons.find((person) => person.name === name)) {
      return false
    }

    const uuid =
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    setPersons(
      persons.concat({
        name,
        phone,
        id: uuid,
      })
    )

    return persons
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredPersons = () => {
    const reg = new RegExp(`${searchValue}`, "i")

    return persons.filter((person) => person.name.match(reg))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={searchValue} onchangeHandler={handleSearchChange} />

      <h3>Add a new</h3>
      <AddPersonForm addPersonHandler={addPerson} />

      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons()} />
    </div>
  )
}

export default App
