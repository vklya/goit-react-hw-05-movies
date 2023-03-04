import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import Review from './Review';
import Error from 'components/Error';
import Loader from 'components/Loader';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const { results } = await getReviews(id);
                if (results.length === 0) return;
                setReviews(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [id]);

    return (
      <section>
        {loading && <Loader />}
        {error && <Error text={error} />}
        {reviews ? <Review items={reviews} /> : <Error text={'There is no reviews for this movie yet.'} />}
      </section>
    );
};

export default Reviews;