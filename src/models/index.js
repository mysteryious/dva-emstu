const context = require.context("./store", false, /\.js$/);
const getStore = context.keys().map(key => context(key))

export function createModel(app) {
  return getStore.map(key => app.model(key.default))
}