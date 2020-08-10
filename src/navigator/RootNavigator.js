import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, QR_SCAN, GOOGLE_MAP,BOTTOM_TAB, ATTENDANCE, SPLASH } from './RouteName';
import LoginScreen from '../screens/LoginScreen';
import QRScanScreen from '../screens/QRScan/qrscan';
import BottomTabNavigator from './BottomTabNavigator'
import AttendanceScreen from '../screens/AttendanceScreens/AttendanceScreen';
import MapScreen from '../screens/MapScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();
function RootNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LOGIN} headerMode={'none'}>
        <Stack.Screen name={SPLASH} component={SplashScreen} />
          <Stack.Screen name={LOGIN} component={LoginScreen} />
          <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigator} />
          <Stack.Screen name={QR_SCAN} component={QRScanScreen} />
          <Stack.Screen name={ATTENDANCE} component={AttendanceScreen} />
          <Stack.Screen name={GOOGLE_MAP} component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default RootNavigator;