import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { toast } from 'react-toastify';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SearchBox from "components/SearchBox";
import MoviesList from "components/MoviesList";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if (!query) return;
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { results } = await searchMovies(query);
                if (results.length === 0) {
                    toast.error(
                        'Sorry, there are no movies matching your search query. Please try again.'
                    );
                }
                setItems(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [query]);

    const onSearch = ({query}) => {
        setQuery(query);
        setItems([]);
    }

    return (
        <main>
            <SearchBox onSubmit={onSearch} />
            {error && <Error text={error} />}
            {loading ? <Loader /> : <MoviesList items={items} />}
        </main>
    );
}

export default Movies;