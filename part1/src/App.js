const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.title} {props.part.subtotal}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
    // Here we could obviously iterate over props.parts with
    // <div>{props.parts.map(part => <Part part={part} />)}</div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>Number of exercices {props.total}</strong>
    </p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    { title: "Fundamentals of React", subtotal: 10 },
    { title: "Using props to pass data", subtotal: 7 },
    { title: "State of a component", subtotal: 14 },
  ]

  // Computing total in a simple way
  let total = 0
  parts.forEach((part) => (total += part.subtotal))

  // Same in a prettier way
  const total2 = parts
    .map(part => part.subtotal)
    .reduce((previousVal, currentVal) => previousVal + currentVal, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total2} />
    </div>
  )
}

export default App
