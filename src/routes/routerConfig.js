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
    path: "/statistics",
    component: React.lazy(() => import("../views/statistics")),
  },
  {
    path: "/",
    redirect: "/teacher"
  }
]

export default routes