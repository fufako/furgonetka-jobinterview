import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Panel from "./components/Panel"
import Saldo from "./components/Saldo"
import Send from "./components/Send"

function App() {
  const [items, setItems] = useState([])
  const totalPrice = items.reduce((acc, { price }) => acc + price, 0)

  const addToSaldo = (item) => {
    if (items.length >= 8) {
      alert("You can only send only 8 packages at once!")
      return
    }
    setItems((prevItems) => [...prevItems, item])
  }

  return (
    <>
      <Header totalPrice={totalPrice} />
      <Routes>
        <Route path="furgonetka-jobinterview" element={<Panel />} />
        <Route
          path="furgonetka-jobinterview/do-wyslania"
          element={<Send addToSaldo={addToSaldo} />}
        />
        <Route
          path="furgonetka-jobinterview/saldo"
          element={<Saldo items={items} totalPrice={totalPrice} />}
        />
      </Routes>
    </>
  )
}

export default App
