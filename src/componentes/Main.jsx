import { Carousel, Container } from "react-bootstrap";
import MovieIcon from "@mui/icons-material/Movie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Container fluid>
        <section className="cont-section">
          <div className="section-carousel">
            <Carousel className="carousel" fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="../img/slide1.jpg"
                  src="https://www.elpaisano.pe/wp-content/uploads/2022/06/Preventa-Thor-love-and-thunder-Peru-como-comprar-via-Cineplanet-Cinemark-y-Cinepolis-1024x576.jpg"
                  alt="slide1"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="../img/slide2.jpg"
                  src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/286734228_5815858358449055_5490003344995903159_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEG1TEppT2h9RJ7yDprQKbTw3N9J_T3J3vDc30n9Pcne-H0mMjYw25ahPyfh60x27M&_nc_ohc=NTj1SsrjAK4AX9H72ME&_nc_ht=scontent.faep6-1.fna&oh=00_AT98wWaWEi6PziG2JTKqpK9wQgQD0gBMKOrACXK5_AZqyA&oe=62CDF2CB"
                  alt="slide2"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="../img/slide3.jpg" /* Trato de poner esta imagen y no me la */
                  src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/288743278_5827738123927745_325404368803906367_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFGY5xLnurtUWFMxJG1sdiinC4Ce65nhU-cLgJ7rmeFT8Y_kNDpwe96Rvy9GngUlxU&_nc_ohc=KcTSgU6uGeQAX9C-u7W&_nc_ht=scontent.faep6-1.fna&oh=00_AT8XykajdEt5hRA2xunbzGFr-htrtxBObpJibyndSHkEVw&oe=62CD173E"
                  alt="slide3"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="sections">
            <Link
              to="/movies"
              style={{
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              <MovieIcon></MovieIcon>
              PELICULAS
            </Link>
          </div>
          <div className="sections">
            <Link
              to="/cinemas"
              style={{
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              <StorefrontIcon></StorefrontIcon>
              CINES
            </Link>
          </div>
          <div className="sections">
            <Link
              to="/premieres"
              style={{
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              <MovieFilterIcon></MovieFilterIcon>
              ESTRENOS
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Main;
