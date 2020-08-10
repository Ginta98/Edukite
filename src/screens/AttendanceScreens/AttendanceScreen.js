import React from 'react';
import {
    Text,
} from 'react-native';
import Header from '../../components/Header';
import { PRIMARY_COLOR } from '../../constant/Colors';
import AttendanceTabView from './AttendanceTabView';
class AttendanceScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header
                    leftIcon={'arrow-left'}
                    onPressLeftIcon={() => this.props.navigation.pop()}
                    title={'Điểm danh'}
                ></Header>
                <AttendanceTabView navigation={this.props.navigation} initialScreen={0}></AttendanceTabView>
            </>
        )

    }
}
export default AttendanceScreen;
