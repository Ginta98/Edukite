import React from 'react';
import { Text, View, ScrollView, StyleSheet, AsyncStorage, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import { scaleModerate, scale, scaleVertical } from '../constant/Scale';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { CommonActions } from '@react-navigation/native';
import { LOGIN, ATTENDANCE } from '../navigator/RouteName';
import { PRIMARY_COLOR, WHITE } from '../constant/Colors';
class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stops: [],
            errorCode: null
        }
        this.tasks = [
            { iconName: 'tasks', label: 'Điểm danh', onPress: () => this.props.navigation.navigate(ATTENDANCE) },
            { iconName: 'external-link-alt', label: 'Xuống sớm', onPress: () => console.log('Xuống sớm') },
            { iconName: 'people-arrows', label: 'Báo sự cố', onPress: () => console.log('Cập nhật') },
            { iconName: 'stopwatch', label: 'Báo muộn', onPress: () => console.log('Báo muộn') },
            { iconName: 'sync', label: 'Cập nhật', onPress: () => console.log('Map') },
        ];
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
    _renderScheduleInfo() {
        return (
            <>
            </>
        )
    }
    render() {
        if (this.props.listStops) {
            if (this.props.listStops.code === 0) {
                let listStopsData = this.props.listStops.data;
                return (
                    <View>
                        <Header
                            leftIcon={'arrow-left'}
                            onPressLeftIcon={() => this.props.navigation.pop()}
                            title={'Bản đồ lịch trình'}
                            navigation={this.props.navigation}></Header>
                        <ScrollView
                            contentContainerStyle={styles.container}
                        >
                            <View style={styles.mapContainer}>
                                <GoogleMap
                                    stops={listStopsData}
                                    width={'100%'}
                                    height={'100%'}
                                ></GoogleMap>
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
                            <View
                                style={styles.scheduleInfo}
                            ></View>
                        </ScrollView>
                    </View>
                )
            } else {
                this._tokenInvalidFunction()
                return null;
            }
        } else {
            return (
                <Loading/>
            )
        }
    }
}
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    mapContainer: {
        width: '100%',
        height: scaleVertical(320),
    },
    tasks: {
        width: containerW,
        height: (1 * containerH) / 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scheduleInfo: {
        backgroundColor: 'red',
        width: containerW,
        height: scaleVertical(100)
    }
})
const mapStateToProps = (store) => {
    return {
        listStops: store.scheduleReducer.listStops,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);