import Man from "../images/man.png"
import Phone from "../images/phone-icon.png"
import NewsIcon1 from "../images/news-icon1.png"
import NewsIcon2 from "../images/news-icon2.png"
import NewsIcon3 from "../images/news-icon3.png"
const Panel = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__main-container">
          <section className="dashboard__promotion promotion">
            <h4 className="promotion__title">Jak wysyłać jeszcze taniej?</h4>
            <div className="promotion__main-info">
              Stefan prowadzi mały sklep internetowy z modelami statków do
              sklejania. Dziennie wysyła
              <span className="promotion__strong"> od 2 do 4 paczek </span>o
              wadze około <span className="promotion__strong">5 kg</span>. Z
              uwagi na to, że wszystko w ostatnim czasie drożeje, Stefan
              postanowił przeliczyć, ile kosztuje go wysyłanie paczek obecnie i
              ile może zaoszczędzić wybierając innego kuriera.
            </div>
            <div className="promotion__additional-info-container">
              <div className="promotion__image-container">
                <img
                  src={Man}
                  alt="man-standing"
                  className="promotion__image"
                />
              </div>

              <div className="promotion__costs">
                <p>
                  Koszt wysyłki
                  <span className="promotion__strong"> 4 paczek</span>
                </p>
                <CourierItem
                  classSuffix={"fedex"}
                  price={62.35}
                  text={
                    <>
                      Fed<span>Ex</span>
                    </>
                  }
                />
                <CourierItem
                  classSuffix={"dpd"}
                  price={77.52}
                  text={<>DPD</>}
                />
                <CourierItem
                  classSuffix={"dhl"}
                  price={83.64}
                  text={<>DHL</>}
                />
                <CourierItem
                  classSuffix={"ups"}
                  price={117.64}
                  text={<>UPS</>}
                />
              </div>
              <div className="promotion__savings">
                Stefan{" "}
                <span className="promotion__strong">
                  oszczędza miesięcznie od 752 zł do 1 156 zł{" "}
                </span>
                na zmianie swojego dostawcy usług kurierskich. <br />
                <br /> Bądź jak Stefan - oszczędzaj analizując, która oferta
                aktualnie jest dla Ciebie najbardziej opłacalna
              </div>
            </div>
          </section>
          <section className="dashboard__verify-number verify-number">
            <div className="verify-number__container">
              <img
                src={Phone}
                alt="phone-icon"
                className="verify-number__image"
              />
              <div className="verify-number__content">
                <h4>Zweryfikuj swój numer telefonu</h4>
                <p>
                  Zweryfikuj swój numer telefonu już teraz, a przesyłki, na
                  które czekasz, same pojawią się w panelu i w aplikacji
                  mobilnej Furgonetka.
                </p>
                <button className="verify-number__button">
                  <span className="verify-number__strong">
                    ZWERYFIKUJ NUMER TERAZ
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="dashboard__side-container">
          <section className="dashboard__news news">
            <h4>Aktualności na blogu</h4>
            <div className="news__item">
              <img src={NewsIcon1} alt="news-icon" className="news__img" />
              <p className="news__text">
                Zmiany w metodach nadania i dostawy w formularzu zamówienia na
                Furgonetka.pl
              </p>
            </div>
            <div className="news__item">
              <img src={NewsIcon2} alt="news-icon" className="news__img" />
              <p className="news__text">
                Nowy przewoźnik przesyłek paletowych Pall-Ex w ofercie
                Furgonetki
              </p>
            </div>
            <div className="news__item">
              <img src={NewsIcon3} alt="news-icon" className="news__img" />
              <p className="news__text">
                Dopłaty UPS za duże paczki i elementy niestandardowe w okresie
                szczytu paczkowego
              </p>
            </div>
            <div className="news__more">
              Więcej na{" "}
              <a href="https://furgonetka.pl/blog/">blogu Furgonetka.pl</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Panel

const CourierItem = ({ price, text, classSuffix }) => (
  <div className="promotion__courier-container">
    <span className={`promotion__courier-${classSuffix}`}>{text}</span>
    <span className="promotion__price">
      <span className="promotion__strong">{price} zł</span>
    </span>
  </div>
)
