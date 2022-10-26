import { Link, useLocation } from "react-router-dom"

import Logo from "../images/furgonetka.png"
import PanelIcon from "../images/panel_icon.png"
import SendIcon from "../images/send_icon.png"

const PANEL_URL = "/furgonetka-jobinterview"
const SEND_URL = "/furgonetka-jobinterview/do-wyslania"

const Header = ({ totalPrice }) => {
  console.log("totalPrice", totalPrice)
  const location = useLocation()

  const isPanelActive = location.pathname === PANEL_URL
  const isSendActive = location.pathname === SEND_URL

  return (
    <>
      <header className="header">
        <Link to="furgonetka-jobinterview">
          <img src={Logo} alt="logo-furgonetka" className="header__logo" />
        </Link>
        <Link
          to="furgonetka-jobinterview/saldo"
          style={{ textDecoration: "none" }}
        >
          <div className="header__saldo">Saldo: {totalPrice.toFixed(2)} zł</div>
        </Link>
      </header>

      <nav className="navigation">
        <div className="navigation__tabs-container">
          <Link to="furgonetka-jobinterview" style={{ textDecoration: "none" }}>
            <div
              className={`navigation__panel ${
                isPanelActive ? "navigation__panel--active" : ""
              }`}
            >
              <img
                src={PanelIcon}
                alt="panel-icon"
                className="navigation__icon"
              />
              <p className="navigation__text">Panel</p>
            </div>
          </Link>
          <Link
            to="furgonetka-jobinterview/do-wyslania"
            style={{ textDecoration: "none" }}
          >
            <div
              className={`navigation__do-wyslania ${
                isSendActive ? "navigation__do-wyslania--active" : ""
              }`}
            >
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
    </>
  )
}
export default Header
