import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "0659142631" }])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const clearForm = () => {
    setNewName("")
    setNewPhone("")
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Phone: <input onChange={handlePhoneChange} value={newPhone} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={`${person.name}_${i}`}>
            {person.name} ({person.phone})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
