import React from "react"
import { Content } from "./Content"
import { Header } from "./Header"
import { Total } from "./Total"

export const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
