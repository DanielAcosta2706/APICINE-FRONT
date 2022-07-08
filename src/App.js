import "./App.css";
import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import MainMovies from "./componentes/MainMovies";
import Footer from "./componentes/Footer";
import Premieres from "./componentes/Premieres";
import Cinemas from "./componentes/Cinemas";
import Movies from "./componentes/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // ******************************************************************************************** //
  const url1 = "https://apicine-deploy.herokuapp.com/movies";

  const [mainmovies, setmainmovies] = useState([]);

  const fetchMainMovies = (url1) => {
    fetch(url1)
      .then((response) => response.json())
      .then((data) => setmainmovies(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMainMovies(url1);
  }, []);

  // ******************************************************************************************** //
  // const url = "https://apicine-deploy.herokuapp.com/premieres";

  // const [premieres, setpremieres] = useState([]);

  // const fecthPremieres = (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setpremieres(data))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   fecthPremieres(url);
  // }, []);

  // ******************************************************************************************** //
  return (
    <Router>
      <>
        <Header></Header>
        <Main></Main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <MainMovies mainmovies={mainmovies}></MainMovies>
              </div>
            }
          ></Route>
          <Route
            path="premieres"
            element={
              <Premieres></Premieres>
              // <div className="container">
              //   <Premieres premieres={premieres}></Premieres>
              // </div>
            }
          ></Route>
          <Route path="cinemas" element={<Cinemas></Cinemas>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
        </Routes>
        <Footer></Footer>
      </>
    </Router>
  );
}

export default App;
