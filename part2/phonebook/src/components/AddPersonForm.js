import React, { useState } from "react"

export const AddPersonForm = ({ addPersonHandler, errorNotifier }) => {
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const clearForm = () => {
    setNewName("")
    setNewPhone("")
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (newName.trim() === "" || newPhone.trim() === "") {
      errorNotifier("You must give a name AND a phone number to new contact!")
    } else {
      addPersonHandler(newName, newPhone, clearForm)
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
