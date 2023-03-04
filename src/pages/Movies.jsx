import { useState, useEffect } from "react";
import { searchMovies } from "services/api";
import { toast } from 'react-toastify';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SearchBox from "components/SearchBox";
import MoviesList from "components/MoviesList";
import Button from "components/Button";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        if (!query) return;
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { results } = await searchMovies(query, page);
                if (results.length === 0) {
                    toast.error(
                        'Sorry, there are no movies matching your search query. Please try again.'
                    );
                }
                setItems(prevItems => ([...prevItems, ...results]));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [query, page, setError, setLoading, setItems]);

    const onSearch = ({query}) => {
        setQuery(query);
        setItems([]);
        setPage(1);
    }

    const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    };

    return (
        <main>
            <SearchBox onSubmit={onSearch} />
            {error && <Error text={error} />}
            {loading ? <Loader /> : <MoviesList items={items} />}
            {!(items.length < 12) && (
            <Button onClick={onLoadMore} text={'Load more'} />
            )}
        </main>
    );
}

export default Movies;