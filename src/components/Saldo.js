import { useEffect } from "react"
import { useState } from "react"
import EmptySaldo from "./EmptySaldo"
const Saldo = (props) => {
  const { items, removeFromSaldo, total } = props

  const handleRemove = (item) => {
    console.log("Before removeFormCart: " + items)
    removeFromSaldo(item)
    console.log("After removeFormCart: " + items)
  }

  return (
    <>
      {items.length > 0 ? (
        <div className="saldo">
          {" "}
          <div className="saldo__items-container">
            {items.map((item) => (
              <div className="saldo__item" key={item.key}>
                <img
                  src={item.src}
                  alt="package-icon"
                  className="saldo__item-img"
                />
                <div className="saldo__item-info">
                  <p className="saldo__item-name"> {item.name}</p>
                  <p className="saldo__item-price"> {item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="saldo__total">
            <h4 className="saldo__total-title">Razem: &nbsp;</h4>
            {total}
            &nbsp;zł{" "}
          </div>{" "}
        </div>
      ) : (
        <EmptySaldo />
      )}
    </>
  )
}
export default Saldo
