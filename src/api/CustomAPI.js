import axios from 'axios';
import { AsyncStorage } from 'react-native';
export const callApiWithRawBody = async (method, url, input) => {
    let token = await AsyncStorage.getItem('token');
    let result = null;
    const config = {
        method: method,
        url: url,
        data: input,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    await axios(config).then((response) => {
        result = response;
    }).catch((error) => {
        result = error.response;
    });
    return result;
};

export const callApiWithParams = async (method, url, params) => {
    let token = await AsyncStorage.getItem('token');
    let result = null;
    const config = {
        method: method,
        url: url,
        params: params,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    await axios(config).then((response) => {
        result = response;
    }).catch((error) => {
        result = error;
    });
    return result;
}