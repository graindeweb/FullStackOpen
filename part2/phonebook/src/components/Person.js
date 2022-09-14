import React from "react"

export const Person = ({ person }) => {
  return (
    <span>
      <span>
        <strong>{person.name}</strong>
      </span>{" "}
      ({person.phone})
    </span>
  )
}
