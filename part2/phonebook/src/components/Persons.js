import React from "react"
import { Person } from "./Person"

export const Persons = ({ filteredPersons, handlers }) => {
  return filteredPersons.length === 0 ? (
    <div>No results</div>
  ) : (
    <ul>
      {filteredPersons.map((person) => (
        <li key={`${person.id}`}>
          <Person person={person} handlers={handlers} />
        </li>
      ))}
    </ul>
  )
}
