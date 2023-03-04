import { useState, useEffect } from "react";
import MoviesList from 'components/MoviesList';
import { getTrending } from "services/api";
import Error from "components/Error";
import Loader from "components/Loader";
import styled from 'styled-components';

const StyledHeading = styled.h1`
    text-align: center;
  }
`;

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const {results} = await getTrending();
                setItems(results);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <main>
            <StyledHeading>Trending today</StyledHeading>
            {error && <Error text={error} />}
            {loading ? <Loader /> : <MoviesList items={items} />}
        </main>
    );
};

export default Home;