import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactElement } from 'react';
import { Home, Layout } from '~/pages';

interface DataRoutes {
  path: string;
  element: ReactElement;
}

const routesList: DataRoutes[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map(({ element, path }) => (
          <Route key={path} path={path} element={<Layout>{element}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
