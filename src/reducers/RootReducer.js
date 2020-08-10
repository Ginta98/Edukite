import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MonitorReducer from './MonitorReducer';
import ScheduleReducer from './ScheduleReducer';
export default combineReducers({
    loginReducer: LoginReducer,
    monitorReducer: MonitorReducer,
    scheduleReducer:ScheduleReducer
})
