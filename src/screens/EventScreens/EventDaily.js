import React from 'react';
import {
    Text, StyleSheet, View, Dimensions
} from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { scale } from '../../constant/Scale';
class EventDaily extends React.Component {

    render() {
        let sampleEvents = [
            { 'start': '2020-07-23 09:00:00', 'duration': '14:59:00', 'note': 'Walk my dog' },
            { 'start': '2020-07-24 01:01:00', 'duration': '23:59:00', 'note': 'Walk my dog' },
            { 'start': '2020-07-25 00:01:00', 'duration': '7:30:00', 'note': 'Walk my dog' },
            { 'start': '2020-07-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'ss appointment' },
            { 'start': '2020-07-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
            { 'start': '2020-07-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
            { 'start': '2020-07-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
            { 'start': '2020-07-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
            { 'start': '2020-07-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
            { 'start': '2020-07-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
            { 'start': '2020-07-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
            { 'start': '2020-07-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
            { 'start': '2020-07-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
            { 'start': '2020-07-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
            { 'start': '2020-07-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' },
        ]
        return (
            <View style={styles.container}>
                <WeeklyCalendar events={sampleEvents} style={{ height:'100%' }} />
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default EventDaily;
