import Package from "../images/package.png"
const Send = (props) => {
  const packages = [
    {
      src: Package,
      name: "Duża paczka | DPD",
      price: "10.99 zł",
      key: 0,
    },
    {
      src: Package,
      name: "Duża paczka | UPS",
      price: "5.99 zł",
      key: 1,
    },
  ]
  const { addToSaldo } = props
  return (
    <>
      <div className="send">
        <div className="send__items-container">
          {packages.map((item) => (
            <div className="send__item" key={item.key}>
              <img
                src={item.src}
                alt="package-icon"
                className="send__item-img"
              />
              <div className="send__item-info">
                <p className="send__item-name">{item.name}</p>
                <p className="send__item-price">{item.price}</p>
              </div>
              <button
                className="send__item-send"
                onClick={addToSaldo.bind(this, item)}
              >
                Wyślij paczkę!
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Send
