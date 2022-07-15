import { Container, Row, Col } from "react-bootstrap";

const Premieres = ({ premieres }) => {
  return (
    <>
      <Container fluid>
        <Row
          style={{
            background: "#c02328",
            marginTop: "10px",
            height: "50px",
          }}
        >
          <Col
            style={{
              color: "#fff",
              padding: "10px",
            }}
          >
            PROXIMOS ESTRENOS
          </Col>
        </Row>
        <Row
          style={{
            background: "#fff",
            color: "#000",
            height: "40px",
            textAlign: "center",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Col>
            Las fechas de estreno publicadas son suministradas por los
            distribuidores de las películas en el pais.
          </Col>
        </Row>
      </Container>
      <div
        className="container"
        style={{
          marginTop: "20px",
        }}
      >
        <div className="row">
          {premieres.map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-12 col-sm-12 mb-4"
              style={{
                display: "flex",
                height: "400px",
                justifyContent: "center",
              }}
            >
              <div className="card" style={{ minWidth: "250px" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div
                style={{
                  minWidth: "300px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    background: "#c02328",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    marginTop: "20px",
                  }}
                >
                  <li
                    style={{
                      marginBottom: "5px",
                      borderBottom: "1px dotted #c02328",
                    }}
                  >
                    GENERO: {item.kindOfMovie}
                  </li>
                  <li
                    style={{
                      marginBottom: "5px",
                      borderBottom: "1px dotted #c02328",
                    }}
                  >
                    FECHA: {item.day}
                  </li>
                  <li
                    style={{
                      marginBottom: "5px",
                      borderBottom: "1px dotted #c02328",
                    }}
                  >
                    DURACION: {item.duration}
                  </li>{" "}
                </ul>
                <div
                  style={{
                    marginBottom: "5px",
                    background: "#c02328",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  DESCRIPCION
                </div>
                <div
                  style={{
                    marginBottom: "5px",
                    padding: "20px",
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Premieres;
