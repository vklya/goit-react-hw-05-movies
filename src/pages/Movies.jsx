import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { toast, ToastContainer } from 'react-toastify';
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
                console.log(results);
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
    }, []);

    const onSearch = ({query}) => {
        setQuery(query);
        setItems([]);
    }

    console.log(items);
    return (
      <main>
        <SearchBox onSubmit={onSearch} />
        {error && <Error text={error} />}
        {loading ? <Loader /> : <MoviesList items={items} />}
        <ToastContainer autoClose="3000" theme="dark" position="bottom-right" />
      </main>
    );
}

export default Movies;