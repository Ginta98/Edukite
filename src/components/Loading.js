import React, { PureComponent } from 'react'
import {
    Dimensions,
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
    Modal
} from 'react-native'
import { scaleModerate, scaleVertical } from '../utils/Scale';


class Loading extends PureComponent{
   
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.loadingArea, { paddingVertical: scaleVertical(15), paddingHorizontal: scaleModerate(15) }]}>
                    <ActivityIndicator color={'red'} size={"large"} />
                    <Text style={{
                        flex: 1,
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginLeft: scaleModerate(10)
                    }}>{(this.props.message || 'Loading')}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00000099",
        width: '100%',
        height: '100%',
        position: 'absolute',
        elevation: 8
    },
    loadingArea: {
        backgroundColor: 'white',
        borderRadius: scaleModerate(5),
        flexDirection: 'row',
        width: '80%'
    }
})

export default Loading
