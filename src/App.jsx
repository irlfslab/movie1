import { Routes, Route } from "react-router"
import { MovieDetail } from "./components/MovieDetail"
import { MovieList } from "./components/MovieList"
import { PageNotFound } from "./components/PageNotFound"
import { Search } from "./components/Search"
import './App.css';

function App() {
  return (
    <div className = "App">
      <Routes>
            <Route path="/" element ={<MovieList />} />
            <Route path="movie/:id" element ={<MovieDetail />} />
            <Route path="movies/popular" element ={<MovieList />} />
            <Route path="movies/top" element ={<MovieList />} />
            <Route path="movies/upcoming" element ={<MovieList />} />
            <Route path="search" element ={<Search />} />
            <Route path="*" element ={<PageNotFound />} />
        </Routes>
    </div>
  )
}

export default App;