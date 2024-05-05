import "./App.css";
import Timer from "./components/Timer";
import MovieList from "./components/MovieList";
import Counter from "./components/Counter";
import Map from "./components/Map";
import Css from "./components/Css";
import FetchApi from "./components/FetchApi";

export default function App() {
	return (
		<div>
			<h2>My first dynamic react application</h2>

			<hr />

			<FetchApi />

			<hr />

			<Css />

			<hr />

			<Map />

			<hr />

			<Counter />

			<hr />

			<Timer />

			<hr />
			
			<MovieList 
			movies={movies}/>
		</div>
	)
}


const movies = [
	{ title: "The Godfather", director: "Francis Ford Coppola" },
	{ title: "Star Wars", director: "George Lucas" },
	{ title: "The Shawshank Redemption", director: "Frank Darabont" },
];
