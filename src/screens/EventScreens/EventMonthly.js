import React from 'react';
import {
    Text,
    ScrollView,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome5';
LocaleConfig.locales['fr'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    monthNamesShort: ['Jan.', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
    dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
};
LocaleConfig.defaultLocale = 'fr';
import { Calendar, CalendarList, Agenda, Arrow } from 'react-native-calendars';
import { PRIMARY_COLOR, WHITE, PURPLE_FONTCOLOR } from '../../constant/Colors';
import { scale, scaleModerate } from '../../constant/Scale';
import { texts } from '../../constant/CommonStyles';
class EventMonthly extends React.Component {

    _renderDataComingEvent(image, color, startDay, endDay, name) {
        return (
            <View style={styles.dataComingEventContainer}>
                <View style={{ flex: 2.5, backgroundColor: color, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: scale(66),
                        height: scale(66),
                    }}>
                        <Image style={{ height: '100%', width: '100%', borderRadius: scale(50) }}
                            source={{
                                uri: image,
                            }}
                        />
                    </View>
                </View>
                <View style={{ flex: 7, backgroundColor: color, paddingTop: scale(5),paddingLeft:scale(10) }}>
                    <Text
                        numberOfLines={1}
                        style={[texts.l_h5, { color: PRIMARY_COLOR }]}>{startDay} - {endDay}</Text>
                    <Text
                        numberOfLines={1}
                        style={[texts.l_h5, { color: PRIMARY_COLOR, marginTop: scale(10) }]}>{name}</Text>
                </View>
            </View>
        )
    }

    render() {
        let dataComingEvent = [
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'green',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'yellow',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'blue',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'red',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'green',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
            {
                image: 'https://image.flaticon.com/icons/png/512/1791/1791400.png',
                color: 'yellow',
                startDay: '20/7/2020',
                endDay: '21/7/2020',
                name: 'Đi dã ngoại rừng Cúc Phương'
            },
        ]
        return (
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >

                <Calendar
                    onDayPress={(day) => { console.log('selected day', day) }}
                    markedDates={{
                        '2020-07-16': { startingDay: true, color: 'green' },
                        '2020-07-17': { color: 'green' },
                        '2020-07-18': { endingDay: true, color: 'green' },
                        '2020-07-20': { startingDay: true, endingDay: true, color: PRIMARY_COLOR }
                    }}
                    markingType={'period'}
                />

                <View style={styles.eventContainer}>
                    <View style={styles.recentEventContainer}>
                        <View style={{ flex: 1.1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[texts.h6, { color: PRIMARY_COLOR }]}>Hôm nay</Text>
                            <Text style={[texts.h6, { color: PRIMARY_COLOR, marginTop: scale(10) }]}>15/7/2020</Text>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name={'ellipsis-v'} size={scaleModerate(30)} color={PURPLE_FONTCOLOR} />
                        </View>
                        <View style={{ flex: 1.1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: scale(10) }}>
                            <Text style={[texts.h6, { color: PRIMARY_COLOR }]}>9:00 AM</Text>
                            <Text style={[texts.h6, { color: PRIMARY_COLOR, marginTop: scale(10) }]}>11:00 AM</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={[texts.h6, { color: PRIMARY_COLOR }]}>Lễ bế giảng</Text>
                            <Text
                                multiline
                                numberOfLines={3}
                                style={[texts.h6, { color: PRIMARY_COLOR, marginTop: scale(10) }]}>Liên hoan bế giảng tại lớp</Text>
                        </View>
                    </View>

                    <View style={styles.comingEventContainer}>
                        <View style={{ alignItems: 'flex-start', paddingLeft: scale(20), marginTop: scale(10) }}>
                            <Text style={[texts.l_h5, { color: PRIMARY_COLOR, marginBottom: scale(10) }]}>Sự kiện sắp tới ({dataComingEvent.length})</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {
                                dataComingEvent.map((item, index) => {
                                    return this._renderDataComingEvent(item.image, item.color, item.startDay, item.endDay, item.name)
                                })
                            }

                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: scale(50) }} />
            </ScrollView>


        )

    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: scale(20)
    },
    eventContainer: {
        alignItems: 'center'
    },
    recentEventContainer: {
        width: '90%',
        height: scale(100),
        backgroundColor: WHITE,
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: PRIMARY_COLOR,
        marginTop: scale(20),
        flexDirection: 'row'
    },
    comingEventContainer: {
        width: '90%',
        backgroundColor: WHITE,
        borderRadius: scale(8),
        borderWidth: scale(1),
        borderColor: PRIMARY_COLOR,
        marginTop: scale(20)
    },
    dataComingEventContainer: {
        width: '90%',
        height: scale(70),
        marginBottom: scale(10),
        flexDirection: 'row',
        borderWidth: scale(0.5),
        borderColor: PRIMARY_COLOR
    }

})
export default EventMonthly;
