import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { PRIMARY_COLOR, PURPLE_FONTCOLOR, BLACK } from '../../constant/Colors';
import { scale } from '../../utils/Scale';
import EventMonthly from './EventMonthly';
import EventDaily from './EventDaily';
import EventTotal from './EventTotal';
const initialLayout = { width: Dimensions.get('window').width };
const { width, height } = Dimensions.get('window');

export default function EventTabView(props) {
    const [index, setIndex] = React.useState(props.initialScreen);
    const [routes] = React.useState([
        { key: 'month', title: 'Theo tháng', navigation: props.navigation },
        { key: 'day', title: 'Theo ngày', navigation: props.navigation },
        { key: 'total', title: 'Lịch sự kiện', navigation: props.navigation },
    ]);

    const renderScene = SceneMap({
        month: EventMonthly,
        day: EventDaily,
        total: EventTotal
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: PRIMARY_COLOR, height: scale(3) }}
            style={{ backgroundColor: 'white', height: scale(45), borderTopColor: 'gray', borderTopWidth: scale(0.4), }}
            renderLabel={({ route, focused, color }) => (
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ color: BLACK, fontSize: scale(14), fontWeight: '700' }}>
                        {route.title}
                    </Text>
                </View>
            )}

        />
    );
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );
};

const styles = StyleSheet.create({
    tabContainer: {
      width: width,
      height: height / 18,
      backgroundColor: '#FFF'
    },
  });
  