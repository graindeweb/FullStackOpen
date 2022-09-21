import React from "react"
import { Person } from "./Person"

export const Persons = ({ filteredPersons, handlers }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={`${person.id}`}>
          <Person person={person} handlers={handlers}/>
        </li>
      ))}
    </ul>
  )
}
