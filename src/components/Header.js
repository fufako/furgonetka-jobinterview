import { Routes, Route, Link } from "react-router-dom"
import Panel from "./Panel"
import Saldo from "./Saldo"
import Send from "./Send"

function Header(props) {
  const { items, addToCart, handleTotal, removeFromCart } = props
  return (
    <>
      <div className="header">
        <Link to="FunnySocks" className="panel">
          <h1>
            {" "}
            <span className="orange">Funny </span> Socks Shop
          </h1>
        </Link>

        <div className="nav">
          <Link className="nav-link" to="furgonetka">
            Home{" "}
          </Link>
          <Link className="nav-link" to="furgonetka/do-wyslania">
            Do wysłania
          </Link>
          <Link className="nav-link" to="furgonetka/saldo">
            Saldo
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/furgonetka/" element={<Panel />} />
        <Route
          path="furgonetka/do-wyslania"
          element={<Send addToCart={addToCart} handleTotal={handleTotal} />}
        />

        <Route
          path="furgonetka/saldo"
          element={<Saldo items={items} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </>
  )
}
export default Header
