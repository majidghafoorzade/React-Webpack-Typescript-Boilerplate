import { createElement } from 'react';
import { About } from 'views/About';
import { Home } from 'views/Home';

export const routes = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '/about',
    element: createElement(About),
  },
];
