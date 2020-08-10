const DEFAULT_STATE = {
    monitorInfo: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'GET_MONITOR_INFO_SUCCESS': {
            return {
                ...state,
                monitorInfo: action.payload.monitorInfo
            }
        }
        case 'GET_MONITOR_INFO_FAIL': {
            return {
            }
        }
        case 'REFRESH_STORE': {
            return {
                monitorInfo: null
            }
        }
    }
    return state;
}
