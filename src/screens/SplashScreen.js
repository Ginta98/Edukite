import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { LOGIN, BOTTOM_TAB } from '../navigator/RouteName';
import { PRIMARY_COLOR } from '../constant/Colors';

class SplashScreen extends React.Component {
    constructor(props){
        super(props)
    }
    async componentDidMount() {
        const token = await AsyncStorage.getItem('token') || null;
        if (!token || token === 'none') {
            setTimeout(() => this.props.navigation.navigate(LOGIN), 1500);
        } else {
            setTimeout(() => this.props.navigation.navigate(BOTTOM_TAB), 1500);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_COLOR }}>

            </View>
        );
    }

}

export default SplashScreen;
