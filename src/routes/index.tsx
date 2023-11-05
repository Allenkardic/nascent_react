import { Suspense, lazy } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, Pokemon, ReviewPokemon } from '../pages';
import { routesPath } from '../utils';

// lazy loading pages
const NotFoundLazy = lazy(() => import('../pages/notFound'));

const NotFound = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundLazy />
    </Suspense>
  </div>
);

const { HOME, POKEMON, REVIEWPOKEMON } = routesPath;

function AppRoute() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={HOME} element={<Home />} />
        <Route path={POKEMON} element={<Pokemon />} />
        <Route path={REVIEWPOKEMON} element={<ReviewPokemon />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
