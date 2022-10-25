import { Routes, Route, Link } from "react-router-dom"
import Panel from "./Panel"
import Saldo from "./Saldo"
import Send from "./Send"
import Logo from "../images/furgonetka.png"
import PanelIcon from "../images/panel_icon.png"
import SendIcon from "../images/send_icon.png"
import { useEffect } from "react"
import { useRef } from "react"
const Header = (props) => {
  const { items, addToSaldo, removeFromSaldo, active, total } = props

  const panelNav = useRef()
  const sendNav = useRef()

  const handleActive = (active) => {
    if (active === "/furgonetka") {
      panelNav.current.classList.add("navigation__panel--active")
      sendNav.current.classList.remove("navigation__do-wyslania--active")
      return
    }
    if (active === "/furgonetka/do-wyslania") {
      sendNav.current.classList.add("navigation__do-wyslania--active")
      panelNav.current.classList.remove("navigation__panel--active")
      return
    }
  }
  const resetActive = () => {
    sendNav.current.classList.remove("navigation__do-wyslania--active")
    panelNav.current.classList.remove("navigation__panel--active")
  }

  useEffect(() => {
    handleActive(active)
  }, [active])
  return (
    <>
      <header className="header">
        <Link to="furgonetka">
          <img src={Logo} alt="logo-furgonetka" className="header__logo" />
        </Link>
        <Link to="furgonetka/saldo" style={{ textDecoration: "none" }}>
          <div
            className="header__saldo"
            onClick={() => {
              resetActive()
            }}
          >
            Saldo: {Math.round(total * 100) / 100} zł
          </div>
        </Link>
      </header>

      <nav className="navigation">
        <div className="navigation__tabs-container">
          <Link to="furgonetka" style={{ textDecoration: "none" }}>
            <div className="navigation__panel" ref={panelNav}>
              <img
                src={PanelIcon}
                alt="panel-icon"
                className="navigation__icon"
              />
              <p className="navigation__text">Panel</p>
            </div>
          </Link>
          <Link to="furgonetka/do-wyslania" style={{ textDecoration: "none" }}>
            <div className="navigation__do-wyslania" ref={sendNav}>
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
          element={<Send addToSaldo={addToSaldo} />}
        />

        <Route
          path="furgonetka/saldo"
          element={
            <Saldo
              items={items}
              removeFromSaldo={removeFromSaldo}
              total={total}
            />
          }
        />
      </Routes>
    </>
  )
}
export default Header
