import { all } from 'redux-saga/effects';
import { monitorSaga } from './MonitorSaga';
import { scheduleSaga } from './ScheduleSaga'
function* rootSaga() {
    yield all([
        ...monitorSaga,
        ...scheduleSaga
    ]);
}
export default rootSaga;
