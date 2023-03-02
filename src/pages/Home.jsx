import { useState, useEffect } from "react";
import MoviesList from 'components/MoviesList';
import { getTrending } from "services/api";
import Error from "components/Error";
import Loader from "components/Loader";

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
        {error && <Error text={error} />}
        {loading ? <Loader /> : <MoviesList items={items} />}
      </main>
    );
};

export default Home;