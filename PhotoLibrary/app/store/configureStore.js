import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { logger, router, reduxRouterMiddleware } from '../middleware';

const nextReducer = require('../reducers/index');
export default function configureStore(initialState) {

  const create = window.devToolsExtension? window.devToolsExtension()(createStore): createStore;

  const createStoreWithMiddleware = applyMiddleware(
      reduxRouterMiddleware,
      thunkMiddleware,
      logger,
      router
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
