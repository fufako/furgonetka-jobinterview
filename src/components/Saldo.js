import EmptySaldo from "./EmptySaldo"
const Saldo = (props) => {
  const { items, total } = props

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
            {Math.round(total * 100) / 100}
            &nbsp;zł
          </div>
        </div>
      ) : (
        <EmptySaldo />
      )}
    </>
  )
}
export default Saldo
