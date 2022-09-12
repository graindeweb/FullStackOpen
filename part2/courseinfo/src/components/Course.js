import React from "react"
import { Content } from "./Content"
import { Header } from "./Header"

export const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
    </>
  )
}
