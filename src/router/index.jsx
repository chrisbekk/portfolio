import { createBrowserRouter } from 'react-router-dom';

import { Start } from '../pages/root/Start';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <p>ERROR</p>,
    element: <Start />,
  },
  {
    path: '/pages',
    element: <Layout />,
    children: [
      {
        path: 'home/',
        element: <Home />,
      },
    ],
  },
]);
