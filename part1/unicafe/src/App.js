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

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th style={{textAlign: "left"}}>{text} </th>
      <td>{value}</td>
    </tr>
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
        <table>
          <tbody>
            <StatisticLine text={statTypes["good"]} value={feedbacks.good} />
            <StatisticLine text={statTypes["neutral"]} value={feedbacks.neutral} />
            <StatisticLine text={statTypes["bad"]} value={feedbacks.bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={computeAverage()} />
            <StatisticLine text="Positive" value={`${computePositive()} %`} />
          </tbody>
        </table>
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
      {Object.keys(statTypes).map((type, i) => (
        <Button key={i} text={statTypes[type]} onClick={factoryIncrementator(type)} />
      ))}

      <Header title="statistics" />
      <Statistics feedbacks={{ good, bad, neutral }} />
    </div>
  )
}

export default App
