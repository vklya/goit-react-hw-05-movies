import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";
import { toast } from 'react-toastify';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SearchBox from "components/SearchBox";
import MoviesList from "components/MoviesList";

const Movies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');
    const location = useLocation();
    
    useEffect(() => {
      if (!searchQuery) return;
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const { results } = await searchMovies(searchQuery);
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
      };
      fetchMovies();
    }, [searchQuery]);

    const onSearch = result => {
        const value = result.query;
        if (searchQuery === value) return;
        setSearchParams({query: value});
        setItems([]);
    }


    return (
        <main>
            <SearchBox onSubmit={onSearch} />
            {error && <Error text={error} />}
            {loading ? <Loader /> : <MoviesList items={items} location={location} />}
        </main>
    );
}

export default Movies;