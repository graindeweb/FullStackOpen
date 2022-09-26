import { useState, useEffect } from "react"
import { AddPersonForm } from "./components/AddPersonForm"
import { Notification } from "./components/Notification"
import { Persons } from "./components/Persons"
import { Search } from "./components/Search"

import personService from "./services/persons"

var timeoutNotif = null

function App() {
  const defaultNotification = { message: null, type: "success", display: false }
  const [persons, setPersons] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [notification, setNotification] = useState(defaultNotification)

  useEffect(() => {
    personService
      .getAll()
      .then((persons) => setPersons(persons))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const notify = (message, type = "success") => {
    if (timeoutNotif) {
      clearTimeout(timeoutNotif)
    }
    setNotification({ message, type, display: true })
    timeoutNotif = setTimeout(() => {
      setNotification(defaultNotification)
    }, 5000)
  }
  const notifyError = (message) => notify(message, "error")
  const notifySuccess = (message) => notify(message, "success")

  const addPerson = (name, phone) => {
    if (name.trim() === "" || phone.trim() === "") {
      notifyError("Name and Phone must be filled!")
      return false
    }
    const existingPerson = persons.find((person) => person.name === name)

    if (existingPerson) {
      if (window.confirm(`${name} already exists in phonebook. Would you like to update phone?`)) {
        personService
          .update(existingPerson.id, { phone: phone })
          .then((person) => {
            setPersons(persons.map((p) => (p.name === name ? person : p)))
            notifySuccess(`${name} has been updated!`)
          })
          .catch((err) => notifyError("An error occured during update !"))

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
      .then((person) => {
        setPersons(persons.concat(person))
        notifySuccess(`${name} has been added!`)
      })
      .catch((err) => notifyError("An error occured during update !"))
  }

  const delPerson = (id) => {
    personService
      .remove(id)
      .then((response) => {
        setPersons(persons.filter((person) => person.id !== id))
        notifySuccess("Person deleted with success")
      })
      .catch((err) => notifyError("This user has already been deleted"))
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
      <Notification message={notification.message} type={notification.type} />
      <Search value={searchValue} onchangeHandler={handleSearchChange} />

      <h3>Add a new</h3>
      <AddPersonForm addPersonHandler={addPerson} errorNotifier={notifyError} />

      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons()} handlers={{ delPerson }} />
    </div>
  )
}

export default App
