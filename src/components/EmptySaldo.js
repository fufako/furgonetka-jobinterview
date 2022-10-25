import SadPackage from "../images/sad-package.png"
const EmptySaldo = () => {
  return (
    <>
      <div className="empty-saldo">
        <div className="empty-saldo__container">
          <h4 className="empty-saldo__title">
            Wyślij paczkę, żeby zwiększyć saldo!
          </h4>
          <img
            src={SadPackage}
            alt="sad-package"
            className="empty-saldo__img"
          />
        </div>
      </div>
    </>
  )
}

export default EmptySaldo
