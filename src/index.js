import dva from 'dva';
import {createModel} from "./models"

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
//  app.model(require('./models/store').default);
app.model(require('./models/allList').default)
createModel(app)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
