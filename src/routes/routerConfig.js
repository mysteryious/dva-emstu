import React from 'react';

const routes = [
  {
    path: "/teacher",
    component: React.lazy(() => import("../views")),
    // children: [
    //   {
    //     path: "/teacher/login",
    //     component: React.lazy(() => import("../views/teacher/login"))
    //   },
    //   {
    //     path: "/teacher/register",
    //     component: React.lazy(() => import("../views/teacher/register"))
    //   },
    //   {
    //     path: "/teacher",
    //     redirect: "/teacher/login"
    //   }
    // ]
  },
  {
    path: "/",
    redirect: "/teacher"
  }
]

export default routes