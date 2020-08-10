const DEFAULT_STATE = {
    scheduleInfo: null,
    listStops: null,
    nextStop: null,
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'GET_SCHEDULE_INFO_SUCCESS': {
            return {
                ...state,
                scheduleInfo: action.payload?.scheduleInfoFullData?.scheduleInfo,
                listStops: action.payload?.scheduleInfoFullData?.listStops,
                nextStop: action.payload?.scheduleInfoFullData?.nextStop,

            }
        }
        case 'GET_SCHEDULE_INFO_FAIL': {
            return {
            }
        }
        case 'REFRESH_STORE': {
            return {
                scheduleInfo: null,
                listStops: null,
                nextStop: null,
            }
        }
    }
    return state;
}
