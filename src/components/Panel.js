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
              <div className="promotion__img">
                <img src="" alt="" />
              </div>
              <div className="promotion__costs">
                <p>Koszt wysyłki 4 paczek</p>
                <ul>
                  <li>
                    <span className="promotion__courier-fedex">
                      Fed <span>Ex</span>
                    </span>
                    <span className="promotion__price">67,36 zł</span>
                  </li>
                  <li>
                    <span className="promotion__courier-dpd">DPD></span>
                    <span className="promotion__price">77,52 zł</span>
                  </li>
                  <li>
                    <span className="promotion__courier-fedex">DHL</span>
                    <span className="promotion__price">83,64 zł</span>
                  </li>
                  <li>
                    <span className="promotion__courier-fedex">UPS</span>
                    <span className="promotion__price">117,64 zł</span>
                  </li>
                </ul>
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
