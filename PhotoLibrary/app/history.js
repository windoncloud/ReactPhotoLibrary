/**
 * Created by kingsley on 2017/3/15.
 */
import { useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

export default useRouterHistory(createHashHistory)({ queryKey: false });