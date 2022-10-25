import Header from "./components/Header"
import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./App.css"

function App() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [active, setActive] = useState("")

  let location = useLocation()

  const addToSaldo = (item) => {
    if (items.length >= 8) {
      alert("You can only send 8 packages at once!")
      return
    }
    setItems((prevItems) => [...prevItems, item])
    setTotal(total + Math.round(item.price.slice(0, -3) * 100) / 100)

    console.log(item)
  }
  console.log(items)

  const removeFromSaldo = (item) => {
    const keyToRemove = item.key
    setItems(items.filter((item) => item.key !== keyToRemove))
  }

  useEffect(() => {
    setActive(location.pathname)
  }, [location, items])
  return (
    <>
      <Header
        items={items}
        addToSaldo={addToSaldo}
        removeFromSaldo={removeFromSaldo}
        active={active}
        total={total}
      />
    </>
  )
}

export default App
