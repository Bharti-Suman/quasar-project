
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
       component: () => import('layouts/AjioLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') }
       { path: '', component: () => import('pages/ajio.vue') }
    ]
  },
  {
    path: '/meesho',
    component: () => import('layouts/MeeshoLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ajio.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
