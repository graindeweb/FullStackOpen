import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "0659142631", id: 1 },
    { name: "Baptiste PFEFFERKORN", phone: "0659142631", id: 2 },
    { name: "Anelor FAVIER", phone: "0659142631", id: 3 },
    { name: "Maëlie PFEFFERKORN", phone: "0659142631", id: 4 },
    { name: "Soën PFEFFERKORN", phone: "0659142631", id: 5 },
  
  
  ])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [searchValue, setSearchValue] = useState("")

  const clearForm = () => {
    setNewName("")
    setNewPhone("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, phone: newPhone }))
      clearForm()
    }
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
      <div>
        Filter shown with <input value={searchValue} onChange={handleSearchChange} />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Phone: <input onChange={handlePhoneChange} value={newPhone} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h3>Numbers</h3>
      <ul>
        {filteredPersons().map((person, i) => (
          <li key={`${person.name}_${i}`}>
            {person.name} ({person.phone})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
