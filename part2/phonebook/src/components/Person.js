import React from "react"

export const Person = ({ person, handlers }) => {
  const { delPerson } = handlers

  const deleteHandler = (e) => {
    if (window.confirm(`Do You really want to delete ${person.name}`)) {
      delPerson(person.id)
    } 
  }

  return (
    <span>
      <span>
        <strong>{person.name}</strong>
      </span>{" "}
      ({person.phone})<button onClick={deleteHandler}>Delete</button>
    </span>
  )
}
