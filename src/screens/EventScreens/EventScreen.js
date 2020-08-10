import React from 'react';
import {
    Text,
} from 'react-native';
import Header from '../../components/Header';
import { PRIMARY_COLOR } from '../../constant/Colors';
import EventTabView from './EventScreenTabView';
class EventScreen extends React.Component {

    render() {
        return (
            <>
                <Header
                    title={'Lịch sự kiện'}
                ></Header>
                <EventTabView navigation={this.props.navigation} initialScreen={0}></EventTabView>
            </>
        )

    }
}
export default EventScreen;
