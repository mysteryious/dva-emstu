import React from 'react';

const routes = [
  {
    path: "/teacher",
    component: React.lazy(() => import("../views/login")),
  },
  {
    path: "/charts",
    component: React.lazy(() => import("../views/charts")),
  },
  {
    path: "/presentation",
    component: React.lazy(() => import("../views/presentation")),
  },
  {
    path: "/",
    redirect: "/teacher"
  }
]

export default routes