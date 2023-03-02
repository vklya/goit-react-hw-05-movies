import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Loader from "components/Loader";
import Nav from "components/Nav";

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));


export const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </>
  );
};
