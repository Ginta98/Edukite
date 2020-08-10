import React from 'react';
import {
    Text,
} from 'react-native';
import Header from '../../components/Header';
import ScheduleTabView from './ScheduleTabView';
class ScheduleScreen extends React.Component {

    render() {
        return (
            <>
                <Header title={'Lịch trình đưa đón'} />
                <ScheduleTabView navigation={this.props.navigation}></ScheduleTabView>
            </>
        )

    }
}
export default ScheduleScreen;
