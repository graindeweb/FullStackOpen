import { useState, useEffect } from "react"
import { AddPersonForm } from "./components/AddPersonForm"
import { Persons } from "./components/Persons"
import { Search } from "./components/Search"

import personService from "./services/persons"

function App() {
  const [persons, setPersons] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    personService
      .getAll()
      .then((persons) => setPersons(persons))
      .catch(err => { console.log(err)} )
  }, [])

  const addPerson = (name, phone) => {
    const existingPerson = persons.find((person) => person.name === name)

    if (existingPerson) {
      if (window.confirm(`${name} already exists in phonebook. Would you like to update phone?`)) {
        personService
          .update(existingPerson.id, {phone: phone})
          .then((person) => setPersons(persons.map(p => p.name === name ? person : p)))
          .catch(err => { console.log(err)} )

        return
      } 
      return false
    }

    const uuid =
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    personService
      .create({
        name,
        phone,
        uuid,
      })
      .then((person) => setPersons(persons.concat(person)))
      .catch(err => { console.log(err)} )
  }

  const delPerson = (id) => {
    personService
      .remove(id)
      .then(response => setPersons(persons.filter(person => person.id !== id)))
      .catch(err => { console.log(err)} )
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
      <Persons filteredPersons={filteredPersons()} handlers={{delPerson}} />
    </div>
  )
}

export default App
