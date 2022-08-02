import "../styles/movies.scss"

const Movies = (props) => {
    const loopComp = () => {
        if (props.movies !== undefined) {
            console.log(props.movies, "results")
            return props.movies.results.map(v => {
                return  <div className="container" key={v.id}>
                            <div className="poster-box">
                                <img src={"https://image.tmdb.org/t/p/w200" + v.poster_path} alt="" />
                            </div>
                            <p className="movieName">{v.title} ({v.release_date.slice(0, 4)})</p>
                        </div> 
            }).slice(0,4)
        }
      }

    return (
        <div className="movie-list">
            <h1>Movies</h1>
            <div className="list">
                {loopComp()}
            </div>
        </div>
     );
}
 
export default Movies;
//fix css so that the text doesnt change box width