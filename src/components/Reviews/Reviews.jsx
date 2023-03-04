import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from "services/api";
import Review from './Review';
import Error from 'components/Error';
import Loader from 'components/Loader';
import Button from 'components/Button';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const { id } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const { results } = await getReviews(id, page);
                setReviews(prevItems => [...prevItems, ...results]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [id, page]);

    const onLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
      <section>
        {loading && <Loader />}
        {error && <Error text={error} />}
        {reviews ? <Review items={reviews} /> : <Error text={'There is no reviewsfor this movie yet.'} />}
        <Button onClick={onLoadMore} text={'Load more'} />
      </section>
    );
};

export default Reviews;