import React from "react"
import { Person } from "./Person"

export const Persons = ({ filteredPersons }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={`${person.id}`}>
          <Person person={person} />
        </li>
      ))}
    </ul>
  )
}
