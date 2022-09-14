import React, { useState } from "react"

export const AddPersonForm = ({ addPersonHandler }) => {
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

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (newName.trim() === "" || newPhone.trim() === "") {
      alert("You must give a name AND a phone number to new contact!")
    } else {
      if (addPersonHandler(newName, newPhone) === false) {
        alert(`${newName} is already added to phonebook`)
      } else {
        clearForm()
      }
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        Name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        Phone: <input onChange={handlePhoneChange} value={newPhone} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}
