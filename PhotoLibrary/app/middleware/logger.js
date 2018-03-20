/**
 * Created by pc on 2017/3/15.
 */
export default store => next => action => {
    // console.log(action)
    return next(action)
}