import { put, takeEvery } from 'redux-saga/effects';
import { callApiWithRawBody } from '../api/CustomAPI';
import { GET_MONITOR_INFO } from '../constant/EndPoint';
import { AsyncStorage } from 'react-native';

function* getInfoMonitor(action) {
    try {
        let response = yield callApiWithRawBody('GET',GET_MONITOR_INFO)
        let monitorInfo = response.data
        yield put({
            type: 'GET_MONITOR_INFO_SUCCESS',
            payload: { monitorInfo }
        })
    } catch{
        yield put({
            type: 'GET_MONITOR_INFO_FAIL',
            payload: {}
        })
    }
}

export const monitorSaga = [
    takeEvery('GET_MONITOR_INFO_REQUEST', getInfoMonitor),

];
