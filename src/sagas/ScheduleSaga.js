import { put, takeEvery } from 'redux-saga/effects';
import { callApiWithRawBody, callApiWithParams } from '../api/CustomAPI';
import { GET_SCHEDULE_INFO, GET_NEXT_STOP, GET_BUS_STOP } from '../constant/EndPoint';

function* getScheduleInfo(action) {
    try {
        let scheduleInfoResponse = yield callApiWithRawBody('GET', GET_SCHEDULE_INFO)
        let scheduleInfoFullData = {

        };
        if (scheduleInfoResponse.status === 200) {
            let scheduleInfo = scheduleInfoResponse.data
            scheduleInfoFullData = {
                ...scheduleInfoFullData,
                scheduleInfo,
            };
            if (scheduleInfoResponse.data.code === 0) {
                let scheduleId = scheduleInfo.data[0].id;

                let monitorId = action.payload;
                const params = {
                    scheduleId: scheduleId,
                    monitorId: monitorId
                }
                let nextStopResponse = yield callApiWithParams('GET', GET_NEXT_STOP, params)
                let listStopsResponse = yield callApiWithParams('GET', GET_BUS_STOP, params)
                let nextStop = nextStopResponse.data
                let listStops = listStopsResponse.data
                console.log('nextstop:' + JSON.stringify(nextStop))
                console.log('liststops:' + JSON.stringify(listStops.data)[0])
                scheduleInfoFullData = {
                    ...scheduleInfoFullData,
                    nextStop,
                    listStops,
                }
            }
        } else if (scheduleInfoResponse.status === 401) {
            scheduleInfoFullData = {
                ...scheduleInfoFullData,
                scheduleInfo: {
                    code: 1
                },
                nextStop: {
                    code: 1
                },
                listStops: {
                    code: 1
                }
            }
        }
        yield put({
            type: 'GET_SCHEDULE_INFO_SUCCESS',
            payload: { scheduleInfoFullData }
        })

    } catch{
        yield put({
            type: 'GET_SCHEDULE_INFO_FAIL',
            payload: {}
        })
    }
}

export const scheduleSaga = [
    takeEvery('GET_SCHEDULE_INFO_REQUEST', getScheduleInfo),

];
