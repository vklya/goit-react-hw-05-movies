import { getCredits } from "services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import Error from "components/Error";
import CastCard from "./CastCard";

const Cast = () => {
    const [artist, setArtist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const { id } = useParams();
    

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                const { cast } = await getCredits(id);
                setArtist(cast);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCast();
    }, [id]);

    return (
        <section>
            {loading && <Loader />}
            {error && <Error text={error} />}
            <CastCard cast={artist} />
        </section>
    );
};

export default Cast;