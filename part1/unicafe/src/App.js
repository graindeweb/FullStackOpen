import { useState } from "react"

const statTypes = {
  good: "Good",
  neutral: "Neutral",
  bad: "Bad",
}

const Header = ({ title }) => {
  return <h2>{title}</h2>
}

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const Result = ({ text, count }) => {
  return (
    <p>
      <span>{text}: </span>
      <span>{count}</span>
    </p>
  )
}

function App() {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // Same increment for all buttons
  const incrementStat = (setter, value) => {
    setter(value + 1)
    setTotal(total + 1)
  }

  // Just playing with function that returns function
  const factoryIncrementator = (statType) => () => {
    switch (statType) {
      case "good":
      default:
        return incrementStat(setGood, good)
      case "neutral":
        return incrementStat(setNeutral, neutral)
      case "bad":
        return incrementStat(setBad, bad)
    }
  }

  const computeAverage = () => {
    return total ? (good * 1 + bad * -1) / total : 0
  }

  const computePositive = () => {
    return total ? good * 100 / total : 0
  }

  return (
    <div>
      <Header title="give feedback" />
      {Object.keys(statTypes).map((type) => (
        <Button text={statTypes[type]} onClick={factoryIncrementator(type)} />
      ))}

      <Header title="statistics" />
      <Result text={statTypes["good"]} count={good} />
      <Result text={statTypes["neutral"]} count={neutral} />
      <Result text={statTypes["bad"]} count={bad} />
      <Result text="All" count={total} />
      <Result text="Average" count={computeAverage()} />
      <Result text="Positive" count={`${computePositive()} %`} />
    </div>
  )
}

export default App
