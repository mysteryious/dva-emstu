import React, { Suspense } from 'react';
import { Router } from 'dva/router';
import RouterView from "./routes/RouterView"
import routes from "./routes/routerConfig"


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <RouterView routes={routes}></RouterView>
      </Suspense>
    </Router>
  );
}

export default RouterConfig;
