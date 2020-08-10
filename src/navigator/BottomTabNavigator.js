import * as React from 'react';
import {
    Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCHEDULE, CHAT, MAP, EVENT, HOME, ERRORREPORT } from './RouteName';
import HomeScreen from '../screens/HomeScreen';
import ErrorReportScreen from '../screens/ErrorReportScreen';
import ScheduleScreen from '../screens/ScheduleScreens/ScheduleScreen';
import ChatScreen from '../screens/ChatScreen';
import EventScreen from '../screens/EventScreens/EventScreen';
import {size} from '../constant/CommonStyles';
import { GRAY_FONTCOLOR, PRIMARY_COLOR, WHITE } from '../constant/Colors';
import { scaleVertical } from '../constant/Scale';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let iconNameGray;
                    if (route.name === HOME) {
                        iconName = require('../res/images/bottom_tab/home_color.png');
                        iconNameGray = require('../res/images/bottom_tab/home.png');
                    } else if (route.name === ERRORREPORT) {
                        iconName = require('../res/images/bottom_tab/noti_color.png');
                        iconNameGray = require('../res/images/bottom_tab/noti.png');
                    } else if (route.name === SCHEDULE) {
                        iconName = require('../res/images/bottom_tab/bill_color.png');
                        iconNameGray = require('../res/images/bottom_tab/bill.png');
                    } else if (route.name === CHAT) {
                        iconName = require('../res/images/bottom_tab/account_color.png');
                        iconNameGray = require('../res/images/bottom_tab/account.png');
                    } else if (route.name === EVENT) {
                        iconName = require('../res/images/bottom_tab/home_color.png');
                        iconNameGray = require('../res/images/bottom_tab/home.png');
                    }
                    return (
                        <Image
                            style={focused ? size.smd : size.sm}
                            source={(focused ? iconName : iconNameGray)}
                            resizeMode={'contain'}
                        />

                    );
                },
            })}
            tabBarOptions={{
                inactiveTintColor: GRAY_FONTCOLOR,
                activeTintColor: PRIMARY_COLOR,
                style: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    backgroundColor: WHITE,
                    elevation: 15,

                },
                labelPosition: 'below-icon',
                showLabel: false,
                showIcon: true,

            }}>
            <Tab.Screen name={HOME} component={HomeScreen} options={{ tabBarLabel: 'Trang chủ' }} />
            <Tab.Screen name={ERRORREPORT} component={ErrorReportScreen} options={{ tabBarLabel: 'Báo sự cố' }} />
            <Tab.Screen name={SCHEDULE} component={ScheduleScreen} options={{ tabBarLabel: 'Lịch trình' }} />
            <Tab.Screen name={CHAT} component={ChatScreen} options={{ tabBarLabel: 'Tin nhắn' }} />
            <Tab.Screen name={EVENT} component={EventScreen} options={{ tabBarLabel: 'Sự kiện' }} />
        </Tab.Navigator>
    );
}
