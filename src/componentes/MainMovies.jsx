import React from "react";

const MainMovies = ({ mainmovies }) => {
  return (
    <div className="container">
      <div className="row">
        {mainmovies.slice(0, 8).map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={{
                width: "100%",
                height: "auto",
                top: "0",
                left: "0",
                position: "relative",
                boxShadow: "0px 0px 6px 1px #666",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
            >
              <img
                className="card-img-top"
                src={item.image}
                alt="movie"
                style={{
                  width: "100%",
                  height: "350px",
                }}
              />
              <hr />
              <h4
                className="card-title"
                style={{
                  textAlign: "center",
                  fontFamily: "bold",
                }}
              >
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMovies;
