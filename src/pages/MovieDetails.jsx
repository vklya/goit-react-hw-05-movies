import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation} from "react-router-dom";
import { getDetails } from "services/api";
import MovieCard from "components/MovieCard";
import Error from "components/Error";
import Loader from "components/Loader";
import BackLink from "components/BackLink";
import styled from 'styled-components';

const AddInfo = styled.div`
    padding: 20px;
  }
`;

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const prevPage = location.state?.from ?? '/';

    useEffect(() => {
        const fetchMovies = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const data = await getDetails(id);
                setMovie(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [id, setMovie]);

    return (
      <main>
        <BackLink to={prevPage} />
        {loading && <Loader />}
        {error && <Error text={error} />}
        {movie && <MovieCard movie={movie} />}
        <AddInfo>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: prevPage }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: prevPage }}>
                Reviews
              </Link>
            </li>
          </ul>
        </AddInfo>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    );
}

export default MovieDetails;
