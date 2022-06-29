const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog'),
  },
  {
    path: '/msg',
    name: 'Messages',
    component: () => import('@/views/Messages'),
  },
  {
    path: '/demos',
    name: 'Projects',
    component: () => import('@/views/Projects'),
  }
];

export default routes;