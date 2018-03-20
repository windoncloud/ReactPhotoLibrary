/**
 * Created by pc on 2017/3/15.
 */
import { routerMiddleware } from 'react-router-redux'
import logger from './logger'
import router from './router'
import history from '../history'

const reduxRouterMiddleware = routerMiddleware(history)

export {
    reduxRouterMiddleware,
    logger,
    router,
}