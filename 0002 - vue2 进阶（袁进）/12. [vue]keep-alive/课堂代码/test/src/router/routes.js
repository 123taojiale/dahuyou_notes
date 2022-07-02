export default [
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "page1" */ '../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page2" */ '../views/Page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import(/* webpackChunkName: "page3" */ '../views/Page3.vue')
  },
  {
    path: '*',
    redirect: "/page1"
  }
]