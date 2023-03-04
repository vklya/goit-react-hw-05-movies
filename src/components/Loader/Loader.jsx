import { BounceLoader } from "react-spinners";
import css from './loader.module.scss';

const Loader = () => <BounceLoader color="#f97200" className={css.loader} />;

export default Loader;