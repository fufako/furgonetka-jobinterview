import Header from "./components/Header"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"

import "./App.css"
import { useEffect } from "react"
function App() {
  const [items, setItem] = useState([])
  const [active, setActive] = useState()

  let location = useLocation()

  const addToSaldo = (item) => {
    const nameToFind = item.name
    const exists = Boolean(items.find((item) => item.name === nameToFind))
    if (!exists) {
      setItem((prevItems) => [...prevItems, item])
      item.amount += 1
    } else {
      item.amount += 1
    }
  }
  const removeFromCart = (item) => {
    const keyToRemove = item.key
    setItem(items.filter((item) => item.key !== keyToRemove))
  }
  console.log(active)

  useEffect(() => {
    setActive(location.pathname)
  }, [location])
  return (
    <>
      <Header
        items={items}
        addToSaldo={addToSaldo}
        removeFromCart={removeFromCart}
        active={active}
      />
    </>
  )
}

export default App
