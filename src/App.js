import "./App.css";
import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import MainMovies from "./componentes/MainMovies";
import Footer from "./componentes/Footer";
import Premieres from "./componentes/Premieres";
import Cinemas from "./componentes/Cinemas";
import Movies from "./componentes/Movies";
import NewUser from "./componentes/NewUser";
import Login from "./componentes/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // ******************************************************************************************** //
  const url = "https://apicine-deploy.herokuapp.com/movies";

  const [mainmovies, setmainmovies] = useState([]);

  const fetchMainMovies = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setmainmovies(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMainMovies(url);
  }, []);

  // ******************************************************************************************** //
  const url1 = "https://apicine-deploy.herokuapp.com/movies";

  const [movies, setmovies] = useState([]);

  const fetchMovies = (url1) => {
    fetch(url1)
      .then((response) => response.json())
      .then((data) => setmovies(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies(url1);
  }, []);

  // ******************************************************************************************** //
  const url2 = "https://apicine-deploy.herokuapp.com/premieres";

  const [premieres, setpremieres] = useState([]);

  const fecthPremieres = (url2) => {
    fetch(url2)
      .then((response) => response.json())
      .then((data) => setpremieres(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthPremieres(url2);
  }, []);

  // ******************************************************************************************** //

  const url3 = "https://apicine-deploy.herokuapp.com/cinema";

  const [cinema, setcinema] = useState([]);

  const fecthCinemas = (url3) => {
    fetch(url3)
      .then((response) => response.json())
      .then((data) => setcinema(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthCinemas(url3);
  }, []);

  // ******************************************************************************************** //

  return (
    <Router>
      <>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Main></Main>
                <MainMovies mainmovies={mainmovies}></MainMovies>
              </div>
            }
          ></Route>
          <Route
            path="/premieres"
            element={
              <div className="container">
                <Premieres premieres={premieres}></Premieres>
              </div>
            }
          ></Route>
          <Route
            path="/cinemas"
            element={
              <div className="container">
                <Cinemas cinema={cinema}></Cinemas>
              </div>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <div className="container">
                <Movies movies={movies}></Movies>
              </div>
            }
          ></Route>
          <Route path="/NewUser" element={<NewUser></NewUser>}></Route>
          <Route
            path="login"
            element={
              <div className="contenedor">
                <Login />
              </div>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </>
    </Router>
  );
}

export default App;
