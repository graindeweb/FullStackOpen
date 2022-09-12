import React from "react"
import { Part } from "./Part"

export const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  )
}
