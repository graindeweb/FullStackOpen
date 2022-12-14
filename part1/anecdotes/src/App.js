import {useState} from 'react'

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const Section = ({title, children}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const mostRatedIndex = points.lastIndexOf(Math.max(...points))

  const nextAnecdoteHandler = () => {
    const randIndex = Math.floor( Math.random() * anecdotes.length )
    setSelected(randIndex)
  }

  const addVoteHandler = () => {
    const copy = [ ...points ]
    copy[selected]++
    setPoints(copy)
  }

  return (
    <div>
      <Section title="Anecdote of the day">
        <p>{anecdotes[selected]}</p>
        <aside>has {`${points[selected]} vote${points[selected] > 1 ? "s" : ""}`}</aside>
        <Button onClick={addVoteHandler} text="Vote +1" />
        <Button onClick={nextAnecdoteHandler} text="Next anecdote" />
      </Section>

      <Section title="Top rated Anecdote">
        <p>{anecdotes[mostRatedIndex]}</p>
        <aside>
          with {`${points[mostRatedIndex]} vote${points[mostRatedIndex] > 1 ? "s" : ""}`}
        </aside>
      </Section>
    </div>
  )
}

export default App;
