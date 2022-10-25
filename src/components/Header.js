import { Routes, Route, Link } from "react-router-dom"
import Panel from "./Panel"
import Saldo from "./Saldo"
import Send from "./Send"
import Logo from "../images/furgonetka.png"
import PanelIcon from "../images/panel_icon.png"
import SendIcon from "../images/send_icon.png"
function Header(props) {
  const { items, addToCart, handleTotal, removeFromCart } = props
  return (
    <>
      <header className="header">
        <Link to="furgonetka">
          <img src={Logo} alt="logo-furgonetka" className="header__logo" />
        </Link>
        <Link to="furgonetka/saldo" style={{ textDecoration: "none" }}>
          <div className="header__saldo">Saldo: 0,00 zł</div>
        </Link>
      </header>

      <nav className="navigation">
        <div className="navigation__tabs-container">
          <Link to="furgonetka" style={{ textDecoration: "none" }}>
            <div className="navigation__panel navigation__panel--active">
              <img
                src={PanelIcon}
                alt="panel-icon"
                className="navigation__icon"
              />
              <p className="navigation__text">Panel</p>
            </div>
          </Link>
          <Link to="furgonetka/do-wyslania" style={{ textDecoration: "none" }}>
            <div className="navigation__do-wyslania navigation__do-wyslania--active">
              <img
                src={SendIcon}
                alt="send-icon"
                className="navigation__icon"
              />
              <p className="navigation__text">Do wysłania</p>
            </div>
          </Link>
        </div>
        <div className="navigation__underline-container">
          <div className="navigation__upper-underline"></div>
          <div className="navigation__lower-underline"></div>
        </div>
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
