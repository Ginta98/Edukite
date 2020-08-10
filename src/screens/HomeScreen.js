import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Pressable,
    Dimensions,
    AsyncStorage,
    Image
} from 'react-native';
import Header from '../components/Header';
import { scale, scaleVertical, scaleModerate } from '../constant/Scale';
import { PINK_FONTCOLOR, PURPLE_FONTCOLOR, WHITE, PRIMARY_COLOR } from '../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ATTENDANCE, GOOGLE_MAP, LOGIN } from '../navigator/RouteName';
import { getMonitorInfo } from '../actions/MonitorActions';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { getScheduleInfo } from '../actions/ScheduleActions';
import { callApiWithRawBody } from '../api/CustomAPI';
import { GET_MONITOR_INFO } from '../constant/EndPoint';
import { CommonActions } from '@react-navigation/native';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = [
            { iconName: 'tasks', label: 'Điểm danh', onPress: () => this.props.navigation.navigate(ATTENDANCE) },
            { iconName: 'external-link-alt', label: 'Xuống sớm', onPress: () => console.log('Xuống sớm') },
            { iconName: 'people-arrows', label: 'Cập nhật', onPress: () => console.log('Cập nhật') },
            { iconName: 'stopwatch', label: 'Báo muộn', onPress: () => console.log('Báo muộn') },
            { iconName: 'map', label: 'Bản đồ', onPress: () => this.props.navigation.navigate(GOOGLE_MAP) },
        ];
        this.state = {
            monitorInfo: null
        }
    }
    async componentDidMount() {
        await this._getMonitorInfo()
        let monitorInfo = await AsyncStorage.getItem('monitorInfo');
        let monitorId = JSON.parse(monitorInfo)?.id;
        this.props.getScheduleInfo(monitorId);

    }

    async _getMonitorInfo() {
        const response = await callApiWithRawBody('GET', GET_MONITOR_INFO);
        if (response?.status === 200) {
            console.log('monitor_info_api: status 200');
            if (response?.data?.code === 0) {
                await AsyncStorage.setItem('monitorInfo', JSON.stringify(response.data.data));
                this.setState({
                    ...this.state,
                    monitorInfo: response.data
                })
            }
        } else if (response?.status === 401) {
            console.log('monitor_info_api: status 401');
            //error
            this.setState({
                ...this.state,
                monitorInfo: {
                    code: response?.status
                }
            })
        }
    }
    async _tokenInvalidFunction() {
        await AsyncStorage.clear();
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: LOGIN }],
            }),
        );
    }
    _renderTasks(name, label, action) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={action}
                    style={{ width: '90%', height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={name} size={scaleModerate(50)} color={PRIMARY_COLOR} />

                    </View>
                    <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: scale(12), color: PRIMARY_COLOR }}>{label}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        if (this.state.monitorInfo && this.props.scheduleInfo && this.props.nextStop) {
            if (this.props.scheduleInfo.code === 0 && this.props.nextStop.code === 0 && this.state.monitorInfo.code === 0) {

                let nextStop = this.props.nextStop.data[0]
                let monitorInfo = this.state.monitorInfo.data
                let realScheduleInfo = this.props.scheduleInfo.data[0]
                console.log('real' + JSON.stringify(realScheduleInfo))
                return (
                    <View>
                        <Header
                            navigation={this.props.navigation}
                            back={false}
                            title={monitorInfo.firstName + ' ' + monitorInfo.middleName + ' ' + monitorInfo.lastName}
                            rightIcon={'user-circle'}
                            onPressRightIcon={() => console.log('right')}
                            leftIcon={'bars'}
                            onPressLeftIcon={() => console.log('left')}
                        ></Header>
                        {/* <View style={{ width: containerW, height: containerH }}>
                            <View style={styles.container}>
                                <View style={styles.scrollContainer}>
                                    <View style={styles.adsContainer}>
                                        <Image
                                            resizeMode={'stretch'}
                                            style={{ width: '100%', height: '100%' }}
                                            source={{
                                                uri: 'https://phonehouse.com.vn/wp-content/uploads/2019/06/Đăng-ký-tài-khoản-VIP-Zing-MP3.jpg',
                                            }}
                                        />
                                    </View>

                                
                                    <View
                                        style={styles.recentSchedule}
                                    >
                                        
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            {
                                                realScheduleInfo.directionId === 1 ?
                                                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingLeft: scale(10), flexDirection: 'row' }}>
                                                        <Icon name={'building'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                                                        <Icon name={'long-arrow-alt-right'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                                                        <Icon name={'home'} size={scaleModerate(22)} color={PRIMARY_COLOR} />
                                                    </View>
                                                    :
                                                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingLeft: scale(10), flexDirection: 'row' }}>
                                                        <Icon name={'home'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                                                        <Icon name={'long-arrow-alt-right'} size={scaleModerate(22)} color={PRIMARY_COLOR} style={{ marginRight: scale(5) }} />
                                                        <Icon name={'building'} size={scaleModerate(22)} color={PRIMARY_COLOR} />
                                                    </View>
                                            }
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: scale(14), fontWeight: 'bold' }}>
                                                    Đang trên đường
                                </Text>
                                            </View>
                                        </View>
                                       
                                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: scale(10) }}>
                                                <Text>Lên xe: 49/50</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text>Bến tiếp: {(nextStop?.name) ? nextStop?.name : 'NaN'}</Text>
                                            </View>
                                        </View>
                                     
                                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: scale(10) }}>
                                                <Text>Xuống xe: 24/50</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text>Giờ dự kiến: {(nextStop?.arrivalTime) ? nextStop?.arrivalTime : 'NaN'}</Text>
                                            </View>
                                        </View>
                                     
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: scale(10) }}>
                                                <Text style={{ color: 'blue' }}> Danh sách điểm danh bến tiếp</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                              

                                    <View style={{ width: '100%', height: scale(50) }}>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={styles.tasks}
                            >
                                {
                                    this.tasks.map((item, index) => {
                                        return this._renderTasks(item.iconName, item.label, item.onPress)
                                    })
                                }
                            </View>
                        </View> */}
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            <View style={styles.adsContainer}>

                            </View>

                        </ScrollView>
                        <View style={styles.tasks}>

                        </View>
                    </View >
                )
            } else {
                this._tokenInvalidFunction();
                return null;
            }
        } else {
            return (
                <Loading />
            )
        }
    }
}
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height - scaleVertical(110);
const styles = StyleSheet.create({
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: containerW,
        height: containerH / 2
    },
    adsContainer: {
       
    },
    tasks: {
        height: (containerH / 2),
        width: containerW,
        backgroundColor:'green'

    },
    // scrollContainer: {
    //     alignItems: 'center',

    // },
    // adsContainer: {
    //     width: '95%',
    //     height: scaleVertical(320),
    //     backgroundColor: 'green',
    //     marginTop: scale(10)
    // },
    // recentSchedule: {
    //     width: '85%',
    //     height: scale(150),
    //     borderWidth: scale(0.5),
    //     marginTop: scale(20),
    //     borderRadius: scale(5),
    //     borderColor: PRIMARY_COLOR,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 8,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 50,
    //     backgroundColor: WHITE,
    //     elevation: 16,
    // },


})

const mapStateToProps = (store) => {
    return {
        monitorInfo: store.monitorReducer.monitorInfo,
        scheduleInfo: store.scheduleReducer.scheduleInfo,
        nextStop: store.scheduleReducer.nextStop,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getScheduleInfo: (monitorId) => {
            dispatch(getScheduleInfo(monitorId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

