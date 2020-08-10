import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ScheduleHistory from './ScheduleHistory';
import SchedulePending from './SchedulePending';
import ScheduleIncoming from './ScheduleIncoming';
import { PRIMARY_COLOR, PURPLE_FONTCOLOR, BLACK } from '../../constant/Colors';
import { scale } from '../../utils/Scale';
const initialLayout = { width: Dimensions.get('window').width };
const { width, height } = Dimensions.get('window');

export default function ScheduleTabView(props) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'history', title: 'Lịch sử', navigation: props.navigation },
        { key: 'pending', title: 'Đang thực hiện', navigation: props.navigation },
        { key: 'incoming', title: 'Sắp thực hiện', navigation: props.navigation },
    ]);

    const renderScene = SceneMap({
        history: ScheduleHistory,
        pending: SchedulePending,
        incoming: ScheduleIncoming
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
  