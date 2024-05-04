export default function MovieList(props) {
	return (
		<div className="movie-list">
			<h2>List of movies using "props"</h2>
			<ul>
				<li>{props.movies[0].title} - {props.movies[0].director}</li>
				<li>{props.movies[1].title} - {props.movies[1].director}</li>
				<li>{props.movies[2].title} - {props.movies[2].director}</li>
			</ul>
		</div>
	)
}

