// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useParams } from 'react-router-dom';
// components
import BreadCrumb from './BreadCrumb'
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// Hooks
import { useMovieFetch } from '../hooks/useMovieFectch';
// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, error, loading } = useMovieFetch(movieId);
    console.log(movie);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}></MovieInfo>
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(cast => (
                    <Actor
                        key={cast.credit_id}
                        name={cast.name}
                        character={cast.character}
                        imageUrl={
                            cast.profile_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}${cast.profile_path}`
                                : NoImage

                        }
                    />

                ))}
            </Grid>
        </>
    );
};

export default Movie;