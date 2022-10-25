import Man from "../images/man.png"
const Panel = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__main-container">
          <section className="dashboard__promotion promotion">
            <h4 className="promotion__title">Jak wysyłać jeszcze taniej?</h4>
            <div className="promotion__main-info">
              Stefan prowadzi mały sklep internetowy z modelami statków do
              sklejania. Dziennie wysyła od 2 do 4 paczek o wadze około 5 kg. Z
              uwagi na to, że wszystko w ostatnim czasie drożeje, Stefan
              postanowił przeliczyć, ile kosztuje go wysyłanie paczek obecnie i
              ile może zaoszczędzić wybierając innego kuriera.
            </div>
            <div className="promotion__additional-info-container">
              <img src={Man} alt="" className="promotion__image" />

              <div className="promotion__costs">
                <p>Koszt wysyłki 4 paczek</p>
                <div className="promotion__courier-container">
                  <span className="promotion__courier-fedex">
                    Fed<span>Ex</span>
                  </span>
                  <span className="promotion__price"> 67,36 zł</span>
                </div>
                <div className="promotion__courier-container">
                  <span className="promotion__courier-dpd">DPD</span>
                  <span className="promotion__price"> 77,52 zł</span>
                </div>
                <div className="promotion__courier-container">
                  <span className="promotion__courier-fedex">DHL</span>
                  <span className="promotion__price"> 83,64 zł</span>
                </div>
                <div className="promotion__courier-container">
                  <span className="promotion__courier-fedex">UPS</span>
                  <span className="promotion__price"> 117,64 zł</span>
                </div>
              </div>
              <div className="promotion__savings">
                Stefan oszczędza miesięcznie od 752 zł do 1 156 zł na zmianie
                swojego dostawcy usług kurierskich. <br /> Bądź jak Stefan -
                oszczędzaj analizując, która oferta aktualnie jest dla Ciebie
                najbardziej opłacalna
              </div>
            </div>
          </section>
        </div>
        <div className="dashboard__side-container"></div>
      </div>
    </>
  )
}

export default Panel
