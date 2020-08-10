import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { scale, scaleModerate } from '../../constant/Scale';
import { texts } from '../../constant/CommonStyles';
import { PRIMARY_COLOR, PURPLE_FONTCOLOR, WHITE } from '../../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
class ScheduleHistory extends React.Component {


    _renderSchedule(isHomeToSchool, getIn, getOut, total, scheduleDay, scheduleStartTime, scheduleEndTime, carNumber, carLicensePlate) {
        return (
            <View
                style={styles.renderScheduleContainer}
            >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    {isHomeToSchool ? this._renderHomeToSchoolIcon() : this._renderSchoolToHomeIcon()}
                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ color: PRIMARY_COLOR,fontSize:scale(14) }}>{scheduleDay}: {scheduleStartTime}  </Text>
                        <Icon name={'long-arrow-alt-right'} size={scaleModerate(14)} color={PRIMARY_COLOR} />
                        <Text style={{ color: PRIMARY_COLOR,fontSize:scale(14) }}> {scheduleEndTime}   </Text>
                        <Icon name={'caret-down'} size={scaleModerate(14)} color={PRIMARY_COLOR} />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[texts.h6, { color: PRIMARY_COLOR }]} >Lên: {getIn}/{total} - Xuống: {getOut}/{total}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: scale(5) }}>
                        <Text style={[texts.h6, { color: PRIMARY_COLOR }]}>Xe: {carNumber}:{carLicensePlate}</Text>
                    </View>
                </View>
            </View>
        )
    }
    _renderSchoolToHomeIcon() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Icon name={'building'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                <Icon name={'long-arrow-alt-right'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                <Icon name={'home'} size={scaleModerate(22)} color={PRIMARY_COLOR} />
            </View>
        )
    }
    _renderHomeToSchoolIcon() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Icon name={'home'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                <Icon name={'long-arrow-alt-right'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{marginRight:scale(5)}} />
                <Icon name={'building'} size={scaleModerate(22)} color={PRIMARY_COLOR}  />
            </View>
        )
    }

    render() {
        let dataSchedule = [
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: false,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
            {
                isHomeToSchool: true,
                getIn: 40,
                getOut: 20,
                total: 50,
                scheduleDay: '19/5/2020',
                scheduleStartTime: '4:30 PM',
                scheduleEndTime: '4:30 PM',
                carNumber: 6,
                carLicensePlate: '19K1 - 8195'
            },
        ]
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.datePickerContainer}>
                        <DatePicker
                            style={{ marginTop: scale(10), width: scale(150), marginRight: scale(20) }}
                            // date={'01/01/2000'}
                            mode="date"
                            format="DD/MM/YYYY"
                            minDate="01/01/1990"
                            maxDate="01/01/2100"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            placeholder="Từ ngày"

                            hideText={false}
                            customStyles={{
                                dateIcon: {
                                    width: scale(30),
                                    height: scale(30)
                                },
                            }}
                        />
                        <DatePicker
                            style={{ marginTop: scale(10), width: scale(150) }}
                            // date={'01/01/2000'}
                            mode="date"
                            format="DD/MM/YYYY"
                            minDate="01/01/1990"
                            maxDate="01/01/2100"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            placeholder="Đến ngày"

                            hideText={false}
                            customStyles={{
                                dateIcon: {
                                    width: scale(30),
                                    height: scale(30)
                                },
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.searchButton}
                    >
                        <Text
                            style={[texts.h5, { fontWeight: 'bold', color: 'yellow' }]}
                        >
                            Tìm kiếm
                    </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                    {
                        dataSchedule.map((item, index) => {

                            return this._renderSchedule(item.isHomeToSchool, item.getIn, item.getOut, item.total, item.scheduleDay, item.scheduleStartTime, item.scheduleEndTime, item.carNumber, item.carLicensePlate)
                        })
                    }
                    <View style={{ marginBottom: scale(30) }} />
                </ScrollView>
            </>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    renderScheduleContainer: {
        width: '85%',
        height: scale(70),
        borderBottomWidth: scale(1),
        borderBottomColor: PRIMARY_COLOR,
        marginTop: scale(15),
        paddingLeft: scale(10)
    },
    datePickerContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    scrollViewContainer: {
        alignItems: 'center'
    },
    searchButton: {
        width: '30%',
        height: scale(35),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(15),
        backgroundColor: PRIMARY_COLOR,
        borderRadius: scale(10)
    }
})
export default ScheduleHistory;
