import { useState } from "react"
import Counter from "./Counter"
const CountersList = () => {
  const [initialState, setInitialState] = useState([
    { id: 1, value: 0, name: "ненужная вещь" },
    { id: 2, value: 4, name: "ложка" },
    { id: 3, value: 2, name: "вилка" },
    { id: 4, value: 2, name: "тарелка" },
    { id: 5, value: 2, name: "набор минималиста" },
  ])

  const [counters, setCounters] = useState(initialState)
  const removeItem = (id) => {
    setCounters(counters.filter((item) => item.id !== Number(id)))
  }
  const handleIncrement = (id) => {
    setInitialState(
      initialState.map((item) => {
        if (item.id === id) {
          item.value++
        }
        return item
      })
    )
  }
  const handleDecrement = (id) => {
    setInitialState(
      initialState.map((item) => {
        if (item.id === id) {
          item.value--
        }
        return item
      })
    )
  }
  return (
    <div className="container">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          // value={counter.value}
          // name={counter.name}
          // id={counter.id}
          {...counter}
          removeItem={removeItem}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        ></Counter>
      ))}
    </div>
  )
}

export default CountersList
