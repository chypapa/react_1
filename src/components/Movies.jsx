import { Movie } from './Movie';
import notFound from '../notFound.jpg';

function Movies(props){
    console.log(props);
    const {movies = []} = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie)=> <Movie key = {movie.imdbID}{...movie} />)
            ) : (
                <div>
                    <h4>Not Found</h4>
                    <img className = "notFound" alt='' src={notFound}/>
                </div>
            )}
            
        </div>
    );
}
export { Movies };