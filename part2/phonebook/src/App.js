import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name: <input onChange={handleNameChange} value={newName} />
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={`${person.name}_${i}`}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
