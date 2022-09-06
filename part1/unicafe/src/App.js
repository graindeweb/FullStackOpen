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

const Statistics = ({ feedbacks }) => {
  const total = Object.values(feedbacks).reduce((p, v) => p + v, 0)

  const computeAverage = () => {
    return total ? (feedbacks.good * 1 + feedbacks.bad * -1) / total : 0
  }

  const computePositive = () => {
    return total ? (feedbacks.good * 100) / total : 0
  }
  return (
    <section>
      {total ? (
        <>
          <Result text={statTypes["good"]} count={feedbacks.good} />
          <Result text={statTypes["neutral"]} count={feedbacks.neutral} />
          <Result text={statTypes["bad"]} count={feedbacks.bad} />
          <Result text="All" count={total} />
          <Result text="Average" count={computeAverage()} />
          <Result text="Positive" count={`${computePositive()} %`} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  )
}

function App() {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Same increment for all buttons
  const incrementStat = (setter, value) => {
    setter(value + 1)
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

  return (
    <div>
      <Header title="give feedback" />
      {Object.keys(statTypes).map((type) => (
        <Button text={statTypes[type]} onClick={factoryIncrementator(type)} />
      ))}

      <Header title="statistics" />
      <Statistics feedbacks={{ good: good, bad: bad, neutral: neutral }} />
    </div>
  )
}

export default App
