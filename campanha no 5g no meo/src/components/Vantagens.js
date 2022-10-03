import internet5g from "../assets/img/internet-5g.jpg";
import internet4g from "../assets/img/internet-4g.jpg";
import internet3g from "../assets/img/internet-3g.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Vantagens = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Vantagens</h2>
              <p>Se você acha que a internet 5G tem a ver somente<br></br>com internet rápida para assistir ou baixar com eficiência filmes no streaming, prepare-se para muito mais. Ela proporciona outras inovações, como a viabilização dos veículos autônomos e a aceleração da Internet das Coisas, como o uso de óculos com geolocalização.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={internet5g} alt="Image" />
                  <h5>INTERNET 5G</h5>
                </div>
                <div className="item">
                  <img src={internet4g} alt="Image" />
                  <h5>INTERNET 4G</h5>
                  <p>
                    1. Conexões muito mais rápidas
                    <br>De acordo com o professor, a quinta geração das redes móveis poderá
                      ter downloads de até 20 Gb/s (gigabits por segundo).
                      “A velocidade vai ser tão impressionante ao ponto de você baixar
                      um filme da Netflix em dois ou três segundos”.</br>
                  </p>
                  <p>
                    2. Baixa latência garantirá comunicação em tempo real
                    <br>A rede 5G também possibilitará comunicações sem atraso.
                      “Você vai poder manipular coisas em tempo real. Imagine dirigir um Fórmula 1 da sua casa no
                      autódromo de Imola (na Itália) usando óculos de realidade virtual. </br>
                  </p>
                </div>
                <div className="item">
                  <img src={internet3g} alt="Image" />
                  <h5>INTERNET 3G</h5>
                  <p>
                    1. Conexões muito mais rápidas
                    <br>De acordo com o professor, a quinta geração das redes móveis poderá
                      ter downloads de até 20 Gb/s (gigabits por segundo).
                      “A velocidade vai ser tão impressionante ao ponto de você baixar
                      um filme da Netflix em dois ou três segundos”.</br>
                  </p>
                  <p>
                    A rede 3G opera com 8Mbp/s (Megabits por segundo) de velocidade de transmissão, a 4G,
                    com 28Mbp/s e a 5G promete ser até 10x mais rápida que 4G. Assim,
                    uma velocidade maior significa
                    que mais dados podem ser transmitidos e recebidos.
                  </p>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
