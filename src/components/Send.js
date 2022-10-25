import Package from "../images/package.png"
const Send = () => {
  const packages = [
    {
      src: Package,
      name: "Duża paczka",
      price: "10.99 zł",
      key: 0,
    },
    {
      src: Package,
      name: "Mała paczka",
      price: "5.99 zł",
      key: 1,
    },
  ]

  return (
    <>
      <div className="send">
        <div className="send__items-container">
          {packages.map((item) => (
            <div className="send_item">
              <img src={item.src} alt="package-icon" key={item.key} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Send
