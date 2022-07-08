import React from "react";

const Premieres = ({ premieres }) => {
  return (
    <div>Premieres</div>
    // <div className="container">
    //   <div className="row">
    //     {premieres.map((item, index) => (
    //       <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
    //         <div className="card" style={{ minWidth: "200px" }}>
    //           <img
    //             className="card-img-top"
    //             src={item.image}
    //             alt="movie"
    //             style={{ width: "100%", height: "350px" }}
    //           />

    //           <hr />
    //           <h4
    //             className="card-title"
    //             style={{ textAlign: "center", fontFamily: "bold" }}
    //           >
    //             {item.name}
    //           </h4>
    //           <h4
    //             className="card-title"
    //             style={{ textAlign: "center", fontFamily: "bold" }}
    //           >
    //             {item.name}
    //           </h4>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Premieres;
