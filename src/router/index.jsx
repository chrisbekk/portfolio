import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../pages/root';
import { Start } from '../pages/Start';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>ERROR</p>,
  },
  {
    path: '/start',
    element: <Start />,
  },
  {
    path: '/site',
    element: <Layout />,
    children: [
      {
        path: 'home/',
        element: <Home />,
      },
    ],
  },
]);
