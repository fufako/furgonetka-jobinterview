import { Routes, Route, Link } from "react-router-dom"
import Panel from "./Panel"
import Saldo from "./Saldo"
import Send from "./Send"
import Logo from "../images/furgonetka.png"
function Header(props) {
  const { items, addToCart, handleTotal, removeFromCart } = props
  return (
    <>
      <header className="header">
        <Link to="furgonetka">
          <img src={Logo} alt="logo-furgonetka" className="header__logo" />
        </Link>
        <Link to="furgonetka/saldo">
          <div className="header__saldo">Saldo</div>
        </Link>
      </header>

      <nav className="navigation">
        <Link to="furgonetka">
          <div className="navigation__panel navigation__panel--active">
            Panel
          </div>
        </Link>
        <Link to="furgonetka/do-wyslania">
          <div className="navigation__do-wyslania navigation__do-wyslania--active">
            Do wysłania
          </div>
        </Link>
      </nav>

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
