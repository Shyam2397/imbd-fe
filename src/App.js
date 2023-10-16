import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { Home } from "./pages/home/Home";
import MovieList from "./components/movie list/MovieList";
import Movie from "./pages/movie details/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
