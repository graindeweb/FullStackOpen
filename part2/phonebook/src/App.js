import { useState } from "react"
import { AddPersonForm } from "./components/AddPersonForm"
import { Persons } from "./components/Persons"
import { Search } from "./components/Search"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "0659142631", id: 1 },
    { name: "Baptiste PFEFFERKORN", phone: "0659142631", id: 2 },
    { name: "Anelor FAVIER", phone: "0659142631", id: 3 },
    { name: "Maëlie PFEFFERKORN", phone: "0659142631", id: 4 },
    { name: "Soën PFEFFERKORN", phone: "0659142631", id: 5 },
  ])
  const [searchValue, setSearchValue] = useState("")

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
